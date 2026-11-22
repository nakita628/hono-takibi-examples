type SasPortalCustomer = {
  displayName?: string | undefined
  name?: string | undefined
  sasUserIds?: string[] | undefined
}
type SasPortalListCustomersResponse = {
  customers?: SasPortalCustomer[] | undefined
  nextPageToken?: string | undefined
}
type SasPortalProvisionDeploymentRequest = {
  newDeploymentDisplayName?: string | undefined
  newOrganizationDisplayName?: string | undefined
}
type SasPortalProvisionDeploymentResponse = { errorMessage?: string | undefined }
type SasPortalGenerateSecretRequest = { [x: string]: unknown }
type SasPortalGenerateSecretResponse = { secret?: string | undefined }
type SasPortalValidateInstallerRequest = {
  encodedSecret?: string | undefined
  installerId?: string | undefined
  secret?: string | undefined
}
type SasPortalValidateInstallerResponse = { [x: string]: unknown }
type SasPortalGetPolicyRequest = { resource?: string | undefined }
type SasPortalAssignment = { members?: string[] | undefined; role?: string | undefined }
type SasPortalPolicy = {
  assignments?: SasPortalAssignment[] | undefined
  etag?: string | undefined
}
type SasPortalSetPolicyRequest = {
  disableNotification?: boolean | undefined
  policy?: SasPortalPolicy | undefined
  resource?: string | undefined
}
type SasPortalTestPermissionsRequest = {
  permissions?: string[] | undefined
  resource?: string | undefined
}
type SasPortalTestPermissionsResponse = { permissions?: string[] | undefined }
type SasPortalEmpty = { [x: string]: unknown }
type SasPortalNode = {
  displayName?: string | undefined
  name?: string | undefined
  sasUserIds?: string[] | undefined
}
type SasPortalMoveNodeRequest = { destination?: string | undefined }
type SasPortalStatus = {
  code?: number | undefined
  details?: { [x: string]: { [x: string]: unknown } }[] | undefined
  message?: string | undefined
}
type SasPortalOperation = {
  done?: boolean | undefined
  error?: SasPortalStatus | undefined
  metadata?: { [x: string]: { [x: string]: unknown } } | undefined
  name?: string | undefined
  response?: { [x: string]: { [x: string]: unknown } } | undefined
}
type SasPortalDeviceAirInterface = {
  radioTechnology?:
    | 'RADIO_TECHNOLOGY_UNSPECIFIED'
    | 'E_UTRA'
    | 'CAMBIUM_NETWORKS'
    | 'FOUR_G_BBW_SAA_1'
    | 'NR'
    | 'DOODLE_CBRS'
    | 'CW'
    | 'REDLINE'
    | 'TARANA_WIRELESS'
    | undefined
  supportedSpec?: string | undefined
}
type SasPortalInstallationParams = {
  antennaAzimuth?: number | undefined
  antennaBeamwidth?: number | undefined
  antennaDowntilt?: number | undefined
  antennaGain?: number | undefined
  antennaGainNewField?: number | undefined
  antennaModel?: string | undefined
  cpeCbsdIndication?: boolean | undefined
  eirpCapability?: number | undefined
  eirpCapabilityNewField?: number | undefined
  height?: number | undefined
  heightType?: 'HEIGHT_TYPE_UNSPECIFIED' | 'HEIGHT_TYPE_AGL' | 'HEIGHT_TYPE_AMSL' | undefined
  horizontalAccuracy?: number | undefined
  indoorDeployment?: boolean | undefined
  latitude?: number | undefined
  longitude?: number | undefined
  verticalAccuracy?: number | undefined
}
type SasPortalDeviceModel = {
  firmwareVersion?: string | undefined
  hardwareVersion?: string | undefined
  name?: string | undefined
  softwareVersion?: string | undefined
  vendor?: string | undefined
}
type SasPortalDeviceConfig = {
  airInterface?: SasPortalDeviceAirInterface | undefined
  callSign?: string | undefined
  category?: 'DEVICE_CATEGORY_UNSPECIFIED' | 'DEVICE_CATEGORY_A' | 'DEVICE_CATEGORY_B' | undefined
  installationParams?: SasPortalInstallationParams | undefined
  isSigned?: boolean | undefined
  measurementCapabilities?:
    | (
        | 'MEASUREMENT_CAPABILITY_UNSPECIFIED'
        | 'MEASUREMENT_CAPABILITY_RECEIVED_POWER_WITH_GRANT'
        | 'MEASUREMENT_CAPABILITY_RECEIVED_POWER_WITHOUT_GRANT'
      )[]
    | undefined
  model?: SasPortalDeviceModel | undefined
  state?: 'DEVICE_CONFIG_STATE_UNSPECIFIED' | 'DRAFT' | 'FINAL' | undefined
  updateTime?: string | undefined
  userId?: string | undefined
}
type SasPortalFrequencyRange = {
  highFrequencyMhz?: number | undefined
  lowFrequencyMhz?: number | undefined
}
type SasPortalChannelWithScore = {
  frequencyRange?: SasPortalFrequencyRange | undefined
  score?: number | undefined
}
type SasPortalNrqzValidation = {
  caseId?: string | undefined
  cpiId?: string | undefined
  latitude?: number | undefined
  longitude?: number | undefined
  state?: 'STATE_UNSPECIFIED' | 'DRAFT' | 'FINAL' | undefined
}
type SasPortalDeviceMetadata = {
  antennaModel?: string | undefined
  commonChannelGroup?: string | undefined
  interferenceCoordinationGroup?: string | undefined
  nrqzValidated?: boolean | undefined
  nrqzValidation?: SasPortalNrqzValidation | undefined
}
type SasPortalDpaMoveList = {
  dpaId?: string | undefined
  frequencyRange?: SasPortalFrequencyRange | undefined
}
type SasPortalDeviceGrant = {
  channelType?: 'CHANNEL_TYPE_UNSPECIFIED' | 'CHANNEL_TYPE_GAA' | 'CHANNEL_TYPE_PAL' | undefined
  expireTime?: string | undefined
  frequencyRange?: SasPortalFrequencyRange | undefined
  grantId?: string | undefined
  lastHeartbeatTransmitExpireTime?: string | undefined
  maxEirp?: number | undefined
  moveList?: SasPortalDpaMoveList[] | undefined
  state?:
    | 'GRANT_STATE_UNSPECIFIED'
    | 'GRANT_STATE_GRANTED'
    | 'GRANT_STATE_TERMINATED'
    | 'GRANT_STATE_SUSPENDED'
    | 'GRANT_STATE_AUTHORIZED'
    | 'GRANT_STATE_EXPIRED'
    | undefined
  suspensionReason?: string[] | undefined
}
type SasPortalDevice = {
  activeConfig?: SasPortalDeviceConfig | undefined
  currentChannels?: SasPortalChannelWithScore[] | undefined
  deviceMetadata?: SasPortalDeviceMetadata | undefined
  displayName?: string | undefined
  fccId?: string | undefined
  grantRangeAllowlists?: SasPortalFrequencyRange[] | undefined
  grants?: SasPortalDeviceGrant[] | undefined
  name?: string | undefined
  preloadedConfig?: SasPortalDeviceConfig | undefined
  serialNumber?: string | undefined
  state?: 'DEVICE_STATE_UNSPECIFIED' | 'RESERVED' | 'REGISTERED' | 'DEREGISTERED' | undefined
}
type SasPortalSignDeviceRequest = { device?: SasPortalDevice | undefined }
type SasPortalUpdateSignedDeviceRequest = {
  encodedDevice?: string | undefined
  installerId?: string | undefined
}
type SasPortalDeployment = {
  displayName?: string | undefined
  frns?: string[] | undefined
  name?: string | undefined
  sasUserIds?: string[] | undefined
}
type SasPortalListDeploymentsResponse = {
  deployments?: SasPortalDeployment[] | undefined
  nextPageToken?: string | undefined
}
type SasPortalListDevicesResponse = {
  devices?: SasPortalDevice[] | undefined
  nextPageToken?: string | undefined
}
type SasPortalCreateSignedDeviceRequest = {
  encodedDevice?: string | undefined
  installerId?: string | undefined
}
type SasPortalListNodesResponse = {
  nextPageToken?: string | undefined
  nodes?: SasPortalNode[] | undefined
}
declare const routes: import('@hono/zod-openapi').OpenAPIHono<
  import('hono/types').Env,
  {
    '/v1alpha1/customers': {
      $get: {
        input: {
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
        output: SasPortalListCustomersResponse
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/v1alpha1/customers:provisionDeployment': {
      $post: {
        input: {
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
        } & { json: SasPortalProvisionDeploymentRequest }
        output: SasPortalProvisionDeploymentResponse
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/v1alpha1/installer:generateSecret': {
      $post: {
        input: {
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
        } & { json: SasPortalGenerateSecretRequest }
        output: SasPortalGenerateSecretResponse
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/v1alpha1/installer:validate': {
      $post: {
        input: {
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
        } & { json: SasPortalValidateInstallerRequest }
        output: SasPortalValidateInstallerResponse
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/v1alpha1/policies:get': {
      $post: {
        input: {
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
        } & { json: SasPortalGetPolicyRequest }
        output: SasPortalPolicy
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/v1alpha1/policies:set': {
      $post: {
        input: {
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
        } & { json: SasPortalSetPolicyRequest }
        output: SasPortalPolicy
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/v1alpha1/policies:test': {
      $post: {
        input: {
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
        } & { json: SasPortalTestPermissionsRequest }
        output: SasPortalTestPermissionsResponse
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/v1alpha1/:name': {
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
        output: SasPortalEmpty
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
        output: SasPortalNode
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
        } & { json: SasPortalNode }
        output: SasPortalNode
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/v1alpha1/:name:move': {
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
        } & { json: SasPortalMoveNodeRequest }
        output: SasPortalOperation
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/v1alpha1/:name:signDevice': {
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
        } & { json: SasPortalSignDeviceRequest }
        output: SasPortalEmpty
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/v1alpha1/:name:updateSigned': {
      $patch: {
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
        } & { json: SasPortalUpdateSignedDeviceRequest }
        output: SasPortalDevice
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/v1alpha1/:parent/deployments': {
      $get: {
        input: { param: { parent: string } } & {
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
        output: SasPortalListDeploymentsResponse
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
        } & { json: SasPortalDeployment }
        output: SasPortalDeployment
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/v1alpha1/:parent/devices': {
      $get: {
        input: { param: { parent: string } } & {
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
        output: SasPortalListDevicesResponse
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
        } & { json: SasPortalDevice }
        output: SasPortalDevice
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/v1alpha1/:parent/devices:createSigned': {
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
        } & { json: SasPortalCreateSignedDeviceRequest }
        output: SasPortalDevice
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/v1alpha1/:parent/nodes': {
      $get: {
        input: { param: { parent: string } } & {
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
        output: SasPortalListNodesResponse
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
        } & { json: SasPortalNode }
        output: SasPortalNode
        outputFormat: 'json'
        status: 200
      }
    }
  },
  '/'
>
export default routes
