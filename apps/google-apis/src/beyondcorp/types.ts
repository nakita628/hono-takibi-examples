type GoogleCloudBeyondcorpAppconnectorsV1ResourceInfo = {
  id?: string | undefined
  resource?: { [x: string]: { [x: string]: unknown } } | undefined
  status?:
    | 'HEALTH_STATUS_UNSPECIFIED'
    | 'HEALTHY'
    | 'UNHEALTHY'
    | 'UNRESPONSIVE'
    | 'DEGRADED'
    | undefined
  sub?: GoogleCloudBeyondcorpAppconnectorsV1ResourceInfo[] | undefined
  time?: string | undefined
}
type GoogleCloudBeyondcorpAppconnectorsV1ReportStatusRequest = {
  requestId?: string | undefined
  resourceInfo?: GoogleCloudBeyondcorpAppconnectorsV1ResourceInfo | undefined
  validateOnly?: boolean | undefined
}
type GoogleRpcStatus = {
  code?: number | undefined
  details?: { [x: string]: { [x: string]: unknown } }[] | undefined
  message?: string | undefined
}
type GoogleLongrunningOperation = {
  done?: boolean | undefined
  error?: GoogleRpcStatus | undefined
  metadata?: { [x: string]: { [x: string]: unknown } } | undefined
  name?: string | undefined
  response?: { [x: string]: { [x: string]: unknown } } | undefined
}
type GoogleCloudBeyondcorpAppconnectorsV1ImageConfig = {
  stableImage?: string | undefined
  targetImage?: string | undefined
}
type GoogleCloudBeyondcorpAppconnectorsV1NotificationConfigCloudPubSubNotificationConfig = {
  pubsubSubscription?: string | undefined
}
type GoogleCloudBeyondcorpAppconnectorsV1NotificationConfig = {
  pubsubNotification?:
    | GoogleCloudBeyondcorpAppconnectorsV1NotificationConfigCloudPubSubNotificationConfig
    | undefined
}
type GoogleCloudBeyondcorpAppconnectorsV1AppConnectorInstanceConfig = {
  imageConfig?: GoogleCloudBeyondcorpAppconnectorsV1ImageConfig | undefined
  instanceConfig?: { [x: string]: { [x: string]: unknown } } | undefined
  notificationConfig?: GoogleCloudBeyondcorpAppconnectorsV1NotificationConfig | undefined
  sequenceNumber?: string | undefined
}
type GoogleCloudBeyondcorpAppconnectorsV1ResolveInstanceConfigResponse = {
  instanceConfig?: GoogleCloudBeyondcorpAppconnectorsV1AppConnectorInstanceConfig | undefined
}
type Empty = { [x: string]: unknown }
type GoogleCloudBeyondcorpAppconnectorsV1AppConnectorPrincipalInfoServiceAccount = {
  email?: string | undefined
}
type GoogleCloudBeyondcorpAppconnectorsV1AppConnectorPrincipalInfo = {
  serviceAccount?:
    | GoogleCloudBeyondcorpAppconnectorsV1AppConnectorPrincipalInfoServiceAccount
    | undefined
}
type GoogleCloudBeyondcorpAppconnectorsV1AppConnector = {
  createTime?: string | undefined
  displayName?: string | undefined
  labels?: { [x: string]: string } | undefined
  name?: string | undefined
  principalInfo?: GoogleCloudBeyondcorpAppconnectorsV1AppConnectorPrincipalInfo | undefined
  resourceInfo?: GoogleCloudBeyondcorpAppconnectorsV1ResourceInfo | undefined
  state?:
    | 'STATE_UNSPECIFIED'
    | 'CREATING'
    | 'CREATED'
    | 'UPDATING'
    | 'DELETING'
    | 'DOWN'
    | undefined
  uid?: string | undefined
  updateTime?: string | undefined
}
type GoogleCloudLocationLocation = {
  displayName?: string | undefined
  labels?: { [x: string]: string } | undefined
  locationId?: string | undefined
  metadata?: { [x: string]: { [x: string]: unknown } } | undefined
  name?: string | undefined
}
type GoogleCloudLocationListLocationsResponse = {
  locations?: GoogleCloudLocationLocation[] | undefined
  nextPageToken?: string | undefined
}
type GoogleLongrunningListOperationsResponse = {
  nextPageToken?: string | undefined
  operations?: GoogleLongrunningOperation[] | undefined
}
type GoogleLongrunningCancelOperationRequest = { [x: string]: unknown }
type GoogleCloudBeyondcorpAppconnectionsV1AppConnectionApplicationEndpoint = {
  host?: string | undefined
  port?: number | undefined
}
type GoogleCloudBeyondcorpAppconnectionsV1AppConnectionGateway = {
  appGateway?: string | undefined
  ingressPort?: number | undefined
  l7psc?: string | undefined
  type?: 'TYPE_UNSPECIFIED' | 'GCP_REGIONAL_MIG' | undefined
  uri?: string | undefined
}
type GoogleCloudBeyondcorpAppconnectionsV1AppConnection = {
  applicationEndpoint?:
    | GoogleCloudBeyondcorpAppconnectionsV1AppConnectionApplicationEndpoint
    | undefined
  connectors?: string[] | undefined
  createTime?: string | undefined
  displayName?: string | undefined
  gateway?: GoogleCloudBeyondcorpAppconnectionsV1AppConnectionGateway | undefined
  labels?: { [x: string]: string } | undefined
  name?: string | undefined
  state?:
    | 'STATE_UNSPECIFIED'
    | 'CREATING'
    | 'CREATED'
    | 'UPDATING'
    | 'DELETING'
    | 'DOWN'
    | undefined
  type?: 'TYPE_UNSPECIFIED' | 'TCP_PROXY' | undefined
  uid?: string | undefined
  updateTime?: string | undefined
}
type GoogleCloudBeyondcorpAppconnectionsV1ListAppConnectionsResponse = {
  appConnections?: GoogleCloudBeyondcorpAppconnectionsV1AppConnection[] | undefined
  nextPageToken?: string | undefined
  unreachable?: string[] | undefined
}
type GoogleCloudBeyondcorpAppconnectionsV1ResolveAppConnectionsResponseAppConnectionDetails = {
  appConnection?: GoogleCloudBeyondcorpAppconnectionsV1AppConnection | undefined
  recentMigVms?: string[] | undefined
}
type GoogleCloudBeyondcorpAppconnectionsV1ResolveAppConnectionsResponse = {
  appConnectionDetails?:
    | GoogleCloudBeyondcorpAppconnectionsV1ResolveAppConnectionsResponseAppConnectionDetails[]
    | undefined
  nextPageToken?: string | undefined
  unreachable?: string[] | undefined
}
type GoogleCloudBeyondcorpAppconnectorsV1ListAppConnectorsResponse = {
  appConnectors?: GoogleCloudBeyondcorpAppconnectorsV1AppConnector[] | undefined
  nextPageToken?: string | undefined
  unreachable?: string[] | undefined
}
type AllocatedConnection = { ingressPort?: number | undefined; pscUri?: string | undefined }
type AppGateway = {
  allocatedConnections?: AllocatedConnection[] | undefined
  createTime?: string | undefined
  displayName?: string | undefined
  hostType?: 'HOST_TYPE_UNSPECIFIED' | 'GCP_REGIONAL_MIG' | undefined
  labels?: { [x: string]: string } | undefined
  name?: string | undefined
  state?:
    | 'STATE_UNSPECIFIED'
    | 'CREATING'
    | 'CREATED'
    | 'UPDATING'
    | 'DELETING'
    | 'DOWN'
    | undefined
  type?: 'TYPE_UNSPECIFIED' | 'TCP_PROXY' | undefined
  uid?: string | undefined
  updateTime?: string | undefined
  uri?: string | undefined
}
type ListAppGatewaysResponse = {
  appGateways?: AppGateway[] | undefined
  nextPageToken?: string | undefined
  unreachable?: string[] | undefined
}
type GoogleIamV1AuditLogConfig = {
  exemptedMembers?: string[] | undefined
  logType?: 'LOG_TYPE_UNSPECIFIED' | 'ADMIN_READ' | 'DATA_WRITE' | 'DATA_READ' | undefined
}
type GoogleIamV1AuditConfig = {
  auditLogConfigs?: GoogleIamV1AuditLogConfig[] | undefined
  service?: string | undefined
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
  auditConfigs?: GoogleIamV1AuditConfig[] | undefined
  bindings?: GoogleIamV1Binding[] | undefined
  etag?: string | undefined
  version?: number | undefined
}
type GoogleIamV1SetIamPolicyRequest = {
  policy?: GoogleIamV1Policy | undefined
  updateMask?: string | undefined
}
type GoogleIamV1TestIamPermissionsRequest = { permissions?: string[] | undefined }
type GoogleIamV1TestIamPermissionsResponse = { permissions?: string[] | undefined }
declare const routes: import('@hono/zod-openapi').OpenAPIHono<
  import('hono/types').Env,
  {
    '/v1/:appConnector:reportStatus': {
      $post: {
        input: { param: { appConnector: string } } & {
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
        } & { json: GoogleCloudBeyondcorpAppconnectorsV1ReportStatusRequest }
        output: GoogleLongrunningOperation
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/v1/:appConnector:resolveInstanceConfig': {
      $get: {
        input: { param: { appConnector: string } } & {
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
        output: GoogleCloudBeyondcorpAppconnectorsV1ResolveInstanceConfigResponse
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/v1/:name': {
      $delete: {
        input: { param: { name: string } } & {
          query: {
            requestId?: string | undefined
            validateOnly?: boolean | undefined
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
        output: Empty
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
        output: GoogleLongrunningOperation
        outputFormat: 'json'
        status: 200
      }
      $patch: {
        input: { param: { name: string } } & {
          query: {
            requestId?: string | undefined
            updateMask?: string | undefined
            validateOnly?: boolean | undefined
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
        } & { json: GoogleCloudBeyondcorpAppconnectorsV1AppConnector }
        output: GoogleLongrunningOperation
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/v1/:name/locations': {
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
        output: GoogleCloudLocationListLocationsResponse
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/v1/:name/operations': {
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
        output: GoogleLongrunningListOperationsResponse
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/v1/:name:cancel': {
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
        } & { json: GoogleLongrunningCancelOperationRequest }
        output: Empty
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/v1/:parent/appConnections': {
      $get: {
        input: { param: { parent: string } } & {
          query: {
            filter?: string | undefined
            orderBy?: string | undefined
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
        output: GoogleCloudBeyondcorpAppconnectionsV1ListAppConnectionsResponse
        outputFormat: 'json'
        status: 200
      }
      $post: {
        input: { param: { parent: string } } & {
          query: {
            appConnectionId?: string | undefined
            requestId?: string | undefined
            validateOnly?: boolean | undefined
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
        } & { json: GoogleCloudBeyondcorpAppconnectionsV1AppConnection }
        output: GoogleLongrunningOperation
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/v1/:parent/appConnections:resolve': {
      $get: {
        input: { param: { parent: string } } & {
          query: {
            appConnectorId?: string | undefined
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
        output: GoogleCloudBeyondcorpAppconnectionsV1ResolveAppConnectionsResponse
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/v1/:parent/appConnectors': {
      $get: {
        input: { param: { parent: string } } & {
          query: {
            filter?: string | undefined
            orderBy?: string | undefined
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
        output: GoogleCloudBeyondcorpAppconnectorsV1ListAppConnectorsResponse
        outputFormat: 'json'
        status: 200
      }
      $post: {
        input: { param: { parent: string } } & {
          query: {
            appConnectorId?: string | undefined
            requestId?: string | undefined
            validateOnly?: boolean | undefined
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
        } & { json: GoogleCloudBeyondcorpAppconnectorsV1AppConnector }
        output: GoogleLongrunningOperation
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/v1/:parent/appGateways': {
      $get: {
        input: { param: { parent: string } } & {
          query: {
            filter?: string | undefined
            orderBy?: string | undefined
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
        output: ListAppGatewaysResponse
        outputFormat: 'json'
        status: 200
      }
      $post: {
        input: { param: { parent: string } } & {
          query: {
            appGatewayId?: string | undefined
            requestId?: string | undefined
            validateOnly?: boolean | undefined
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
        } & { json: AppGateway }
        output: GoogleLongrunningOperation
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/v1/:resource:getIamPolicy': {
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
        output: GoogleIamV1Policy
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/v1/:resource:setIamPolicy': {
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
        } & { json: GoogleIamV1SetIamPolicyRequest }
        output: GoogleIamV1Policy
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/v1/:resource:testIamPermissions': {
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
        } & { json: GoogleIamV1TestIamPermissionsRequest }
        output: GoogleIamV1TestIamPermissionsResponse
        outputFormat: 'json'
        status: 200
      }
    }
  },
  '/'
>
export default routes
