type AddTagsToResourceRequest = { ResourceArn: {}; TagList: {} }
type AddTagsToResourceResponse = { Status: {} }
type CreateHapgRequest = { Label: {} }
type CreateHapgResponse = { HapgArn?: {} | undefined }
type SubscriptionType = 'PRODUCTION'
type CreateHsmRequest = {
  SubnetId: {}
  SshKey: {}
  EniIp?: {} | undefined
  IamRoleArn: {}
  ExternalId?: {} | undefined
  SubscriptionType: SubscriptionType
  ClientToken?: {} | undefined
  SyslogIp?: {} | undefined
}
type CreateHsmResponse = { HsmArn?: {} | undefined }
type CreateLunaClientRequest = { Label?: {} | undefined; Certificate: {} }
type CreateLunaClientResponse = { ClientArn?: {} | undefined }
type DeleteHapgRequest = { HapgArn: {} }
type DeleteHapgResponse = { Status: {} }
type DeleteHsmRequest = { HsmArn: {} }
type DeleteHsmResponse = { Status: {} }
type DeleteLunaClientRequest = { ClientArn: {} }
type DeleteLunaClientResponse = { Status: {} }
type DescribeHapgRequest = { HapgArn: {} }
type DescribeHapgResponse = {
  HapgArn?: {} | undefined
  HapgSerial?: {} | undefined
  HsmsLastActionFailed?: {} | undefined
  HsmsPendingDeletion?: {} | undefined
  HsmsPendingRegistration?: {} | undefined
  Label?: {} | undefined
  LastModifiedTimestamp?: {} | undefined
  PartitionSerialList?: {} | undefined
  State?: {} | undefined
}
type DescribeHsmRequest = { HsmArn?: {} | undefined; HsmSerialNumber?: {} | undefined }
type DescribeHsmResponse = {
  HsmArn?: {} | undefined
  Status?: {} | undefined
  StatusDetails?: {} | undefined
  AvailabilityZone?: {} | undefined
  EniId?: {} | undefined
  EniIp?: {} | undefined
  SubscriptionType?: SubscriptionType | undefined
  SubscriptionStartDate?: {} | undefined
  SubscriptionEndDate?: {} | undefined
  VpcId?: {} | undefined
  SubnetId?: {} | undefined
  IamRoleArn?: {} | undefined
  SerialNumber?: {} | undefined
  VendorName?: {} | undefined
  HsmType?: {} | undefined
  SoftwareVersion?: {} | undefined
  SshPublicKey?: {} | undefined
  SshKeyLastUpdated?: {} | undefined
  ServerCertUri?: {} | undefined
  ServerCertLastUpdated?: {} | undefined
  Partitions?: {} | undefined
}
type DescribeLunaClientRequest = {
  ClientArn?: {} | undefined
  CertificateFingerprint?: {} | undefined
}
type DescribeLunaClientResponse = {
  ClientArn?: {} | undefined
  Certificate?: {} | undefined
  CertificateFingerprint?: {} | undefined
  LastModifiedTimestamp?: {} | undefined
  Label?: {} | undefined
}
type GetConfigRequest = { ClientArn: {}; ClientVersion: {}; HapgList: {} }
type GetConfigResponse = {
  ConfigType?: {} | undefined
  ConfigFile?: {} | undefined
  ConfigCred?: {} | undefined
}
type ListAvailableZonesRequest = { [x: string]: unknown }
type ListAvailableZonesResponse = { AZList?: {} | undefined }
type ListHapgsRequest = { NextToken?: {} | undefined }
type ListHapgsResponse = { HapgList: {}; NextToken?: {} | undefined }
type ListHsmsRequest = { NextToken?: {} | undefined }
type ListHsmsResponse = { HsmList?: {} | undefined; NextToken?: {} | undefined }
type ListLunaClientsRequest = { NextToken?: {} | undefined }
type ListLunaClientsResponse = { ClientList: {}; NextToken?: {} | undefined }
type ListTagsForResourceRequest = { ResourceArn: {} }
type ListTagsForResourceResponse = { TagList: {} }
type ModifyHapgRequest = {
  HapgArn: {}
  Label?: {} | undefined
  PartitionSerialList?: {} | undefined
}
type ModifyHapgResponse = { HapgArn?: {} | undefined }
type ModifyHsmRequest = {
  HsmArn: {}
  SubnetId?: {} | undefined
  EniIp?: {} | undefined
  IamRoleArn?: {} | undefined
  ExternalId?: {} | undefined
  SyslogIp?: {} | undefined
}
type ModifyHsmResponse = { HsmArn?: {} | undefined }
type ModifyLunaClientRequest = { ClientArn: {}; Certificate: {} }
type ModifyLunaClientResponse = { ClientArn?: {} | undefined }
type RemoveTagsFromResourceRequest = { ResourceArn: {}; TagKeyList: {} }
type RemoveTagsFromResourceResponse = { Status: {} }
declare const routes: import('@hono/zod-openapi').OpenAPIHono<
  import('hono/types').Env,
  {
    '/#X-Amz-Target=CloudHsmFrontendService.AddTagsToResource': {
      $post: {
        input: {
          header: {
            'X-Amz-Target': 'CloudHsmFrontendService.AddTagsToResource'
            'X-Amz-Content-Sha256'?: string | undefined
            'X-Amz-Date'?: string | undefined
            'X-Amz-Algorithm'?: string | undefined
            'X-Amz-Credential'?: string | undefined
            'X-Amz-Security-Token'?: string | undefined
            'X-Amz-Signature'?: string | undefined
            'X-Amz-SignedHeaders'?: string | undefined
          }
        } & { json: AddTagsToResourceRequest }
        output: AddTagsToResourceResponse
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/#X-Amz-Target=CloudHsmFrontendService.CreateHapg': {
      $post: {
        input: {
          header: {
            'X-Amz-Target': 'CloudHsmFrontendService.CreateHapg'
            'X-Amz-Content-Sha256'?: string | undefined
            'X-Amz-Date'?: string | undefined
            'X-Amz-Algorithm'?: string | undefined
            'X-Amz-Credential'?: string | undefined
            'X-Amz-Security-Token'?: string | undefined
            'X-Amz-Signature'?: string | undefined
            'X-Amz-SignedHeaders'?: string | undefined
          }
        } & { json: CreateHapgRequest }
        output: CreateHapgResponse
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/#X-Amz-Target=CloudHsmFrontendService.CreateHsm': {
      $post: {
        input: {
          header: {
            'X-Amz-Target': 'CloudHsmFrontendService.CreateHsm'
            'X-Amz-Content-Sha256'?: string | undefined
            'X-Amz-Date'?: string | undefined
            'X-Amz-Algorithm'?: string | undefined
            'X-Amz-Credential'?: string | undefined
            'X-Amz-Security-Token'?: string | undefined
            'X-Amz-Signature'?: string | undefined
            'X-Amz-SignedHeaders'?: string | undefined
          }
        } & { json: CreateHsmRequest }
        output: CreateHsmResponse
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/#X-Amz-Target=CloudHsmFrontendService.CreateLunaClient': {
      $post: {
        input: {
          header: {
            'X-Amz-Target': 'CloudHsmFrontendService.CreateLunaClient'
            'X-Amz-Content-Sha256'?: string | undefined
            'X-Amz-Date'?: string | undefined
            'X-Amz-Algorithm'?: string | undefined
            'X-Amz-Credential'?: string | undefined
            'X-Amz-Security-Token'?: string | undefined
            'X-Amz-Signature'?: string | undefined
            'X-Amz-SignedHeaders'?: string | undefined
          }
        } & { json: CreateLunaClientRequest }
        output: CreateLunaClientResponse
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/#X-Amz-Target=CloudHsmFrontendService.DeleteHapg': {
      $post: {
        input: {
          header: {
            'X-Amz-Target': 'CloudHsmFrontendService.DeleteHapg'
            'X-Amz-Content-Sha256'?: string | undefined
            'X-Amz-Date'?: string | undefined
            'X-Amz-Algorithm'?: string | undefined
            'X-Amz-Credential'?: string | undefined
            'X-Amz-Security-Token'?: string | undefined
            'X-Amz-Signature'?: string | undefined
            'X-Amz-SignedHeaders'?: string | undefined
          }
        } & { json: DeleteHapgRequest }
        output: DeleteHapgResponse
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/#X-Amz-Target=CloudHsmFrontendService.DeleteHsm': {
      $post: {
        input: {
          header: {
            'X-Amz-Target': 'CloudHsmFrontendService.DeleteHsm'
            'X-Amz-Content-Sha256'?: string | undefined
            'X-Amz-Date'?: string | undefined
            'X-Amz-Algorithm'?: string | undefined
            'X-Amz-Credential'?: string | undefined
            'X-Amz-Security-Token'?: string | undefined
            'X-Amz-Signature'?: string | undefined
            'X-Amz-SignedHeaders'?: string | undefined
          }
        } & { json: DeleteHsmRequest }
        output: DeleteHsmResponse
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/#X-Amz-Target=CloudHsmFrontendService.DeleteLunaClient': {
      $post: {
        input: {
          header: {
            'X-Amz-Target': 'CloudHsmFrontendService.DeleteLunaClient'
            'X-Amz-Content-Sha256'?: string | undefined
            'X-Amz-Date'?: string | undefined
            'X-Amz-Algorithm'?: string | undefined
            'X-Amz-Credential'?: string | undefined
            'X-Amz-Security-Token'?: string | undefined
            'X-Amz-Signature'?: string | undefined
            'X-Amz-SignedHeaders'?: string | undefined
          }
        } & { json: DeleteLunaClientRequest }
        output: DeleteLunaClientResponse
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/#X-Amz-Target=CloudHsmFrontendService.DescribeHapg': {
      $post: {
        input: {
          header: {
            'X-Amz-Target': 'CloudHsmFrontendService.DescribeHapg'
            'X-Amz-Content-Sha256'?: string | undefined
            'X-Amz-Date'?: string | undefined
            'X-Amz-Algorithm'?: string | undefined
            'X-Amz-Credential'?: string | undefined
            'X-Amz-Security-Token'?: string | undefined
            'X-Amz-Signature'?: string | undefined
            'X-Amz-SignedHeaders'?: string | undefined
          }
        } & { json: DescribeHapgRequest }
        output: DescribeHapgResponse
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/#X-Amz-Target=CloudHsmFrontendService.DescribeHsm': {
      $post: {
        input: {
          header: {
            'X-Amz-Target': 'CloudHsmFrontendService.DescribeHsm'
            'X-Amz-Content-Sha256'?: string | undefined
            'X-Amz-Date'?: string | undefined
            'X-Amz-Algorithm'?: string | undefined
            'X-Amz-Credential'?: string | undefined
            'X-Amz-Security-Token'?: string | undefined
            'X-Amz-Signature'?: string | undefined
            'X-Amz-SignedHeaders'?: string | undefined
          }
        } & { json: DescribeHsmRequest }
        output: DescribeHsmResponse
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/#X-Amz-Target=CloudHsmFrontendService.DescribeLunaClient': {
      $post: {
        input: {
          header: {
            'X-Amz-Target': 'CloudHsmFrontendService.DescribeLunaClient'
            'X-Amz-Content-Sha256'?: string | undefined
            'X-Amz-Date'?: string | undefined
            'X-Amz-Algorithm'?: string | undefined
            'X-Amz-Credential'?: string | undefined
            'X-Amz-Security-Token'?: string | undefined
            'X-Amz-Signature'?: string | undefined
            'X-Amz-SignedHeaders'?: string | undefined
          }
        } & { json: DescribeLunaClientRequest }
        output: DescribeLunaClientResponse
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/#X-Amz-Target=CloudHsmFrontendService.GetConfig': {
      $post: {
        input: {
          header: {
            'X-Amz-Target': 'CloudHsmFrontendService.GetConfig'
            'X-Amz-Content-Sha256'?: string | undefined
            'X-Amz-Date'?: string | undefined
            'X-Amz-Algorithm'?: string | undefined
            'X-Amz-Credential'?: string | undefined
            'X-Amz-Security-Token'?: string | undefined
            'X-Amz-Signature'?: string | undefined
            'X-Amz-SignedHeaders'?: string | undefined
          }
        } & { json: GetConfigRequest }
        output: GetConfigResponse
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/#X-Amz-Target=CloudHsmFrontendService.ListAvailableZones': {
      $post: {
        input: {
          header: {
            'X-Amz-Target': 'CloudHsmFrontendService.ListAvailableZones'
            'X-Amz-Content-Sha256'?: string | undefined
            'X-Amz-Date'?: string | undefined
            'X-Amz-Algorithm'?: string | undefined
            'X-Amz-Credential'?: string | undefined
            'X-Amz-Security-Token'?: string | undefined
            'X-Amz-Signature'?: string | undefined
            'X-Amz-SignedHeaders'?: string | undefined
          }
        } & { json: ListAvailableZonesRequest }
        output: ListAvailableZonesResponse
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/#X-Amz-Target=CloudHsmFrontendService.ListHapgs': {
      $post: {
        input: {
          header: {
            'X-Amz-Target': 'CloudHsmFrontendService.ListHapgs'
            'X-Amz-Content-Sha256'?: string | undefined
            'X-Amz-Date'?: string | undefined
            'X-Amz-Algorithm'?: string | undefined
            'X-Amz-Credential'?: string | undefined
            'X-Amz-Security-Token'?: string | undefined
            'X-Amz-Signature'?: string | undefined
            'X-Amz-SignedHeaders'?: string | undefined
          }
        } & { json: ListHapgsRequest }
        output: ListHapgsResponse
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/#X-Amz-Target=CloudHsmFrontendService.ListHsms': {
      $post: {
        input: {
          header: {
            'X-Amz-Target': 'CloudHsmFrontendService.ListHsms'
            'X-Amz-Content-Sha256'?: string | undefined
            'X-Amz-Date'?: string | undefined
            'X-Amz-Algorithm'?: string | undefined
            'X-Amz-Credential'?: string | undefined
            'X-Amz-Security-Token'?: string | undefined
            'X-Amz-Signature'?: string | undefined
            'X-Amz-SignedHeaders'?: string | undefined
          }
        } & { json: ListHsmsRequest }
        output: ListHsmsResponse
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/#X-Amz-Target=CloudHsmFrontendService.ListLunaClients': {
      $post: {
        input: {
          header: {
            'X-Amz-Target': 'CloudHsmFrontendService.ListLunaClients'
            'X-Amz-Content-Sha256'?: string | undefined
            'X-Amz-Date'?: string | undefined
            'X-Amz-Algorithm'?: string | undefined
            'X-Amz-Credential'?: string | undefined
            'X-Amz-Security-Token'?: string | undefined
            'X-Amz-Signature'?: string | undefined
            'X-Amz-SignedHeaders'?: string | undefined
          }
        } & { json: ListLunaClientsRequest }
        output: ListLunaClientsResponse
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/#X-Amz-Target=CloudHsmFrontendService.ListTagsForResource': {
      $post: {
        input: {
          header: {
            'X-Amz-Target': 'CloudHsmFrontendService.ListTagsForResource'
            'X-Amz-Content-Sha256'?: string | undefined
            'X-Amz-Date'?: string | undefined
            'X-Amz-Algorithm'?: string | undefined
            'X-Amz-Credential'?: string | undefined
            'X-Amz-Security-Token'?: string | undefined
            'X-Amz-Signature'?: string | undefined
            'X-Amz-SignedHeaders'?: string | undefined
          }
        } & { json: ListTagsForResourceRequest }
        output: ListTagsForResourceResponse
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/#X-Amz-Target=CloudHsmFrontendService.ModifyHapg': {
      $post: {
        input: {
          header: {
            'X-Amz-Target': 'CloudHsmFrontendService.ModifyHapg'
            'X-Amz-Content-Sha256'?: string | undefined
            'X-Amz-Date'?: string | undefined
            'X-Amz-Algorithm'?: string | undefined
            'X-Amz-Credential'?: string | undefined
            'X-Amz-Security-Token'?: string | undefined
            'X-Amz-Signature'?: string | undefined
            'X-Amz-SignedHeaders'?: string | undefined
          }
        } & { json: ModifyHapgRequest }
        output: ModifyHapgResponse
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/#X-Amz-Target=CloudHsmFrontendService.ModifyHsm': {
      $post: {
        input: {
          header: {
            'X-Amz-Target': 'CloudHsmFrontendService.ModifyHsm'
            'X-Amz-Content-Sha256'?: string | undefined
            'X-Amz-Date'?: string | undefined
            'X-Amz-Algorithm'?: string | undefined
            'X-Amz-Credential'?: string | undefined
            'X-Amz-Security-Token'?: string | undefined
            'X-Amz-Signature'?: string | undefined
            'X-Amz-SignedHeaders'?: string | undefined
          }
        } & { json: ModifyHsmRequest }
        output: ModifyHsmResponse
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/#X-Amz-Target=CloudHsmFrontendService.ModifyLunaClient': {
      $post: {
        input: {
          header: {
            'X-Amz-Target': 'CloudHsmFrontendService.ModifyLunaClient'
            'X-Amz-Content-Sha256'?: string | undefined
            'X-Amz-Date'?: string | undefined
            'X-Amz-Algorithm'?: string | undefined
            'X-Amz-Credential'?: string | undefined
            'X-Amz-Security-Token'?: string | undefined
            'X-Amz-Signature'?: string | undefined
            'X-Amz-SignedHeaders'?: string | undefined
          }
        } & { json: ModifyLunaClientRequest }
        output: ModifyLunaClientResponse
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/#X-Amz-Target=CloudHsmFrontendService.RemoveTagsFromResource': {
      $post: {
        input: {
          header: {
            'X-Amz-Target': 'CloudHsmFrontendService.RemoveTagsFromResource'
            'X-Amz-Content-Sha256'?: string | undefined
            'X-Amz-Date'?: string | undefined
            'X-Amz-Algorithm'?: string | undefined
            'X-Amz-Credential'?: string | undefined
            'X-Amz-Security-Token'?: string | undefined
            'X-Amz-Signature'?: string | undefined
            'X-Amz-SignedHeaders'?: string | undefined
          }
        } & { json: RemoveTagsFromResourceRequest }
        output: RemoveTagsFromResourceResponse
        outputFormat: 'json'
        status: 200
      }
    }
  },
  '/'
>
export default routes
