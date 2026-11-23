type CancelTaskExecutionRequest = { TaskExecutionArn: {} }
type CancelTaskExecutionResponse = { [x: string]: unknown }
type InvalidRequestException = { [x: string]: unknown }
type InternalException = { [x: string]: unknown }
type CreateAgentRequest = {
  ActivationKey: {}
  AgentName?: {} | undefined
  Tags?: {} | undefined
  VpcEndpointId?: {} | undefined
  SubnetArns?: {} | undefined
  SecurityGroupArns?: {} | undefined
}
type CreateAgentResponse = { AgentArn?: {} | undefined }
type CreateLocationEfsRequest = {
  Subdirectory?: {} | undefined
  EfsFilesystemArn: {}
  Ec2Config: { SubnetArn: {}; SecurityGroupArns: {} }
  Tags?: {} | undefined
  AccessPointArn?: {} | undefined
  FileSystemAccessRoleArn?: {} | undefined
  InTransitEncryption?: {} | undefined
}
type CreateLocationEfsResponse = { LocationArn?: {} | undefined }
type CreateLocationFsxLustreRequest = {
  FsxFilesystemArn: {}
  SecurityGroupArns: {}
  Subdirectory?: {} | undefined
  Tags?: {} | undefined
}
type CreateLocationFsxLustreResponse = { LocationArn?: {} | undefined }
type NfsMountOptions = { Version?: {} | undefined }
type SmbMountOptions = { Version?: {} | undefined }
type FsxProtocol = {
  NFS?: { MountOptions?: NfsMountOptions | undefined } | undefined
  SMB?:
    | {
        Domain?: {} | undefined
        MountOptions?: SmbMountOptions | undefined
        Password: {}
        User: {}
      }
    | undefined
}
type CreateLocationFsxOntapRequest = {
  Protocol: FsxProtocol
  SecurityGroupArns: {}
  StorageVirtualMachineArn: {}
  Subdirectory?: {} | undefined
  Tags?: {} | undefined
}
type CreateLocationFsxOntapResponse = { LocationArn?: {} | undefined }
type CreateLocationFsxOpenZfsRequest = {
  FsxFilesystemArn: {}
  Protocol: {
    NFS?: { MountOptions?: NfsMountOptions | undefined } | undefined
    SMB?:
      | {
          Domain?: {} | undefined
          MountOptions?: SmbMountOptions | undefined
          Password: {}
          User: {}
        }
      | undefined
  }
  SecurityGroupArns: {}
  Subdirectory?: {} | undefined
  Tags?: {} | undefined
}
type CreateLocationFsxOpenZfsResponse = { LocationArn?: {} | undefined }
type CreateLocationFsxWindowsRequest = {
  Subdirectory?: {} | undefined
  FsxFilesystemArn: {}
  SecurityGroupArns: {}
  Tags?: {} | undefined
  User: {}
  Domain?: {} | undefined
  Password: {}
}
type CreateLocationFsxWindowsResponse = { LocationArn?: {} | undefined }
type CreateLocationHdfsRequest = {
  Subdirectory?: {} | undefined
  NameNodes: {}
  BlockSize?: {} | undefined
  ReplicationFactor?: {} | undefined
  KmsKeyProviderUri?: {} | undefined
  QopConfiguration?:
    | { RpcProtection?: {} | undefined; DataTransferProtection?: {} | undefined }
    | undefined
  AuthenticationType: {}
  SimpleUser?: {} | undefined
  KerberosPrincipal?: {} | undefined
  KerberosKeytab?: {} | undefined
  KerberosKrb5Conf?: {} | undefined
  AgentArns: {}
  Tags?: {} | undefined
}
type CreateLocationHdfsResponse = { LocationArn?: {} | undefined }
type CreateLocationNfsRequest = {
  Subdirectory: {}
  ServerHostname: {}
  OnPremConfig: { AgentArns: {} }
  MountOptions?: { Version?: {} | undefined } | undefined
  Tags?: {} | undefined
}
type CreateLocationNfsResponse = { LocationArn?: {} | undefined }
type CreateLocationObjectStorageRequest = {
  ServerHostname: {}
  ServerPort?: {} | undefined
  ServerProtocol?: {} | undefined
  Subdirectory?: {} | undefined
  BucketName: {}
  AccessKey?: {} | undefined
  SecretKey?: {} | undefined
  AgentArns: {}
  Tags?: {} | undefined
  ServerCertificate?: {} | undefined
}
type CreateLocationObjectStorageResponse = { LocationArn?: {} | undefined }
type S3Config = { BucketAccessRoleArn: {} }
type CreateLocationS3Request = {
  Subdirectory?: {} | undefined
  S3BucketArn: {}
  S3StorageClass?: {} | undefined
  S3Config: S3Config
  AgentArns?: {} | undefined
  Tags?: {} | undefined
}
type CreateLocationS3Response = { LocationArn?: {} | undefined }
type CreateLocationSmbRequest = {
  Subdirectory: {}
  ServerHostname: {}
  User: {}
  Domain?: {} | undefined
  Password: {}
  AgentArns: {}
  MountOptions?: { Version?: {} | undefined } | undefined
  Tags?: {} | undefined
}
type CreateLocationSmbResponse = { LocationArn?: {} | undefined }
type CreateTaskRequest = {
  SourceLocationArn: {}
  DestinationLocationArn: {}
  CloudWatchLogGroupArn?: {} | undefined
  Name?: {} | undefined
  Options?:
    | {
        VerifyMode?: {} | undefined
        OverwriteMode?: {} | undefined
        Atime?: {} | undefined
        Mtime?: {} | undefined
        Uid?: {} | undefined
        Gid?: {} | undefined
        PreserveDeletedFiles?: {} | undefined
        PreserveDevices?: {} | undefined
        PosixPermissions?: {} | undefined
        BytesPerSecond?: {} | undefined
        TaskQueueing?: {} | undefined
        LogLevel?: {} | undefined
        TransferMode?: {} | undefined
        SecurityDescriptorCopyFlags?: {} | undefined
        ObjectTags?: {} | undefined
      }
    | undefined
  Excludes?: {} | undefined
  Schedule?: { ScheduleExpression: {} } | undefined
  Tags?: {} | undefined
  Includes?: {} | undefined
}
type CreateTaskResponse = { TaskArn?: {} | undefined }
type DeleteAgentRequest = { AgentArn: {} }
type DeleteAgentResponse = { [x: string]: unknown }
type DeleteLocationRequest = { LocationArn: {} }
type DeleteLocationResponse = { [x: string]: unknown }
type DeleteTaskRequest = { TaskArn: {} }
type DeleteTaskResponse = { [x: string]: unknown }
type DescribeAgentRequest = { AgentArn: {} }
type DescribeAgentResponse = {
  AgentArn?: {} | undefined
  Name?: {} | undefined
  Status?: {} | undefined
  LastConnectionTime?: {} | undefined
  CreationTime?: {} | undefined
  EndpointType?: {} | undefined
  PrivateLinkConfig?:
    | {
        VpcEndpointId?: {} | undefined
        PrivateLinkEndpoint?: {} | undefined
        SubnetArns?: {} | undefined
        SecurityGroupArns?: {} | undefined
      }
    | undefined
}
type DescribeLocationEfsRequest = { LocationArn: {} }
type Ec2Config = { SubnetArn: {}; SecurityGroupArns: {} }
type DescribeLocationEfsResponse = {
  LocationArn?: {} | undefined
  LocationUri?: {} | undefined
  Ec2Config?: Ec2Config | undefined
  CreationTime?: {} | undefined
  AccessPointArn?: {} | undefined
  FileSystemAccessRoleArn?: {} | undefined
  InTransitEncryption?: {} | undefined
}
type DescribeLocationFsxLustreRequest = { LocationArn: {} }
type DescribeLocationFsxLustreResponse = {
  LocationArn?: {} | undefined
  LocationUri?: {} | undefined
  SecurityGroupArns?: {} | undefined
  CreationTime?: {} | undefined
}
type DescribeLocationFsxOntapRequest = { LocationArn: {} }
type DescribeLocationFsxOntapResponse = {
  CreationTime?: {} | undefined
  LocationArn?: {} | undefined
  LocationUri?: {} | undefined
  Protocol?: FsxProtocol | undefined
  SecurityGroupArns?: {} | undefined
  StorageVirtualMachineArn?: {} | undefined
  FsxFilesystemArn?: {} | undefined
}
type DescribeLocationFsxOpenZfsRequest = { LocationArn: {} }
type DescribeLocationFsxOpenZfsResponse = {
  LocationArn?: {} | undefined
  LocationUri?: {} | undefined
  SecurityGroupArns?: {} | undefined
  Protocol?:
    | {
        NFS?: { MountOptions?: NfsMountOptions | undefined } | undefined
        SMB?:
          | {
              Domain?: {} | undefined
              MountOptions?: SmbMountOptions | undefined
              Password: {}
              User: {}
            }
          | undefined
      }
    | undefined
  CreationTime?: {} | undefined
}
type DescribeLocationFsxWindowsRequest = { LocationArn: {} }
type DescribeLocationFsxWindowsResponse = {
  LocationArn?: {} | undefined
  LocationUri?: {} | undefined
  SecurityGroupArns?: {} | undefined
  CreationTime?: {} | undefined
  User?: {} | undefined
  Domain?: {} | undefined
}
type DescribeLocationHdfsRequest = { LocationArn: {} }
type DescribeLocationHdfsResponse = {
  LocationArn?: {} | undefined
  LocationUri?: {} | undefined
  NameNodes?: {} | undefined
  BlockSize?: {} | undefined
  ReplicationFactor?: {} | undefined
  KmsKeyProviderUri?: {} | undefined
  QopConfiguration?:
    | { RpcProtection?: {} | undefined; DataTransferProtection?: {} | undefined }
    | undefined
  AuthenticationType?: {} | undefined
  SimpleUser?: {} | undefined
  KerberosPrincipal?: {} | undefined
  AgentArns?: {} | undefined
  CreationTime?: {} | undefined
}
type DescribeLocationNfsRequest = { LocationArn: {} }
type OnPremConfig = { AgentArns: {} }
type DescribeLocationNfsResponse = {
  LocationArn?: {} | undefined
  LocationUri?: {} | undefined
  OnPremConfig?: OnPremConfig | undefined
  MountOptions?: { Version?: {} | undefined } | undefined
  CreationTime?: {} | undefined
}
type DescribeLocationObjectStorageRequest = { LocationArn: {} }
type DescribeLocationObjectStorageResponse = {
  LocationArn?: {} | undefined
  LocationUri?: {} | undefined
  AccessKey?: {} | undefined
  ServerPort?: {} | undefined
  ServerProtocol?: {} | undefined
  AgentArns?: {} | undefined
  CreationTime?: {} | undefined
  ServerCertificate?: {} | undefined
}
type DescribeLocationS3Request = { LocationArn: {} }
type DescribeLocationS3Response = {
  LocationArn?: {} | undefined
  LocationUri?: {} | undefined
  S3StorageClass?: {} | undefined
  S3Config?: S3Config | undefined
  AgentArns?: {} | undefined
  CreationTime?: {} | undefined
}
type DescribeLocationSmbRequest = { LocationArn: {} }
type DescribeLocationSmbResponse = {
  LocationArn?: {} | undefined
  LocationUri?: {} | undefined
  AgentArns?: {} | undefined
  User?: {} | undefined
  Domain?: {} | undefined
  MountOptions?: { Version?: {} | undefined } | undefined
  CreationTime?: {} | undefined
}
type DescribeTaskRequest = { TaskArn: {} }
type DescribeTaskResponse = {
  TaskArn?: {} | undefined
  Status?: {} | undefined
  Name?: {} | undefined
  CurrentTaskExecutionArn?: {} | undefined
  SourceLocationArn?: {} | undefined
  DestinationLocationArn?: {} | undefined
  CloudWatchLogGroupArn?: {} | undefined
  SourceNetworkInterfaceArns?: {} | undefined
  DestinationNetworkInterfaceArns?: {} | undefined
  Options?:
    | {
        VerifyMode?: {} | undefined
        OverwriteMode?: {} | undefined
        Atime?: {} | undefined
        Mtime?: {} | undefined
        Uid?: {} | undefined
        Gid?: {} | undefined
        PreserveDeletedFiles?: {} | undefined
        PreserveDevices?: {} | undefined
        PosixPermissions?: {} | undefined
        BytesPerSecond?: {} | undefined
        TaskQueueing?: {} | undefined
        LogLevel?: {} | undefined
        TransferMode?: {} | undefined
        SecurityDescriptorCopyFlags?: {} | undefined
        ObjectTags?: {} | undefined
      }
    | undefined
  Excludes?: {} | undefined
  Schedule?: { ScheduleExpression: {} } | undefined
  ErrorCode?: {} | undefined
  ErrorDetail?: {} | undefined
  CreationTime?: {} | undefined
  Includes?: {} | undefined
}
type DescribeTaskExecutionRequest = { TaskExecutionArn: {} }
type Options = {
  VerifyMode?: {} | undefined
  OverwriteMode?: {} | undefined
  Atime?: {} | undefined
  Mtime?: {} | undefined
  Uid?: {} | undefined
  Gid?: {} | undefined
  PreserveDeletedFiles?: {} | undefined
  PreserveDevices?: {} | undefined
  PosixPermissions?: {} | undefined
  BytesPerSecond?: {} | undefined
  TaskQueueing?: {} | undefined
  LogLevel?: {} | undefined
  TransferMode?: {} | undefined
  SecurityDescriptorCopyFlags?: {} | undefined
  ObjectTags?: {} | undefined
}
type DescribeTaskExecutionResponse = {
  TaskExecutionArn?: {} | undefined
  Status?: {} | undefined
  Options?: Options | undefined
  Excludes?: {} | undefined
  Includes?: {} | undefined
  StartTime?: {} | undefined
  EstimatedFilesToTransfer?: {} | undefined
  EstimatedBytesToTransfer?: {} | undefined
  FilesTransferred?: {} | undefined
  BytesWritten?: {} | undefined
  BytesTransferred?: {} | undefined
  Result?:
    | {
        PrepareDuration?: {} | undefined
        PrepareStatus?: {} | undefined
        TotalDuration?: {} | undefined
        TransferDuration?: {} | undefined
        TransferStatus?: {} | undefined
        VerifyDuration?: {} | undefined
        VerifyStatus?: {} | undefined
        ErrorCode?: {} | undefined
        ErrorDetail?: {} | undefined
      }
    | undefined
  BytesCompressed?: {} | undefined
}
type ListAgentsRequest = { MaxResults?: {} | undefined; NextToken?: {} | undefined }
type ListAgentsResponse = { Agents?: {} | undefined; NextToken?: {} | undefined }
type ListLocationsRequest = {
  MaxResults?: {} | undefined
  NextToken?: {} | undefined
  Filters?: {} | undefined
}
type ListLocationsResponse = { Locations?: {} | undefined; NextToken?: {} | undefined }
type ListTagsForResourceRequest = {
  ResourceArn: {}
  MaxResults?: {} | undefined
  NextToken?: {} | undefined
}
type ListTagsForResourceResponse = { Tags?: {} | undefined; NextToken?: {} | undefined }
type ListTaskExecutionsRequest = {
  TaskArn?: {} | undefined
  MaxResults?: {} | undefined
  NextToken?: {} | undefined
}
type ListTaskExecutionsResponse = { TaskExecutions?: {} | undefined; NextToken?: {} | undefined }
type ListTasksRequest = {
  MaxResults?: {} | undefined
  NextToken?: {} | undefined
  Filters?: {} | undefined
}
type ListTasksResponse = { Tasks?: {} | undefined; NextToken?: {} | undefined }
type StartTaskExecutionRequest = {
  TaskArn: {}
  OverrideOptions?: Options | undefined
  Includes?: {} | undefined
  Excludes?: {} | undefined
  Tags?: {} | undefined
}
type StartTaskExecutionResponse = { TaskExecutionArn?: {} | undefined }
type TagResourceRequest = { ResourceArn: {}; Tags: {} }
type TagResourceResponse = { [x: string]: unknown }
type UntagResourceRequest = { ResourceArn: {}; Keys: {} }
type UntagResourceResponse = { [x: string]: unknown }
type UpdateAgentRequest = { AgentArn: {}; Name?: {} | undefined }
type UpdateAgentResponse = { [x: string]: unknown }
type UpdateLocationHdfsRequest = {
  LocationArn: {}
  Subdirectory?: {} | undefined
  NameNodes?: {} | undefined
  BlockSize?: {} | undefined
  ReplicationFactor?: {} | undefined
  KmsKeyProviderUri?: {} | undefined
  QopConfiguration?:
    | { RpcProtection?: {} | undefined; DataTransferProtection?: {} | undefined }
    | undefined
  AuthenticationType?: {} | undefined
  SimpleUser?: {} | undefined
  KerberosPrincipal?: {} | undefined
  KerberosKeytab?: {} | undefined
  KerberosKrb5Conf?: {} | undefined
  AgentArns?: {} | undefined
}
type UpdateLocationHdfsResponse = { [x: string]: unknown }
type UpdateLocationNfsRequest = {
  LocationArn: {}
  Subdirectory?: {} | undefined
  OnPremConfig?: OnPremConfig | undefined
  MountOptions?: NfsMountOptions | undefined
}
type UpdateLocationNfsResponse = { [x: string]: unknown }
type UpdateLocationObjectStorageRequest = {
  LocationArn: {}
  ServerPort?: {} | undefined
  ServerProtocol?: {} | undefined
  Subdirectory?: {} | undefined
  AccessKey?: {} | undefined
  SecretKey?: {} | undefined
  AgentArns?: {} | undefined
  ServerCertificate?: {} | undefined
}
type UpdateLocationObjectStorageResponse = { [x: string]: unknown }
type UpdateLocationSmbRequest = {
  LocationArn: {}
  Subdirectory?: {} | undefined
  User?: {} | undefined
  Domain?: {} | undefined
  Password?: {} | undefined
  AgentArns?: {} | undefined
  MountOptions?: SmbMountOptions | undefined
}
type UpdateLocationSmbResponse = { [x: string]: unknown }
type UpdateTaskRequest = {
  TaskArn: {}
  Options?: Options | undefined
  Excludes?: {} | undefined
  Schedule?: { ScheduleExpression: {} } | undefined
  Name?: {} | undefined
  CloudWatchLogGroupArn?: {} | undefined
  Includes?: {} | undefined
}
type UpdateTaskResponse = { [x: string]: unknown }
type UpdateTaskExecutionRequest = { TaskExecutionArn: {}; Options: Options }
type UpdateTaskExecutionResponse = { [x: string]: unknown }
declare const routes: import('@hono/zod-openapi').OpenAPIHono<
  import('hono/types').Env,
  {
    '/#X-Amz-Target=FmrsService.CancelTaskExecution': {
      $post:
        | {
            input: {
              header: {
                'X-Amz-Target': 'FmrsService.CancelTaskExecution'
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: CancelTaskExecutionRequest }
            output: CancelTaskExecutionResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              header: {
                'X-Amz-Target': 'FmrsService.CancelTaskExecution'
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: CancelTaskExecutionRequest }
            output: InvalidRequestException
            outputFormat: 'json'
            status: 480
          }
        | {
            input: {
              header: {
                'X-Amz-Target': 'FmrsService.CancelTaskExecution'
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: CancelTaskExecutionRequest }
            output: InternalException
            outputFormat: 'json'
            status: 481
          }
    }
  } & {
    '/#X-Amz-Target=FmrsService.CreateAgent': {
      $post:
        | {
            input: {
              header: {
                'X-Amz-Target': 'FmrsService.CreateAgent'
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: CreateAgentRequest }
            output: CreateAgentResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              header: {
                'X-Amz-Target': 'FmrsService.CreateAgent'
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: CreateAgentRequest }
            output: InvalidRequestException
            outputFormat: 'json'
            status: 480
          }
        | {
            input: {
              header: {
                'X-Amz-Target': 'FmrsService.CreateAgent'
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: CreateAgentRequest }
            output: InternalException
            outputFormat: 'json'
            status: 481
          }
    }
  } & {
    '/#X-Amz-Target=FmrsService.CreateLocationEfs': {
      $post:
        | {
            input: {
              header: {
                'X-Amz-Target': 'FmrsService.CreateLocationEfs'
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: CreateLocationEfsRequest }
            output: CreateLocationEfsResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              header: {
                'X-Amz-Target': 'FmrsService.CreateLocationEfs'
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: CreateLocationEfsRequest }
            output: InvalidRequestException
            outputFormat: 'json'
            status: 480
          }
        | {
            input: {
              header: {
                'X-Amz-Target': 'FmrsService.CreateLocationEfs'
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: CreateLocationEfsRequest }
            output: InternalException
            outputFormat: 'json'
            status: 481
          }
    }
  } & {
    '/#X-Amz-Target=FmrsService.CreateLocationFsxLustre': {
      $post:
        | {
            input: {
              header: {
                'X-Amz-Target': 'FmrsService.CreateLocationFsxLustre'
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: CreateLocationFsxLustreRequest }
            output: CreateLocationFsxLustreResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              header: {
                'X-Amz-Target': 'FmrsService.CreateLocationFsxLustre'
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: CreateLocationFsxLustreRequest }
            output: InvalidRequestException
            outputFormat: 'json'
            status: 480
          }
        | {
            input: {
              header: {
                'X-Amz-Target': 'FmrsService.CreateLocationFsxLustre'
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: CreateLocationFsxLustreRequest }
            output: InternalException
            outputFormat: 'json'
            status: 481
          }
    }
  } & {
    '/#X-Amz-Target=FmrsService.CreateLocationFsxOntap': {
      $post:
        | {
            input: {
              header: {
                'X-Amz-Target': 'FmrsService.CreateLocationFsxOntap'
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: CreateLocationFsxOntapRequest }
            output: CreateLocationFsxOntapResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              header: {
                'X-Amz-Target': 'FmrsService.CreateLocationFsxOntap'
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: CreateLocationFsxOntapRequest }
            output: InvalidRequestException
            outputFormat: 'json'
            status: 480
          }
        | {
            input: {
              header: {
                'X-Amz-Target': 'FmrsService.CreateLocationFsxOntap'
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: CreateLocationFsxOntapRequest }
            output: InternalException
            outputFormat: 'json'
            status: 481
          }
    }
  } & {
    '/#X-Amz-Target=FmrsService.CreateLocationFsxOpenZfs': {
      $post:
        | {
            input: {
              header: {
                'X-Amz-Target': 'FmrsService.CreateLocationFsxOpenZfs'
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: CreateLocationFsxOpenZfsRequest }
            output: CreateLocationFsxOpenZfsResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              header: {
                'X-Amz-Target': 'FmrsService.CreateLocationFsxOpenZfs'
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: CreateLocationFsxOpenZfsRequest }
            output: InvalidRequestException
            outputFormat: 'json'
            status: 480
          }
        | {
            input: {
              header: {
                'X-Amz-Target': 'FmrsService.CreateLocationFsxOpenZfs'
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: CreateLocationFsxOpenZfsRequest }
            output: InternalException
            outputFormat: 'json'
            status: 481
          }
    }
  } & {
    '/#X-Amz-Target=FmrsService.CreateLocationFsxWindows': {
      $post:
        | {
            input: {
              header: {
                'X-Amz-Target': 'FmrsService.CreateLocationFsxWindows'
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: CreateLocationFsxWindowsRequest }
            output: CreateLocationFsxWindowsResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              header: {
                'X-Amz-Target': 'FmrsService.CreateLocationFsxWindows'
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: CreateLocationFsxWindowsRequest }
            output: InvalidRequestException
            outputFormat: 'json'
            status: 480
          }
        | {
            input: {
              header: {
                'X-Amz-Target': 'FmrsService.CreateLocationFsxWindows'
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: CreateLocationFsxWindowsRequest }
            output: InternalException
            outputFormat: 'json'
            status: 481
          }
    }
  } & {
    '/#X-Amz-Target=FmrsService.CreateLocationHdfs': {
      $post:
        | {
            input: {
              header: {
                'X-Amz-Target': 'FmrsService.CreateLocationHdfs'
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: CreateLocationHdfsRequest }
            output: CreateLocationHdfsResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              header: {
                'X-Amz-Target': 'FmrsService.CreateLocationHdfs'
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: CreateLocationHdfsRequest }
            output: InvalidRequestException
            outputFormat: 'json'
            status: 480
          }
        | {
            input: {
              header: {
                'X-Amz-Target': 'FmrsService.CreateLocationHdfs'
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: CreateLocationHdfsRequest }
            output: InternalException
            outputFormat: 'json'
            status: 481
          }
    }
  } & {
    '/#X-Amz-Target=FmrsService.CreateLocationNfs': {
      $post:
        | {
            input: {
              header: {
                'X-Amz-Target': 'FmrsService.CreateLocationNfs'
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: CreateLocationNfsRequest }
            output: CreateLocationNfsResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              header: {
                'X-Amz-Target': 'FmrsService.CreateLocationNfs'
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: CreateLocationNfsRequest }
            output: InvalidRequestException
            outputFormat: 'json'
            status: 480
          }
        | {
            input: {
              header: {
                'X-Amz-Target': 'FmrsService.CreateLocationNfs'
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: CreateLocationNfsRequest }
            output: InternalException
            outputFormat: 'json'
            status: 481
          }
    }
  } & {
    '/#X-Amz-Target=FmrsService.CreateLocationObjectStorage': {
      $post:
        | {
            input: {
              header: {
                'X-Amz-Target': 'FmrsService.CreateLocationObjectStorage'
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: CreateLocationObjectStorageRequest }
            output: CreateLocationObjectStorageResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              header: {
                'X-Amz-Target': 'FmrsService.CreateLocationObjectStorage'
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: CreateLocationObjectStorageRequest }
            output: InvalidRequestException
            outputFormat: 'json'
            status: 480
          }
        | {
            input: {
              header: {
                'X-Amz-Target': 'FmrsService.CreateLocationObjectStorage'
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: CreateLocationObjectStorageRequest }
            output: InternalException
            outputFormat: 'json'
            status: 481
          }
    }
  } & {
    '/#X-Amz-Target=FmrsService.CreateLocationS3': {
      $post:
        | {
            input: {
              header: {
                'X-Amz-Target': 'FmrsService.CreateLocationS3'
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: CreateLocationS3Request }
            output: CreateLocationS3Response
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              header: {
                'X-Amz-Target': 'FmrsService.CreateLocationS3'
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: CreateLocationS3Request }
            output: InvalidRequestException
            outputFormat: 'json'
            status: 480
          }
        | {
            input: {
              header: {
                'X-Amz-Target': 'FmrsService.CreateLocationS3'
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: CreateLocationS3Request }
            output: InternalException
            outputFormat: 'json'
            status: 481
          }
    }
  } & {
    '/#X-Amz-Target=FmrsService.CreateLocationSmb': {
      $post:
        | {
            input: {
              header: {
                'X-Amz-Target': 'FmrsService.CreateLocationSmb'
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: CreateLocationSmbRequest }
            output: CreateLocationSmbResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              header: {
                'X-Amz-Target': 'FmrsService.CreateLocationSmb'
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: CreateLocationSmbRequest }
            output: InvalidRequestException
            outputFormat: 'json'
            status: 480
          }
        | {
            input: {
              header: {
                'X-Amz-Target': 'FmrsService.CreateLocationSmb'
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: CreateLocationSmbRequest }
            output: InternalException
            outputFormat: 'json'
            status: 481
          }
    }
  } & {
    '/#X-Amz-Target=FmrsService.CreateTask': {
      $post:
        | {
            input: {
              header: {
                'X-Amz-Target': 'FmrsService.CreateTask'
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: CreateTaskRequest }
            output: CreateTaskResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              header: {
                'X-Amz-Target': 'FmrsService.CreateTask'
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: CreateTaskRequest }
            output: InvalidRequestException
            outputFormat: 'json'
            status: 480
          }
        | {
            input: {
              header: {
                'X-Amz-Target': 'FmrsService.CreateTask'
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: CreateTaskRequest }
            output: InternalException
            outputFormat: 'json'
            status: 481
          }
    }
  } & {
    '/#X-Amz-Target=FmrsService.DeleteAgent': {
      $post:
        | {
            input: {
              header: {
                'X-Amz-Target': 'FmrsService.DeleteAgent'
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: DeleteAgentRequest }
            output: DeleteAgentResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              header: {
                'X-Amz-Target': 'FmrsService.DeleteAgent'
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: DeleteAgentRequest }
            output: InvalidRequestException
            outputFormat: 'json'
            status: 480
          }
        | {
            input: {
              header: {
                'X-Amz-Target': 'FmrsService.DeleteAgent'
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: DeleteAgentRequest }
            output: InternalException
            outputFormat: 'json'
            status: 481
          }
    }
  } & {
    '/#X-Amz-Target=FmrsService.DeleteLocation': {
      $post:
        | {
            input: {
              header: {
                'X-Amz-Target': 'FmrsService.DeleteLocation'
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: DeleteLocationRequest }
            output: DeleteLocationResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              header: {
                'X-Amz-Target': 'FmrsService.DeleteLocation'
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: DeleteLocationRequest }
            output: InvalidRequestException
            outputFormat: 'json'
            status: 480
          }
        | {
            input: {
              header: {
                'X-Amz-Target': 'FmrsService.DeleteLocation'
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: DeleteLocationRequest }
            output: InternalException
            outputFormat: 'json'
            status: 481
          }
    }
  } & {
    '/#X-Amz-Target=FmrsService.DeleteTask': {
      $post:
        | {
            input: {
              header: {
                'X-Amz-Target': 'FmrsService.DeleteTask'
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: DeleteTaskRequest }
            output: DeleteTaskResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              header: {
                'X-Amz-Target': 'FmrsService.DeleteTask'
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: DeleteTaskRequest }
            output: InvalidRequestException
            outputFormat: 'json'
            status: 480
          }
        | {
            input: {
              header: {
                'X-Amz-Target': 'FmrsService.DeleteTask'
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: DeleteTaskRequest }
            output: InternalException
            outputFormat: 'json'
            status: 481
          }
    }
  } & {
    '/#X-Amz-Target=FmrsService.DescribeAgent': {
      $post:
        | {
            input: {
              header: {
                'X-Amz-Target': 'FmrsService.DescribeAgent'
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: DescribeAgentRequest }
            output: DescribeAgentResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              header: {
                'X-Amz-Target': 'FmrsService.DescribeAgent'
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: DescribeAgentRequest }
            output: InvalidRequestException
            outputFormat: 'json'
            status: 480
          }
        | {
            input: {
              header: {
                'X-Amz-Target': 'FmrsService.DescribeAgent'
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: DescribeAgentRequest }
            output: InternalException
            outputFormat: 'json'
            status: 481
          }
    }
  } & {
    '/#X-Amz-Target=FmrsService.DescribeLocationEfs': {
      $post:
        | {
            input: {
              header: {
                'X-Amz-Target': 'FmrsService.DescribeLocationEfs'
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: DescribeLocationEfsRequest }
            output: DescribeLocationEfsResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              header: {
                'X-Amz-Target': 'FmrsService.DescribeLocationEfs'
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: DescribeLocationEfsRequest }
            output: InvalidRequestException
            outputFormat: 'json'
            status: 480
          }
        | {
            input: {
              header: {
                'X-Amz-Target': 'FmrsService.DescribeLocationEfs'
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: DescribeLocationEfsRequest }
            output: InternalException
            outputFormat: 'json'
            status: 481
          }
    }
  } & {
    '/#X-Amz-Target=FmrsService.DescribeLocationFsxLustre': {
      $post:
        | {
            input: {
              header: {
                'X-Amz-Target': 'FmrsService.DescribeLocationFsxLustre'
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: DescribeLocationFsxLustreRequest }
            output: DescribeLocationFsxLustreResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              header: {
                'X-Amz-Target': 'FmrsService.DescribeLocationFsxLustre'
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: DescribeLocationFsxLustreRequest }
            output: InvalidRequestException
            outputFormat: 'json'
            status: 480
          }
        | {
            input: {
              header: {
                'X-Amz-Target': 'FmrsService.DescribeLocationFsxLustre'
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: DescribeLocationFsxLustreRequest }
            output: InternalException
            outputFormat: 'json'
            status: 481
          }
    }
  } & {
    '/#X-Amz-Target=FmrsService.DescribeLocationFsxOntap': {
      $post:
        | {
            input: {
              header: {
                'X-Amz-Target': 'FmrsService.DescribeLocationFsxOntap'
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: DescribeLocationFsxOntapRequest }
            output: DescribeLocationFsxOntapResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              header: {
                'X-Amz-Target': 'FmrsService.DescribeLocationFsxOntap'
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: DescribeLocationFsxOntapRequest }
            output: InvalidRequestException
            outputFormat: 'json'
            status: 480
          }
        | {
            input: {
              header: {
                'X-Amz-Target': 'FmrsService.DescribeLocationFsxOntap'
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: DescribeLocationFsxOntapRequest }
            output: InternalException
            outputFormat: 'json'
            status: 481
          }
    }
  } & {
    '/#X-Amz-Target=FmrsService.DescribeLocationFsxOpenZfs': {
      $post:
        | {
            input: {
              header: {
                'X-Amz-Target': 'FmrsService.DescribeLocationFsxOpenZfs'
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: DescribeLocationFsxOpenZfsRequest }
            output: DescribeLocationFsxOpenZfsResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              header: {
                'X-Amz-Target': 'FmrsService.DescribeLocationFsxOpenZfs'
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: DescribeLocationFsxOpenZfsRequest }
            output: InvalidRequestException
            outputFormat: 'json'
            status: 480
          }
        | {
            input: {
              header: {
                'X-Amz-Target': 'FmrsService.DescribeLocationFsxOpenZfs'
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: DescribeLocationFsxOpenZfsRequest }
            output: InternalException
            outputFormat: 'json'
            status: 481
          }
    }
  } & {
    '/#X-Amz-Target=FmrsService.DescribeLocationFsxWindows': {
      $post:
        | {
            input: {
              header: {
                'X-Amz-Target': 'FmrsService.DescribeLocationFsxWindows'
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: DescribeLocationFsxWindowsRequest }
            output: DescribeLocationFsxWindowsResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              header: {
                'X-Amz-Target': 'FmrsService.DescribeLocationFsxWindows'
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: DescribeLocationFsxWindowsRequest }
            output: InvalidRequestException
            outputFormat: 'json'
            status: 480
          }
        | {
            input: {
              header: {
                'X-Amz-Target': 'FmrsService.DescribeLocationFsxWindows'
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: DescribeLocationFsxWindowsRequest }
            output: InternalException
            outputFormat: 'json'
            status: 481
          }
    }
  } & {
    '/#X-Amz-Target=FmrsService.DescribeLocationHdfs': {
      $post:
        | {
            input: {
              header: {
                'X-Amz-Target': 'FmrsService.DescribeLocationHdfs'
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: DescribeLocationHdfsRequest }
            output: DescribeLocationHdfsResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              header: {
                'X-Amz-Target': 'FmrsService.DescribeLocationHdfs'
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: DescribeLocationHdfsRequest }
            output: InvalidRequestException
            outputFormat: 'json'
            status: 480
          }
        | {
            input: {
              header: {
                'X-Amz-Target': 'FmrsService.DescribeLocationHdfs'
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: DescribeLocationHdfsRequest }
            output: InternalException
            outputFormat: 'json'
            status: 481
          }
    }
  } & {
    '/#X-Amz-Target=FmrsService.DescribeLocationNfs': {
      $post:
        | {
            input: {
              header: {
                'X-Amz-Target': 'FmrsService.DescribeLocationNfs'
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: DescribeLocationNfsRequest }
            output: DescribeLocationNfsResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              header: {
                'X-Amz-Target': 'FmrsService.DescribeLocationNfs'
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: DescribeLocationNfsRequest }
            output: InvalidRequestException
            outputFormat: 'json'
            status: 480
          }
        | {
            input: {
              header: {
                'X-Amz-Target': 'FmrsService.DescribeLocationNfs'
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: DescribeLocationNfsRequest }
            output: InternalException
            outputFormat: 'json'
            status: 481
          }
    }
  } & {
    '/#X-Amz-Target=FmrsService.DescribeLocationObjectStorage': {
      $post:
        | {
            input: {
              header: {
                'X-Amz-Target': 'FmrsService.DescribeLocationObjectStorage'
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: DescribeLocationObjectStorageRequest }
            output: DescribeLocationObjectStorageResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              header: {
                'X-Amz-Target': 'FmrsService.DescribeLocationObjectStorage'
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: DescribeLocationObjectStorageRequest }
            output: InvalidRequestException
            outputFormat: 'json'
            status: 480
          }
        | {
            input: {
              header: {
                'X-Amz-Target': 'FmrsService.DescribeLocationObjectStorage'
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: DescribeLocationObjectStorageRequest }
            output: InternalException
            outputFormat: 'json'
            status: 481
          }
    }
  } & {
    '/#X-Amz-Target=FmrsService.DescribeLocationS3': {
      $post:
        | {
            input: {
              header: {
                'X-Amz-Target': 'FmrsService.DescribeLocationS3'
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: DescribeLocationS3Request }
            output: DescribeLocationS3Response
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              header: {
                'X-Amz-Target': 'FmrsService.DescribeLocationS3'
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: DescribeLocationS3Request }
            output: InvalidRequestException
            outputFormat: 'json'
            status: 480
          }
        | {
            input: {
              header: {
                'X-Amz-Target': 'FmrsService.DescribeLocationS3'
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: DescribeLocationS3Request }
            output: InternalException
            outputFormat: 'json'
            status: 481
          }
    }
  } & {
    '/#X-Amz-Target=FmrsService.DescribeLocationSmb': {
      $post:
        | {
            input: {
              header: {
                'X-Amz-Target': 'FmrsService.DescribeLocationSmb'
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: DescribeLocationSmbRequest }
            output: DescribeLocationSmbResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              header: {
                'X-Amz-Target': 'FmrsService.DescribeLocationSmb'
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: DescribeLocationSmbRequest }
            output: InvalidRequestException
            outputFormat: 'json'
            status: 480
          }
        | {
            input: {
              header: {
                'X-Amz-Target': 'FmrsService.DescribeLocationSmb'
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: DescribeLocationSmbRequest }
            output: InternalException
            outputFormat: 'json'
            status: 481
          }
    }
  } & {
    '/#X-Amz-Target=FmrsService.DescribeTask': {
      $post:
        | {
            input: {
              header: {
                'X-Amz-Target': 'FmrsService.DescribeTask'
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: DescribeTaskRequest }
            output: DescribeTaskResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              header: {
                'X-Amz-Target': 'FmrsService.DescribeTask'
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: DescribeTaskRequest }
            output: InvalidRequestException
            outputFormat: 'json'
            status: 480
          }
        | {
            input: {
              header: {
                'X-Amz-Target': 'FmrsService.DescribeTask'
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: DescribeTaskRequest }
            output: InternalException
            outputFormat: 'json'
            status: 481
          }
    }
  } & {
    '/#X-Amz-Target=FmrsService.DescribeTaskExecution': {
      $post:
        | {
            input: {
              header: {
                'X-Amz-Target': 'FmrsService.DescribeTaskExecution'
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: DescribeTaskExecutionRequest }
            output: DescribeTaskExecutionResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              header: {
                'X-Amz-Target': 'FmrsService.DescribeTaskExecution'
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: DescribeTaskExecutionRequest }
            output: InvalidRequestException
            outputFormat: 'json'
            status: 480
          }
        | {
            input: {
              header: {
                'X-Amz-Target': 'FmrsService.DescribeTaskExecution'
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: DescribeTaskExecutionRequest }
            output: InternalException
            outputFormat: 'json'
            status: 481
          }
    }
  } & {
    '/#X-Amz-Target=FmrsService.ListAgents': {
      $post:
        | {
            input: {
              query: { MaxResults?: string | undefined; NextToken?: string | undefined }
            } & {
              header: {
                'X-Amz-Target': 'FmrsService.ListAgents'
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: ListAgentsRequest }
            output: ListAgentsResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              query: { MaxResults?: string | undefined; NextToken?: string | undefined }
            } & {
              header: {
                'X-Amz-Target': 'FmrsService.ListAgents'
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: ListAgentsRequest }
            output: InvalidRequestException
            outputFormat: 'json'
            status: 480
          }
        | {
            input: {
              query: { MaxResults?: string | undefined; NextToken?: string | undefined }
            } & {
              header: {
                'X-Amz-Target': 'FmrsService.ListAgents'
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: ListAgentsRequest }
            output: InternalException
            outputFormat: 'json'
            status: 481
          }
    }
  } & {
    '/#X-Amz-Target=FmrsService.ListLocations': {
      $post:
        | {
            input: {
              query: { MaxResults?: string | undefined; NextToken?: string | undefined }
            } & {
              header: {
                'X-Amz-Target': 'FmrsService.ListLocations'
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: ListLocationsRequest }
            output: ListLocationsResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              query: { MaxResults?: string | undefined; NextToken?: string | undefined }
            } & {
              header: {
                'X-Amz-Target': 'FmrsService.ListLocations'
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: ListLocationsRequest }
            output: InvalidRequestException
            outputFormat: 'json'
            status: 480
          }
        | {
            input: {
              query: { MaxResults?: string | undefined; NextToken?: string | undefined }
            } & {
              header: {
                'X-Amz-Target': 'FmrsService.ListLocations'
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: ListLocationsRequest }
            output: InternalException
            outputFormat: 'json'
            status: 481
          }
    }
  } & {
    '/#X-Amz-Target=FmrsService.ListTagsForResource': {
      $post:
        | {
            input: {
              query: { MaxResults?: string | undefined; NextToken?: string | undefined }
            } & {
              header: {
                'X-Amz-Target': 'FmrsService.ListTagsForResource'
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
        | {
            input: {
              query: { MaxResults?: string | undefined; NextToken?: string | undefined }
            } & {
              header: {
                'X-Amz-Target': 'FmrsService.ListTagsForResource'
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: ListTagsForResourceRequest }
            output: InvalidRequestException
            outputFormat: 'json'
            status: 480
          }
        | {
            input: {
              query: { MaxResults?: string | undefined; NextToken?: string | undefined }
            } & {
              header: {
                'X-Amz-Target': 'FmrsService.ListTagsForResource'
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: ListTagsForResourceRequest }
            output: InternalException
            outputFormat: 'json'
            status: 481
          }
    }
  } & {
    '/#X-Amz-Target=FmrsService.ListTaskExecutions': {
      $post:
        | {
            input: {
              query: { MaxResults?: string | undefined; NextToken?: string | undefined }
            } & {
              header: {
                'X-Amz-Target': 'FmrsService.ListTaskExecutions'
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: ListTaskExecutionsRequest }
            output: ListTaskExecutionsResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              query: { MaxResults?: string | undefined; NextToken?: string | undefined }
            } & {
              header: {
                'X-Amz-Target': 'FmrsService.ListTaskExecutions'
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: ListTaskExecutionsRequest }
            output: InvalidRequestException
            outputFormat: 'json'
            status: 480
          }
        | {
            input: {
              query: { MaxResults?: string | undefined; NextToken?: string | undefined }
            } & {
              header: {
                'X-Amz-Target': 'FmrsService.ListTaskExecutions'
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: ListTaskExecutionsRequest }
            output: InternalException
            outputFormat: 'json'
            status: 481
          }
    }
  } & {
    '/#X-Amz-Target=FmrsService.ListTasks': {
      $post:
        | {
            input: {
              query: { MaxResults?: string | undefined; NextToken?: string | undefined }
            } & {
              header: {
                'X-Amz-Target': 'FmrsService.ListTasks'
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: ListTasksRequest }
            output: ListTasksResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              query: { MaxResults?: string | undefined; NextToken?: string | undefined }
            } & {
              header: {
                'X-Amz-Target': 'FmrsService.ListTasks'
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: ListTasksRequest }
            output: InvalidRequestException
            outputFormat: 'json'
            status: 480
          }
        | {
            input: {
              query: { MaxResults?: string | undefined; NextToken?: string | undefined }
            } & {
              header: {
                'X-Amz-Target': 'FmrsService.ListTasks'
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: ListTasksRequest }
            output: InternalException
            outputFormat: 'json'
            status: 481
          }
    }
  } & {
    '/#X-Amz-Target=FmrsService.StartTaskExecution': {
      $post:
        | {
            input: {
              header: {
                'X-Amz-Target': 'FmrsService.StartTaskExecution'
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: StartTaskExecutionRequest }
            output: StartTaskExecutionResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              header: {
                'X-Amz-Target': 'FmrsService.StartTaskExecution'
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: StartTaskExecutionRequest }
            output: InvalidRequestException
            outputFormat: 'json'
            status: 480
          }
        | {
            input: {
              header: {
                'X-Amz-Target': 'FmrsService.StartTaskExecution'
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: StartTaskExecutionRequest }
            output: InternalException
            outputFormat: 'json'
            status: 481
          }
    }
  } & {
    '/#X-Amz-Target=FmrsService.TagResource': {
      $post:
        | {
            input: {
              header: {
                'X-Amz-Target': 'FmrsService.TagResource'
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
        | {
            input: {
              header: {
                'X-Amz-Target': 'FmrsService.TagResource'
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: TagResourceRequest }
            output: InvalidRequestException
            outputFormat: 'json'
            status: 480
          }
        | {
            input: {
              header: {
                'X-Amz-Target': 'FmrsService.TagResource'
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: TagResourceRequest }
            output: InternalException
            outputFormat: 'json'
            status: 481
          }
    }
  } & {
    '/#X-Amz-Target=FmrsService.UntagResource': {
      $post:
        | {
            input: {
              header: {
                'X-Amz-Target': 'FmrsService.UntagResource'
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
        | {
            input: {
              header: {
                'X-Amz-Target': 'FmrsService.UntagResource'
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: UntagResourceRequest }
            output: InvalidRequestException
            outputFormat: 'json'
            status: 480
          }
        | {
            input: {
              header: {
                'X-Amz-Target': 'FmrsService.UntagResource'
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: UntagResourceRequest }
            output: InternalException
            outputFormat: 'json'
            status: 481
          }
    }
  } & {
    '/#X-Amz-Target=FmrsService.UpdateAgent': {
      $post:
        | {
            input: {
              header: {
                'X-Amz-Target': 'FmrsService.UpdateAgent'
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: UpdateAgentRequest }
            output: UpdateAgentResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              header: {
                'X-Amz-Target': 'FmrsService.UpdateAgent'
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: UpdateAgentRequest }
            output: InvalidRequestException
            outputFormat: 'json'
            status: 480
          }
        | {
            input: {
              header: {
                'X-Amz-Target': 'FmrsService.UpdateAgent'
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: UpdateAgentRequest }
            output: InternalException
            outputFormat: 'json'
            status: 481
          }
    }
  } & {
    '/#X-Amz-Target=FmrsService.UpdateLocationHdfs': {
      $post:
        | {
            input: {
              header: {
                'X-Amz-Target': 'FmrsService.UpdateLocationHdfs'
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: UpdateLocationHdfsRequest }
            output: UpdateLocationHdfsResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              header: {
                'X-Amz-Target': 'FmrsService.UpdateLocationHdfs'
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: UpdateLocationHdfsRequest }
            output: InvalidRequestException
            outputFormat: 'json'
            status: 480
          }
        | {
            input: {
              header: {
                'X-Amz-Target': 'FmrsService.UpdateLocationHdfs'
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: UpdateLocationHdfsRequest }
            output: InternalException
            outputFormat: 'json'
            status: 481
          }
    }
  } & {
    '/#X-Amz-Target=FmrsService.UpdateLocationNfs': {
      $post:
        | {
            input: {
              header: {
                'X-Amz-Target': 'FmrsService.UpdateLocationNfs'
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: UpdateLocationNfsRequest }
            output: UpdateLocationNfsResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              header: {
                'X-Amz-Target': 'FmrsService.UpdateLocationNfs'
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: UpdateLocationNfsRequest }
            output: InvalidRequestException
            outputFormat: 'json'
            status: 480
          }
        | {
            input: {
              header: {
                'X-Amz-Target': 'FmrsService.UpdateLocationNfs'
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: UpdateLocationNfsRequest }
            output: InternalException
            outputFormat: 'json'
            status: 481
          }
    }
  } & {
    '/#X-Amz-Target=FmrsService.UpdateLocationObjectStorage': {
      $post:
        | {
            input: {
              header: {
                'X-Amz-Target': 'FmrsService.UpdateLocationObjectStorage'
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: UpdateLocationObjectStorageRequest }
            output: UpdateLocationObjectStorageResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              header: {
                'X-Amz-Target': 'FmrsService.UpdateLocationObjectStorage'
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: UpdateLocationObjectStorageRequest }
            output: InvalidRequestException
            outputFormat: 'json'
            status: 480
          }
        | {
            input: {
              header: {
                'X-Amz-Target': 'FmrsService.UpdateLocationObjectStorage'
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: UpdateLocationObjectStorageRequest }
            output: InternalException
            outputFormat: 'json'
            status: 481
          }
    }
  } & {
    '/#X-Amz-Target=FmrsService.UpdateLocationSmb': {
      $post:
        | {
            input: {
              header: {
                'X-Amz-Target': 'FmrsService.UpdateLocationSmb'
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: UpdateLocationSmbRequest }
            output: UpdateLocationSmbResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              header: {
                'X-Amz-Target': 'FmrsService.UpdateLocationSmb'
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: UpdateLocationSmbRequest }
            output: InvalidRequestException
            outputFormat: 'json'
            status: 480
          }
        | {
            input: {
              header: {
                'X-Amz-Target': 'FmrsService.UpdateLocationSmb'
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: UpdateLocationSmbRequest }
            output: InternalException
            outputFormat: 'json'
            status: 481
          }
    }
  } & {
    '/#X-Amz-Target=FmrsService.UpdateTask': {
      $post:
        | {
            input: {
              header: {
                'X-Amz-Target': 'FmrsService.UpdateTask'
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: UpdateTaskRequest }
            output: UpdateTaskResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              header: {
                'X-Amz-Target': 'FmrsService.UpdateTask'
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: UpdateTaskRequest }
            output: InvalidRequestException
            outputFormat: 'json'
            status: 480
          }
        | {
            input: {
              header: {
                'X-Amz-Target': 'FmrsService.UpdateTask'
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: UpdateTaskRequest }
            output: InternalException
            outputFormat: 'json'
            status: 481
          }
    }
  } & {
    '/#X-Amz-Target=FmrsService.UpdateTaskExecution': {
      $post:
        | {
            input: {
              header: {
                'X-Amz-Target': 'FmrsService.UpdateTaskExecution'
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: UpdateTaskExecutionRequest }
            output: UpdateTaskExecutionResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              header: {
                'X-Amz-Target': 'FmrsService.UpdateTaskExecution'
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: UpdateTaskExecutionRequest }
            output: InvalidRequestException
            outputFormat: 'json'
            status: 480
          }
        | {
            input: {
              header: {
                'X-Amz-Target': 'FmrsService.UpdateTaskExecution'
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: UpdateTaskExecutionRequest }
            output: InternalException
            outputFormat: 'json'
            status: 481
          }
    }
  },
  '/'
>
export default routes
