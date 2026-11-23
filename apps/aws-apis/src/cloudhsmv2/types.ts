type CopyBackupToRegionRequest = { DestinationRegion: {}; BackupId: {}; TagList?: {} | undefined }
type CopyBackupToRegionResponse = {
  DestinationBackup?:
    | {
        CreateTimestamp?: {} | undefined
        SourceRegion?: {} | undefined
        SourceBackup?: {} | undefined
        SourceCluster?: {} | undefined
      }
    | undefined
}
type CreateClusterRequest = {
  BackupRetentionPolicy?: { Type?: {} | undefined; Value?: {} | undefined } | undefined
  HsmType: {}
  SourceBackupId?: {} | undefined
  SubnetIds: {}
  TagList?: {} | undefined
}
type CreateClusterResponse = {
  Cluster?:
    | {
        BackupPolicy?: {} | undefined
        BackupRetentionPolicy?: { Type?: {} | undefined; Value?: {} | undefined } | undefined
        ClusterId?: {} | undefined
        CreateTimestamp?: {} | undefined
        Hsms?: {} | undefined
        HsmType?: {} | undefined
        PreCoPassword?: {} | undefined
        SecurityGroup?: {} | undefined
        SourceBackupId?: {} | undefined
        State?: {} | undefined
        StateMessage?: {} | undefined
        SubnetMapping?: {} | undefined
        VpcId?: {} | undefined
        Certificates?:
          | {
              ClusterCsr?: {} | undefined
              HsmCertificate?: {} | undefined
              AwsHardwareCertificate?: {} | undefined
              ManufacturerHardwareCertificate?: {} | undefined
              ClusterCertificate?: {} | undefined
            }
          | undefined
        TagList?: {} | undefined
      }
    | undefined
}
type CreateHsmRequest = { ClusterId: {}; AvailabilityZone: {}; IpAddress?: {} | undefined }
type CreateHsmResponse = {
  Hsm?:
    | {
        AvailabilityZone?: {} | undefined
        ClusterId?: {} | undefined
        SubnetId?: {} | undefined
        EniId?: {} | undefined
        EniIp?: {} | undefined
        HsmId: {}
        State?: {} | undefined
        StateMessage?: {} | undefined
      }
    | undefined
}
type DeleteBackupRequest = { BackupId: {} }
type DeleteBackupResponse = {
  Backup?:
    | {
        BackupId: {}
        BackupState?: {} | undefined
        ClusterId?: {} | undefined
        CreateTimestamp?: {} | undefined
        CopyTimestamp?: {} | undefined
        NeverExpires?: {} | undefined
        SourceRegion?: {} | undefined
        SourceBackup?: {} | undefined
        SourceCluster?: {} | undefined
        DeleteTimestamp?: {} | undefined
        TagList?: {} | undefined
      }
    | undefined
}
type DeleteClusterRequest = { ClusterId: {} }
type DeleteClusterResponse = {
  Cluster?:
    | {
        BackupPolicy?: {} | undefined
        BackupRetentionPolicy?: { Type?: {} | undefined; Value?: {} | undefined } | undefined
        ClusterId?: {} | undefined
        CreateTimestamp?: {} | undefined
        Hsms?: {} | undefined
        HsmType?: {} | undefined
        PreCoPassword?: {} | undefined
        SecurityGroup?: {} | undefined
        SourceBackupId?: {} | undefined
        State?: {} | undefined
        StateMessage?: {} | undefined
        SubnetMapping?: {} | undefined
        VpcId?: {} | undefined
        Certificates?:
          | {
              ClusterCsr?: {} | undefined
              HsmCertificate?: {} | undefined
              AwsHardwareCertificate?: {} | undefined
              ManufacturerHardwareCertificate?: {} | undefined
              ClusterCertificate?: {} | undefined
            }
          | undefined
        TagList?: {} | undefined
      }
    | undefined
}
type DeleteHsmRequest = {
  ClusterId: {}
  HsmId?: {} | undefined
  EniId?: {} | undefined
  EniIp?: {} | undefined
}
type DeleteHsmResponse = { HsmId?: {} | undefined }
type DescribeBackupsRequest = {
  NextToken?: {} | undefined
  MaxResults?: {} | undefined
  Filters?: {} | undefined
  SortAscending?: {} | undefined
}
type DescribeBackupsResponse = { Backups?: {} | undefined; NextToken?: {} | undefined }
type DescribeClustersRequest = {
  Filters?: {} | undefined
  NextToken?: {} | undefined
  MaxResults?: {} | undefined
}
type DescribeClustersResponse = { Clusters?: {} | undefined; NextToken?: {} | undefined }
type InitializeClusterRequest = { ClusterId: {}; SignedCert: {}; TrustAnchor: {} }
type InitializeClusterResponse = { State?: {} | undefined; StateMessage?: {} | undefined }
type ListTagsRequest = { ResourceId: {}; NextToken?: {} | undefined; MaxResults?: {} | undefined }
type ListTagsResponse = { TagList: {}; NextToken?: {} | undefined }
type ModifyBackupAttributesRequest = { BackupId: {}; NeverExpires: {} }
type Backup = {
  BackupId: {}
  BackupState?: {} | undefined
  ClusterId?: {} | undefined
  CreateTimestamp?: {} | undefined
  CopyTimestamp?: {} | undefined
  NeverExpires?: {} | undefined
  SourceRegion?: {} | undefined
  SourceBackup?: {} | undefined
  SourceCluster?: {} | undefined
  DeleteTimestamp?: {} | undefined
  TagList?: {} | undefined
}
type ModifyBackupAttributesResponse = { Backup?: Backup | undefined }
type ModifyClusterRequest = {
  BackupRetentionPolicy: { Type?: {} | undefined; Value?: {} | undefined }
  ClusterId: {}
}
type Cluster = {
  BackupPolicy?: {} | undefined
  BackupRetentionPolicy?: { Type?: {} | undefined; Value?: {} | undefined } | undefined
  ClusterId?: {} | undefined
  CreateTimestamp?: {} | undefined
  Hsms?: {} | undefined
  HsmType?: {} | undefined
  PreCoPassword?: {} | undefined
  SecurityGroup?: {} | undefined
  SourceBackupId?: {} | undefined
  State?: {} | undefined
  StateMessage?: {} | undefined
  SubnetMapping?: {} | undefined
  VpcId?: {} | undefined
  Certificates?:
    | {
        ClusterCsr?: {} | undefined
        HsmCertificate?: {} | undefined
        AwsHardwareCertificate?: {} | undefined
        ManufacturerHardwareCertificate?: {} | undefined
        ClusterCertificate?: {} | undefined
      }
    | undefined
  TagList?: {} | undefined
}
type ModifyClusterResponse = { Cluster?: Cluster | undefined }
type RestoreBackupRequest = { BackupId: {} }
type RestoreBackupResponse = {
  Backup?:
    | {
        BackupId: {}
        BackupState?: {} | undefined
        ClusterId?: {} | undefined
        CreateTimestamp?: {} | undefined
        CopyTimestamp?: {} | undefined
        NeverExpires?: {} | undefined
        SourceRegion?: {} | undefined
        SourceBackup?: {} | undefined
        SourceCluster?: {} | undefined
        DeleteTimestamp?: {} | undefined
        TagList?: {} | undefined
      }
    | undefined
}
type TagResourceRequest = { ResourceId: {}; TagList: {} }
type TagResourceResponse = { [x: string]: unknown }
type UntagResourceRequest = { ResourceId: {}; TagKeyList: {} }
type UntagResourceResponse = { [x: string]: unknown }
declare const routes: import('@hono/zod-openapi').OpenAPIHono<
  import('hono/types').Env,
  {
    '/#X-Amz-Target=BaldrApiService.CopyBackupToRegion': {
      $post: {
        input: {
          header: {
            'X-Amz-Target': 'BaldrApiService.CopyBackupToRegion'
            'X-Amz-Content-Sha256'?: string | undefined
            'X-Amz-Date'?: string | undefined
            'X-Amz-Algorithm'?: string | undefined
            'X-Amz-Credential'?: string | undefined
            'X-Amz-Security-Token'?: string | undefined
            'X-Amz-Signature'?: string | undefined
            'X-Amz-SignedHeaders'?: string | undefined
          }
        } & { json: CopyBackupToRegionRequest }
        output: CopyBackupToRegionResponse
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/#X-Amz-Target=BaldrApiService.CreateCluster': {
      $post: {
        input: {
          header: {
            'X-Amz-Target': 'BaldrApiService.CreateCluster'
            'X-Amz-Content-Sha256'?: string | undefined
            'X-Amz-Date'?: string | undefined
            'X-Amz-Algorithm'?: string | undefined
            'X-Amz-Credential'?: string | undefined
            'X-Amz-Security-Token'?: string | undefined
            'X-Amz-Signature'?: string | undefined
            'X-Amz-SignedHeaders'?: string | undefined
          }
        } & { json: CreateClusterRequest }
        output: CreateClusterResponse
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/#X-Amz-Target=BaldrApiService.CreateHsm': {
      $post: {
        input: {
          header: {
            'X-Amz-Target': 'BaldrApiService.CreateHsm'
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
    '/#X-Amz-Target=BaldrApiService.DeleteBackup': {
      $post: {
        input: {
          header: {
            'X-Amz-Target': 'BaldrApiService.DeleteBackup'
            'X-Amz-Content-Sha256'?: string | undefined
            'X-Amz-Date'?: string | undefined
            'X-Amz-Algorithm'?: string | undefined
            'X-Amz-Credential'?: string | undefined
            'X-Amz-Security-Token'?: string | undefined
            'X-Amz-Signature'?: string | undefined
            'X-Amz-SignedHeaders'?: string | undefined
          }
        } & { json: DeleteBackupRequest }
        output: DeleteBackupResponse
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/#X-Amz-Target=BaldrApiService.DeleteCluster': {
      $post: {
        input: {
          header: {
            'X-Amz-Target': 'BaldrApiService.DeleteCluster'
            'X-Amz-Content-Sha256'?: string | undefined
            'X-Amz-Date'?: string | undefined
            'X-Amz-Algorithm'?: string | undefined
            'X-Amz-Credential'?: string | undefined
            'X-Amz-Security-Token'?: string | undefined
            'X-Amz-Signature'?: string | undefined
            'X-Amz-SignedHeaders'?: string | undefined
          }
        } & { json: DeleteClusterRequest }
        output: DeleteClusterResponse
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/#X-Amz-Target=BaldrApiService.DeleteHsm': {
      $post: {
        input: {
          header: {
            'X-Amz-Target': 'BaldrApiService.DeleteHsm'
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
    '/#X-Amz-Target=BaldrApiService.DescribeBackups': {
      $post: {
        input: { query: { MaxResults?: string | undefined; NextToken?: string | undefined } } & {
          header: {
            'X-Amz-Target': 'BaldrApiService.DescribeBackups'
            'X-Amz-Content-Sha256'?: string | undefined
            'X-Amz-Date'?: string | undefined
            'X-Amz-Algorithm'?: string | undefined
            'X-Amz-Credential'?: string | undefined
            'X-Amz-Security-Token'?: string | undefined
            'X-Amz-Signature'?: string | undefined
            'X-Amz-SignedHeaders'?: string | undefined
          }
        } & { json: DescribeBackupsRequest }
        output: DescribeBackupsResponse
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/#X-Amz-Target=BaldrApiService.DescribeClusters': {
      $post: {
        input: { query: { MaxResults?: string | undefined; NextToken?: string | undefined } } & {
          header: {
            'X-Amz-Target': 'BaldrApiService.DescribeClusters'
            'X-Amz-Content-Sha256'?: string | undefined
            'X-Amz-Date'?: string | undefined
            'X-Amz-Algorithm'?: string | undefined
            'X-Amz-Credential'?: string | undefined
            'X-Amz-Security-Token'?: string | undefined
            'X-Amz-Signature'?: string | undefined
            'X-Amz-SignedHeaders'?: string | undefined
          }
        } & { json: DescribeClustersRequest }
        output: DescribeClustersResponse
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/#X-Amz-Target=BaldrApiService.InitializeCluster': {
      $post: {
        input: {
          header: {
            'X-Amz-Target': 'BaldrApiService.InitializeCluster'
            'X-Amz-Content-Sha256'?: string | undefined
            'X-Amz-Date'?: string | undefined
            'X-Amz-Algorithm'?: string | undefined
            'X-Amz-Credential'?: string | undefined
            'X-Amz-Security-Token'?: string | undefined
            'X-Amz-Signature'?: string | undefined
            'X-Amz-SignedHeaders'?: string | undefined
          }
        } & { json: InitializeClusterRequest }
        output: InitializeClusterResponse
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/#X-Amz-Target=BaldrApiService.ListTags': {
      $post: {
        input: { query: { MaxResults?: string | undefined; NextToken?: string | undefined } } & {
          header: {
            'X-Amz-Target': 'BaldrApiService.ListTags'
            'X-Amz-Content-Sha256'?: string | undefined
            'X-Amz-Date'?: string | undefined
            'X-Amz-Algorithm'?: string | undefined
            'X-Amz-Credential'?: string | undefined
            'X-Amz-Security-Token'?: string | undefined
            'X-Amz-Signature'?: string | undefined
            'X-Amz-SignedHeaders'?: string | undefined
          }
        } & { json: ListTagsRequest }
        output: ListTagsResponse
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/#X-Amz-Target=BaldrApiService.ModifyBackupAttributes': {
      $post: {
        input: {
          header: {
            'X-Amz-Target': 'BaldrApiService.ModifyBackupAttributes'
            'X-Amz-Content-Sha256'?: string | undefined
            'X-Amz-Date'?: string | undefined
            'X-Amz-Algorithm'?: string | undefined
            'X-Amz-Credential'?: string | undefined
            'X-Amz-Security-Token'?: string | undefined
            'X-Amz-Signature'?: string | undefined
            'X-Amz-SignedHeaders'?: string | undefined
          }
        } & { json: ModifyBackupAttributesRequest }
        output: ModifyBackupAttributesResponse
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/#X-Amz-Target=BaldrApiService.ModifyCluster': {
      $post: {
        input: {
          header: {
            'X-Amz-Target': 'BaldrApiService.ModifyCluster'
            'X-Amz-Content-Sha256'?: string | undefined
            'X-Amz-Date'?: string | undefined
            'X-Amz-Algorithm'?: string | undefined
            'X-Amz-Credential'?: string | undefined
            'X-Amz-Security-Token'?: string | undefined
            'X-Amz-Signature'?: string | undefined
            'X-Amz-SignedHeaders'?: string | undefined
          }
        } & { json: ModifyClusterRequest }
        output: ModifyClusterResponse
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/#X-Amz-Target=BaldrApiService.RestoreBackup': {
      $post: {
        input: {
          header: {
            'X-Amz-Target': 'BaldrApiService.RestoreBackup'
            'X-Amz-Content-Sha256'?: string | undefined
            'X-Amz-Date'?: string | undefined
            'X-Amz-Algorithm'?: string | undefined
            'X-Amz-Credential'?: string | undefined
            'X-Amz-Security-Token'?: string | undefined
            'X-Amz-Signature'?: string | undefined
            'X-Amz-SignedHeaders'?: string | undefined
          }
        } & { json: RestoreBackupRequest }
        output: RestoreBackupResponse
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/#X-Amz-Target=BaldrApiService.TagResource': {
      $post: {
        input: {
          header: {
            'X-Amz-Target': 'BaldrApiService.TagResource'
            'X-Amz-Content-Sha256'?: string | undefined
            'X-Amz-Date'?: string | undefined
            'X-Amz-Algorithm'?: string | undefined
            'X-Amz-Credential'?: string | undefined
            'X-Amz-Security-Token'?: string | undefined
            'X-Amz-Signature'?: string | undefined
            'X-Amz-SignedHeaders'?: string | undefined
          }
        } & { json: TagResourceRequest }
        output: TagResourceResponse
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/#X-Amz-Target=BaldrApiService.UntagResource': {
      $post: {
        input: {
          header: {
            'X-Amz-Target': 'BaldrApiService.UntagResource'
            'X-Amz-Content-Sha256'?: string | undefined
            'X-Amz-Date'?: string | undefined
            'X-Amz-Algorithm'?: string | undefined
            'X-Amz-Credential'?: string | undefined
            'X-Amz-Security-Token'?: string | undefined
            'X-Amz-Signature'?: string | undefined
            'X-Amz-SignedHeaders'?: string | undefined
          }
        } & { json: UntagResourceRequest }
        output: UntagResourceResponse
        outputFormat: 'json'
        status: 200
      }
    }
  },
  '/'
>
export default routes
