type ArtifactUpload = { file: File }
type SnapshotUpload = { file: File }
type Metadata = {
  annotations?: { [x: string]: string } | undefined
  createdOn: number
  labels?: { [x: string]: string } | undefined
  lastUpdate: number
}
type SecretRef = { name: string; secretId: string }
type ServiceRef = { name: string; serviceId: string; version: string }
type ImportJob = {
  active?: boolean | undefined
  createdDate?: string | undefined
  etag?: string | undefined
  frequency?: string | undefined
  id?: string | undefined
  lastImportDate?: string | undefined
  lastImportError?: string | undefined
  mainArtifact?: boolean | undefined
  metadata?: Metadata | undefined
  name: string
  repositoryDisableSSLValidation?: boolean | undefined
  repositoryUrl: string
  secretRef?: SecretRef | undefined
  serviceRefs?: ServiceRef[] | undefined
}
type Counter = { counter?: number | undefined }
type KeycloakConfig = {
  'auth-server-url': string
  enabled: boolean
  'public-client': string
  realm: string
  resource: string
  'ssl-required': 'none' | 'external'
}
type WeightedMetricValue = { name: string; value: number; weight: number }
type Trend = 'DOWN' | 'LOW_DOWN' | 'STABLE' | 'LOW_UP' | 'UP'
type TestConformanceMetric = {
  aggregationLabelValue?: string | undefined
  currentScore: number
  id: string
  lastUpdateDay?: string | undefined
  latestScores?: { [x: string]: number } | undefined
  latestTrend?: Trend | undefined
  maxPossibleScore: number
  serviceId: string
}
type DailyInvocationStatistic = {
  dailyCount: number
  day: string
  hourlyCount?: { [x: string]: unknown } | undefined
  id: string
  minuteCount?: { [x: string]: unknown } | undefined
  serviceName: string
  serviceVersion: string
}
type CounterMap = { [x: string]: number }
type TestResultSummary = { id: string; serviceId: string; success: boolean; testDate: bigint }
type ResourceType =
  | 'WSDL'
  | 'XSD'
  | 'JSON_SCHEMA'
  | 'OPEN_API_SPEC'
  | 'OPEN_API_SCHEMA'
  | 'ASYNC_API_SPEC'
  | 'ASYNC_API_SCHEMA'
  | 'AVRO_SCHEMA'
  | 'PROTOBUF_SCHEMA'
  | 'PROTOBUF_DESCRIPTION'
  | 'GRAPHQL_SCHEMA'
type Resource = {
  content: string
  id: string
  name: string
  path?: string | undefined
  serviceId: string
  sourceArtifact?: string | undefined
  type: ResourceType
}
type Secret = {
  caCertPem?: string | undefined
  description: string
  id?: string | undefined
  name: string
  password?: string | undefined
  token?: string | undefined
  tokenHeader?: string | undefined
  username?: string | undefined
}
type Binding = {
  destinationName: string
  destinationType?: string | undefined
  keyType?: string | undefined
  method?: string | undefined
  persistent?: boolean | undefined
  qoS?: string | undefined
  type: 'KAFKA' | 'MQTT' | 'WS' | 'AMQP' | 'NATS' | 'GOOGLEPUBSUB'
}
type ParameterConstraint = {
  in?: 'path' | 'query' | 'header' | undefined
  mustMatchRegexp?: string | undefined
  name: string
  recopy?: boolean | undefined
  required?: boolean | undefined
}
type Operation = {
  bindings?: { [x: string]: Binding } | undefined
  defaultDelay?: number | undefined
  dispatcher?: string | undefined
  dispatcherRules?: string | undefined
  inputName?: string | undefined
  method: string
  name: string
  outputName?: string | undefined
  parameterContraints?: ParameterConstraint[] | undefined
  resourcePaths?: string[] | undefined
}
type Service = {
  id?: string | undefined
  metadata?: Metadata | undefined
  name: string
  operations?: Operation[] | undefined
  type: 'REST' | 'SOAP_HTTP' | 'GENERIC_REST' | 'GENERIC_EVENT' | 'EVENT' | 'GRPC' | 'GRAPHQL'
  version: string
  xmlNS?: string | undefined
}
type StringArray = string[]
type LabelsMap = { [x: string]: StringArray }
type Header = { name: string; values: string[] }
type Request = {
  content?: string | undefined
  headers?: Header[] | undefined
  id?: string | undefined
  name: string
  operationId: string
  testCaseId?: string | undefined
}
type Response = {
  content?: string | undefined
  headers?: Header[] | undefined
  id?: string | undefined
  name: string
  operationId: string
  testCaseId?: string | undefined
}
type RequestResponsePair = {
  request: Request
  response: Response
  type: 'reqRespPair' | 'unidirEvent'
}
type EventMessage = {
  content?: string | undefined
  headers?: Header[] | undefined
  id: string
  mediaType: string
  name?: string | undefined
  operationId?: string | undefined
  testCaseId?: string | undefined
}
type UnidirectionalEvent = { eventMessage: EventMessage; type: 'reqRespPair' | 'unidirEvent' }
type Exchange = RequestResponsePair | UnidirectionalEvent
type MessageArray = Exchange[]
type ServiceView = { messagesMap: { [x: string]: MessageArray }; service: Service }
type OperationOverrideDTO = {
  defaultDelay?: number | undefined
  dispatcher?: string | undefined
  dispatcherRules?: string | undefined
  parameterConstraints?: ParameterConstraint[] | undefined
}
type HeaderDTO = { name: string; values: string }
type OperationHeaders = { [x: string]: HeaderDTO[] }
type TestRunnerType =
  | 'HTTP'
  | 'SOAP_HTTP'
  | 'SOAP_UI'
  | 'POSTMAN'
  | 'OPEN_API_SCHEMA'
  | 'ASYNC_API_SCHEMA'
  | 'GRPC_PROTOBUF'
  | 'GRAPHQL_SCHEMA'
type TestRequest = {
  filteredOperations?: string[] | undefined
  operationHeaders?: OperationHeaders | undefined
  runnerType: TestRunnerType
  secretName?: string | undefined
  serviceId: string
  testEndpoint: string
  timeout: number
}
type TestStepResult = {
  elapsedTime?: number | undefined
  eventMessageName?: string | undefined
  message?: string | undefined
  requestName?: string | undefined
  success: boolean
}
type TestCaseResult = {
  elapsedTime: number
  operationName: string
  success: boolean
  testStepResults?: TestStepResult[] | undefined
}
type TestResult = {
  elapsedTime?: number | undefined
  id: string
  inProgress: boolean
  operationHeaders?: OperationHeaders | undefined
  runnerType: TestRunnerType
  secretRef?: SecretRef | undefined
  serviceId: string
  success: boolean
  testCaseResults?: TestCaseResult[] | undefined
  testDate: bigint
  testNumber: number
  testedEndpoint: string
  timeout?: number | undefined
  version: number
}
type TestCaseReturnDTO = { operationName: string }
declare const routes: import('@hono/zod-openapi').OpenAPIHono<
  import('hono/types').Env,
  {
    '/artifact/upload': {
      $post:
        | {
            input: { query: { mainArtifact: boolean } } & { form: ArtifactUpload }
            output: string
            outputFormat: 'text'
            status: 201
          }
        | {
            input: { query: { mainArtifact: boolean } } & { form: ArtifactUpload }
            output: {}
            outputFormat: string
            status: 204
          }
        | {
            input: { query: { mainArtifact: boolean } } & { form: ArtifactUpload }
            output: string
            outputFormat: 'text'
            status: 400
          }
    }
  } & {
    '/export': {
      $get: {
        input: { query: { serviceIds: string[] } }
        output: File
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/features/config': { $get: { input: {}; output: {}; outputFormat: string; status: 200 } }
  } & {
    '/import': {
      $post: { input: { form: SnapshotUpload }; output: {}; outputFormat: string; status: 201 }
    }
  } & {
    '/jobs': {
      $get: {
        input: {
          query: { page?: number | undefined; size?: number | undefined; name?: string | undefined }
        }
        output: ImportJob[]
        outputFormat: 'json'
        status: 200
      }
      $post: { input: { json: ImportJob }; output: ImportJob; outputFormat: 'json'; status: 201 }
    }
  } & {
    '/jobs/count': { $get: { input: {}; output: Counter; outputFormat: 'json'; status: 200 } }
  } & {
    '/jobs/:id': {
      $delete: { input: { param: { id: string } }; output: {}; outputFormat: string; status: 200 }
      $get: {
        input: { param: { id: string } }
        output: ImportJob
        outputFormat: 'json'
        status: 200
      }
      $post: {
        input: { param: { id: string } } & { json: ImportJob }
        output: ImportJob
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/jobs/:id/activate': {
      $put: {
        input: { param: { id: string } }
        output: ImportJob
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/jobs/:id/start': {
      $put: {
        input: { param: { id: string } }
        output: ImportJob
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/jobs/:id/stop': {
      $put: {
        input: { param: { id: string } }
        output: ImportJob
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/keycloak/config': {
      $get: { input: {}; output: KeycloakConfig; outputFormat: 'json'; status: 200 }
    }
  } & {
    '/metrics/conformance/aggregate': {
      $get: { input: {}; output: WeightedMetricValue[]; outputFormat: 'json'; status: 200 }
    }
  } & {
    '/metrics/conformance/service/:serviceId': {
      $get: {
        input: { param: { serviceId: string } }
        output: TestConformanceMetric
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/metrics/invocations/global': {
      $get: {
        input: { query: { day?: string | undefined } }
        output: DailyInvocationStatistic
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/metrics/invocations/global/latest': {
      $get: {
        input: { query: { limit?: number | undefined } }
        output: CounterMap
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/metrics/invocations/top': {
      $get: {
        input: { query: { day?: string | undefined; limit?: number | undefined } }
        output: DailyInvocationStatistic[]
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/metrics/invocations/:serviceName/:serviceVersion': {
      $get: {
        input: { param: { serviceName: string; serviceVersion: string } } & {
          query: { day?: string | undefined }
        }
        output: DailyInvocationStatistic
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/metrics/tests/latest': {
      $get: {
        input: { query: { limit?: number | undefined } }
        output: TestResultSummary[]
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/resources/service/:serviceId': {
      $get: {
        input: { param: { serviceId: string } }
        output: Resource[]
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/resources/:name': {
      $get: {
        input: { param: { name: string } }
        output: Resource
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/secrets': {
      $get: {
        input: { query: { page?: number | undefined; size?: number | undefined } }
        output: Secret[]
        outputFormat: 'json'
        status: 200
      }
      $post: { input: { json: Secret }; output: Secret; outputFormat: 'json'; status: 201 }
    }
  } & {
    '/secrets/count': { $get: { input: {}; output: Counter; outputFormat: 'json'; status: 200 } }
  } & {
    '/secrets/:id': {
      $delete: { input: { param: { id: string } }; output: {}; outputFormat: string; status: 200 }
      $get: { input: { param: { id: string } }; output: Secret; outputFormat: 'json'; status: 200 }
      $put: { input: { param: { id: string } }; output: {}; outputFormat: string; status: 200 }
    }
  } & {
    '/services': {
      $get: {
        input: { query: { page?: number | undefined; size?: number | undefined } }
        output: Service
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/services/count': { $get: { input: {}; output: Counter; outputFormat: 'json'; status: 200 } }
  } & {
    '/services/labels': {
      $get: { input: {}; output: LabelsMap; outputFormat: 'json'; status: 200 }
    }
  } & {
    '/services/search': {
      $get: {
        input: { query: { queryMap: { [x: string]: string } } }
        output: Service[]
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/services/:id': {
      $delete: { input: { param: { id: string } }; output: {}; outputFormat: string; status: 200 }
      $get: {
        input: { param: { id: string } } & { query: { messages?: boolean | undefined } }
        output: Service | ServiceView
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/services/:id/metadata': {
      $put:
        | {
            input: { param: { id: string } } & { json: Metadata }
            output: {}
            outputFormat: string
            status: 200
          }
        | {
            input: { param: { id: string } } & { json: Metadata }
            output: {}
            outputFormat: string
            status: 500
          }
    }
  } & {
    '/services/:id/operation': {
      $put:
        | {
            input: { param: { id: string } } & { query: { operationName: string } } & {
              json: OperationOverrideDTO
            }
            output: {}
            outputFormat: string
            status: 200
          }
        | {
            input: { param: { id: string } } & { query: { operationName: string } } & {
              json: OperationOverrideDTO
            }
            output: {}
            outputFormat: string
            status: 500
          }
    }
  } & {
    '/tests': {
      $post: { input: { json: TestRequest }; output: TestResult; outputFormat: 'json'; status: 201 }
    }
  } & {
    '/tests/service/:serviceId': {
      $get: {
        input: { param: { serviceId: string } }
        output: TestResult[]
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/tests/service/:serviceId/count': {
      $get: {
        input: { param: { serviceId: string } }
        output: Counter
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/tests/:id': {
      $get: {
        input: { param: { id: string } }
        output: TestResult
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/tests/:id/events/:testCaseId': {
      $get: {
        input: { param: { id: string; testCaseId: string } }
        output: UnidirectionalEvent[]
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/tests/:id/messages/:testCaseId': {
      $get: {
        input: { param: { id: string; testCaseId: string } }
        output: RequestResponsePair[]
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/tests/:id/testCaseResult': {
      $post: {
        input: { param: { id: string } } & { json: TestCaseReturnDTO }
        output: TestCaseResult
        outputFormat: 'json'
        status: 200
      }
    }
  },
  '/'
>
export default routes
