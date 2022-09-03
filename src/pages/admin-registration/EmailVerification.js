import React, { useEffect, useState } from "react";
import { Alert, Card, Container, Spinner } from "react-bootstrap";
import { useSearchParams } from "react-router-dom";
import { Footer } from "../../components/footer/Footer";
import { Header } from "../../components/header/Header";
import { emailVerifyAdminUser } from "../../helpers/axiosHelper";

// Backend
// show the spinner first
// grab the c and e from the query string parameter
// create an axios function to call the server

// Front end
// create api endpoint to receive this code
// check if the combination of the email and code exist in the user table, if so activate the user and  send email notification

const EmailVerification = () => {
  const [queryParams] = useSearchParams();
  const [isPending, setIsPending] = useState(true);
  const [response, setResponse] = useState({});
  useEffect(() => {
    const obj = {
      emailValidationCode: queryParams.get("c"),
      email: queryParams.get("e"),
    };
    // call axios to call the server
    // If e function, immediately calling fucniton
    (async () => {
      const result = await emailVerifyAdminUser(obj);
      setResponse(result);
      setIsPending(false);
    })();
  }, []);
  return (
    <div>
      <Header />
      <Container className="page-main">
        {isPending && (
          <Card className="mt-5 p-2 m-auto" style={{ width: "20rem" }}>
            <Spinner
              variant="primary"
              animation="border"
              className="m-auto mb-4"
            />
            <h5> Email EmailVerification process has began. Please wait ...</h5>
          </Card>
        )}
        {response.message && (
          <Alert
            className="mt-5 p-2 m-auto"
            style={{ width: "20rem" }}
            variant={response.status === "success" ? "success" : "danger"}
          >
            {response.message}
          </Alert>
        )}
      </Container>
      <Footer />
    </div>
  );
};

export default EmailVerification;
