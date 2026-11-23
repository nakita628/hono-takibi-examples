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
type BadRequest = { [x: string]: unknown }
type AccessPointAlreadyExists = { [x: string]: unknown }
type IncorrectFileSystemLifeCycleState = { [x: string]: unknown }
type InternalServerError = { [x: string]: unknown }
type FileSystemNotFound = { [x: string]: unknown }
type AccessPointLimitExceeded = { [x: string]: unknown }
type ThrottlingException = { [x: string]: unknown }
type DescribeAccessPointsResponse = { AccessPoints?: {} | undefined; NextToken?: {} | undefined }
type AccessPointNotFound = { [x: string]: unknown }
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
type FileSystemAlreadyExists = { [x: string]: unknown }
type FileSystemLimitExceeded = { [x: string]: unknown }
type InsufficientThroughputCapacity = { [x: string]: unknown }
type ThroughputLimitExceeded = { [x: string]: unknown }
type UnsupportedAvailabilityZone = { [x: string]: unknown }
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
type MountTargetConflict = { [x: string]: unknown }
type SubnetNotFound = { [x: string]: unknown }
type NoFreeAddressesInSubnet = { [x: string]: unknown }
type IpAddressInUse = { [x: string]: unknown }
type NetworkInterfaceLimitExceeded = { [x: string]: unknown }
type SecurityGroupLimitExceeded = { [x: string]: unknown }
type SecurityGroupNotFound = { [x: string]: unknown }
type AvailabilityZonesMismatch = { [x: string]: unknown }
type DescribeMountTargetsResponse = {
  Marker?: {} | undefined
  MountTargets?: {} | undefined
  NextMarker?: {} | undefined
}
type MountTargetNotFound = { [x: string]: unknown }
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
type ValidationException = { [x: string]: unknown }
type ReplicationNotFound = { [x: string]: unknown }
type FileSystemInUse = { [x: string]: unknown }
type TooManyRequests = { [x: string]: unknown }
type FileSystemPolicyDescription = { FileSystemId?: {} | undefined; Policy?: {} | undefined }
type PolicyNotFound = { [x: string]: unknown }
type InvalidPolicyException = { [x: string]: unknown }
type DependencyTimeout = { [x: string]: unknown }
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
type IncorrectMountTargetState = { [x: string]: unknown }
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
      $post:
        | {
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
        | {
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
            output: BadRequest
            outputFormat: 'json'
            status: 480
          }
        | {
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
            output: AccessPointAlreadyExists
            outputFormat: 'json'
            status: 481
          }
        | {
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
            output: IncorrectFileSystemLifeCycleState
            outputFormat: 'json'
            status: 482
          }
        | {
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
            output: InternalServerError
            outputFormat: 'json'
            status: 483
          }
        | {
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
            output: FileSystemNotFound
            outputFormat: 'json'
            status: 484
          }
        | {
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
            output: AccessPointLimitExceeded
            outputFormat: 'json'
            status: 485
          }
        | {
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
            output: ThrottlingException
            outputFormat: 'json'
            status: 486
          }
      $get:
        | {
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
        | {
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
            output: BadRequest
            outputFormat: 'json'
            status: 480
          }
        | {
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
            output: InternalServerError
            outputFormat: 'json'
            status: 481
          }
        | {
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
            output: FileSystemNotFound
            outputFormat: 'json'
            status: 482
          }
        | {
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
            output: AccessPointNotFound
            outputFormat: 'json'
            status: 483
          }
    }
  } & {
    '/2015-02-01/file-systems': {
      $post:
        | {
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
        | {
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
            output: BadRequest
            outputFormat: 'json'
            status: 480
          }
        | {
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
            output: InternalServerError
            outputFormat: 'json'
            status: 481
          }
        | {
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
            output: FileSystemAlreadyExists
            outputFormat: 'json'
            status: 482
          }
        | {
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
            output: FileSystemLimitExceeded
            outputFormat: 'json'
            status: 483
          }
        | {
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
            output: InsufficientThroughputCapacity
            outputFormat: 'json'
            status: 484
          }
        | {
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
            output: ThroughputLimitExceeded
            outputFormat: 'json'
            status: 485
          }
        | {
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
            output: UnsupportedAvailabilityZone
            outputFormat: 'json'
            status: 486
          }
      $get:
        | {
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
        | {
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
            output: BadRequest
            outputFormat: 'json'
            status: 480
          }
        | {
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
            output: InternalServerError
            outputFormat: 'json'
            status: 481
          }
        | {
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
            output: FileSystemNotFound
            outputFormat: 'json'
            status: 482
          }
    }
  } & {
    '/2015-02-01/mount-targets': {
      $post:
        | {
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
        | {
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
            output: BadRequest
            outputFormat: 'json'
            status: 480
          }
        | {
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
            output: InternalServerError
            outputFormat: 'json'
            status: 481
          }
        | {
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
            output: FileSystemNotFound
            outputFormat: 'json'
            status: 482
          }
        | {
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
            output: IncorrectFileSystemLifeCycleState
            outputFormat: 'json'
            status: 483
          }
        | {
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
            output: MountTargetConflict
            outputFormat: 'json'
            status: 484
          }
        | {
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
            output: SubnetNotFound
            outputFormat: 'json'
            status: 485
          }
        | {
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
            output: NoFreeAddressesInSubnet
            outputFormat: 'json'
            status: 486
          }
        | {
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
            output: IpAddressInUse
            outputFormat: 'json'
            status: 487
          }
        | {
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
            output: NetworkInterfaceLimitExceeded
            outputFormat: 'json'
            status: 488
          }
        | {
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
            output: SecurityGroupLimitExceeded
            outputFormat: 'json'
            status: 489
          }
        | {
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
            output: SecurityGroupNotFound
            outputFormat: 'json'
            status: 490
          }
        | {
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
            output: UnsupportedAvailabilityZone
            outputFormat: 'json'
            status: 491
          }
        | {
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
            output: AvailabilityZonesMismatch
            outputFormat: 'json'
            status: 492
          }
      $get:
        | {
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
        | {
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
            output: BadRequest
            outputFormat: 'json'
            status: 480
          }
        | {
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
            output: InternalServerError
            outputFormat: 'json'
            status: 481
          }
        | {
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
            output: FileSystemNotFound
            outputFormat: 'json'
            status: 482
          }
        | {
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
            output: MountTargetNotFound
            outputFormat: 'json'
            status: 483
          }
        | {
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
            output: AccessPointNotFound
            outputFormat: 'json'
            status: 484
          }
    }
  } & {
    '/2015-02-01/file-systems/:SourceFileSystemId/replication-configuration': {
      $post:
        | {
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
        | {
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
            output: BadRequest
            outputFormat: 'json'
            status: 480
          }
        | {
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
            output: IncorrectFileSystemLifeCycleState
            outputFormat: 'json'
            status: 481
          }
        | {
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
            output: ValidationException
            outputFormat: 'json'
            status: 482
          }
        | {
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
            output: ReplicationNotFound
            outputFormat: 'json'
            status: 483
          }
        | {
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
            output: FileSystemNotFound
            outputFormat: 'json'
            status: 484
          }
        | {
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
            output: UnsupportedAvailabilityZone
            outputFormat: 'json'
            status: 485
          }
        | {
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
            output: FileSystemLimitExceeded
            outputFormat: 'json'
            status: 486
          }
        | {
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
            output: InsufficientThroughputCapacity
            outputFormat: 'json'
            status: 487
          }
        | {
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
            output: ThroughputLimitExceeded
            outputFormat: 'json'
            status: 488
          }
        | {
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
            output: InternalServerError
            outputFormat: 'json'
            status: 489
          }
      $delete:
        | {
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
        | {
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
            output: BadRequest
            outputFormat: 'json'
            status: 480
          }
        | {
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
            output: InternalServerError
            outputFormat: 'json'
            status: 481
          }
        | {
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
            output: FileSystemNotFound
            outputFormat: 'json'
            status: 482
          }
        | {
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
            output: ReplicationNotFound
            outputFormat: 'json'
            status: 483
          }
    }
  } & {
    '/2015-02-01/create-tags/:FileSystemId': {
      $post:
        | {
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
        | {
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
            output: BadRequest
            outputFormat: 'json'
            status: 480
          }
        | {
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
            output: InternalServerError
            outputFormat: 'json'
            status: 481
          }
        | {
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
            output: FileSystemNotFound
            outputFormat: 'json'
            status: 482
          }
    }
  } & {
    '/2015-02-01/access-points/:AccessPointId': {
      $delete:
        | {
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
        | {
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
            output: BadRequest
            outputFormat: 'json'
            status: 480
          }
        | {
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
            output: InternalServerError
            outputFormat: 'json'
            status: 481
          }
        | {
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
            output: AccessPointNotFound
            outputFormat: 'json'
            status: 482
          }
    }
  } & {
    '/2015-02-01/file-systems/:FileSystemId': {
      $delete:
        | {
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
        | {
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
            output: BadRequest
            outputFormat: 'json'
            status: 480
          }
        | {
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
            output: InternalServerError
            outputFormat: 'json'
            status: 481
          }
        | {
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
            output: FileSystemNotFound
            outputFormat: 'json'
            status: 482
          }
        | {
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
            output: FileSystemInUse
            outputFormat: 'json'
            status: 483
          }
      $put:
        | {
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
        | {
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
            output: BadRequest
            outputFormat: 'json'
            status: 480
          }
        | {
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
            output: FileSystemNotFound
            outputFormat: 'json'
            status: 481
          }
        | {
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
            output: IncorrectFileSystemLifeCycleState
            outputFormat: 'json'
            status: 482
          }
        | {
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
            output: InsufficientThroughputCapacity
            outputFormat: 'json'
            status: 483
          }
        | {
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
            output: InternalServerError
            outputFormat: 'json'
            status: 484
          }
        | {
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
            output: ThroughputLimitExceeded
            outputFormat: 'json'
            status: 485
          }
        | {
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
            output: TooManyRequests
            outputFormat: 'json'
            status: 486
          }
    }
  } & {
    '/2015-02-01/file-systems/:FileSystemId/policy': {
      $delete:
        | {
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
        | {
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
            output: BadRequest
            outputFormat: 'json'
            status: 480
          }
        | {
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
            output: InternalServerError
            outputFormat: 'json'
            status: 481
          }
        | {
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
            output: FileSystemNotFound
            outputFormat: 'json'
            status: 482
          }
        | {
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
            output: IncorrectFileSystemLifeCycleState
            outputFormat: 'json'
            status: 483
          }
      $get:
        | {
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
        | {
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
            output: BadRequest
            outputFormat: 'json'
            status: 480
          }
        | {
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
            output: InternalServerError
            outputFormat: 'json'
            status: 481
          }
        | {
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
            output: FileSystemNotFound
            outputFormat: 'json'
            status: 482
          }
        | {
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
            output: PolicyNotFound
            outputFormat: 'json'
            status: 483
          }
      $put:
        | {
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
        | {
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
            output: BadRequest
            outputFormat: 'json'
            status: 480
          }
        | {
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
            output: InternalServerError
            outputFormat: 'json'
            status: 481
          }
        | {
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
            output: FileSystemNotFound
            outputFormat: 'json'
            status: 482
          }
        | {
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
            output: InvalidPolicyException
            outputFormat: 'json'
            status: 483
          }
        | {
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
            output: IncorrectFileSystemLifeCycleState
            outputFormat: 'json'
            status: 484
          }
    }
  } & {
    '/2015-02-01/mount-targets/:MountTargetId': {
      $delete:
        | {
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
        | {
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
            output: BadRequest
            outputFormat: 'json'
            status: 480
          }
        | {
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
            output: InternalServerError
            outputFormat: 'json'
            status: 481
          }
        | {
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
            output: DependencyTimeout
            outputFormat: 'json'
            status: 482
          }
        | {
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
            output: MountTargetNotFound
            outputFormat: 'json'
            status: 483
          }
    }
  } & {
    '/2015-02-01/delete-tags/:FileSystemId': {
      $post:
        | {
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
        | {
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
            output: BadRequest
            outputFormat: 'json'
            status: 480
          }
        | {
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
            output: InternalServerError
            outputFormat: 'json'
            status: 481
          }
        | {
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
            output: FileSystemNotFound
            outputFormat: 'json'
            status: 482
          }
    }
  } & {
    '/2015-02-01/account-preferences': {
      $get:
        | {
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
        | {
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
            output: InternalServerError
            outputFormat: 'json'
            status: 480
          }
      $put:
        | {
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
        | {
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
            output: BadRequest
            outputFormat: 'json'
            status: 480
          }
        | {
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
            output: InternalServerError
            outputFormat: 'json'
            status: 481
          }
    }
  } & {
    '/2015-02-01/file-systems/:FileSystemId/backup-policy': {
      $get:
        | {
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
        | {
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
            output: BadRequest
            outputFormat: 'json'
            status: 480
          }
        | {
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
            output: FileSystemNotFound
            outputFormat: 'json'
            status: 481
          }
        | {
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
            output: InternalServerError
            outputFormat: 'json'
            status: 482
          }
        | {
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
            output: PolicyNotFound
            outputFormat: 'json'
            status: 483
          }
        | {
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
            output: ValidationException
            outputFormat: 'json'
            status: 484
          }
      $put:
        | {
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
        | {
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
            output: BadRequest
            outputFormat: 'json'
            status: 480
          }
        | {
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
            output: FileSystemNotFound
            outputFormat: 'json'
            status: 481
          }
        | {
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
            output: IncorrectFileSystemLifeCycleState
            outputFormat: 'json'
            status: 482
          }
        | {
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
            output: InternalServerError
            outputFormat: 'json'
            status: 483
          }
        | {
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
            output: ValidationException
            outputFormat: 'json'
            status: 484
          }
    }
  } & {
    '/2015-02-01/file-systems/:FileSystemId/lifecycle-configuration': {
      $get:
        | {
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
        | {
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
            output: InternalServerError
            outputFormat: 'json'
            status: 480
          }
        | {
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
            output: BadRequest
            outputFormat: 'json'
            status: 481
          }
        | {
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
            output: FileSystemNotFound
            outputFormat: 'json'
            status: 482
          }
      $put:
        | {
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
        | {
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
            output: BadRequest
            outputFormat: 'json'
            status: 480
          }
        | {
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
            output: InternalServerError
            outputFormat: 'json'
            status: 481
          }
        | {
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
            output: FileSystemNotFound
            outputFormat: 'json'
            status: 482
          }
        | {
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
            output: IncorrectFileSystemLifeCycleState
            outputFormat: 'json'
            status: 483
          }
    }
  } & {
    '/2015-02-01/mount-targets/:MountTargetId/security-groups': {
      $get:
        | {
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
        | {
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
            output: BadRequest
            outputFormat: 'json'
            status: 480
          }
        | {
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
            output: InternalServerError
            outputFormat: 'json'
            status: 481
          }
        | {
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
            output: MountTargetNotFound
            outputFormat: 'json'
            status: 482
          }
        | {
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
            output: IncorrectMountTargetState
            outputFormat: 'json'
            status: 483
          }
      $put:
        | {
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
        | {
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
            output: BadRequest
            outputFormat: 'json'
            status: 480
          }
        | {
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
            output: InternalServerError
            outputFormat: 'json'
            status: 481
          }
        | {
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
            output: MountTargetNotFound
            outputFormat: 'json'
            status: 482
          }
        | {
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
            output: IncorrectMountTargetState
            outputFormat: 'json'
            status: 483
          }
        | {
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
            output: SecurityGroupLimitExceeded
            outputFormat: 'json'
            status: 484
          }
        | {
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
            output: SecurityGroupNotFound
            outputFormat: 'json'
            status: 485
          }
    }
  } & {
    '/2015-02-01/file-systems/replication-configurations': {
      $get:
        | {
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
        | {
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
            output: BadRequest
            outputFormat: 'json'
            status: 480
          }
        | {
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
            output: FileSystemNotFound
            outputFormat: 'json'
            status: 481
          }
        | {
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
            output: InternalServerError
            outputFormat: 'json'
            status: 482
          }
        | {
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
            output: ReplicationNotFound
            outputFormat: 'json'
            status: 483
          }
        | {
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
            output: ValidationException
            outputFormat: 'json'
            status: 484
          }
    }
  } & {
    '/2015-02-01/tags/:FileSystemId/': {
      $get:
        | {
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
        | {
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
            output: BadRequest
            outputFormat: 'json'
            status: 480
          }
        | {
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
            output: InternalServerError
            outputFormat: 'json'
            status: 481
          }
        | {
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
            output: FileSystemNotFound
            outputFormat: 'json'
            status: 482
          }
    }
  } & {
    '/2015-02-01/resource-tags/:ResourceId': {
      $get:
        | {
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
        | {
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
            output: BadRequest
            outputFormat: 'json'
            status: 480
          }
        | {
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
            output: InternalServerError
            outputFormat: 'json'
            status: 481
          }
        | {
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
            output: FileSystemNotFound
            outputFormat: 'json'
            status: 482
          }
        | {
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
            output: AccessPointNotFound
            outputFormat: 'json'
            status: 483
          }
      $post:
        | {
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
        | {
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
            output: BadRequest
            outputFormat: 'json'
            status: 480
          }
        | {
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
            output: InternalServerError
            outputFormat: 'json'
            status: 481
          }
        | {
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
            output: FileSystemNotFound
            outputFormat: 'json'
            status: 482
          }
        | {
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
            output: AccessPointNotFound
            outputFormat: 'json'
            status: 483
          }
    }
  } & {
    '/2015-02-01/resource-tags/:ResourceId#tagKeys': {
      $delete:
        | {
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
        | {
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
            output: BadRequest
            outputFormat: 'json'
            status: 480
          }
        | {
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
            output: InternalServerError
            outputFormat: 'json'
            status: 481
          }
        | {
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
            output: FileSystemNotFound
            outputFormat: 'json'
            status: 482
          }
        | {
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
            output: AccessPointNotFound
            outputFormat: 'json'
            status: 483
          }
    }
  },
  '/'
>
export default routes
