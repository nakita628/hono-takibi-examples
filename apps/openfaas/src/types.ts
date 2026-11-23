type GatewayInfo = {
  provider: {
    provider: string
    orchestration: string
    version: { commit_message?: string | undefined; sha: string; release: string }
  }
  version: { commit_message?: string | undefined; sha: string; release: string }
  arch: string
}
type PrometheusInnerAlertLabel = { alertname: string; function_name: string }
type PrometheusInnerAlert = { status: string; labels: PrometheusInnerAlertLabel }
type PrometheusAlert = { status: string; receiver: string; alerts: PrometheusInnerAlert[] }
type FunctionStatus = {
  name: string
  image: string
  namespace?: string | undefined
  envProcess?: string | undefined
  envVars?: { [x: string]: string } | undefined
  constraints?: string[] | undefined
  secrets?: string[] | undefined
  labels?: ({ [x: string]: string } | null) | undefined
  annotations?: ({ [x: string]: string } | null) | undefined
  limits?: { memory?: string | undefined; cpu?: string | undefined } | undefined
  requests?: { memory?: string | undefined; cpu?: string | undefined } | undefined
  readOnlyRootFilesystem?: boolean | undefined
  invocationCount?: number | undefined
  replicas?: number | undefined
  availableReplicas?: number | undefined
  createdAt?: string | undefined
  usage?: { cpu?: number | undefined; totalMemoryBytes?: number | undefined } | undefined
}
type FunctionDeployment = {
  service: string
  image: string
  namespace?: string | undefined
  envProcess?: string | undefined
  constraints?: string[] | undefined
  envVars?: { [x: string]: string } | undefined
  secrets?: string[] | undefined
  labels?: ({ [x: string]: string } | null) | undefined
  annotations?: ({ [x: string]: string } | null) | undefined
  limits?: { memory?: string | undefined; cpu?: string | undefined } | undefined
  requests?: { memory?: string | undefined; cpu?: string | undefined } | undefined
  readOnlyRootFilesystem?: boolean | undefined
  registryAuth?: string | undefined
  network?: string | undefined
}
type DeleteFunctionRequest = { functionName: string }
type ScaleServiceRequest = { serviceName: string; namespace: string; replicas: bigint }
type SecretDescription = { name: string; namespace?: string | undefined }
type Secret = {
  name: string
  namespace?: string | undefined
  value?: string | undefined
  rawValue?: string | undefined
}
type LogEntry = {
  name: string
  namespace: string
  instance: string
  timestamp: string
  text: string
}
type ListNamespaceResponse = string[]
declare const routes: import('@hono/zod-openapi').OpenAPIHono<
  import('hono/types').Env,
  {
    '/healthz': {
      $get:
        | { input: {}; output: {}; outputFormat: string; status: 200 }
        | { input: {}; output: {}; outputFormat: string; status: 500 }
    }
  } & { '/metrics': { $get: { input: {}; output: {}; outputFormat: string; status: 200 } } } & {
    '/system/info': {
      $get:
        | { input: {}; output: GatewayInfo; outputFormat: 'json'; status: 200 }
        | { input: {}; output: {}; outputFormat: string; status: 500 }
    }
  } & {
    '/system/alert': {
      $post:
        | { input: { json: PrometheusAlert }; output: {}; outputFormat: string; status: 200 }
        | { input: { json: PrometheusAlert }; output: {}; outputFormat: string; status: 500 }
    }
  } & {
    '/system/functions': {
      $get: { input: {}; output: FunctionStatus[]; outputFormat: 'json'; status: 200 }
      $put:
        | { input: { json: FunctionDeployment }; output: {}; outputFormat: string; status: 200 }
        | { input: { json: FunctionDeployment }; output: {}; outputFormat: string; status: 400 }
        | { input: { json: FunctionDeployment }; output: {}; outputFormat: string; status: 404 }
        | { input: { json: FunctionDeployment }; output: {}; outputFormat: string; status: 500 }
      $post:
        | { input: { json: FunctionDeployment }; output: {}; outputFormat: string; status: 202 }
        | { input: { json: FunctionDeployment }; output: {}; outputFormat: string; status: 400 }
        | { input: { json: FunctionDeployment }; output: {}; outputFormat: string; status: 500 }
      $delete:
        | { input: { json: DeleteFunctionRequest }; output: {}; outputFormat: string; status: 200 }
        | { input: { json: DeleteFunctionRequest }; output: {}; outputFormat: string; status: 400 }
        | { input: { json: DeleteFunctionRequest }; output: {}; outputFormat: string; status: 404 }
        | { input: { json: DeleteFunctionRequest }; output: {}; outputFormat: string; status: 500 }
    }
  } & {
    '/system/scale-function/:functionName': {
      $post:
        | {
            input: { param: { functionName: string } } & { json: ScaleServiceRequest }
            output: {}
            outputFormat: string
            status: 200
          }
        | {
            input: { param: { functionName: string } } & { json: ScaleServiceRequest }
            output: {}
            outputFormat: string
            status: 202
          }
        | {
            input: { param: { functionName: string } } & { json: ScaleServiceRequest }
            output: {}
            outputFormat: string
            status: 404
          }
        | {
            input: { param: { functionName: string } } & { json: ScaleServiceRequest }
            output: {}
            outputFormat: string
            status: 500
          }
    }
  } & {
    '/system/function/:functionName': {
      $get:
        | {
            input: { param: { functionName: string } } & {
              query: { namespace?: string | undefined }
            }
            output: FunctionStatus
            outputFormat: 'text'
            status: 200
          }
        | {
            input: { param: { functionName: string } } & {
              query: { namespace?: string | undefined }
            }
            output: {}
            outputFormat: string
            status: 404
          }
        | {
            input: { param: { functionName: string } } & {
              query: { namespace?: string | undefined }
            }
            output: {}
            outputFormat: string
            status: 500
          }
    }
  } & {
    '/system/secrets': {
      $get: { input: {}; output: SecretDescription; outputFormat: 'json'; status: 200 }
      $put:
        | { input: { json: Secret }; output: {}; outputFormat: string; status: 200 }
        | { input: { json: Secret }; output: {}; outputFormat: string; status: 400 }
        | { input: { json: Secret }; output: {}; outputFormat: string; status: 404 }
        | { input: { json: Secret }; output: {}; outputFormat: string; status: 405 }
        | { input: { json: Secret }; output: {}; outputFormat: string; status: 500 }
      $post:
        | { input: { json: Secret }; output: {}; outputFormat: string; status: 201 }
        | { input: { json: Secret }; output: {}; outputFormat: string; status: 400 }
        | { input: { json: Secret }; output: {}; outputFormat: string; status: 500 }
      $delete:
        | { input: { json: SecretDescription }; output: {}; outputFormat: string; status: 204 }
        | { input: { json: SecretDescription }; output: {}; outputFormat: string; status: 400 }
        | { input: { json: SecretDescription }; output: {}; outputFormat: string; status: 404 }
        | { input: { json: SecretDescription }; output: {}; outputFormat: string; status: 500 }
    }
  } & {
    '/system/logs': {
      $get:
        | {
            input: {
              query: {
                name: string
                namespace?: string | undefined
                instance?: string | undefined
                tail?: number | undefined
                follow?: boolean | undefined
                since?: string | undefined
              }
            }
            output: LogEntry
            outputFormat: 'text'
            status: 200
          }
        | {
            input: {
              query: {
                name: string
                namespace?: string | undefined
                instance?: string | undefined
                tail?: number | undefined
                follow?: boolean | undefined
                since?: string | undefined
              }
            }
            output: {}
            outputFormat: string
            status: 404
          }
        | {
            input: {
              query: {
                name: string
                namespace?: string | undefined
                instance?: string | undefined
                tail?: number | undefined
                follow?: boolean | undefined
                since?: string | undefined
              }
            }
            output: {}
            outputFormat: string
            status: 500
          }
    }
  } & {
    '/system/namespaces': {
      $get:
        | { input: {}; output: ListNamespaceResponse; outputFormat: 'json'; status: 200 }
        | { input: {}; output: {}; outputFormat: string; status: 500 }
    }
  } & {
    '/async-function/:functionName': {
      $post:
        | {
            input: { param: { functionName: string } }
            output: {}
            outputFormat: string
            status: 202
          }
        | {
            input: { param: { functionName: string } }
            output: {}
            outputFormat: string
            status: 404
          }
        | {
            input: { param: { functionName: string } }
            output: {}
            outputFormat: string
            status: 500
          }
    }
  } & {
    '/async-function/:functionName.{namespace}': {
      $post:
        | {
            input: { param: { functionName: string; namespace: string } }
            output: {}
            outputFormat: string
            status: 202
          }
        | {
            input: { param: { functionName: string; namespace: string } }
            output: {}
            outputFormat: string
            status: 404
          }
        | {
            input: { param: { functionName: string; namespace: string } }
            output: {}
            outputFormat: string
            status: 500
          }
    }
  } & {
    '/function/:functionName': {
      $post:
        | {
            input: { param: { functionName: string } }
            output: {}
            outputFormat: string
            status: 200
          }
        | {
            input: { param: { functionName: string } }
            output: {}
            outputFormat: string
            status: 404
          }
        | {
            input: { param: { functionName: string } }
            output: {}
            outputFormat: string
            status: 500
          }
    }
  } & {
    '/function/:functionName.{namespace}': {
      $post:
        | {
            input: { param: { functionName: string; namespace: string } }
            output: {}
            outputFormat: string
            status: 200
          }
        | {
            input: { param: { functionName: string; namespace: string } }
            output: {}
            outputFormat: string
            status: 404
          }
        | {
            input: { param: { functionName: string; namespace: string } }
            output: {}
            outputFormat: string
            status: 500
          }
    }
  },
  '/'
>
export default routes
