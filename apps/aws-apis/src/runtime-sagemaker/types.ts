type InvokeEndpointOutput = { Body: {} }
type InvokeEndpointAsyncOutput = { InferenceId?: {} | undefined }
declare const routes: import('@hono/zod-openapi').OpenAPIHono<
  import('hono/types').Env,
  {
    '/endpoints/:EndpointName/invocations': {
      $post: {
        input: { param: { EndpointName: string } } & {
          header: {
            'Content-Type'?: string | undefined
            Accept?: string | undefined
            'X-Amzn-SageMaker-Custom-Attributes'?: string | undefined
            'X-Amzn-SageMaker-Target-Model'?: string | undefined
            'X-Amzn-SageMaker-Target-Variant'?: string | undefined
            'X-Amzn-SageMaker-Target-Container-Hostname'?: string | undefined
            'X-Amzn-SageMaker-Inference-Id'?: string | undefined
            'X-Amzn-SageMaker-Enable-Explanations'?: string | undefined
            'X-Amz-Content-Sha256'?: string | undefined
            'X-Amz-Date'?: string | undefined
            'X-Amz-Algorithm'?: string | undefined
            'X-Amz-Credential'?: string | undefined
            'X-Amz-Security-Token'?: string | undefined
            'X-Amz-Signature'?: string | undefined
            'X-Amz-SignedHeaders'?: string | undefined
          }
        } & { json: { Body: string } }
        output: InvokeEndpointOutput
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/endpoints/:EndpointName/async-invocations#X-Amzn-SageMaker-InputLocation': {
      $post: {
        input: { param: { EndpointName: string } } & {
          header: {
            'X-Amzn-SageMaker-Content-Type'?: string | undefined
            'X-Amzn-SageMaker-Accept'?: string | undefined
            'X-Amzn-SageMaker-Custom-Attributes'?: string | undefined
            'X-Amzn-SageMaker-Inference-Id'?: string | undefined
            'X-Amzn-SageMaker-InputLocation': string
            'X-Amzn-SageMaker-RequestTTLSeconds'?: number | undefined
            'X-Amzn-SageMaker-InvocationTimeoutSeconds'?: number | undefined
            'X-Amz-Content-Sha256'?: string | undefined
            'X-Amz-Date'?: string | undefined
            'X-Amz-Algorithm'?: string | undefined
            'X-Amz-Credential'?: string | undefined
            'X-Amz-Security-Token'?: string | undefined
            'X-Amz-Signature'?: string | undefined
            'X-Amz-SignedHeaders'?: string | undefined
          }
        }
        output: InvokeEndpointAsyncOutput
        outputFormat: 'json'
        status: 202
      }
    }
  },
  '/'
>
export default routes
