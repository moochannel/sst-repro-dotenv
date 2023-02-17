import { StackContext, Api } from "sst/constructs";

export function API({ stack }: StackContext) {
  console.log(`The value of environment variable KEY_A: ${process.env.KEY_A}`);

  const api = new Api(stack, "api", {
    routes: {
      "GET /": "packages/functions/src/lambda.handler",
    },
  });
  stack.addOutputs({
    ApiEndpoint: api.url,
  });
}
