type EntryPointParameter = {
  description: string
  display_name: string
  parameter_name: string
  permitted_values: string[]
  required: number
  type: 'query' | 'header' | 'uri' | 'path' | 'body'
}
type EntryPoint = {
  content_types: string[]
  description: string
  encoding_types: string[]
  http_method: 'GET' | 'PUT' | 'POST' | 'DELETE'
  name: string
  parameters: EntryPointParameter[]
  url: string
  url_template: string
}
type ActionDescription = {
  action_id: string
  description?: string | undefined
  entry_point: EntryPoint
}
type ListActionsResponse = {
  api: string
  method: string
  response: ActionDescription[]
  status: 'success'
}
type ErrorModel = {
  api?: string | undefined
  method?: string | undefined
  response?: string | undefined
  status?: 'error' | undefined
}
type DescribeActionResponse = {
  api: string
  method: string
  response: ActionDescription
  status: 'success'
}
type ExecBody = {
  action_specific_property1?: string | undefined
  action_specific_property2?: string | undefined
  'osdb:body_data_encoding'?: string | undefined
  'osdb:body_data_raw'?: string | undefined
  'osdb:body_data_src_url'?: string | undefined
  'osdb:output_type'?: 'url_only' | 'generate_rdf' | 'display_rdf' | undefined
  'osdb:response_format'?: string | undefined
}
type ActionHelp = { action_id: string; help_text: string; service_id: string }
type ActionHelpResponse = { api: string; method: string; response: ActionHelp; status: 'success' }
type LoginResponse = { api: string; method: string; response: { user: string }; status: 'success' }
type LogoutResponse = { api: string; method: string; response: { user: string }; status: 'success' }
type ServiceDescription = {
  description?: string | undefined
  import_source_uri: string
  service_id: string
  service_name: string
}
type ListServicesResponse = {
  api: string
  method: string
  response: ServiceDescription[]
  status: 'success'
}
type DescribeServiceResponse = {
  api: string
  method: string
  response: ServiceDescription
  status: 'success'
}
declare const routes: import('@hono/zod-openapi').OpenAPIHono<
  import('hono/types').Env,
  {
    '/api/v1/actions/:serviceId': {
      $get:
        | {
            input: { param: { serviceId: string } }
            output: ListActionsResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { serviceId: string } }
            output: ErrorModel
            outputFormat: 'json'
            status: 200
          }
    }
  } & {
    '/api/v1/actions/:serviceId/:actionId': {
      $get:
        | {
            input: { param: { serviceId: string; actionId: string } }
            output: DescribeActionResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { serviceId: string; actionId: string } }
            output: ErrorModel
            outputFormat: 'json'
            status: 200
          }
    }
  } & {
    '/api/v1/actions/:serviceId/:actionId/exec': {
      $post:
        | {
            input: { param: { serviceId: string; actionId: string } } & { json: ExecBody }
            output: {}
            outputFormat: string
            status: 200
          }
        | {
            input: { param: { serviceId: string; actionId: string } } & { json: ExecBody }
            output: ErrorModel
            outputFormat: 'json'
            status: 200
          }
    }
  } & {
    '/api/v1/actions/:serviceId/:actionId/help': {
      $get:
        | {
            input: { param: { serviceId: string; actionId: string } }
            output: ActionHelpResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { serviceId: string; actionId: string } }
            output: ErrorModel
            outputFormat: 'json'
            status: 200
          }
    }
  } & {
    '/api/v1/login': {
      $get:
        | { input: {}; output: LoginResponse; outputFormat: 'json'; status: 200 }
        | { input: {}; output: ErrorModel; outputFormat: 'json'; status: 200 }
    }
  } & {
    '/api/v1/logout': {
      $get:
        | { input: {}; output: LogoutResponse; outputFormat: 'json'; status: 200 }
        | { input: {}; output: ErrorModel; outputFormat: 'json'; status: 200 }
    }
  } & {
    '/api/v1/services': {
      $get:
        | { input: {}; output: ListServicesResponse; outputFormat: 'json'; status: 200 }
        | { input: {}; output: ErrorModel; outputFormat: 'json'; status: 200 }
      $post:
        | {
            input: {
              json: { service_description_url: string; service_moniker?: string | undefined }
            }
            output: { api: string; method: string; response: string; status: 'success' }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              json: { service_description_url: string; service_moniker?: string | undefined }
            }
            output: ErrorModel
            outputFormat: 'json'
            status: 200
          }
    }
  } & {
    '/api/v1/services/:serviceId': {
      $delete:
        | {
            input: { param: { serviceId: string } }
            output: { api: string; method: string; response: string; status: 'success' }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { serviceId: string } }
            output: ErrorModel
            outputFormat: 'json'
            status: 200
          }
      $get:
        | {
            input: { param: { serviceId: string } }
            output: DescribeServiceResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { serviceId: string } }
            output: ErrorModel
            outputFormat: 'json'
            status: 200
          }
    }
  },
  '/'
>
export default routes
