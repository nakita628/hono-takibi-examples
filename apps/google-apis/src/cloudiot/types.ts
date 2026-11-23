type Empty = { [x: string]: unknown }
type DeviceConfig = {
  binaryData?: string | undefined
  cloudUpdateTime?: string | undefined
  deviceAckTime?: string | undefined
  version?: string | undefined
}
type PublicKeyCredential = {
  format?:
    | 'UNSPECIFIED_PUBLIC_KEY_FORMAT'
    | 'RSA_PEM'
    | 'RSA_X509_PEM'
    | 'ES256_PEM'
    | 'ES256_X509_PEM'
    | undefined
  key?: string | undefined
}
type DeviceCredential = {
  expirationTime?: string | undefined
  publicKey?: PublicKeyCredential | undefined
}
type GatewayConfig = {
  gatewayAuthMethod?:
    | 'GATEWAY_AUTH_METHOD_UNSPECIFIED'
    | 'ASSOCIATION_ONLY'
    | 'DEVICE_AUTH_TOKEN_ONLY'
    | 'ASSOCIATION_AND_DEVICE_AUTH_TOKEN'
    | undefined
  gatewayType?: 'GATEWAY_TYPE_UNSPECIFIED' | 'GATEWAY' | 'NON_GATEWAY' | undefined
  lastAccessedGatewayId?: string | undefined
  lastAccessedGatewayTime?: string | undefined
}
type Status = {
  code?: number | undefined
  details?: { [x: string]: { [x: string]: unknown } }[] | undefined
  message?: string | undefined
}
type DeviceState = { binaryData?: string | undefined; updateTime?: string | undefined }
type Device = {
  blocked?: boolean | undefined
  config?: DeviceConfig | undefined
  credentials?: DeviceCredential[] | undefined
  gatewayConfig?: GatewayConfig | undefined
  id?: string | undefined
  lastConfigAckTime?: string | undefined
  lastConfigSendTime?: string | undefined
  lastErrorStatus?: Status | undefined
  lastErrorTime?: string | undefined
  lastEventTime?: string | undefined
  lastHeartbeatTime?: string | undefined
  lastStateTime?: string | undefined
  logLevel?: 'LOG_LEVEL_UNSPECIFIED' | 'NONE' | 'ERROR' | 'INFO' | 'DEBUG' | undefined
  metadata?: { [x: string]: string } | undefined
  name?: string | undefined
  numId?: string | undefined
  state?: DeviceState | undefined
}
type ListDeviceConfigVersionsResponse = { deviceConfigs?: DeviceConfig[] | undefined }
type ListDeviceStatesResponse = { deviceStates?: DeviceState[] | undefined }
type ModifyCloudToDeviceConfigRequest = {
  binaryData?: string | undefined
  versionToUpdate?: string | undefined
}
type SendCommandToDeviceRequest = {
  binaryData?: string | undefined
  subfolder?: string | undefined
}
type SendCommandToDeviceResponse = { [x: string]: unknown }
type ListDevicesResponse = { devices?: Device[] | undefined; nextPageToken?: string | undefined }
type X509CertificateDetails = {
  expiryTime?: string | undefined
  issuer?: string | undefined
  publicKeyType?: string | undefined
  signatureAlgorithm?: string | undefined
  startTime?: string | undefined
  subject?: string | undefined
}
type PublicKeyCertificate = {
  certificate?: string | undefined
  format?: 'UNSPECIFIED_PUBLIC_KEY_CERTIFICATE_FORMAT' | 'X509_CERTIFICATE_PEM' | undefined
  x509Details?: X509CertificateDetails | undefined
}
type RegistryCredential = { publicKeyCertificate?: PublicKeyCertificate | undefined }
type EventNotificationConfig = {
  pubsubTopicName?: string | undefined
  subfolderMatches?: string | undefined
}
type HttpConfig = {
  httpEnabledState?: 'HTTP_STATE_UNSPECIFIED' | 'HTTP_ENABLED' | 'HTTP_DISABLED' | undefined
}
type MqttConfig = {
  mqttEnabledState?: 'MQTT_STATE_UNSPECIFIED' | 'MQTT_ENABLED' | 'MQTT_DISABLED' | undefined
}
type StateNotificationConfig = { pubsubTopicName?: string | undefined }
type DeviceRegistry = {
  credentials?: RegistryCredential[] | undefined
  eventNotificationConfigs?: EventNotificationConfig[] | undefined
  httpConfig?: HttpConfig | undefined
  id?: string | undefined
  logLevel?: 'LOG_LEVEL_UNSPECIFIED' | 'NONE' | 'ERROR' | 'INFO' | 'DEBUG' | undefined
  mqttConfig?: MqttConfig | undefined
  name?: string | undefined
  stateNotificationConfig?: StateNotificationConfig | undefined
}
type ListDeviceRegistriesResponse = {
  deviceRegistries?: DeviceRegistry[] | undefined
  nextPageToken?: string | undefined
}
type BindDeviceToGatewayRequest = { deviceId?: string | undefined; gatewayId?: string | undefined }
type BindDeviceToGatewayResponse = { [x: string]: unknown }
type UnbindDeviceFromGatewayRequest = {
  deviceId?: string | undefined
  gatewayId?: string | undefined
}
type UnbindDeviceFromGatewayResponse = { [x: string]: unknown }
type GetPolicyOptions = { requestedPolicyVersion?: number | undefined }
type GetIamPolicyRequest = { options?: GetPolicyOptions | undefined }
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
  bindings?: Binding[] | undefined
  etag?: string | undefined
  version?: number | undefined
}
type SetIamPolicyRequest = { policy?: Policy | undefined }
type TestIamPermissionsRequest = { permissions?: string[] | undefined }
type TestIamPermissionsResponse = { permissions?: string[] | undefined }
declare const routes: import('@hono/zod-openapi').OpenAPIHono<
  import('hono/types').Env,
  {
    '/v1/:name': {
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
        output: Empty
        outputFormat: 'json'
        status: 200
      }
      $get: {
        input: { param: { name: string } } & {
          query: {
            fieldMask?: string | undefined
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
        output: Device
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
        } & { json: Device }
        output: Device
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/v1/:name/configVersions': {
      $get: {
        input: { param: { name: string } } & {
          query: {
            numVersions?: number | undefined
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
        output: ListDeviceConfigVersionsResponse
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/v1/:name/states': {
      $get: {
        input: { param: { name: string } } & {
          query: {
            numStates?: number | undefined
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
        output: ListDeviceStatesResponse
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/v1/:name:modifyCloudToDeviceConfig': {
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
        } & { json: ModifyCloudToDeviceConfigRequest }
        output: DeviceConfig
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/v1/:name:sendCommandToDevice': {
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
        } & { json: SendCommandToDeviceRequest }
        output: SendCommandToDeviceResponse
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/v1/:parent/devices': {
      $get: {
        input: { param: { parent: string } } & {
          query: {
            deviceIds?: string[] | undefined
            deviceNumIds?: string[] | undefined
            fieldMask?: string | undefined
            'gatewayListOptions.associationsDeviceId'?: string | undefined
            'gatewayListOptions.associationsGatewayId'?: string | undefined
            'gatewayListOptions.gatewayType'?:
              | 'GATEWAY_TYPE_UNSPECIFIED'
              | 'GATEWAY'
              | 'NON_GATEWAY'
              | undefined
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
        output: ListDevicesResponse
        outputFormat: 'json'
        status: 200
      }
      $post: {
        input: { param: { parent: string } } & {
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
        } & { json: Device }
        output: Device
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/v1/:parent/registries': {
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
        output: ListDeviceRegistriesResponse
        outputFormat: 'json'
        status: 200
      }
      $post: {
        input: { param: { parent: string } } & {
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
        } & { json: DeviceRegistry }
        output: DeviceRegistry
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/v1/:parent:bindDeviceToGateway': {
      $post: {
        input: { param: { parent: string } } & {
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
        } & { json: BindDeviceToGatewayRequest }
        output: BindDeviceToGatewayResponse
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/v1/:parent:unbindDeviceFromGateway': {
      $post: {
        input: { param: { parent: string } } & {
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
        } & { json: UnbindDeviceFromGatewayRequest }
        output: UnbindDeviceFromGatewayResponse
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/v1/:resource:getIamPolicy': {
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
        } & { json: GetIamPolicyRequest }
        output: Policy
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
        } & { json: SetIamPolicyRequest }
        output: Policy
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
