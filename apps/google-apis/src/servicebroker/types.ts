type GoogleCloudServicebrokerV1beta1DeleteBindingResponse = {
  description?: string | undefined
  operation?: string | undefined
}
type GoogleCloudServicebrokerV1beta1GetBindingResponse = {
  credentials?: { [x: string]: { [x: string]: unknown } } | undefined
  deploymentName?: string | undefined
  description?: string | undefined
  resourceName?: string | undefined
  route_service_url?: string | undefined
  syslog_drain_url?: string | undefined
  volume_mounts?: { [x: string]: { [x: string]: unknown } }[] | undefined
}
type GoogleCloudServicebrokerV1beta1ServiceInstance = {
  context?: { [x: string]: { [x: string]: unknown } } | undefined
  createTime?: string | undefined
  deploymentName?: string | undefined
  description?: string | undefined
  instance_id?: string | undefined
  organization_guid?: string | undefined
  parameters?: { [x: string]: { [x: string]: unknown } } | undefined
  plan_id?: string | undefined
  previous_values?: { [x: string]: { [x: string]: unknown } } | undefined
  resourceName?: string | undefined
  service_id?: string | undefined
  space_guid?: string | undefined
}
type GoogleCloudServicebrokerV1beta1UpdateServiceInstanceResponse = {
  description?: string | undefined
  operation?: string | undefined
}
type GoogleCloudServicebrokerV1beta1Operation = {
  description?: string | undefined
  state?: string | undefined
}
type GoogleCloudServicebrokerV1beta1Binding = {
  bind_resource?: { [x: string]: { [x: string]: unknown } } | undefined
  binding_id?: string | undefined
  createTime?: string | undefined
  deploymentName?: string | undefined
  parameters?: { [x: string]: { [x: string]: unknown } } | undefined
  plan_id?: string | undefined
  resourceName?: string | undefined
  service_id?: string | undefined
}
type GoogleCloudServicebrokerV1beta1ListBindingsResponse = {
  bindings?: GoogleCloudServicebrokerV1beta1Binding[] | undefined
  description?: string | undefined
  nextPageToken?: string | undefined
}
type GoogleCloudServicebrokerV1beta1Broker = {
  createTime?: string | undefined
  name?: string | undefined
  title?: string | undefined
  url?: string | undefined
}
type GoogleCloudServicebrokerV1beta1ListBrokersResponse = {
  brokers?: GoogleCloudServicebrokerV1beta1Broker[] | undefined
  nextPageToken?: string | undefined
}
type GoogleCloudServicebrokerV1beta1ListServiceInstancesResponse = {
  description?: string | undefined
  instances?: GoogleCloudServicebrokerV1beta1ServiceInstance[] | undefined
  nextPageToken?: string | undefined
}
type GoogleCloudServicebrokerV1beta1CreateBindingResponse = {
  credentials?: { [x: string]: { [x: string]: unknown } } | undefined
  description?: string | undefined
  operation?: string | undefined
  route_service_url?: string | undefined
  syslog_drain_url?: string | undefined
  volume_mounts?: { [x: string]: { [x: string]: unknown } }[] | undefined
}
type GoogleCloudServicebrokerV1beta1DashboardClient = {
  id?: string | undefined
  redirect_uri?: string | undefined
  secret?: string | undefined
}
type GoogleCloudServicebrokerV1beta1Plan = {
  bindable?: boolean | undefined
  description?: string | undefined
  free?: boolean | undefined
  id?: string | undefined
  metadata?: { [x: string]: { [x: string]: unknown } } | undefined
  name?: string | undefined
  schemas?: { [x: string]: { [x: string]: unknown } } | undefined
}
type GoogleCloudServicebrokerV1beta1Service = {
  bindable?: boolean | undefined
  binding_retrievable?: boolean | undefined
  bindings_retrievable?: boolean | undefined
  dashboard_client?: GoogleCloudServicebrokerV1beta1DashboardClient | undefined
  description?: string | undefined
  id?: string | undefined
  instances_retrievable?: boolean | undefined
  metadata?: { [x: string]: { [x: string]: unknown } } | undefined
  name?: string | undefined
  plan_updateable?: boolean | undefined
  plans?: GoogleCloudServicebrokerV1beta1Plan[] | undefined
  tags?: string[] | undefined
}
type GoogleCloudServicebrokerV1beta1ListCatalogResponse = {
  description?: string | undefined
  nextPageToken?: string | undefined
  services?: GoogleCloudServicebrokerV1beta1Service[] | undefined
}
type GoogleCloudServicebrokerV1beta1CreateServiceInstanceResponse = {
  description?: string | undefined
  operation?: string | undefined
}
type GoogleTypeExpr = {
  description?: string | undefined
  expression?: string | undefined
  location?: string | undefined
  title?: string | undefined
}
type GoogleIamV1Binding = {
  condition?: GoogleTypeExpr | undefined
  members?: string[] | undefined
  role?: string | undefined
}
type GoogleIamV1Policy = {
  bindings?: GoogleIamV1Binding[] | undefined
  etag?: string | undefined
  version?: number | undefined
}
type GoogleIamV1SetIamPolicyRequest = { policy?: GoogleIamV1Policy | undefined }
type GoogleIamV1TestIamPermissionsRequest = { permissions?: string[] | undefined }
type GoogleIamV1TestIamPermissionsResponse = { permissions?: string[] | undefined }
declare const routes: import('@hono/zod-openapi').OpenAPIHono<
  import('hono/types').Env,
  {
    '/v1beta1/:name': {
      $delete: {
        input: { param: { name: string } } & {
          query: {
            acceptsIncomplete?: boolean | undefined
            planId?: string | undefined
            serviceId?: string | undefined
            fields?: string | undefined
            uploadType?: string | undefined
            callback?: string | undefined
            oauth_token?: string | undefined
            '$.xgafv'?: '1' | '2' | undefined
            alt?: 'json' | 'media' | 'proto' | undefined
            access_token?: string | undefined
            key?: string | undefined
            upload_protocol?: string | undefined
            quotaUser?: string | undefined
            prettyPrint?: boolean | undefined
          }
        }
        output: GoogleCloudServicebrokerV1beta1DeleteBindingResponse
        outputFormat: 'text'
        status: 200
      }
      $get: {
        input: { param: { name: string } } & {
          query: {
            planId?: string | undefined
            serviceId?: string | undefined
            fields?: string | undefined
            uploadType?: string | undefined
            callback?: string | undefined
            oauth_token?: string | undefined
            '$.xgafv'?: '1' | '2' | undefined
            alt?: 'json' | 'media' | 'proto' | undefined
            access_token?: string | undefined
            key?: string | undefined
            upload_protocol?: string | undefined
            quotaUser?: string | undefined
            prettyPrint?: boolean | undefined
          }
        }
        output: GoogleCloudServicebrokerV1beta1GetBindingResponse
        outputFormat: 'text'
        status: 200
      }
      $patch: {
        input: { param: { name: string } } & {
          query: {
            acceptsIncomplete?: boolean | undefined
            fields?: string | undefined
            uploadType?: string | undefined
            callback?: string | undefined
            oauth_token?: string | undefined
            '$.xgafv'?: '1' | '2' | undefined
            alt?: 'json' | 'media' | 'proto' | undefined
            access_token?: string | undefined
            key?: string | undefined
            upload_protocol?: string | undefined
            quotaUser?: string | undefined
            prettyPrint?: boolean | undefined
          }
        } & { json: GoogleCloudServicebrokerV1beta1ServiceInstance }
        output: GoogleCloudServicebrokerV1beta1UpdateServiceInstanceResponse
        outputFormat: 'text'
        status: 200
      }
    }
  } & {
    '/v1beta1/:name/last_operation': {
      $get: {
        input: { param: { name: string } } & {
          query: {
            operation?: string | undefined
            planId?: string | undefined
            serviceId?: string | undefined
            fields?: string | undefined
            uploadType?: string | undefined
            callback?: string | undefined
            oauth_token?: string | undefined
            '$.xgafv'?: '1' | '2' | undefined
            alt?: 'json' | 'media' | 'proto' | undefined
            access_token?: string | undefined
            key?: string | undefined
            upload_protocol?: string | undefined
            quotaUser?: string | undefined
            prettyPrint?: boolean | undefined
          }
        }
        output: GoogleCloudServicebrokerV1beta1Operation
        outputFormat: 'text'
        status: 200
      }
    }
  } & {
    '/v1beta1/:parent/bindings': {
      $get: {
        input: { param: { parent: string } } & {
          query: {
            pageSize?: number | undefined
            pageToken?: string | undefined
            fields?: string | undefined
            uploadType?: string | undefined
            callback?: string | undefined
            oauth_token?: string | undefined
            '$.xgafv'?: '1' | '2' | undefined
            alt?: 'json' | 'media' | 'proto' | undefined
            access_token?: string | undefined
            key?: string | undefined
            upload_protocol?: string | undefined
            quotaUser?: string | undefined
            prettyPrint?: boolean | undefined
          }
        }
        output: GoogleCloudServicebrokerV1beta1ListBindingsResponse
        outputFormat: 'text'
        status: 200
      }
    }
  } & {
    '/v1beta1/:parent/brokers': {
      $get: {
        input: { param: { parent: string } } & {
          query: {
            pageSize?: number | undefined
            pageToken?: string | undefined
            fields?: string | undefined
            uploadType?: string | undefined
            callback?: string | undefined
            oauth_token?: string | undefined
            '$.xgafv'?: '1' | '2' | undefined
            alt?: 'json' | 'media' | 'proto' | undefined
            access_token?: string | undefined
            key?: string | undefined
            upload_protocol?: string | undefined
            quotaUser?: string | undefined
            prettyPrint?: boolean | undefined
          }
        }
        output: GoogleCloudServicebrokerV1beta1ListBrokersResponse
        outputFormat: 'text'
        status: 200
      }
      $post: {
        input: { param: { parent: string } } & {
          query: {
            fields?: string | undefined
            uploadType?: string | undefined
            callback?: string | undefined
            oauth_token?: string | undefined
            '$.xgafv'?: '1' | '2' | undefined
            alt?: 'json' | 'media' | 'proto' | undefined
            access_token?: string | undefined
            key?: string | undefined
            upload_protocol?: string | undefined
            quotaUser?: string | undefined
            prettyPrint?: boolean | undefined
          }
        } & { json: GoogleCloudServicebrokerV1beta1Broker }
        output: GoogleCloudServicebrokerV1beta1Broker
        outputFormat: 'text'
        status: 200
      }
    }
  } & {
    '/v1beta1/:parent/instances': {
      $get: {
        input: { param: { parent: string } } & {
          query: {
            pageSize?: number | undefined
            pageToken?: string | undefined
            fields?: string | undefined
            uploadType?: string | undefined
            callback?: string | undefined
            oauth_token?: string | undefined
            '$.xgafv'?: '1' | '2' | undefined
            alt?: 'json' | 'media' | 'proto' | undefined
            access_token?: string | undefined
            key?: string | undefined
            upload_protocol?: string | undefined
            quotaUser?: string | undefined
            prettyPrint?: boolean | undefined
          }
        }
        output: GoogleCloudServicebrokerV1beta1ListServiceInstancesResponse
        outputFormat: 'text'
        status: 200
      }
    }
  } & {
    '/v1beta1/:parent/service_bindings/:binding_id': {
      $put: {
        input: { param: { parent: string; binding_id: string } } & {
          query: {
            acceptsIncomplete?: boolean | undefined
            fields?: string | undefined
            uploadType?: string | undefined
            callback?: string | undefined
            oauth_token?: string | undefined
            '$.xgafv'?: '1' | '2' | undefined
            alt?: 'json' | 'media' | 'proto' | undefined
            access_token?: string | undefined
            key?: string | undefined
            upload_protocol?: string | undefined
            quotaUser?: string | undefined
            prettyPrint?: boolean | undefined
          }
        } & { json: GoogleCloudServicebrokerV1beta1Binding }
        output: GoogleCloudServicebrokerV1beta1CreateBindingResponse
        outputFormat: 'text'
        status: 200
      }
    }
  } & {
    '/v1beta1/:parent/v2/catalog': {
      $get: {
        input: { param: { parent: string } } & {
          query: {
            pageSize?: number | undefined
            pageToken?: string | undefined
            fields?: string | undefined
            uploadType?: string | undefined
            callback?: string | undefined
            oauth_token?: string | undefined
            '$.xgafv'?: '1' | '2' | undefined
            alt?: 'json' | 'media' | 'proto' | undefined
            access_token?: string | undefined
            key?: string | undefined
            upload_protocol?: string | undefined
            quotaUser?: string | undefined
            prettyPrint?: boolean | undefined
          }
        }
        output: GoogleCloudServicebrokerV1beta1ListCatalogResponse
        outputFormat: 'text'
        status: 200
      }
    }
  } & {
    '/v1beta1/:parent/v2/service_instances/:instance_id': {
      $put: {
        input: { param: { parent: string; instance_id: string } } & {
          query: {
            acceptsIncomplete?: boolean | undefined
            fields?: string | undefined
            uploadType?: string | undefined
            callback?: string | undefined
            oauth_token?: string | undefined
            '$.xgafv'?: '1' | '2' | undefined
            alt?: 'json' | 'media' | 'proto' | undefined
            access_token?: string | undefined
            key?: string | undefined
            upload_protocol?: string | undefined
            quotaUser?: string | undefined
            prettyPrint?: boolean | undefined
          }
        } & { json: GoogleCloudServicebrokerV1beta1ServiceInstance }
        output: GoogleCloudServicebrokerV1beta1CreateServiceInstanceResponse
        outputFormat: 'text'
        status: 200
      }
    }
  } & {
    '/v1beta1/:resource:getIamPolicy': {
      $get: {
        input: { param: { resource: string } } & {
          query: {
            'options.requestedPolicyVersion'?: number | undefined
            fields?: string | undefined
            uploadType?: string | undefined
            callback?: string | undefined
            oauth_token?: string | undefined
            '$.xgafv'?: '1' | '2' | undefined
            alt?: 'json' | 'media' | 'proto' | undefined
            access_token?: string | undefined
            key?: string | undefined
            upload_protocol?: string | undefined
            quotaUser?: string | undefined
            prettyPrint?: boolean | undefined
          }
        }
        output: GoogleIamV1Policy
        outputFormat: 'text'
        status: 200
      }
    }
  } & {
    '/v1beta1/:resource:setIamPolicy': {
      $post: {
        input: { param: { resource: string } } & {
          query: {
            fields?: string | undefined
            uploadType?: string | undefined
            callback?: string | undefined
            oauth_token?: string | undefined
            '$.xgafv'?: '1' | '2' | undefined
            alt?: 'json' | 'media' | 'proto' | undefined
            access_token?: string | undefined
            key?: string | undefined
            upload_protocol?: string | undefined
            quotaUser?: string | undefined
            prettyPrint?: boolean | undefined
          }
        } & { json: GoogleIamV1SetIamPolicyRequest }
        output: GoogleIamV1Policy
        outputFormat: 'text'
        status: 200
      }
    }
  } & {
    '/v1beta1/:resource:testIamPermissions': {
      $post: {
        input: { param: { resource: string } } & {
          query: {
            fields?: string | undefined
            uploadType?: string | undefined
            callback?: string | undefined
            oauth_token?: string | undefined
            '$.xgafv'?: '1' | '2' | undefined
            alt?: 'json' | 'media' | 'proto' | undefined
            access_token?: string | undefined
            key?: string | undefined
            upload_protocol?: string | undefined
            quotaUser?: string | undefined
            prettyPrint?: boolean | undefined
          }
        } & { json: GoogleIamV1TestIamPermissionsRequest }
        output: GoogleIamV1TestIamPermissionsResponse
        outputFormat: 'text'
        status: 200
      }
    }
  },
  '/'
>
export default routes
