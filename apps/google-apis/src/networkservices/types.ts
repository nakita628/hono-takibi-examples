type Status = {
  code?: number | undefined
  details?: { [x: string]: { [x: string]: unknown } }[] | undefined
  message?: string | undefined
}
type Operation = {
  done?: boolean | undefined
  error?: Status | undefined
  metadata?: { [x: string]: { [x: string]: unknown } } | undefined
  name?: string | undefined
  response?: { [x: string]: { [x: string]: unknown } } | undefined
}
type TlsRouteRouteDestination = { serviceName?: string | undefined; weight?: number | undefined }
type TlsRouteRouteAction = { destinations?: TlsRouteRouteDestination[] | undefined }
type TlsRouteRouteMatch = { alpn?: string[] | undefined; sniHost?: string[] | undefined }
type TlsRouteRouteRule = {
  action?: TlsRouteRouteAction | undefined
  matches?: TlsRouteRouteMatch[] | undefined
}
type TlsRoute = {
  createTime?: string | undefined
  description?: string | undefined
  gateways?: string[] | undefined
  meshes?: string[] | undefined
  name?: string | undefined
  rules?: TlsRouteRouteRule[] | undefined
  selfLink?: string | undefined
  updateTime?: string | undefined
}
type Location = {
  displayName?: string | undefined
  labels?: { [x: string]: string } | undefined
  locationId?: string | undefined
  metadata?: { [x: string]: { [x: string]: unknown } } | undefined
  name?: string | undefined
}
type ListLocationsResponse = {
  locations?: Location[] | undefined
  nextPageToken?: string | undefined
}
type ListOperationsResponse = {
  nextPageToken?: string | undefined
  operations?: Operation[] | undefined
}
type CancelOperationRequest = { [x: string]: unknown }
type Empty = { [x: string]: unknown }
type MetadataLabels = { labelName?: string | undefined; labelValue?: string | undefined }
type MetadataLabelMatcher = {
  metadataLabelMatchCriteria?:
    | 'METADATA_LABEL_MATCH_CRITERIA_UNSPECIFIED'
    | 'MATCH_ANY'
    | 'MATCH_ALL'
    | undefined
  metadataLabels?: MetadataLabels[] | undefined
}
type EndpointMatcher = { metadataLabelMatcher?: MetadataLabelMatcher | undefined }
type TrafficPortSelector = { ports?: string[] | undefined }
type EndpointPolicy = {
  authorizationPolicy?: string | undefined
  clientTlsPolicy?: string | undefined
  createTime?: string | undefined
  description?: string | undefined
  endpointMatcher?: EndpointMatcher | undefined
  labels?: { [x: string]: string } | undefined
  name?: string | undefined
  serverTlsPolicy?: string | undefined
  trafficPortSelector?: TrafficPortSelector | undefined
  type?: 'ENDPOINT_POLICY_TYPE_UNSPECIFIED' | 'SIDECAR_PROXY' | 'GRPC_SERVER' | undefined
  updateTime?: string | undefined
}
type ListEndpointPoliciesResponse = {
  endpointPolicies?: EndpointPolicy[] | undefined
  nextPageToken?: string | undefined
}
type Gateway = {
  addresses?: string[] | undefined
  certificateUrls?: string[] | undefined
  createTime?: string | undefined
  description?: string | undefined
  gatewaySecurityPolicy?: string | undefined
  labels?: { [x: string]: string } | undefined
  name?: string | undefined
  network?: string | undefined
  ports?: number[] | undefined
  scope?: string | undefined
  selfLink?: string | undefined
  serverTlsPolicy?: string | undefined
  subnetwork?: string | undefined
  type?: 'TYPE_UNSPECIFIED' | 'OPEN_MESH' | 'SECURE_WEB_GATEWAY' | undefined
  updateTime?: string | undefined
}
type ListGatewaysResponse = { gateways?: Gateway[] | undefined; nextPageToken?: string | undefined }
type GrpcRouteDestination = { serviceName?: string | undefined; weight?: number | undefined }
type GrpcRouteFaultInjectionPolicyAbort = {
  httpStatus?: number | undefined
  percentage?: number | undefined
}
type GrpcRouteFaultInjectionPolicyDelay = {
  fixedDelay?: string | undefined
  percentage?: number | undefined
}
type GrpcRouteFaultInjectionPolicy = {
  abort?: GrpcRouteFaultInjectionPolicyAbort | undefined
  delay?: GrpcRouteFaultInjectionPolicyDelay | undefined
}
type GrpcRouteRetryPolicy = {
  numRetries?: number | undefined
  retryConditions?: string[] | undefined
}
type GrpcRouteRouteAction = {
  destinations?: GrpcRouteDestination[] | undefined
  faultInjectionPolicy?: GrpcRouteFaultInjectionPolicy | undefined
  retryPolicy?: GrpcRouteRetryPolicy | undefined
  timeout?: string | undefined
}
type GrpcRouteHeaderMatch = {
  key?: string | undefined
  type?: 'TYPE_UNSPECIFIED' | 'EXACT' | 'REGULAR_EXPRESSION' | undefined
  value?: string | undefined
}
type GrpcRouteMethodMatch = {
  caseSensitive?: boolean | undefined
  grpcMethod?: string | undefined
  grpcService?: string | undefined
  type?: 'TYPE_UNSPECIFIED' | 'EXACT' | 'REGULAR_EXPRESSION' | undefined
}
type GrpcRouteRouteMatch = {
  headers?: GrpcRouteHeaderMatch[] | undefined
  method?: GrpcRouteMethodMatch | undefined
}
type GrpcRouteRouteRule = {
  action?: GrpcRouteRouteAction | undefined
  matches?: GrpcRouteRouteMatch[] | undefined
}
type GrpcRoute = {
  createTime?: string | undefined
  description?: string | undefined
  gateways?: string[] | undefined
  hostnames?: string[] | undefined
  labels?: { [x: string]: string } | undefined
  meshes?: string[] | undefined
  name?: string | undefined
  rules?: GrpcRouteRouteRule[] | undefined
  selfLink?: string | undefined
  updateTime?: string | undefined
}
type ListGrpcRoutesResponse = {
  grpcRoutes?: GrpcRoute[] | undefined
  nextPageToken?: string | undefined
}
type HttpRouteCorsPolicy = {
  allowCredentials?: boolean | undefined
  allowHeaders?: string[] | undefined
  allowMethods?: string[] | undefined
  allowOriginRegexes?: string[] | undefined
  allowOrigins?: string[] | undefined
  disabled?: boolean | undefined
  exposeHeaders?: string[] | undefined
  maxAge?: string | undefined
}
type HttpRouteDestination = { serviceName?: string | undefined; weight?: number | undefined }
type HttpRouteFaultInjectionPolicyAbort = {
  httpStatus?: number | undefined
  percentage?: number | undefined
}
type HttpRouteFaultInjectionPolicyDelay = {
  fixedDelay?: string | undefined
  percentage?: number | undefined
}
type HttpRouteFaultInjectionPolicy = {
  abort?: HttpRouteFaultInjectionPolicyAbort | undefined
  delay?: HttpRouteFaultInjectionPolicyDelay | undefined
}
type HttpRouteRedirect = {
  hostRedirect?: string | undefined
  httpsRedirect?: boolean | undefined
  pathRedirect?: string | undefined
  portRedirect?: number | undefined
  prefixRewrite?: string | undefined
  responseCode?:
    | 'RESPONSE_CODE_UNSPECIFIED'
    | 'MOVED_PERMANENTLY_DEFAULT'
    | 'FOUND'
    | 'SEE_OTHER'
    | 'TEMPORARY_REDIRECT'
    | 'PERMANENT_REDIRECT'
    | undefined
  stripQuery?: boolean | undefined
}
type HttpRouteHeaderModifier = {
  add?: { [x: string]: string } | undefined
  remove?: string[] | undefined
  set?: { [x: string]: string } | undefined
}
type HttpRouteRequestMirrorPolicy = { destination?: HttpRouteDestination | undefined }
type HttpRouteRetryPolicy = {
  numRetries?: number | undefined
  perTryTimeout?: string | undefined
  retryConditions?: string[] | undefined
}
type HttpRouteURLRewrite = {
  hostRewrite?: string | undefined
  pathPrefixRewrite?: string | undefined
}
type HttpRouteRouteAction = {
  corsPolicy?: HttpRouteCorsPolicy | undefined
  destinations?: HttpRouteDestination[] | undefined
  faultInjectionPolicy?: HttpRouteFaultInjectionPolicy | undefined
  redirect?: HttpRouteRedirect | undefined
  requestHeaderModifier?: HttpRouteHeaderModifier | undefined
  requestMirrorPolicy?: HttpRouteRequestMirrorPolicy | undefined
  responseHeaderModifier?: HttpRouteHeaderModifier | undefined
  retryPolicy?: HttpRouteRetryPolicy | undefined
  timeout?: string | undefined
  urlRewrite?: HttpRouteURLRewrite | undefined
}
type HttpRouteHeaderMatchIntegerRange = { end?: number | undefined; start?: number | undefined }
type HttpRouteHeaderMatch = {
  exactMatch?: string | undefined
  header?: string | undefined
  invertMatch?: boolean | undefined
  prefixMatch?: string | undefined
  presentMatch?: boolean | undefined
  rangeMatch?: HttpRouteHeaderMatchIntegerRange | undefined
  regexMatch?: string | undefined
  suffixMatch?: string | undefined
}
type HttpRouteQueryParameterMatch = {
  exactMatch?: string | undefined
  presentMatch?: boolean | undefined
  queryParameter?: string | undefined
  regexMatch?: string | undefined
}
type HttpRouteRouteMatch = {
  fullPathMatch?: string | undefined
  headers?: HttpRouteHeaderMatch[] | undefined
  ignoreCase?: boolean | undefined
  prefixMatch?: string | undefined
  queryParameters?: HttpRouteQueryParameterMatch[] | undefined
  regexMatch?: string | undefined
}
type HttpRouteRouteRule = {
  action?: HttpRouteRouteAction | undefined
  matches?: HttpRouteRouteMatch[] | undefined
}
type HttpRoute = {
  createTime?: string | undefined
  description?: string | undefined
  gateways?: string[] | undefined
  hostnames?: string[] | undefined
  labels?: { [x: string]: string } | undefined
  meshes?: string[] | undefined
  name?: string | undefined
  rules?: HttpRouteRouteRule[] | undefined
  selfLink?: string | undefined
  updateTime?: string | undefined
}
type ListHttpRoutesResponse = {
  httpRoutes?: HttpRoute[] | undefined
  nextPageToken?: string | undefined
}
type Mesh = {
  createTime?: string | undefined
  description?: string | undefined
  interceptionPort?: number | undefined
  labels?: { [x: string]: string } | undefined
  name?: string | undefined
  selfLink?: string | undefined
  updateTime?: string | undefined
}
type ListMeshesResponse = { meshes?: Mesh[] | undefined; nextPageToken?: string | undefined }
type ServiceBinding = {
  createTime?: string | undefined
  description?: string | undefined
  labels?: { [x: string]: string } | undefined
  name?: string | undefined
  service?: string | undefined
  updateTime?: string | undefined
}
type ListServiceBindingsResponse = {
  nextPageToken?: string | undefined
  serviceBindings?: ServiceBinding[] | undefined
}
type TcpRouteRouteDestination = { serviceName?: string | undefined; weight?: number | undefined }
type TcpRouteRouteAction = {
  destinations?: TcpRouteRouteDestination[] | undefined
  originalDestination?: boolean | undefined
}
type TcpRouteRouteMatch = { address?: string | undefined; port?: string | undefined }
type TcpRouteRouteRule = {
  action?: TcpRouteRouteAction | undefined
  matches?: TcpRouteRouteMatch[] | undefined
}
type TcpRoute = {
  createTime?: string | undefined
  description?: string | undefined
  gateways?: string[] | undefined
  labels?: { [x: string]: string } | undefined
  meshes?: string[] | undefined
  name?: string | undefined
  rules?: TcpRouteRouteRule[] | undefined
  selfLink?: string | undefined
  updateTime?: string | undefined
}
type ListTcpRoutesResponse = {
  nextPageToken?: string | undefined
  tcpRoutes?: TcpRoute[] | undefined
}
type ListTlsRoutesResponse = {
  nextPageToken?: string | undefined
  tlsRoutes?: TlsRoute[] | undefined
}
type AuditLogConfig = {
  exemptedMembers?: string[] | undefined
  logType?: 'LOG_TYPE_UNSPECIFIED' | 'ADMIN_READ' | 'DATA_WRITE' | 'DATA_READ' | undefined
}
type AuditConfig = { auditLogConfigs?: AuditLogConfig[] | undefined; service?: string | undefined }
type Expr = {
  description?: string | undefined
  expression?: string | undefined
  location?: string | undefined
  title?: string | undefined
}
type Binding = {
  condition?: Expr | undefined
  members?: string[] | undefined
  role?: string | undefined
}
type Policy = {
  auditConfigs?: AuditConfig[] | undefined
  bindings?: Binding[] | undefined
  etag?: string | undefined
  version?: number | undefined
}
type SetIamPolicyRequest = { policy?: Policy | undefined; updateMask?: string | undefined }
type TestIamPermissionsRequest = { permissions?: string[] | undefined }
type TestIamPermissionsResponse = { permissions?: string[] | undefined }
declare const routes: import('@hono/zod-openapi').OpenAPIHono<
  import('hono/types').Env,
  {
    '/v1beta1/:name': {
      $delete: {
        input: { param: { name: string } } & {
          query: {
            '$.xgafv'?: '1' | '2' | undefined
            access_token?: string | undefined
            alt?: 'json' | 'media' | 'proto' | undefined
            callback?: string | undefined
            fields?: string | undefined
            key?: string | undefined
            oauth_token?: string | undefined
            prettyPrint?: boolean | undefined
            quotaUser?: string | undefined
            upload_protocol?: string | undefined
            uploadType?: string | undefined
          }
        }
        output: Operation
        outputFormat: 'json'
        status: 200
      }
      $get: {
        input: { param: { name: string } } & {
          query: {
            '$.xgafv'?: '1' | '2' | undefined
            access_token?: string | undefined
            alt?: 'json' | 'media' | 'proto' | undefined
            callback?: string | undefined
            fields?: string | undefined
            key?: string | undefined
            oauth_token?: string | undefined
            prettyPrint?: boolean | undefined
            quotaUser?: string | undefined
            upload_protocol?: string | undefined
            uploadType?: string | undefined
          }
        }
        output: TlsRoute
        outputFormat: 'json'
        status: 200
      }
      $patch: {
        input: { param: { name: string } } & {
          query: {
            updateMask?: string | undefined
            '$.xgafv'?: '1' | '2' | undefined
            access_token?: string | undefined
            alt?: 'json' | 'media' | 'proto' | undefined
            callback?: string | undefined
            fields?: string | undefined
            key?: string | undefined
            oauth_token?: string | undefined
            prettyPrint?: boolean | undefined
            quotaUser?: string | undefined
            upload_protocol?: string | undefined
            uploadType?: string | undefined
          }
        } & { json: TlsRoute }
        output: Operation
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/v1beta1/:name/locations': {
      $get: {
        input: { param: { name: string } } & {
          query: {
            filter?: string | undefined
            pageSize?: number | undefined
            pageToken?: string | undefined
            '$.xgafv'?: '1' | '2' | undefined
            access_token?: string | undefined
            alt?: 'json' | 'media' | 'proto' | undefined
            callback?: string | undefined
            fields?: string | undefined
            key?: string | undefined
            oauth_token?: string | undefined
            prettyPrint?: boolean | undefined
            quotaUser?: string | undefined
            upload_protocol?: string | undefined
            uploadType?: string | undefined
          }
        }
        output: ListLocationsResponse
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/v1beta1/:name/operations': {
      $get: {
        input: { param: { name: string } } & {
          query: {
            filter?: string | undefined
            pageSize?: number | undefined
            pageToken?: string | undefined
            '$.xgafv'?: '1' | '2' | undefined
            access_token?: string | undefined
            alt?: 'json' | 'media' | 'proto' | undefined
            callback?: string | undefined
            fields?: string | undefined
            key?: string | undefined
            oauth_token?: string | undefined
            prettyPrint?: boolean | undefined
            quotaUser?: string | undefined
            upload_protocol?: string | undefined
            uploadType?: string | undefined
          }
        }
        output: ListOperationsResponse
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/v1beta1/:name:cancel': {
      $post: {
        input: { param: { name: string } } & {
          query: {
            '$.xgafv'?: '1' | '2' | undefined
            access_token?: string | undefined
            alt?: 'json' | 'media' | 'proto' | undefined
            callback?: string | undefined
            fields?: string | undefined
            key?: string | undefined
            oauth_token?: string | undefined
            prettyPrint?: boolean | undefined
            quotaUser?: string | undefined
            upload_protocol?: string | undefined
            uploadType?: string | undefined
          }
        } & { json: CancelOperationRequest }
        output: Empty
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/v1beta1/:parent/endpointPolicies': {
      $get: {
        input: { param: { parent: string } } & {
          query: {
            pageSize?: number | undefined
            pageToken?: string | undefined
            '$.xgafv'?: '1' | '2' | undefined
            access_token?: string | undefined
            alt?: 'json' | 'media' | 'proto' | undefined
            callback?: string | undefined
            fields?: string | undefined
            key?: string | undefined
            oauth_token?: string | undefined
            prettyPrint?: boolean | undefined
            quotaUser?: string | undefined
            upload_protocol?: string | undefined
            uploadType?: string | undefined
          }
        }
        output: ListEndpointPoliciesResponse
        outputFormat: 'json'
        status: 200
      }
      $post: {
        input: { param: { parent: string } } & {
          query: {
            endpointPolicyId?: string | undefined
            '$.xgafv'?: '1' | '2' | undefined
            access_token?: string | undefined
            alt?: 'json' | 'media' | 'proto' | undefined
            callback?: string | undefined
            fields?: string | undefined
            key?: string | undefined
            oauth_token?: string | undefined
            prettyPrint?: boolean | undefined
            quotaUser?: string | undefined
            upload_protocol?: string | undefined
            uploadType?: string | undefined
          }
        } & { json: EndpointPolicy }
        output: Operation
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/v1beta1/:parent/gateways': {
      $get: {
        input: { param: { parent: string } } & {
          query: {
            pageSize?: number | undefined
            pageToken?: string | undefined
            '$.xgafv'?: '1' | '2' | undefined
            access_token?: string | undefined
            alt?: 'json' | 'media' | 'proto' | undefined
            callback?: string | undefined
            fields?: string | undefined
            key?: string | undefined
            oauth_token?: string | undefined
            prettyPrint?: boolean | undefined
            quotaUser?: string | undefined
            upload_protocol?: string | undefined
            uploadType?: string | undefined
          }
        }
        output: ListGatewaysResponse
        outputFormat: 'json'
        status: 200
      }
      $post: {
        input: { param: { parent: string } } & {
          query: {
            gatewayId?: string | undefined
            '$.xgafv'?: '1' | '2' | undefined
            access_token?: string | undefined
            alt?: 'json' | 'media' | 'proto' | undefined
            callback?: string | undefined
            fields?: string | undefined
            key?: string | undefined
            oauth_token?: string | undefined
            prettyPrint?: boolean | undefined
            quotaUser?: string | undefined
            upload_protocol?: string | undefined
            uploadType?: string | undefined
          }
        } & { json: Gateway }
        output: Operation
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/v1beta1/:parent/grpcRoutes': {
      $get: {
        input: { param: { parent: string } } & {
          query: {
            pageSize?: number | undefined
            pageToken?: string | undefined
            '$.xgafv'?: '1' | '2' | undefined
            access_token?: string | undefined
            alt?: 'json' | 'media' | 'proto' | undefined
            callback?: string | undefined
            fields?: string | undefined
            key?: string | undefined
            oauth_token?: string | undefined
            prettyPrint?: boolean | undefined
            quotaUser?: string | undefined
            upload_protocol?: string | undefined
            uploadType?: string | undefined
          }
        }
        output: ListGrpcRoutesResponse
        outputFormat: 'json'
        status: 200
      }
      $post: {
        input: { param: { parent: string } } & {
          query: {
            grpcRouteId?: string | undefined
            '$.xgafv'?: '1' | '2' | undefined
            access_token?: string | undefined
            alt?: 'json' | 'media' | 'proto' | undefined
            callback?: string | undefined
            fields?: string | undefined
            key?: string | undefined
            oauth_token?: string | undefined
            prettyPrint?: boolean | undefined
            quotaUser?: string | undefined
            upload_protocol?: string | undefined
            uploadType?: string | undefined
          }
        } & { json: GrpcRoute }
        output: Operation
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/v1beta1/:parent/httpRoutes': {
      $get: {
        input: { param: { parent: string } } & {
          query: {
            pageSize?: number | undefined
            pageToken?: string | undefined
            '$.xgafv'?: '1' | '2' | undefined
            access_token?: string | undefined
            alt?: 'json' | 'media' | 'proto' | undefined
            callback?: string | undefined
            fields?: string | undefined
            key?: string | undefined
            oauth_token?: string | undefined
            prettyPrint?: boolean | undefined
            quotaUser?: string | undefined
            upload_protocol?: string | undefined
            uploadType?: string | undefined
          }
        }
        output: ListHttpRoutesResponse
        outputFormat: 'json'
        status: 200
      }
      $post: {
        input: { param: { parent: string } } & {
          query: {
            httpRouteId?: string | undefined
            '$.xgafv'?: '1' | '2' | undefined
            access_token?: string | undefined
            alt?: 'json' | 'media' | 'proto' | undefined
            callback?: string | undefined
            fields?: string | undefined
            key?: string | undefined
            oauth_token?: string | undefined
            prettyPrint?: boolean | undefined
            quotaUser?: string | undefined
            upload_protocol?: string | undefined
            uploadType?: string | undefined
          }
        } & { json: HttpRoute }
        output: Operation
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/v1beta1/:parent/meshes': {
      $get: {
        input: { param: { parent: string } } & {
          query: {
            pageSize?: number | undefined
            pageToken?: string | undefined
            '$.xgafv'?: '1' | '2' | undefined
            access_token?: string | undefined
            alt?: 'json' | 'media' | 'proto' | undefined
            callback?: string | undefined
            fields?: string | undefined
            key?: string | undefined
            oauth_token?: string | undefined
            prettyPrint?: boolean | undefined
            quotaUser?: string | undefined
            upload_protocol?: string | undefined
            uploadType?: string | undefined
          }
        }
        output: ListMeshesResponse
        outputFormat: 'json'
        status: 200
      }
      $post: {
        input: { param: { parent: string } } & {
          query: {
            meshId?: string | undefined
            '$.xgafv'?: '1' | '2' | undefined
            access_token?: string | undefined
            alt?: 'json' | 'media' | 'proto' | undefined
            callback?: string | undefined
            fields?: string | undefined
            key?: string | undefined
            oauth_token?: string | undefined
            prettyPrint?: boolean | undefined
            quotaUser?: string | undefined
            upload_protocol?: string | undefined
            uploadType?: string | undefined
          }
        } & { json: Mesh }
        output: Operation
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/v1beta1/:parent/serviceBindings': {
      $get: {
        input: { param: { parent: string } } & {
          query: {
            pageSize?: number | undefined
            pageToken?: string | undefined
            '$.xgafv'?: '1' | '2' | undefined
            access_token?: string | undefined
            alt?: 'json' | 'media' | 'proto' | undefined
            callback?: string | undefined
            fields?: string | undefined
            key?: string | undefined
            oauth_token?: string | undefined
            prettyPrint?: boolean | undefined
            quotaUser?: string | undefined
            upload_protocol?: string | undefined
            uploadType?: string | undefined
          }
        }
        output: ListServiceBindingsResponse
        outputFormat: 'json'
        status: 200
      }
      $post: {
        input: { param: { parent: string } } & {
          query: {
            serviceBindingId?: string | undefined
            '$.xgafv'?: '1' | '2' | undefined
            access_token?: string | undefined
            alt?: 'json' | 'media' | 'proto' | undefined
            callback?: string | undefined
            fields?: string | undefined
            key?: string | undefined
            oauth_token?: string | undefined
            prettyPrint?: boolean | undefined
            quotaUser?: string | undefined
            upload_protocol?: string | undefined
            uploadType?: string | undefined
          }
        } & { json: ServiceBinding }
        output: Operation
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/v1beta1/:parent/tcpRoutes': {
      $get: {
        input: { param: { parent: string } } & {
          query: {
            pageSize?: number | undefined
            pageToken?: string | undefined
            '$.xgafv'?: '1' | '2' | undefined
            access_token?: string | undefined
            alt?: 'json' | 'media' | 'proto' | undefined
            callback?: string | undefined
            fields?: string | undefined
            key?: string | undefined
            oauth_token?: string | undefined
            prettyPrint?: boolean | undefined
            quotaUser?: string | undefined
            upload_protocol?: string | undefined
            uploadType?: string | undefined
          }
        }
        output: ListTcpRoutesResponse
        outputFormat: 'json'
        status: 200
      }
      $post: {
        input: { param: { parent: string } } & {
          query: {
            tcpRouteId?: string | undefined
            '$.xgafv'?: '1' | '2' | undefined
            access_token?: string | undefined
            alt?: 'json' | 'media' | 'proto' | undefined
            callback?: string | undefined
            fields?: string | undefined
            key?: string | undefined
            oauth_token?: string | undefined
            prettyPrint?: boolean | undefined
            quotaUser?: string | undefined
            upload_protocol?: string | undefined
            uploadType?: string | undefined
          }
        } & { json: TcpRoute }
        output: Operation
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/v1beta1/:parent/tlsRoutes': {
      $get: {
        input: { param: { parent: string } } & {
          query: {
            pageSize?: number | undefined
            pageToken?: string | undefined
            '$.xgafv'?: '1' | '2' | undefined
            access_token?: string | undefined
            alt?: 'json' | 'media' | 'proto' | undefined
            callback?: string | undefined
            fields?: string | undefined
            key?: string | undefined
            oauth_token?: string | undefined
            prettyPrint?: boolean | undefined
            quotaUser?: string | undefined
            upload_protocol?: string | undefined
            uploadType?: string | undefined
          }
        }
        output: ListTlsRoutesResponse
        outputFormat: 'json'
        status: 200
      }
      $post: {
        input: { param: { parent: string } } & {
          query: {
            tlsRouteId?: string | undefined
            '$.xgafv'?: '1' | '2' | undefined
            access_token?: string | undefined
            alt?: 'json' | 'media' | 'proto' | undefined
            callback?: string | undefined
            fields?: string | undefined
            key?: string | undefined
            oauth_token?: string | undefined
            prettyPrint?: boolean | undefined
            quotaUser?: string | undefined
            upload_protocol?: string | undefined
            uploadType?: string | undefined
          }
        } & { json: TlsRoute }
        output: Operation
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/v1beta1/:resource:getIamPolicy': {
      $get: {
        input: { param: { resource: string } } & {
          query: {
            'options.requestedPolicyVersion'?: number | undefined
            '$.xgafv'?: '1' | '2' | undefined
            access_token?: string | undefined
            alt?: 'json' | 'media' | 'proto' | undefined
            callback?: string | undefined
            fields?: string | undefined
            key?: string | undefined
            oauth_token?: string | undefined
            prettyPrint?: boolean | undefined
            quotaUser?: string | undefined
            upload_protocol?: string | undefined
            uploadType?: string | undefined
          }
        }
        output: Policy
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/v1beta1/:resource:setIamPolicy': {
      $post: {
        input: { param: { resource: string } } & {
          query: {
            '$.xgafv'?: '1' | '2' | undefined
            access_token?: string | undefined
            alt?: 'json' | 'media' | 'proto' | undefined
            callback?: string | undefined
            fields?: string | undefined
            key?: string | undefined
            oauth_token?: string | undefined
            prettyPrint?: boolean | undefined
            quotaUser?: string | undefined
            upload_protocol?: string | undefined
            uploadType?: string | undefined
          }
        } & { json: SetIamPolicyRequest }
        output: Policy
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/v1beta1/:resource:testIamPermissions': {
      $post: {
        input: { param: { resource: string } } & {
          query: {
            '$.xgafv'?: '1' | '2' | undefined
            access_token?: string | undefined
            alt?: 'json' | 'media' | 'proto' | undefined
            callback?: string | undefined
            fields?: string | undefined
            key?: string | undefined
            oauth_token?: string | undefined
            prettyPrint?: boolean | undefined
            quotaUser?: string | undefined
            upload_protocol?: string | undefined
            uploadType?: string | undefined
          }
        } & { json: TestIamPermissionsRequest }
        output: TestIamPermissionsResponse
        outputFormat: 'json'
        status: 200
      }
    }
  },
  '/'
>
export default routes
