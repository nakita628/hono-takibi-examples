type GoogleWorkspaceAccount = {
  customerId?: string | undefined
  preProvisioningTokens?: string[] | undefined
}
type Company = {
  adminEmails?: string[] | undefined
  companyId?: string | undefined
  companyName?: string | undefined
  googleWorkspaceAccount?: GoogleWorkspaceAccount | undefined
  languageCode?: string | undefined
  name?: string | undefined
  ownerEmails?: string[] | undefined
  skipWelcomeEmail?: boolean | undefined
  termsStatus?:
    | 'TERMS_STATUS_UNSPECIFIED'
    | 'TERMS_STATUS_NOT_ACCEPTED'
    | 'TERMS_STATUS_ACCEPTED'
    | 'TERMS_STATUS_STALE'
    | undefined
}
type CustomerListCustomersResponse = {
  customers?: Company[] | undefined
  nextPageToken?: string | undefined
}
type DeviceMetadata = { entries?: { [x: string]: string } | undefined }
type UpdateDeviceMetadataRequest = { deviceMetadata?: DeviceMetadata | undefined }
type ListCustomersResponse = {
  customers?: Company[] | undefined
  nextPageToken?: string | undefined
  totalSize?: number | undefined
}
type DeviceIdentifier = {
  chromeOsAttestedDeviceId?: string | undefined
  deviceType?:
    | 'DEVICE_TYPE_UNSPECIFIED'
    | 'DEVICE_TYPE_ANDROID'
    | 'DEVICE_TYPE_CHROME_OS'
    | undefined
  imei?: string | undefined
  manufacturer?: string | undefined
  meid?: string | undefined
  model?: string | undefined
  serialNumber?: string | undefined
}
type ClaimDeviceRequest = {
  customerId?: string | undefined
  deviceIdentifier?: DeviceIdentifier | undefined
  deviceMetadata?: DeviceMetadata | undefined
  googleWorkspaceCustomerId?: string | undefined
  preProvisioningToken?: string | undefined
  sectionType?:
    | 'SECTION_TYPE_UNSPECIFIED'
    | 'SECTION_TYPE_SIM_LOCK'
    | 'SECTION_TYPE_ZERO_TOUCH'
    | undefined
  simlockProfileId?: string | undefined
}
type ClaimDeviceResponse = { deviceId?: string | undefined; deviceName?: string | undefined }
type PartnerClaim = {
  customerId?: string | undefined
  deviceIdentifier?: DeviceIdentifier | undefined
  deviceMetadata?: DeviceMetadata | undefined
  googleWorkspaceCustomerId?: string | undefined
  preProvisioningToken?: string | undefined
  sectionType?:
    | 'SECTION_TYPE_UNSPECIFIED'
    | 'SECTION_TYPE_SIM_LOCK'
    | 'SECTION_TYPE_ZERO_TOUCH'
    | undefined
  simlockProfileId?: string | undefined
}
type ClaimDevicesRequest = { claims?: PartnerClaim[] | undefined }
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
type FindDevicesByDeviceIdentifierRequest = {
  deviceIdentifier?: DeviceIdentifier | undefined
  limit?: string | undefined
  pageToken?: string | undefined
}
type DeviceClaim = {
  additionalService?: 'ADDITIONAL_SERVICE_UNSPECIFIED' | 'DEVICE_PROTECTION' | undefined
  googleWorkspaceCustomerId?: string | undefined
  ownerCompanyId?: string | undefined
  resellerId?: string | undefined
  sectionType?:
    | 'SECTION_TYPE_UNSPECIFIED'
    | 'SECTION_TYPE_SIM_LOCK'
    | 'SECTION_TYPE_ZERO_TOUCH'
    | undefined
  vacationModeExpireTime?: string | undefined
  vacationModeStartTime?: string | undefined
}
type Device = {
  claims?: DeviceClaim[] | undefined
  configuration?: string | undefined
  deviceId?: string | undefined
  deviceIdentifier?: DeviceIdentifier | undefined
  deviceMetadata?: DeviceMetadata | undefined
  name?: string | undefined
}
type FindDevicesByDeviceIdentifierResponse = {
  devices?: Device[] | undefined
  nextPageToken?: string | undefined
  totalSize?: number | undefined
}
type FindDevicesByOwnerRequest = {
  customerId?: string[] | undefined
  googleWorkspaceCustomerId?: string[] | undefined
  limit?: string | undefined
  pageToken?: string | undefined
  sectionType?:
    | 'SECTION_TYPE_UNSPECIFIED'
    | 'SECTION_TYPE_SIM_LOCK'
    | 'SECTION_TYPE_ZERO_TOUCH'
    | undefined
}
type FindDevicesByOwnerResponse = {
  devices?: Device[] | undefined
  nextPageToken?: string | undefined
  totalSize?: number | undefined
}
type UnclaimDeviceRequest = {
  deviceId?: string | undefined
  deviceIdentifier?: DeviceIdentifier | undefined
  sectionType?:
    | 'SECTION_TYPE_UNSPECIFIED'
    | 'SECTION_TYPE_SIM_LOCK'
    | 'SECTION_TYPE_ZERO_TOUCH'
    | undefined
  vacationModeDays?: number | undefined
  vacationModeExpireTime?: string | undefined
}
type Empty = { [x: string]: unknown }
type PartnerUnclaim = {
  deviceId?: string | undefined
  deviceIdentifier?: DeviceIdentifier | undefined
  sectionType?:
    | 'SECTION_TYPE_UNSPECIFIED'
    | 'SECTION_TYPE_SIM_LOCK'
    | 'SECTION_TYPE_ZERO_TOUCH'
    | undefined
  vacationModeDays?: number | undefined
  vacationModeExpireTime?: string | undefined
}
type UnclaimDevicesRequest = { unclaims?: PartnerUnclaim[] | undefined }
type UpdateMetadataArguments = {
  deviceId?: string | undefined
  deviceIdentifier?: DeviceIdentifier | undefined
  deviceMetadata?: DeviceMetadata | undefined
}
type UpdateDeviceMetadataInBatchRequest = { updates?: UpdateMetadataArguments[] | undefined }
type Configuration = {
  companyName?: string | undefined
  configurationId?: string | undefined
  configurationName?: string | undefined
  contactEmail?: string | undefined
  contactPhone?: string | undefined
  customMessage?: string | undefined
  dpcExtras?: string | undefined
  dpcResourcePath?: string | undefined
  isDefault?: boolean | undefined
  name?: string | undefined
}
type CustomerListConfigurationsResponse = { configurations?: Configuration[] | undefined }
type ListVendorCustomersResponse = {
  customers?: Company[] | undefined
  nextPageToken?: string | undefined
  totalSize?: number | undefined
}
type CreateCustomerRequest = { customer?: Company | undefined }
type CustomerListDevicesResponse = {
  devices?: Device[] | undefined
  nextPageToken?: string | undefined
}
type DeviceReference = {
  deviceId?: string | undefined
  deviceIdentifier?: DeviceIdentifier | undefined
}
type CustomerApplyConfigurationRequest = {
  configuration?: string | undefined
  device?: DeviceReference | undefined
}
type CustomerRemoveConfigurationRequest = { device?: DeviceReference | undefined }
type CustomerUnclaimDeviceRequest = { device?: DeviceReference | undefined }
type Dpc = {
  dpcName?: string | undefined
  name?: string | undefined
  packageName?: string | undefined
}
type CustomerListDpcsResponse = { dpcs?: Dpc[] | undefined }
type ListVendorsResponse = {
  nextPageToken?: string | undefined
  totalSize?: number | undefined
  vendors?: Company[] | undefined
}
declare const routes: import('@hono/zod-openapi').OpenAPIHono<
  import('hono/types').Env,
  {
    '/v1/customers': {
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
        output: CustomerListCustomersResponse
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/v1/partners/:metadataOwnerId/devices/:deviceId/metadata': {
      $post: {
        input: { param: { metadataOwnerId: string; deviceId: string } } & {
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
        } & { json: UpdateDeviceMetadataRequest }
        output: DeviceMetadata
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/v1/partners/:partnerId/customers': {
      $get: {
        input: { param: { partnerId: string } } & {
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
        output: ListCustomersResponse
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/v1/partners/:partnerId/devices:claim': {
      $post: {
        input: { param: { partnerId: string } } & {
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
        } & { json: ClaimDeviceRequest }
        output: ClaimDeviceResponse
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/v1/partners/:partnerId/devices:claimAsync': {
      $post: {
        input: { param: { partnerId: string } } & {
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
        } & { json: ClaimDevicesRequest }
        output: Operation
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/v1/partners/:partnerId/devices:findByIdentifier': {
      $post: {
        input: { param: { partnerId: string } } & {
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
        } & { json: FindDevicesByDeviceIdentifierRequest }
        output: FindDevicesByDeviceIdentifierResponse
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/v1/partners/:partnerId/devices:findByOwner': {
      $post: {
        input: { param: { partnerId: string } } & {
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
        } & { json: FindDevicesByOwnerRequest }
        output: FindDevicesByOwnerResponse
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/v1/partners/:partnerId/devices:unclaim': {
      $post: {
        input: { param: { partnerId: string } } & {
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
        } & { json: UnclaimDeviceRequest }
        output: Empty
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/v1/partners/:partnerId/devices:unclaimAsync': {
      $post: {
        input: { param: { partnerId: string } } & {
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
        } & { json: UnclaimDevicesRequest }
        output: Operation
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/v1/partners/:partnerId/devices:updateMetadataAsync': {
      $post: {
        input: { param: { partnerId: string } } & {
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
        } & { json: UpdateDeviceMetadataInBatchRequest }
        output: Operation
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
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
        } & { json: Configuration }
        output: Configuration
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/v1/:parent/configurations': {
      $get: {
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
        }
        output: CustomerListConfigurationsResponse
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
        } & { json: Configuration }
        output: Configuration
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/v1/:parent/customers': {
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
        output: ListVendorCustomersResponse
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
        } & { json: CreateCustomerRequest }
        output: Company
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/v1/:parent/devices': {
      $get: {
        input: { param: { parent: string } } & {
          query: {
            pageSize?: string | undefined
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
        output: CustomerListDevicesResponse
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/v1/:parent/devices:applyConfiguration': {
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
        } & { json: CustomerApplyConfigurationRequest }
        output: Empty
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/v1/:parent/devices:removeConfiguration': {
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
        } & { json: CustomerRemoveConfigurationRequest }
        output: Empty
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/v1/:parent/devices:unclaim': {
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
        } & { json: CustomerUnclaimDeviceRequest }
        output: Empty
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/v1/:parent/dpcs': {
      $get: {
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
        }
        output: CustomerListDpcsResponse
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/v1/:parent/vendors': {
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
        output: ListVendorsResponse
        outputFormat: 'json'
        status: 200
      }
    }
  },
  '/'
>
export default routes
