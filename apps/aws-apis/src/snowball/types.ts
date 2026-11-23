type CancelClusterRequest = { ClusterId: {} }
type CancelClusterResult = { [x: string]: unknown }
type CancelJobRequest = { JobId: {} }
type CancelJobResult = { [x: string]: unknown }
type CreateAddressRequest = {
  Address: {
    AddressId?: {} | undefined
    Name?: {} | undefined
    Company?: {} | undefined
    Street1?: {} | undefined
    Street2?: {} | undefined
    Street3?: {} | undefined
    City?: {} | undefined
    StateOrProvince?: {} | undefined
    PrefectureOrDistrict?: {} | undefined
    Landmark?: {} | undefined
    Country?: {} | undefined
    PostalCode?: {} | undefined
    PhoneNumber?: {} | undefined
    IsRestricted?: {} | undefined
  }
}
type CreateAddressResult = { AddressId?: {} | undefined }
type INDTaxDocuments = { GSTIN?: {} | undefined }
type CreateClusterRequest = {
  JobType: {}
  Resources?:
    | {
        S3Resources?: {} | undefined
        LambdaResources?: {} | undefined
        Ec2AmiResources?: {} | undefined
      }
    | undefined
  OnDeviceServiceConfiguration?:
    | {
        NFSOnDeviceService?:
          | { StorageLimit?: {} | undefined; StorageUnit?: {} | undefined }
          | undefined
        TGWOnDeviceService?:
          | { StorageLimit?: {} | undefined; StorageUnit?: {} | undefined }
          | undefined
        EKSOnDeviceService?:
          | { KubernetesVersion?: {} | undefined; EKSAnywhereVersion?: {} | undefined }
          | undefined
        S3OnDeviceService?:
          | {
              StorageLimit?: {} | undefined
              StorageUnit?: {} | undefined
              ServiceSize?: {} | undefined
              FaultTolerance?: {} | undefined
            }
          | undefined
      }
    | undefined
  Description?: {} | undefined
  AddressId: {}
  KmsKeyARN?: {} | undefined
  RoleARN?: {} | undefined
  SnowballType: {}
  ShippingOption: {}
  Notification?:
    | {
        SnsTopicARN?: {} | undefined
        JobStatesToNotify?: {} | undefined
        NotifyAll?: {} | undefined
      }
    | undefined
  ForwardingAddressId?: {} | undefined
  TaxDocuments?: { IND?: INDTaxDocuments | undefined } | undefined
  RemoteManagement?: {} | undefined
  InitialClusterSize?: {} | undefined
  ForceCreateJobs?: {} | undefined
  LongTermPricingIds?: {} | undefined
  SnowballCapacityPreference?: {} | undefined
}
type CreateClusterResult = { ClusterId?: {} | undefined; JobListEntries?: {} | undefined }
type CreateJobRequest = {
  JobType?: {} | undefined
  Resources?:
    | {
        S3Resources?: {} | undefined
        LambdaResources?: {} | undefined
        Ec2AmiResources?: {} | undefined
      }
    | undefined
  OnDeviceServiceConfiguration?:
    | {
        NFSOnDeviceService?:
          | { StorageLimit?: {} | undefined; StorageUnit?: {} | undefined }
          | undefined
        TGWOnDeviceService?:
          | { StorageLimit?: {} | undefined; StorageUnit?: {} | undefined }
          | undefined
        EKSOnDeviceService?:
          | { KubernetesVersion?: {} | undefined; EKSAnywhereVersion?: {} | undefined }
          | undefined
        S3OnDeviceService?:
          | {
              StorageLimit?: {} | undefined
              StorageUnit?: {} | undefined
              ServiceSize?: {} | undefined
              FaultTolerance?: {} | undefined
            }
          | undefined
      }
    | undefined
  Description?: {} | undefined
  AddressId?: {} | undefined
  KmsKeyARN?: {} | undefined
  RoleARN?: {} | undefined
  SnowballCapacityPreference?: {} | undefined
  ShippingOption?: {} | undefined
  Notification?:
    | {
        SnsTopicARN?: {} | undefined
        JobStatesToNotify?: {} | undefined
        NotifyAll?: {} | undefined
      }
    | undefined
  ClusterId?: {} | undefined
  SnowballType?: {} | undefined
  ForwardingAddressId?: {} | undefined
  TaxDocuments?: { IND?: INDTaxDocuments | undefined } | undefined
  DeviceConfiguration?:
    | {
        SnowconeDeviceConfiguration?:
          | { WirelessConnection?: { IsWifiEnabled?: {} | undefined } | undefined }
          | undefined
      }
    | undefined
  RemoteManagement?: {} | undefined
  LongTermPricingId?: {} | undefined
}
type CreateJobResult = { JobId?: {} | undefined }
type CreateLongTermPricingRequest = {
  LongTermPricingType: {}
  IsLongTermPricingAutoRenew?: {} | undefined
  SnowballType?: {} | undefined
}
type CreateLongTermPricingResult = { LongTermPricingId?: {} | undefined }
type CreateReturnShippingLabelRequest = { JobId: {}; ShippingOption?: {} | undefined }
type CreateReturnShippingLabelResult = { Status?: {} | undefined }
type DescribeAddressRequest = { AddressId: {} }
type DescribeAddressResult = {
  Address?:
    | {
        AddressId?: {} | undefined
        Name?: {} | undefined
        Company?: {} | undefined
        Street1?: {} | undefined
        Street2?: {} | undefined
        Street3?: {} | undefined
        City?: {} | undefined
        StateOrProvince?: {} | undefined
        PrefectureOrDistrict?: {} | undefined
        Landmark?: {} | undefined
        Country?: {} | undefined
        PostalCode?: {} | undefined
        PhoneNumber?: {} | undefined
        IsRestricted?: {} | undefined
      }
    | undefined
}
type DescribeAddressesRequest = { MaxResults?: {} | undefined; NextToken?: {} | undefined }
type DescribeAddressesResult = { Addresses?: {} | undefined; NextToken?: {} | undefined }
type DescribeClusterRequest = { ClusterId: {} }
type DescribeClusterResult = {
  ClusterMetadata?:
    | {
        ClusterId?: {} | undefined
        Description?: {} | undefined
        KmsKeyARN?: {} | undefined
        RoleARN?: {} | undefined
        ClusterState?: {} | undefined
        JobType?: {} | undefined
        SnowballType?: {} | undefined
        CreationDate?: {} | undefined
        Resources?:
          | {
              S3Resources?: {} | undefined
              LambdaResources?: {} | undefined
              Ec2AmiResources?: {} | undefined
            }
          | undefined
        AddressId?: {} | undefined
        ShippingOption?: {} | undefined
        Notification?:
          | {
              SnsTopicARN?: {} | undefined
              JobStatesToNotify?: {} | undefined
              NotifyAll?: {} | undefined
            }
          | undefined
        ForwardingAddressId?: {} | undefined
        TaxDocuments?: { IND?: INDTaxDocuments | undefined } | undefined
        OnDeviceServiceConfiguration?:
          | {
              NFSOnDeviceService?:
                | { StorageLimit?: {} | undefined; StorageUnit?: {} | undefined }
                | undefined
              TGWOnDeviceService?:
                | { StorageLimit?: {} | undefined; StorageUnit?: {} | undefined }
                | undefined
              EKSOnDeviceService?:
                | { KubernetesVersion?: {} | undefined; EKSAnywhereVersion?: {} | undefined }
                | undefined
              S3OnDeviceService?:
                | {
                    StorageLimit?: {} | undefined
                    StorageUnit?: {} | undefined
                    ServiceSize?: {} | undefined
                    FaultTolerance?: {} | undefined
                  }
                | undefined
            }
          | undefined
      }
    | undefined
}
type DescribeJobRequest = { JobId: {} }
type DeviceConfiguration = {
  SnowconeDeviceConfiguration?:
    | { WirelessConnection?: { IsWifiEnabled?: {} | undefined } | undefined }
    | undefined
}
type DescribeJobResult = {
  JobMetadata?:
    | {
        JobId?: {} | undefined
        JobState?: {} | undefined
        JobType?: {} | undefined
        SnowballType?: {} | undefined
        CreationDate?: {} | undefined
        Resources?:
          | {
              S3Resources?: {} | undefined
              LambdaResources?: {} | undefined
              Ec2AmiResources?: {} | undefined
            }
          | undefined
        Description?: {} | undefined
        KmsKeyARN?: {} | undefined
        RoleARN?: {} | undefined
        AddressId?: {} | undefined
        ShippingDetails?:
          | {
              ShippingOption?: {} | undefined
              InboundShipment?:
                | { Status?: {} | undefined; TrackingNumber?: {} | undefined }
                | undefined
              OutboundShipment?:
                | { Status?: {} | undefined; TrackingNumber?: {} | undefined }
                | undefined
            }
          | undefined
        SnowballCapacityPreference?: {} | undefined
        Notification?:
          | {
              SnsTopicARN?: {} | undefined
              JobStatesToNotify?: {} | undefined
              NotifyAll?: {} | undefined
            }
          | undefined
        DataTransferProgress?:
          | {
              BytesTransferred?: {} | undefined
              ObjectsTransferred?: {} | undefined
              TotalBytes?: {} | undefined
              TotalObjects?: {} | undefined
            }
          | undefined
        JobLogInfo?:
          | {
              JobCompletionReportURI?: {} | undefined
              JobSuccessLogURI?: {} | undefined
              JobFailureLogURI?: {} | undefined
            }
          | undefined
        ClusterId?: {} | undefined
        ForwardingAddressId?: {} | undefined
        TaxDocuments?: { IND?: INDTaxDocuments | undefined } | undefined
        DeviceConfiguration?: DeviceConfiguration | undefined
        RemoteManagement?: {} | undefined
        LongTermPricingId?: {} | undefined
        OnDeviceServiceConfiguration?:
          | {
              NFSOnDeviceService?:
                | { StorageLimit?: {} | undefined; StorageUnit?: {} | undefined }
                | undefined
              TGWOnDeviceService?:
                | { StorageLimit?: {} | undefined; StorageUnit?: {} | undefined }
                | undefined
              EKSOnDeviceService?:
                | { KubernetesVersion?: {} | undefined; EKSAnywhereVersion?: {} | undefined }
                | undefined
              S3OnDeviceService?:
                | {
                    StorageLimit?: {} | undefined
                    StorageUnit?: {} | undefined
                    ServiceSize?: {} | undefined
                    FaultTolerance?: {} | undefined
                  }
                | undefined
            }
          | undefined
      }
    | undefined
  SubJobMetadata?: {} | undefined
}
type DescribeReturnShippingLabelRequest = { JobId: {} }
type DescribeReturnShippingLabelResult = {
  Status?: {} | undefined
  ExpirationDate?: {} | undefined
  ReturnShippingLabelURI?: {} | undefined
}
type GetJobManifestRequest = { JobId: {} }
type GetJobManifestResult = { ManifestURI?: {} | undefined }
type GetJobUnlockCodeRequest = { JobId: {} }
type GetJobUnlockCodeResult = { UnlockCode?: {} | undefined }
type GetSnowballUsageRequest = { [x: string]: unknown }
type GetSnowballUsageResult = { SnowballLimit?: {} | undefined; SnowballsInUse?: {} | undefined }
type GetSoftwareUpdatesRequest = { JobId: {} }
type GetSoftwareUpdatesResult = { UpdatesURI?: {} | undefined }
type ListClusterJobsRequest = {
  ClusterId: {}
  MaxResults?: {} | undefined
  NextToken?: {} | undefined
}
type ListClusterJobsResult = { JobListEntries?: {} | undefined; NextToken?: {} | undefined }
type ListClustersRequest = { MaxResults?: {} | undefined; NextToken?: {} | undefined }
type ListClustersResult = { ClusterListEntries?: {} | undefined; NextToken?: {} | undefined }
type ListCompatibleImagesRequest = { MaxResults?: {} | undefined; NextToken?: {} | undefined }
type ListCompatibleImagesResult = { CompatibleImages?: {} | undefined; NextToken?: {} | undefined }
type ListJobsRequest = { MaxResults?: {} | undefined; NextToken?: {} | undefined }
type ListJobsResult = { JobListEntries?: {} | undefined; NextToken?: {} | undefined }
type ListLongTermPricingRequest = { MaxResults?: {} | undefined; NextToken?: {} | undefined }
type ListLongTermPricingResult = {
  LongTermPricingEntries?: {} | undefined
  NextToken?: {} | undefined
}
type ListServiceVersionsRequest = {
  ServiceName: {}
  DependentServices?: {} | undefined
  MaxResults?: {} | undefined
  NextToken?: {} | undefined
}
type ListServiceVersionsResult = {
  ServiceVersions: {}
  ServiceName: {}
  DependentServices?: {} | undefined
  NextToken?: {} | undefined
}
type UpdateClusterRequest = {
  ClusterId: {}
  RoleARN?: {} | undefined
  Description?: {} | undefined
  Resources?:
    | {
        S3Resources?: {} | undefined
        LambdaResources?: {} | undefined
        Ec2AmiResources?: {} | undefined
      }
    | undefined
  OnDeviceServiceConfiguration?:
    | {
        NFSOnDeviceService?:
          | { StorageLimit?: {} | undefined; StorageUnit?: {} | undefined }
          | undefined
        TGWOnDeviceService?:
          | { StorageLimit?: {} | undefined; StorageUnit?: {} | undefined }
          | undefined
        EKSOnDeviceService?:
          | { KubernetesVersion?: {} | undefined; EKSAnywhereVersion?: {} | undefined }
          | undefined
        S3OnDeviceService?:
          | {
              StorageLimit?: {} | undefined
              StorageUnit?: {} | undefined
              ServiceSize?: {} | undefined
              FaultTolerance?: {} | undefined
            }
          | undefined
      }
    | undefined
  AddressId?: {} | undefined
  ShippingOption?: {} | undefined
  Notification?:
    | {
        SnsTopicARN?: {} | undefined
        JobStatesToNotify?: {} | undefined
        NotifyAll?: {} | undefined
      }
    | undefined
  ForwardingAddressId?: {} | undefined
}
type UpdateClusterResult = { [x: string]: unknown }
type UpdateJobRequest = {
  JobId: {}
  RoleARN?: {} | undefined
  Notification?:
    | {
        SnsTopicARN?: {} | undefined
        JobStatesToNotify?: {} | undefined
        NotifyAll?: {} | undefined
      }
    | undefined
  Resources?:
    | {
        S3Resources?: {} | undefined
        LambdaResources?: {} | undefined
        Ec2AmiResources?: {} | undefined
      }
    | undefined
  OnDeviceServiceConfiguration?:
    | {
        NFSOnDeviceService?:
          | { StorageLimit?: {} | undefined; StorageUnit?: {} | undefined }
          | undefined
        TGWOnDeviceService?:
          | { StorageLimit?: {} | undefined; StorageUnit?: {} | undefined }
          | undefined
        EKSOnDeviceService?:
          | { KubernetesVersion?: {} | undefined; EKSAnywhereVersion?: {} | undefined }
          | undefined
        S3OnDeviceService?:
          | {
              StorageLimit?: {} | undefined
              StorageUnit?: {} | undefined
              ServiceSize?: {} | undefined
              FaultTolerance?: {} | undefined
            }
          | undefined
      }
    | undefined
  AddressId?: {} | undefined
  ShippingOption?: {} | undefined
  Description?: {} | undefined
  SnowballCapacityPreference?: {} | undefined
  ForwardingAddressId?: {} | undefined
}
type UpdateJobResult = { [x: string]: unknown }
type UpdateJobShipmentStateRequest = { JobId: {}; ShipmentState: {} }
type UpdateJobShipmentStateResult = { [x: string]: unknown }
type UpdateLongTermPricingRequest = {
  LongTermPricingId: {}
  ReplacementJob?: {} | undefined
  IsLongTermPricingAutoRenew?: {} | undefined
}
type UpdateLongTermPricingResult = { [x: string]: unknown }
declare const routes: import('@hono/zod-openapi').OpenAPIHono<
  import('hono/types').Env,
  {
    '/#X-Amz-Target=AWSIESnowballJobManagementService.CancelCluster': {
      $post: {
        input: {
          header: {
            'X-Amz-Target': 'AWSIESnowballJobManagementService.CancelCluster'
            'X-Amz-Content-Sha256'?: string | undefined
            'X-Amz-Date'?: string | undefined
            'X-Amz-Algorithm'?: string | undefined
            'X-Amz-Credential'?: string | undefined
            'X-Amz-Security-Token'?: string | undefined
            'X-Amz-Signature'?: string | undefined
            'X-Amz-SignedHeaders'?: string | undefined
          }
        } & { json: CancelClusterRequest }
        output: CancelClusterResult
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/#X-Amz-Target=AWSIESnowballJobManagementService.CancelJob': {
      $post: {
        input: {
          header: {
            'X-Amz-Target': 'AWSIESnowballJobManagementService.CancelJob'
            'X-Amz-Content-Sha256'?: string | undefined
            'X-Amz-Date'?: string | undefined
            'X-Amz-Algorithm'?: string | undefined
            'X-Amz-Credential'?: string | undefined
            'X-Amz-Security-Token'?: string | undefined
            'X-Amz-Signature'?: string | undefined
            'X-Amz-SignedHeaders'?: string | undefined
          }
        } & { json: CancelJobRequest }
        output: CancelJobResult
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/#X-Amz-Target=AWSIESnowballJobManagementService.CreateAddress': {
      $post: {
        input: {
          header: {
            'X-Amz-Target': 'AWSIESnowballJobManagementService.CreateAddress'
            'X-Amz-Content-Sha256'?: string | undefined
            'X-Amz-Date'?: string | undefined
            'X-Amz-Algorithm'?: string | undefined
            'X-Amz-Credential'?: string | undefined
            'X-Amz-Security-Token'?: string | undefined
            'X-Amz-Signature'?: string | undefined
            'X-Amz-SignedHeaders'?: string | undefined
          }
        } & { json: CreateAddressRequest }
        output: CreateAddressResult
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/#X-Amz-Target=AWSIESnowballJobManagementService.CreateCluster': {
      $post: {
        input: {
          header: {
            'X-Amz-Target': 'AWSIESnowballJobManagementService.CreateCluster'
            'X-Amz-Content-Sha256'?: string | undefined
            'X-Amz-Date'?: string | undefined
            'X-Amz-Algorithm'?: string | undefined
            'X-Amz-Credential'?: string | undefined
            'X-Amz-Security-Token'?: string | undefined
            'X-Amz-Signature'?: string | undefined
            'X-Amz-SignedHeaders'?: string | undefined
          }
        } & { json: CreateClusterRequest }
        output: CreateClusterResult
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/#X-Amz-Target=AWSIESnowballJobManagementService.CreateJob': {
      $post: {
        input: {
          header: {
            'X-Amz-Target': 'AWSIESnowballJobManagementService.CreateJob'
            'X-Amz-Content-Sha256'?: string | undefined
            'X-Amz-Date'?: string | undefined
            'X-Amz-Algorithm'?: string | undefined
            'X-Amz-Credential'?: string | undefined
            'X-Amz-Security-Token'?: string | undefined
            'X-Amz-Signature'?: string | undefined
            'X-Amz-SignedHeaders'?: string | undefined
          }
        } & { json: CreateJobRequest }
        output: CreateJobResult
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/#X-Amz-Target=AWSIESnowballJobManagementService.CreateLongTermPricing': {
      $post: {
        input: {
          header: {
            'X-Amz-Target': 'AWSIESnowballJobManagementService.CreateLongTermPricing'
            'X-Amz-Content-Sha256'?: string | undefined
            'X-Amz-Date'?: string | undefined
            'X-Amz-Algorithm'?: string | undefined
            'X-Amz-Credential'?: string | undefined
            'X-Amz-Security-Token'?: string | undefined
            'X-Amz-Signature'?: string | undefined
            'X-Amz-SignedHeaders'?: string | undefined
          }
        } & { json: CreateLongTermPricingRequest }
        output: CreateLongTermPricingResult
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/#X-Amz-Target=AWSIESnowballJobManagementService.CreateReturnShippingLabel': {
      $post: {
        input: {
          header: {
            'X-Amz-Target': 'AWSIESnowballJobManagementService.CreateReturnShippingLabel'
            'X-Amz-Content-Sha256'?: string | undefined
            'X-Amz-Date'?: string | undefined
            'X-Amz-Algorithm'?: string | undefined
            'X-Amz-Credential'?: string | undefined
            'X-Amz-Security-Token'?: string | undefined
            'X-Amz-Signature'?: string | undefined
            'X-Amz-SignedHeaders'?: string | undefined
          }
        } & { json: CreateReturnShippingLabelRequest }
        output: CreateReturnShippingLabelResult
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/#X-Amz-Target=AWSIESnowballJobManagementService.DescribeAddress': {
      $post: {
        input: {
          header: {
            'X-Amz-Target': 'AWSIESnowballJobManagementService.DescribeAddress'
            'X-Amz-Content-Sha256'?: string | undefined
            'X-Amz-Date'?: string | undefined
            'X-Amz-Algorithm'?: string | undefined
            'X-Amz-Credential'?: string | undefined
            'X-Amz-Security-Token'?: string | undefined
            'X-Amz-Signature'?: string | undefined
            'X-Amz-SignedHeaders'?: string | undefined
          }
        } & { json: DescribeAddressRequest }
        output: DescribeAddressResult
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/#X-Amz-Target=AWSIESnowballJobManagementService.DescribeAddresses': {
      $post: {
        input: { query: { MaxResults?: string | undefined; NextToken?: string | undefined } } & {
          header: {
            'X-Amz-Target': 'AWSIESnowballJobManagementService.DescribeAddresses'
            'X-Amz-Content-Sha256'?: string | undefined
            'X-Amz-Date'?: string | undefined
            'X-Amz-Algorithm'?: string | undefined
            'X-Amz-Credential'?: string | undefined
            'X-Amz-Security-Token'?: string | undefined
            'X-Amz-Signature'?: string | undefined
            'X-Amz-SignedHeaders'?: string | undefined
          }
        } & { json: DescribeAddressesRequest }
        output: DescribeAddressesResult
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/#X-Amz-Target=AWSIESnowballJobManagementService.DescribeCluster': {
      $post: {
        input: {
          header: {
            'X-Amz-Target': 'AWSIESnowballJobManagementService.DescribeCluster'
            'X-Amz-Content-Sha256'?: string | undefined
            'X-Amz-Date'?: string | undefined
            'X-Amz-Algorithm'?: string | undefined
            'X-Amz-Credential'?: string | undefined
            'X-Amz-Security-Token'?: string | undefined
            'X-Amz-Signature'?: string | undefined
            'X-Amz-SignedHeaders'?: string | undefined
          }
        } & { json: DescribeClusterRequest }
        output: DescribeClusterResult
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/#X-Amz-Target=AWSIESnowballJobManagementService.DescribeJob': {
      $post: {
        input: {
          header: {
            'X-Amz-Target': 'AWSIESnowballJobManagementService.DescribeJob'
            'X-Amz-Content-Sha256'?: string | undefined
            'X-Amz-Date'?: string | undefined
            'X-Amz-Algorithm'?: string | undefined
            'X-Amz-Credential'?: string | undefined
            'X-Amz-Security-Token'?: string | undefined
            'X-Amz-Signature'?: string | undefined
            'X-Amz-SignedHeaders'?: string | undefined
          }
        } & { json: DescribeJobRequest }
        output: DescribeJobResult
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/#X-Amz-Target=AWSIESnowballJobManagementService.DescribeReturnShippingLabel': {
      $post: {
        input: {
          header: {
            'X-Amz-Target': 'AWSIESnowballJobManagementService.DescribeReturnShippingLabel'
            'X-Amz-Content-Sha256'?: string | undefined
            'X-Amz-Date'?: string | undefined
            'X-Amz-Algorithm'?: string | undefined
            'X-Amz-Credential'?: string | undefined
            'X-Amz-Security-Token'?: string | undefined
            'X-Amz-Signature'?: string | undefined
            'X-Amz-SignedHeaders'?: string | undefined
          }
        } & { json: DescribeReturnShippingLabelRequest }
        output: DescribeReturnShippingLabelResult
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/#X-Amz-Target=AWSIESnowballJobManagementService.GetJobManifest': {
      $post: {
        input: {
          header: {
            'X-Amz-Target': 'AWSIESnowballJobManagementService.GetJobManifest'
            'X-Amz-Content-Sha256'?: string | undefined
            'X-Amz-Date'?: string | undefined
            'X-Amz-Algorithm'?: string | undefined
            'X-Amz-Credential'?: string | undefined
            'X-Amz-Security-Token'?: string | undefined
            'X-Amz-Signature'?: string | undefined
            'X-Amz-SignedHeaders'?: string | undefined
          }
        } & { json: GetJobManifestRequest }
        output: GetJobManifestResult
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/#X-Amz-Target=AWSIESnowballJobManagementService.GetJobUnlockCode': {
      $post: {
        input: {
          header: {
            'X-Amz-Target': 'AWSIESnowballJobManagementService.GetJobUnlockCode'
            'X-Amz-Content-Sha256'?: string | undefined
            'X-Amz-Date'?: string | undefined
            'X-Amz-Algorithm'?: string | undefined
            'X-Amz-Credential'?: string | undefined
            'X-Amz-Security-Token'?: string | undefined
            'X-Amz-Signature'?: string | undefined
            'X-Amz-SignedHeaders'?: string | undefined
          }
        } & { json: GetJobUnlockCodeRequest }
        output: GetJobUnlockCodeResult
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/#X-Amz-Target=AWSIESnowballJobManagementService.GetSnowballUsage': {
      $post: {
        input: {
          header: {
            'X-Amz-Target': 'AWSIESnowballJobManagementService.GetSnowballUsage'
            'X-Amz-Content-Sha256'?: string | undefined
            'X-Amz-Date'?: string | undefined
            'X-Amz-Algorithm'?: string | undefined
            'X-Amz-Credential'?: string | undefined
            'X-Amz-Security-Token'?: string | undefined
            'X-Amz-Signature'?: string | undefined
            'X-Amz-SignedHeaders'?: string | undefined
          }
        } & { json: GetSnowballUsageRequest }
        output: GetSnowballUsageResult
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/#X-Amz-Target=AWSIESnowballJobManagementService.GetSoftwareUpdates': {
      $post: {
        input: {
          header: {
            'X-Amz-Target': 'AWSIESnowballJobManagementService.GetSoftwareUpdates'
            'X-Amz-Content-Sha256'?: string | undefined
            'X-Amz-Date'?: string | undefined
            'X-Amz-Algorithm'?: string | undefined
            'X-Amz-Credential'?: string | undefined
            'X-Amz-Security-Token'?: string | undefined
            'X-Amz-Signature'?: string | undefined
            'X-Amz-SignedHeaders'?: string | undefined
          }
        } & { json: GetSoftwareUpdatesRequest }
        output: GetSoftwareUpdatesResult
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/#X-Amz-Target=AWSIESnowballJobManagementService.ListClusterJobs': {
      $post: {
        input: { query: { MaxResults?: string | undefined; NextToken?: string | undefined } } & {
          header: {
            'X-Amz-Target': 'AWSIESnowballJobManagementService.ListClusterJobs'
            'X-Amz-Content-Sha256'?: string | undefined
            'X-Amz-Date'?: string | undefined
            'X-Amz-Algorithm'?: string | undefined
            'X-Amz-Credential'?: string | undefined
            'X-Amz-Security-Token'?: string | undefined
            'X-Amz-Signature'?: string | undefined
            'X-Amz-SignedHeaders'?: string | undefined
          }
        } & { json: ListClusterJobsRequest }
        output: ListClusterJobsResult
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/#X-Amz-Target=AWSIESnowballJobManagementService.ListClusters': {
      $post: {
        input: { query: { MaxResults?: string | undefined; NextToken?: string | undefined } } & {
          header: {
            'X-Amz-Target': 'AWSIESnowballJobManagementService.ListClusters'
            'X-Amz-Content-Sha256'?: string | undefined
            'X-Amz-Date'?: string | undefined
            'X-Amz-Algorithm'?: string | undefined
            'X-Amz-Credential'?: string | undefined
            'X-Amz-Security-Token'?: string | undefined
            'X-Amz-Signature'?: string | undefined
            'X-Amz-SignedHeaders'?: string | undefined
          }
        } & { json: ListClustersRequest }
        output: ListClustersResult
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/#X-Amz-Target=AWSIESnowballJobManagementService.ListCompatibleImages': {
      $post: {
        input: { query: { MaxResults?: string | undefined; NextToken?: string | undefined } } & {
          header: {
            'X-Amz-Target': 'AWSIESnowballJobManagementService.ListCompatibleImages'
            'X-Amz-Content-Sha256'?: string | undefined
            'X-Amz-Date'?: string | undefined
            'X-Amz-Algorithm'?: string | undefined
            'X-Amz-Credential'?: string | undefined
            'X-Amz-Security-Token'?: string | undefined
            'X-Amz-Signature'?: string | undefined
            'X-Amz-SignedHeaders'?: string | undefined
          }
        } & { json: ListCompatibleImagesRequest }
        output: ListCompatibleImagesResult
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/#X-Amz-Target=AWSIESnowballJobManagementService.ListJobs': {
      $post: {
        input: { query: { MaxResults?: string | undefined; NextToken?: string | undefined } } & {
          header: {
            'X-Amz-Target': 'AWSIESnowballJobManagementService.ListJobs'
            'X-Amz-Content-Sha256'?: string | undefined
            'X-Amz-Date'?: string | undefined
            'X-Amz-Algorithm'?: string | undefined
            'X-Amz-Credential'?: string | undefined
            'X-Amz-Security-Token'?: string | undefined
            'X-Amz-Signature'?: string | undefined
            'X-Amz-SignedHeaders'?: string | undefined
          }
        } & { json: ListJobsRequest }
        output: ListJobsResult
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/#X-Amz-Target=AWSIESnowballJobManagementService.ListLongTermPricing': {
      $post: {
        input: { query: { MaxResults?: string | undefined; NextToken?: string | undefined } } & {
          header: {
            'X-Amz-Target': 'AWSIESnowballJobManagementService.ListLongTermPricing'
            'X-Amz-Content-Sha256'?: string | undefined
            'X-Amz-Date'?: string | undefined
            'X-Amz-Algorithm'?: string | undefined
            'X-Amz-Credential'?: string | undefined
            'X-Amz-Security-Token'?: string | undefined
            'X-Amz-Signature'?: string | undefined
            'X-Amz-SignedHeaders'?: string | undefined
          }
        } & { json: ListLongTermPricingRequest }
        output: ListLongTermPricingResult
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/#X-Amz-Target=AWSIESnowballJobManagementService.ListServiceVersions': {
      $post: {
        input: {
          header: {
            'X-Amz-Target': 'AWSIESnowballJobManagementService.ListServiceVersions'
            'X-Amz-Content-Sha256'?: string | undefined
            'X-Amz-Date'?: string | undefined
            'X-Amz-Algorithm'?: string | undefined
            'X-Amz-Credential'?: string | undefined
            'X-Amz-Security-Token'?: string | undefined
            'X-Amz-Signature'?: string | undefined
            'X-Amz-SignedHeaders'?: string | undefined
          }
        } & { json: ListServiceVersionsRequest }
        output: ListServiceVersionsResult
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/#X-Amz-Target=AWSIESnowballJobManagementService.UpdateCluster': {
      $post: {
        input: {
          header: {
            'X-Amz-Target': 'AWSIESnowballJobManagementService.UpdateCluster'
            'X-Amz-Content-Sha256'?: string | undefined
            'X-Amz-Date'?: string | undefined
            'X-Amz-Algorithm'?: string | undefined
            'X-Amz-Credential'?: string | undefined
            'X-Amz-Security-Token'?: string | undefined
            'X-Amz-Signature'?: string | undefined
            'X-Amz-SignedHeaders'?: string | undefined
          }
        } & { json: UpdateClusterRequest }
        output: UpdateClusterResult
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/#X-Amz-Target=AWSIESnowballJobManagementService.UpdateJob': {
      $post: {
        input: {
          header: {
            'X-Amz-Target': 'AWSIESnowballJobManagementService.UpdateJob'
            'X-Amz-Content-Sha256'?: string | undefined
            'X-Amz-Date'?: string | undefined
            'X-Amz-Algorithm'?: string | undefined
            'X-Amz-Credential'?: string | undefined
            'X-Amz-Security-Token'?: string | undefined
            'X-Amz-Signature'?: string | undefined
            'X-Amz-SignedHeaders'?: string | undefined
          }
        } & { json: UpdateJobRequest }
        output: UpdateJobResult
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/#X-Amz-Target=AWSIESnowballJobManagementService.UpdateJobShipmentState': {
      $post: {
        input: {
          header: {
            'X-Amz-Target': 'AWSIESnowballJobManagementService.UpdateJobShipmentState'
            'X-Amz-Content-Sha256'?: string | undefined
            'X-Amz-Date'?: string | undefined
            'X-Amz-Algorithm'?: string | undefined
            'X-Amz-Credential'?: string | undefined
            'X-Amz-Security-Token'?: string | undefined
            'X-Amz-Signature'?: string | undefined
            'X-Amz-SignedHeaders'?: string | undefined
          }
        } & { json: UpdateJobShipmentStateRequest }
        output: UpdateJobShipmentStateResult
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/#X-Amz-Target=AWSIESnowballJobManagementService.UpdateLongTermPricing': {
      $post: {
        input: {
          header: {
            'X-Amz-Target': 'AWSIESnowballJobManagementService.UpdateLongTermPricing'
            'X-Amz-Content-Sha256'?: string | undefined
            'X-Amz-Date'?: string | undefined
            'X-Amz-Algorithm'?: string | undefined
            'X-Amz-Credential'?: string | undefined
            'X-Amz-Security-Token'?: string | undefined
            'X-Amz-Signature'?: string | undefined
            'X-Amz-SignedHeaders'?: string | undefined
          }
        } & { json: UpdateLongTermPricingRequest }
        output: UpdateLongTermPricingResult
        outputFormat: 'json'
        status: 200
      }
    }
  },
  '/'
>
export default routes
