type Tag = { Key: {}; Value: {} }
type AccessPointDescription = {
  ClientToken?: {} | undefined
  Name?: {} | undefined
  Tags?: {} | undefined
  AccessPointId?: {} | undefined
  AccessPointArn?: {} | undefined
  FileSystemId?: {} | undefined
  PosixUser?: { Uid: {}; Gid: {}; SecondaryGids?: {} | undefined } | undefined
  RootDirectory?:
    | {
        Path?: {} | undefined
        CreationInfo?: { OwnerUid: {}; OwnerGid: {}; Permissions: {} } | undefined
      }
    | undefined
  OwnerId?: {} | undefined
  LifeCycleState?: {} | undefined
}
type DescribeAccessPointsResponse = { AccessPoints?: {} | undefined; NextToken?: {} | undefined }
type FileSystemDescription = {
  OwnerId: {}
  CreationToken: {}
  FileSystemId: {}
  FileSystemArn?: {} | undefined
  CreationTime: {}
  LifeCycleState: {}
  Name?: {} | undefined
  NumberOfMountTargets: {}
  SizeInBytes: {
    Value: {}
    Timestamp?: {} | undefined
    ValueInIA?: {} | undefined
    ValueInStandard?: {} | undefined
  }
  PerformanceMode: {}
  Encrypted?: {} | undefined
  KmsKeyId?: {} | undefined
  ThroughputMode?: {} | undefined
  ProvisionedThroughputInMibps?: {} | undefined
  AvailabilityZoneName?: {} | undefined
  AvailabilityZoneId?: {} | undefined
  Tags: {}
}
type DescribeFileSystemsResponse = {
  Marker?: {} | undefined
  FileSystems?: {} | undefined
  NextMarker?: {} | undefined
}
type SecurityGroup = string
type MountTargetDescription = {
  OwnerId?: {} | undefined
  MountTargetId: {}
  FileSystemId: {}
  SubnetId: {}
  LifeCycleState: {}
  IpAddress?: {} | undefined
  NetworkInterfaceId?: {} | undefined
  AvailabilityZoneId?: {} | undefined
  AvailabilityZoneName?: {} | undefined
  VpcId?: {} | undefined
}
type DescribeMountTargetsResponse = {
  Marker?: {} | undefined
  MountTargets?: {} | undefined
  NextMarker?: {} | undefined
}
type DestinationToCreate = {
  Region?: {} | undefined
  AvailabilityZoneName?: {} | undefined
  KmsKeyId?: {} | undefined
}
type ReplicationConfigurationDescription = {
  SourceFileSystemId: {}
  SourceFileSystemRegion: {}
  SourceFileSystemArn: {}
  OriginalSourceFileSystemArn: {}
  CreationTime: {}
  Destinations: {}
}
type FileSystemPolicyDescription = { FileSystemId?: {} | undefined; Policy?: {} | undefined }
type TagKey = string
type DescribeAccountPreferencesResponse = {
  ResourceIdPreference?: { ResourceIdType?: {} | undefined; Resources?: {} | undefined } | undefined
  NextToken?: {} | undefined
}
type ResourceIdPreference = { ResourceIdType?: {} | undefined; Resources?: {} | undefined }
type PutAccountPreferencesResponse = { ResourceIdPreference?: ResourceIdPreference | undefined }
type BackupPolicyDescription = { BackupPolicy?: { Status: {} } | undefined }
type LifecycleConfigurationDescription = { LifecyclePolicies?: {} | undefined }
type LifecyclePolicy = {
  TransitionToIA?: {} | undefined
  TransitionToPrimaryStorageClass?: {} | undefined
}
type DescribeMountTargetSecurityGroupsResponse = { SecurityGroups: {} }
type DescribeReplicationConfigurationsResponse = {
  Replications?: {} | undefined
  NextToken?: {} | undefined
}
type DescribeTagsResponse = { Marker?: {} | undefined; Tags: {}; NextMarker?: {} | undefined }
type ListTagsForResourceResponse = { Tags?: {} | undefined; NextToken?: {} | undefined }
declare const routes: import('@hono/zod-openapi').OpenAPIHono<
  import('hono/types').Env,
  {
    '/2015-02-01/access-points': {
      $post: {
        input: {
          header: {
            'X-Amz-Content-Sha256'?: string | undefined
            'X-Amz-Date'?: string | undefined
            'X-Amz-Algorithm'?: string | undefined
            'X-Amz-Credential'?: string | undefined
            'X-Amz-Security-Token'?: string | undefined
            'X-Amz-Signature'?: string | undefined
            'X-Amz-SignedHeaders'?: string | undefined
          }
        } & {
          json: {
            ClientToken: string
            Tags?: Tag[] | undefined
            FileSystemId: string
            PosixUser?:
              | { Uid?: {} | undefined; Gid?: {} | undefined; SecondaryGids?: {} | undefined }
              | undefined
            RootDirectory?:
              | {
                  Path?: {} | undefined
                  CreationInfo?: { OwnerUid: {}; OwnerGid: {}; Permissions: {} } | undefined
                }
              | undefined
          }
        }
        output: AccessPointDescription
        outputFormat: 'json'
        status: 200
      }
      $get: {
        input: {
          query: {
            MaxResults?: number | undefined
            NextToken?: string | undefined
            AccessPointId?: string | undefined
            FileSystemId?: string | undefined
          }
        } & {
          header: {
            'X-Amz-Content-Sha256'?: string | undefined
            'X-Amz-Date'?: string | undefined
            'X-Amz-Algorithm'?: string | undefined
            'X-Amz-Credential'?: string | undefined
            'X-Amz-Security-Token'?: string | undefined
            'X-Amz-Signature'?: string | undefined
            'X-Amz-SignedHeaders'?: string | undefined
          }
        }
        output: DescribeAccessPointsResponse
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/2015-02-01/file-systems': {
      $post: {
        input: {
          header: {
            'X-Amz-Content-Sha256'?: string | undefined
            'X-Amz-Date'?: string | undefined
            'X-Amz-Algorithm'?: string | undefined
            'X-Amz-Credential'?: string | undefined
            'X-Amz-Security-Token'?: string | undefined
            'X-Amz-Signature'?: string | undefined
            'X-Amz-SignedHeaders'?: string | undefined
          }
        } & {
          json: {
            CreationToken: string
            PerformanceMode?: 'generalPurpose' | 'maxIO' | undefined
            Encrypted?: boolean | undefined
            KmsKeyId?: string | undefined
            ThroughputMode?: 'bursting' | 'provisioned' | 'elastic' | undefined
            ProvisionedThroughputInMibps?: number | undefined
            AvailabilityZoneName?: string | undefined
            Backup?: boolean | undefined
            Tags?: Tag[] | undefined
          }
        }
        output: FileSystemDescription
        outputFormat: 'json'
        status: 201
      }
      $get: {
        input: {
          query: {
            MaxItems?: number | undefined
            Marker?: string | undefined
            CreationToken?: string | undefined
            FileSystemId?: string | undefined
          }
        } & {
          header: {
            'X-Amz-Content-Sha256'?: string | undefined
            'X-Amz-Date'?: string | undefined
            'X-Amz-Algorithm'?: string | undefined
            'X-Amz-Credential'?: string | undefined
            'X-Amz-Security-Token'?: string | undefined
            'X-Amz-Signature'?: string | undefined
            'X-Amz-SignedHeaders'?: string | undefined
          }
        }
        output: DescribeFileSystemsResponse
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/2015-02-01/mount-targets': {
      $post: {
        input: {
          header: {
            'X-Amz-Content-Sha256'?: string | undefined
            'X-Amz-Date'?: string | undefined
            'X-Amz-Algorithm'?: string | undefined
            'X-Amz-Credential'?: string | undefined
            'X-Amz-Security-Token'?: string | undefined
            'X-Amz-Signature'?: string | undefined
            'X-Amz-SignedHeaders'?: string | undefined
          }
        } & {
          json: {
            FileSystemId: string
            SubnetId: string
            IpAddress?: string | undefined
            SecurityGroups?: SecurityGroup[] | undefined
          }
        }
        output: MountTargetDescription
        outputFormat: 'json'
        status: 200
      }
      $get: {
        input: {
          query: {
            MaxItems?: number | undefined
            Marker?: string | undefined
            FileSystemId?: string | undefined
            MountTargetId?: string | undefined
            AccessPointId?: string | undefined
          }
        } & {
          header: {
            'X-Amz-Content-Sha256'?: string | undefined
            'X-Amz-Date'?: string | undefined
            'X-Amz-Algorithm'?: string | undefined
            'X-Amz-Credential'?: string | undefined
            'X-Amz-Security-Token'?: string | undefined
            'X-Amz-Signature'?: string | undefined
            'X-Amz-SignedHeaders'?: string | undefined
          }
        }
        output: DescribeMountTargetsResponse
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/2015-02-01/file-systems/:SourceFileSystemId/replication-configuration': {
      $post: {
        input: { param: { SourceFileSystemId: string } } & {
          header: {
            'X-Amz-Content-Sha256'?: string | undefined
            'X-Amz-Date'?: string | undefined
            'X-Amz-Algorithm'?: string | undefined
            'X-Amz-Credential'?: string | undefined
            'X-Amz-Security-Token'?: string | undefined
            'X-Amz-Signature'?: string | undefined
            'X-Amz-SignedHeaders'?: string | undefined
          }
        } & { json: { Destinations: DestinationToCreate[] } }
        output: ReplicationConfigurationDescription
        outputFormat: 'json'
        status: 200
      }
      $delete: {
        input: { param: { SourceFileSystemId: string } } & {
          header: {
            'X-Amz-Content-Sha256'?: string | undefined
            'X-Amz-Date'?: string | undefined
            'X-Amz-Algorithm'?: string | undefined
            'X-Amz-Credential'?: string | undefined
            'X-Amz-Security-Token'?: string | undefined
            'X-Amz-Signature'?: string | undefined
            'X-Amz-SignedHeaders'?: string | undefined
          }
        }
        output: {}
        outputFormat: string
        status: 204
      }
    }
  } & {
    '/2015-02-01/create-tags/:FileSystemId': {
      $post: {
        input: { param: { FileSystemId: string } } & {
          header: {
            'X-Amz-Content-Sha256'?: string | undefined
            'X-Amz-Date'?: string | undefined
            'X-Amz-Algorithm'?: string | undefined
            'X-Amz-Credential'?: string | undefined
            'X-Amz-Security-Token'?: string | undefined
            'X-Amz-Signature'?: string | undefined
            'X-Amz-SignedHeaders'?: string | undefined
          }
        } & { json: { Tags: Tag[] } }
        output: {}
        outputFormat: string
        status: 204
      }
    }
  } & {
    '/2015-02-01/access-points/:AccessPointId': {
      $delete: {
        input: { param: { AccessPointId: string } } & {
          header: {
            'X-Amz-Content-Sha256'?: string | undefined
            'X-Amz-Date'?: string | undefined
            'X-Amz-Algorithm'?: string | undefined
            'X-Amz-Credential'?: string | undefined
            'X-Amz-Security-Token'?: string | undefined
            'X-Amz-Signature'?: string | undefined
            'X-Amz-SignedHeaders'?: string | undefined
          }
        }
        output: {}
        outputFormat: string
        status: 204
      }
    }
  } & {
    '/2015-02-01/file-systems/:FileSystemId': {
      $delete: {
        input: { param: { FileSystemId: string } } & {
          header: {
            'X-Amz-Content-Sha256'?: string | undefined
            'X-Amz-Date'?: string | undefined
            'X-Amz-Algorithm'?: string | undefined
            'X-Amz-Credential'?: string | undefined
            'X-Amz-Security-Token'?: string | undefined
            'X-Amz-Signature'?: string | undefined
            'X-Amz-SignedHeaders'?: string | undefined
          }
        }
        output: {}
        outputFormat: string
        status: 204
      }
      $put: {
        input: { param: { FileSystemId: string } } & {
          header: {
            'X-Amz-Content-Sha256'?: string | undefined
            'X-Amz-Date'?: string | undefined
            'X-Amz-Algorithm'?: string | undefined
            'X-Amz-Credential'?: string | undefined
            'X-Amz-Security-Token'?: string | undefined
            'X-Amz-Signature'?: string | undefined
            'X-Amz-SignedHeaders'?: string | undefined
          }
        } & {
          json: {
            ThroughputMode?: 'bursting' | 'provisioned' | 'elastic' | undefined
            ProvisionedThroughputInMibps?: number | undefined
          }
        }
        output: FileSystemDescription
        outputFormat: 'json'
        status: 202
      }
    }
  } & {
    '/2015-02-01/file-systems/:FileSystemId/policy': {
      $delete: {
        input: { param: { FileSystemId: string } } & {
          header: {
            'X-Amz-Content-Sha256'?: string | undefined
            'X-Amz-Date'?: string | undefined
            'X-Amz-Algorithm'?: string | undefined
            'X-Amz-Credential'?: string | undefined
            'X-Amz-Security-Token'?: string | undefined
            'X-Amz-Signature'?: string | undefined
            'X-Amz-SignedHeaders'?: string | undefined
          }
        }
        output: {}
        outputFormat: string
        status: 200
      }
      $get: {
        input: { param: { FileSystemId: string } } & {
          header: {
            'X-Amz-Content-Sha256'?: string | undefined
            'X-Amz-Date'?: string | undefined
            'X-Amz-Algorithm'?: string | undefined
            'X-Amz-Credential'?: string | undefined
            'X-Amz-Security-Token'?: string | undefined
            'X-Amz-Signature'?: string | undefined
            'X-Amz-SignedHeaders'?: string | undefined
          }
        }
        output: FileSystemPolicyDescription
        outputFormat: 'json'
        status: 200
      }
      $put: {
        input: { param: { FileSystemId: string } } & {
          header: {
            'X-Amz-Content-Sha256'?: string | undefined
            'X-Amz-Date'?: string | undefined
            'X-Amz-Algorithm'?: string | undefined
            'X-Amz-Credential'?: string | undefined
            'X-Amz-Security-Token'?: string | undefined
            'X-Amz-Signature'?: string | undefined
            'X-Amz-SignedHeaders'?: string | undefined
          }
        } & { json: { Policy: string; BypassPolicyLockoutSafetyCheck?: boolean | undefined } }
        output: FileSystemPolicyDescription
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/2015-02-01/mount-targets/:MountTargetId': {
      $delete: {
        input: { param: { MountTargetId: string } } & {
          header: {
            'X-Amz-Content-Sha256'?: string | undefined
            'X-Amz-Date'?: string | undefined
            'X-Amz-Algorithm'?: string | undefined
            'X-Amz-Credential'?: string | undefined
            'X-Amz-Security-Token'?: string | undefined
            'X-Amz-Signature'?: string | undefined
            'X-Amz-SignedHeaders'?: string | undefined
          }
        }
        output: {}
        outputFormat: string
        status: 204
      }
    }
  } & {
    '/2015-02-01/delete-tags/:FileSystemId': {
      $post: {
        input: { param: { FileSystemId: string } } & {
          header: {
            'X-Amz-Content-Sha256'?: string | undefined
            'X-Amz-Date'?: string | undefined
            'X-Amz-Algorithm'?: string | undefined
            'X-Amz-Credential'?: string | undefined
            'X-Amz-Security-Token'?: string | undefined
            'X-Amz-Signature'?: string | undefined
            'X-Amz-SignedHeaders'?: string | undefined
          }
        } & { json: { TagKeys: TagKey[] } }
        output: {}
        outputFormat: string
        status: 204
      }
    }
  } & {
    '/2015-02-01/account-preferences': {
      $get: {
        input: {
          header: {
            'X-Amz-Content-Sha256'?: string | undefined
            'X-Amz-Date'?: string | undefined
            'X-Amz-Algorithm'?: string | undefined
            'X-Amz-Credential'?: string | undefined
            'X-Amz-Security-Token'?: string | undefined
            'X-Amz-Signature'?: string | undefined
            'X-Amz-SignedHeaders'?: string | undefined
          }
        } & { json: { NextToken?: string | undefined; MaxResults?: number | undefined } }
        output: DescribeAccountPreferencesResponse
        outputFormat: 'json'
        status: 200
      }
      $put: {
        input: {
          header: {
            'X-Amz-Content-Sha256'?: string | undefined
            'X-Amz-Date'?: string | undefined
            'X-Amz-Algorithm'?: string | undefined
            'X-Amz-Credential'?: string | undefined
            'X-Amz-Security-Token'?: string | undefined
            'X-Amz-Signature'?: string | undefined
            'X-Amz-SignedHeaders'?: string | undefined
          }
        } & { json: { ResourceIdType: 'LONG_ID' | 'SHORT_ID' } }
        output: PutAccountPreferencesResponse
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/2015-02-01/file-systems/:FileSystemId/backup-policy': {
      $get: {
        input: { param: { FileSystemId: string } } & {
          header: {
            'X-Amz-Content-Sha256'?: string | undefined
            'X-Amz-Date'?: string | undefined
            'X-Amz-Algorithm'?: string | undefined
            'X-Amz-Credential'?: string | undefined
            'X-Amz-Security-Token'?: string | undefined
            'X-Amz-Signature'?: string | undefined
            'X-Amz-SignedHeaders'?: string | undefined
          }
        }
        output: BackupPolicyDescription
        outputFormat: 'json'
        status: 200
      }
      $put: {
        input: { param: { FileSystemId: string } } & {
          header: {
            'X-Amz-Content-Sha256'?: string | undefined
            'X-Amz-Date'?: string | undefined
            'X-Amz-Algorithm'?: string | undefined
            'X-Amz-Credential'?: string | undefined
            'X-Amz-Security-Token'?: string | undefined
            'X-Amz-Signature'?: string | undefined
            'X-Amz-SignedHeaders'?: string | undefined
          }
        } & { json: { BackupPolicy: { Status?: {} | undefined } } }
        output: BackupPolicyDescription
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/2015-02-01/file-systems/:FileSystemId/lifecycle-configuration': {
      $get: {
        input: { param: { FileSystemId: string } } & {
          header: {
            'X-Amz-Content-Sha256'?: string | undefined
            'X-Amz-Date'?: string | undefined
            'X-Amz-Algorithm'?: string | undefined
            'X-Amz-Credential'?: string | undefined
            'X-Amz-Security-Token'?: string | undefined
            'X-Amz-Signature'?: string | undefined
            'X-Amz-SignedHeaders'?: string | undefined
          }
        }
        output: LifecycleConfigurationDescription
        outputFormat: 'json'
        status: 200
      }
      $put: {
        input: { param: { FileSystemId: string } } & {
          header: {
            'X-Amz-Content-Sha256'?: string | undefined
            'X-Amz-Date'?: string | undefined
            'X-Amz-Algorithm'?: string | undefined
            'X-Amz-Credential'?: string | undefined
            'X-Amz-Security-Token'?: string | undefined
            'X-Amz-Signature'?: string | undefined
            'X-Amz-SignedHeaders'?: string | undefined
          }
        } & { json: { LifecyclePolicies: LifecyclePolicy[] } }
        output: LifecycleConfigurationDescription
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/2015-02-01/mount-targets/:MountTargetId/security-groups': {
      $get: {
        input: { param: { MountTargetId: string } } & {
          header: {
            'X-Amz-Content-Sha256'?: string | undefined
            'X-Amz-Date'?: string | undefined
            'X-Amz-Algorithm'?: string | undefined
            'X-Amz-Credential'?: string | undefined
            'X-Amz-Security-Token'?: string | undefined
            'X-Amz-Signature'?: string | undefined
            'X-Amz-SignedHeaders'?: string | undefined
          }
        }
        output: DescribeMountTargetSecurityGroupsResponse
        outputFormat: 'json'
        status: 200
      }
      $put: {
        input: { param: { MountTargetId: string } } & {
          header: {
            'X-Amz-Content-Sha256'?: string | undefined
            'X-Amz-Date'?: string | undefined
            'X-Amz-Algorithm'?: string | undefined
            'X-Amz-Credential'?: string | undefined
            'X-Amz-Security-Token'?: string | undefined
            'X-Amz-Signature'?: string | undefined
            'X-Amz-SignedHeaders'?: string | undefined
          }
        } & { json: { SecurityGroups?: SecurityGroup[] | undefined } }
        output: {}
        outputFormat: string
        status: 204
      }
    }
  } & {
    '/2015-02-01/file-systems/replication-configurations': {
      $get: {
        input: {
          query: {
            FileSystemId?: string | undefined
            NextToken?: string | undefined
            MaxResults?: number | undefined
          }
        } & {
          header: {
            'X-Amz-Content-Sha256'?: string | undefined
            'X-Amz-Date'?: string | undefined
            'X-Amz-Algorithm'?: string | undefined
            'X-Amz-Credential'?: string | undefined
            'X-Amz-Security-Token'?: string | undefined
            'X-Amz-Signature'?: string | undefined
            'X-Amz-SignedHeaders'?: string | undefined
          }
        }
        output: DescribeReplicationConfigurationsResponse
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/2015-02-01/tags/:FileSystemId/': {
      $get: {
        input: { param: { FileSystemId: string } } & {
          query: { MaxItems?: number | undefined; Marker?: string | undefined }
        } & {
          header: {
            'X-Amz-Content-Sha256'?: string | undefined
            'X-Amz-Date'?: string | undefined
            'X-Amz-Algorithm'?: string | undefined
            'X-Amz-Credential'?: string | undefined
            'X-Amz-Security-Token'?: string | undefined
            'X-Amz-Signature'?: string | undefined
            'X-Amz-SignedHeaders'?: string | undefined
          }
        }
        output: DescribeTagsResponse
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/2015-02-01/resource-tags/:ResourceId': {
      $get: {
        input: { param: { ResourceId: string } } & {
          query: { MaxResults?: number | undefined; NextToken?: string | undefined }
        } & {
          header: {
            'X-Amz-Content-Sha256'?: string | undefined
            'X-Amz-Date'?: string | undefined
            'X-Amz-Algorithm'?: string | undefined
            'X-Amz-Credential'?: string | undefined
            'X-Amz-Security-Token'?: string | undefined
            'X-Amz-Signature'?: string | undefined
            'X-Amz-SignedHeaders'?: string | undefined
          }
        }
        output: ListTagsForResourceResponse
        outputFormat: 'json'
        status: 200
      }
      $post: {
        input: { param: { ResourceId: string } } & {
          header: {
            'X-Amz-Content-Sha256'?: string | undefined
            'X-Amz-Date'?: string | undefined
            'X-Amz-Algorithm'?: string | undefined
            'X-Amz-Credential'?: string | undefined
            'X-Amz-Security-Token'?: string | undefined
            'X-Amz-Signature'?: string | undefined
            'X-Amz-SignedHeaders'?: string | undefined
          }
        } & { json: { Tags: Tag[] } }
        output: {}
        outputFormat: string
        status: 200
      }
    }
  } & {
    '/2015-02-01/resource-tags/:ResourceId#tagKeys': {
      $delete: {
        input: { param: { ResourceId: string } } & { query: { tagKeys: TagKey[] } } & {
          header: {
            'X-Amz-Content-Sha256'?: string | undefined
            'X-Amz-Date'?: string | undefined
            'X-Amz-Algorithm'?: string | undefined
            'X-Amz-Credential'?: string | undefined
            'X-Amz-Security-Token'?: string | undefined
            'X-Amz-Signature'?: string | undefined
            'X-Amz-SignedHeaders'?: string | undefined
          }
        }
        output: {}
        outputFormat: string
        status: 200
      }
    }
  },
  '/'
>
export default routes
