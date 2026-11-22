type AssociateRoleToGroupResponse = { AssociatedAt?: {} | undefined }
type BadRequestException = { [x: string]: unknown }
type InternalServerErrorException = { [x: string]: unknown }
type DisassociateRoleFromGroupResponse = { DisassociatedAt?: {} | undefined }
type GetAssociatedRoleResponse = { AssociatedAt?: {} | undefined; RoleArn?: {} | undefined }
type AssociateServiceRoleToAccountResponse = { AssociatedAt?: {} | undefined }
type DisassociateServiceRoleFromAccountResponse = { DisassociatedAt?: {} | undefined }
type GetServiceRoleForAccountResponse = { AssociatedAt?: {} | undefined; RoleArn?: {} | undefined }
type String = string
type CreateConnectorDefinitionResponse = {
  Arn?: {} | undefined
  CreationTimestamp?: {} | undefined
  Id?: {} | undefined
  LastUpdatedTimestamp?: {} | undefined
  LatestVersion?: {} | undefined
  LatestVersionArn?: {} | undefined
  Name?: {} | undefined
}
type ListConnectorDefinitionsResponse = { Definitions?: {} | undefined; NextToken?: {} | undefined }
type Connector = { ConnectorArn: {}; Id: {}; Parameters?: {} | undefined }
type CreateConnectorDefinitionVersionResponse = {
  Arn?: {} | undefined
  CreationTimestamp?: {} | undefined
  Id?: {} | undefined
  Version?: {} | undefined
}
type ListConnectorDefinitionVersionsResponse = {
  NextToken?: {} | undefined
  Versions?: {} | undefined
}
type CreateCoreDefinitionResponse = {
  Arn?: {} | undefined
  CreationTimestamp?: {} | undefined
  Id?: {} | undefined
  LastUpdatedTimestamp?: {} | undefined
  LatestVersion?: {} | undefined
  LatestVersionArn?: {} | undefined
  Name?: {} | undefined
}
type ListCoreDefinitionsResponse = { Definitions?: {} | undefined; NextToken?: {} | undefined }
type Core = { CertificateArn: {}; Id: {}; SyncShadow?: {} | undefined; ThingArn: {} }
type CreateCoreDefinitionVersionResponse = {
  Arn?: {} | undefined
  CreationTimestamp?: {} | undefined
  Id?: {} | undefined
  Version?: {} | undefined
}
type ListCoreDefinitionVersionsResponse = { NextToken?: {} | undefined; Versions?: {} | undefined }
type CreateDeploymentResponse = { DeploymentArn?: {} | undefined; DeploymentId?: {} | undefined }
type ListDeploymentsResponse = { Deployments?: {} | undefined; NextToken?: {} | undefined }
type CreateDeviceDefinitionResponse = {
  Arn?: {} | undefined
  CreationTimestamp?: {} | undefined
  Id?: {} | undefined
  LastUpdatedTimestamp?: {} | undefined
  LatestVersion?: {} | undefined
  LatestVersionArn?: {} | undefined
  Name?: {} | undefined
}
type ListDeviceDefinitionsResponse = { Definitions?: {} | undefined; NextToken?: {} | undefined }
type Device = { CertificateArn: {}; Id: {}; SyncShadow?: {} | undefined; ThingArn: {} }
type CreateDeviceDefinitionVersionResponse = {
  Arn?: {} | undefined
  CreationTimestamp?: {} | undefined
  Id?: {} | undefined
  Version?: {} | undefined
}
type ListDeviceDefinitionVersionsResponse = {
  NextToken?: {} | undefined
  Versions?: {} | undefined
}
type FunctionIsolationMode = 'GreengrassContainer' | 'NoContainer'
type FunctionRunAsConfig = { Gid?: {} | undefined; Uid?: {} | undefined }
type FunctionDefaultExecutionConfig = {
  IsolationMode?: FunctionIsolationMode | undefined
  RunAs?: FunctionRunAsConfig | undefined
}
type CreateFunctionDefinitionResponse = {
  Arn?: {} | undefined
  CreationTimestamp?: {} | undefined
  Id?: {} | undefined
  LastUpdatedTimestamp?: {} | undefined
  LatestVersion?: {} | undefined
  LatestVersionArn?: {} | undefined
  Name?: {} | undefined
}
type ListFunctionDefinitionsResponse = { Definitions?: {} | undefined; NextToken?: {} | undefined }
type Function = {
  FunctionArn?: {} | undefined
  FunctionConfiguration?:
    | {
        EncodingType?: {} | undefined
        Environment?:
          | {
              AccessSysfs?: {} | undefined
              Execution?:
                | {
                    IsolationMode?: FunctionIsolationMode | undefined
                    RunAs?: FunctionRunAsConfig | undefined
                  }
                | undefined
              ResourceAccessPolicies?: {} | undefined
              Variables?: {} | undefined
            }
          | undefined
        ExecArgs?: {} | undefined
        Executable?: {} | undefined
        MemorySize?: {} | undefined
        Pinned?: {} | undefined
        Timeout?: {} | undefined
        FunctionRuntimeOverride?: {} | undefined
      }
    | undefined
  Id: {}
}
type CreateFunctionDefinitionVersionResponse = {
  Arn?: {} | undefined
  CreationTimestamp?: {} | undefined
  Id?: {} | undefined
  Version?: {} | undefined
}
type ListFunctionDefinitionVersionsResponse = {
  NextToken?: {} | undefined
  Versions?: {} | undefined
}
type CreateGroupResponse = {
  Arn?: {} | undefined
  CreationTimestamp?: {} | undefined
  Id?: {} | undefined
  LastUpdatedTimestamp?: {} | undefined
  LatestVersion?: {} | undefined
  LatestVersionArn?: {} | undefined
  Name?: {} | undefined
}
type ListGroupsResponse = { Groups?: {} | undefined; NextToken?: {} | undefined }
type CreateGroupCertificateAuthorityResponse = { GroupCertificateAuthorityArn?: {} | undefined }
type ListGroupCertificateAuthoritiesResponse = { GroupCertificateAuthorities?: {} | undefined }
type CreateGroupVersionResponse = {
  Arn?: {} | undefined
  CreationTimestamp?: {} | undefined
  Id?: {} | undefined
  Version?: {} | undefined
}
type ListGroupVersionsResponse = { NextToken?: {} | undefined; Versions?: {} | undefined }
type CreateLoggerDefinitionResponse = {
  Arn?: {} | undefined
  CreationTimestamp?: {} | undefined
  Id?: {} | undefined
  LastUpdatedTimestamp?: {} | undefined
  LatestVersion?: {} | undefined
  LatestVersionArn?: {} | undefined
  Name?: {} | undefined
}
type ListLoggerDefinitionsResponse = { Definitions?: {} | undefined; NextToken?: {} | undefined }
type Logger = { Component: {}; Id: {}; Level: {}; Space?: {} | undefined; Type: {} }
type CreateLoggerDefinitionVersionResponse = {
  Arn?: {} | undefined
  CreationTimestamp?: {} | undefined
  Id?: {} | undefined
  Version?: {} | undefined
}
type ListLoggerDefinitionVersionsResponse = {
  NextToken?: {} | undefined
  Versions?: {} | undefined
}
type CreateResourceDefinitionResponse = {
  Arn?: {} | undefined
  CreationTimestamp?: {} | undefined
  Id?: {} | undefined
  LastUpdatedTimestamp?: {} | undefined
  LatestVersion?: {} | undefined
  LatestVersionArn?: {} | undefined
  Name?: {} | undefined
}
type ListResourceDefinitionsResponse = { Definitions?: {} | undefined; NextToken?: {} | undefined }
type ResourceDownloadOwnerSetting = { GroupOwner: {}; GroupPermission: {} }
type Resource = {
  Id: {}
  Name: {}
  ResourceDataContainer: {
    LocalDeviceResourceData?:
      | {
          GroupOwnerSetting?:
            | { AutoAddGroupOwner?: {} | undefined; GroupOwner?: {} | undefined }
            | undefined
          SourcePath?: {} | undefined
        }
      | undefined
    LocalVolumeResourceData?:
      | {
          DestinationPath?: {} | undefined
          GroupOwnerSetting?:
            | { AutoAddGroupOwner?: {} | undefined; GroupOwner?: {} | undefined }
            | undefined
          SourcePath?: {} | undefined
        }
      | undefined
    S3MachineLearningModelResourceData?:
      | {
          DestinationPath?: {} | undefined
          OwnerSetting?: ResourceDownloadOwnerSetting | undefined
          S3Uri?: {} | undefined
        }
      | undefined
    SageMakerMachineLearningModelResourceData?:
      | {
          DestinationPath?: {} | undefined
          OwnerSetting?: ResourceDownloadOwnerSetting | undefined
          SageMakerJobArn?: {} | undefined
        }
      | undefined
    SecretsManagerSecretResourceData?:
      | { ARN?: {} | undefined; AdditionalStagingLabelsToDownload?: {} | undefined }
      | undefined
  }
}
type CreateResourceDefinitionVersionResponse = {
  Arn?: {} | undefined
  CreationTimestamp?: {} | undefined
  Id?: {} | undefined
  Version?: {} | undefined
}
type ListResourceDefinitionVersionsResponse = {
  NextToken?: {} | undefined
  Versions?: {} | undefined
}
type CreateSoftwareUpdateJobResponse = {
  IotJobArn?: {} | undefined
  IotJobId?: {} | undefined
  PlatformSoftwareVersion?: {} | undefined
}
type CreateSubscriptionDefinitionResponse = {
  Arn?: {} | undefined
  CreationTimestamp?: {} | undefined
  Id?: {} | undefined
  LastUpdatedTimestamp?: {} | undefined
  LatestVersion?: {} | undefined
  LatestVersionArn?: {} | undefined
  Name?: {} | undefined
}
type ListSubscriptionDefinitionsResponse = {
  Definitions?: {} | undefined
  NextToken?: {} | undefined
}
type Subscription = { Id: {}; Source: {}; Subject: {}; Target: {} }
type CreateSubscriptionDefinitionVersionResponse = {
  Arn?: {} | undefined
  CreationTimestamp?: {} | undefined
  Id?: {} | undefined
  Version?: {} | undefined
}
type ListSubscriptionDefinitionVersionsResponse = {
  NextToken?: {} | undefined
  Versions?: {} | undefined
}
type DeleteConnectorDefinitionResponse = { [x: string]: unknown }
type GetConnectorDefinitionResponse = {
  Arn?: {} | undefined
  CreationTimestamp?: {} | undefined
  Id?: {} | undefined
  LastUpdatedTimestamp?: {} | undefined
  LatestVersion?: {} | undefined
  LatestVersionArn?: {} | undefined
  Name?: {} | undefined
  tags?: {} | undefined
}
type UpdateConnectorDefinitionResponse = { [x: string]: unknown }
type DeleteCoreDefinitionResponse = { [x: string]: unknown }
type GetCoreDefinitionResponse = {
  Arn?: {} | undefined
  CreationTimestamp?: {} | undefined
  Id?: {} | undefined
  LastUpdatedTimestamp?: {} | undefined
  LatestVersion?: {} | undefined
  LatestVersionArn?: {} | undefined
  Name?: {} | undefined
  tags?: {} | undefined
}
type UpdateCoreDefinitionResponse = { [x: string]: unknown }
type DeleteDeviceDefinitionResponse = { [x: string]: unknown }
type GetDeviceDefinitionResponse = {
  Arn?: {} | undefined
  CreationTimestamp?: {} | undefined
  Id?: {} | undefined
  LastUpdatedTimestamp?: {} | undefined
  LatestVersion?: {} | undefined
  LatestVersionArn?: {} | undefined
  Name?: {} | undefined
  tags?: {} | undefined
}
type UpdateDeviceDefinitionResponse = { [x: string]: unknown }
type DeleteFunctionDefinitionResponse = { [x: string]: unknown }
type GetFunctionDefinitionResponse = {
  Arn?: {} | undefined
  CreationTimestamp?: {} | undefined
  Id?: {} | undefined
  LastUpdatedTimestamp?: {} | undefined
  LatestVersion?: {} | undefined
  LatestVersionArn?: {} | undefined
  Name?: {} | undefined
  tags?: {} | undefined
}
type UpdateFunctionDefinitionResponse = { [x: string]: unknown }
type DeleteGroupResponse = { [x: string]: unknown }
type GetGroupResponse = {
  Arn?: {} | undefined
  CreationTimestamp?: {} | undefined
  Id?: {} | undefined
  LastUpdatedTimestamp?: {} | undefined
  LatestVersion?: {} | undefined
  LatestVersionArn?: {} | undefined
  Name?: {} | undefined
  tags?: {} | undefined
}
type UpdateGroupResponse = { [x: string]: unknown }
type DeleteLoggerDefinitionResponse = { [x: string]: unknown }
type GetLoggerDefinitionResponse = {
  Arn?: {} | undefined
  CreationTimestamp?: {} | undefined
  Id?: {} | undefined
  LastUpdatedTimestamp?: {} | undefined
  LatestVersion?: {} | undefined
  LatestVersionArn?: {} | undefined
  Name?: {} | undefined
  tags?: {} | undefined
}
type UpdateLoggerDefinitionResponse = { [x: string]: unknown }
type DeleteResourceDefinitionResponse = { [x: string]: unknown }
type GetResourceDefinitionResponse = {
  Arn?: {} | undefined
  CreationTimestamp?: {} | undefined
  Id?: {} | undefined
  LastUpdatedTimestamp?: {} | undefined
  LatestVersion?: {} | undefined
  LatestVersionArn?: {} | undefined
  Name?: {} | undefined
  tags?: {} | undefined
}
type UpdateResourceDefinitionResponse = { [x: string]: unknown }
type DeleteSubscriptionDefinitionResponse = { [x: string]: unknown }
type GetSubscriptionDefinitionResponse = {
  Arn?: {} | undefined
  CreationTimestamp?: {} | undefined
  Id?: {} | undefined
  LastUpdatedTimestamp?: {} | undefined
  LatestVersion?: {} | undefined
  LatestVersionArn?: {} | undefined
  Name?: {} | undefined
  tags?: {} | undefined
}
type UpdateSubscriptionDefinitionResponse = { [x: string]: unknown }
type GetBulkDeploymentStatusResponse = {
  BulkDeploymentMetrics?:
    | {
        InvalidInputRecords?: {} | undefined
        RecordsProcessed?: {} | undefined
        RetryAttempts?: {} | undefined
      }
    | undefined
  BulkDeploymentStatus?: {} | undefined
  CreatedAt?: {} | undefined
  ErrorDetails?: {} | undefined
  ErrorMessage?: {} | undefined
  tags?: {} | undefined
}
type GetConnectivityInfoResponse = { ConnectivityInfo?: {} | undefined; Message?: {} | undefined }
type ConnectivityInfo = {
  HostAddress?: {} | undefined
  Id?: {} | undefined
  Metadata?: {} | undefined
  PortNumber?: {} | undefined
}
type UpdateConnectivityInfoResponse = { Message?: {} | undefined; Version?: {} | undefined }
type GetConnectorDefinitionVersionResponse = {
  Arn?: {} | undefined
  CreationTimestamp?: {} | undefined
  Definition?: { Connectors?: {} | undefined } | undefined
  Id?: {} | undefined
  NextToken?: {} | undefined
  Version?: {} | undefined
}
type GetCoreDefinitionVersionResponse = {
  Arn?: {} | undefined
  CreationTimestamp?: {} | undefined
  Definition?: { Cores?: {} | undefined } | undefined
  Id?: {} | undefined
  NextToken?: {} | undefined
  Version?: {} | undefined
}
type GetDeploymentStatusResponse = {
  DeploymentStatus?: {} | undefined
  DeploymentType?: {} | undefined
  ErrorDetails?: {} | undefined
  ErrorMessage?: {} | undefined
  UpdatedAt?: {} | undefined
}
type GetDeviceDefinitionVersionResponse = {
  Arn?: {} | undefined
  CreationTimestamp?: {} | undefined
  Definition?: { Devices?: {} | undefined } | undefined
  Id?: {} | undefined
  NextToken?: {} | undefined
  Version?: {} | undefined
}
type GetFunctionDefinitionVersionResponse = {
  Arn?: {} | undefined
  CreationTimestamp?: {} | undefined
  Definition?:
    | {
        DefaultConfig?: { Execution?: FunctionDefaultExecutionConfig | undefined } | undefined
        Functions?: {} | undefined
      }
    | undefined
  Id?: {} | undefined
  NextToken?: {} | undefined
  Version?: {} | undefined
}
type GetGroupCertificateAuthorityResponse = {
  GroupCertificateAuthorityArn?: {} | undefined
  GroupCertificateAuthorityId?: {} | undefined
  PemEncodedCertificate?: {} | undefined
}
type GetGroupCertificateConfigurationResponse = {
  CertificateAuthorityExpiryInMilliseconds?: {} | undefined
  CertificateExpiryInMilliseconds?: {} | undefined
  GroupId?: {} | undefined
}
type UpdateGroupCertificateConfigurationResponse = {
  CertificateAuthorityExpiryInMilliseconds?: {} | undefined
  CertificateExpiryInMilliseconds?: {} | undefined
  GroupId?: {} | undefined
}
type GetGroupVersionResponse = {
  Arn?: {} | undefined
  CreationTimestamp?: {} | undefined
  Definition?:
    | {
        ConnectorDefinitionVersionArn?: {} | undefined
        CoreDefinitionVersionArn?: {} | undefined
        DeviceDefinitionVersionArn?: {} | undefined
        FunctionDefinitionVersionArn?: {} | undefined
        LoggerDefinitionVersionArn?: {} | undefined
        ResourceDefinitionVersionArn?: {} | undefined
        SubscriptionDefinitionVersionArn?: {} | undefined
      }
    | undefined
  Id?: {} | undefined
  Version?: {} | undefined
}
type GetLoggerDefinitionVersionResponse = {
  Arn?: {} | undefined
  CreationTimestamp?: {} | undefined
  Definition?: { Loggers?: {} | undefined } | undefined
  Id?: {} | undefined
  Version?: {} | undefined
}
type GetResourceDefinitionVersionResponse = {
  Arn?: {} | undefined
  CreationTimestamp?: {} | undefined
  Definition?: { Resources?: {} | undefined } | undefined
  Id?: {} | undefined
  Version?: {} | undefined
}
type GetSubscriptionDefinitionVersionResponse = {
  Arn?: {} | undefined
  CreationTimestamp?: {} | undefined
  Definition?: { Subscriptions?: {} | undefined } | undefined
  Id?: {} | undefined
  NextToken?: {} | undefined
  Version?: {} | undefined
}
type GetThingRuntimeConfigurationResponse = {
  RuntimeConfiguration?:
    | {
        TelemetryConfiguration?:
          | { ConfigurationSyncStatus?: {} | undefined; Telemetry: {} }
          | undefined
      }
    | undefined
}
type UpdateThingRuntimeConfigurationResponse = { [x: string]: unknown }
type ListBulkDeploymentDetailedReportsResponse = {
  Deployments?: {} | undefined
  NextToken?: {} | undefined
}
type ListBulkDeploymentsResponse = { BulkDeployments?: {} | undefined; NextToken?: {} | undefined }
type StartBulkDeploymentResponse = {
  BulkDeploymentArn?: {} | undefined
  BulkDeploymentId?: {} | undefined
}
type Tags = { [x: string]: String }
type ListTagsForResourceResponse = { tags?: Tags | undefined }
type ResetDeploymentsResponse = { DeploymentArn?: {} | undefined; DeploymentId?: {} | undefined }
type StopBulkDeploymentResponse = { [x: string]: unknown }
declare const routes: import('@hono/zod-openapi').OpenAPIHono<
  import('hono/types').Env,
  {
    '/greengrass/groups/:GroupId/role': {
      $put:
        | {
            input: { param: { GroupId: string } } & {
              header: {
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: { RoleArn: string } }
            output: AssociateRoleToGroupResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { GroupId: string } } & {
              header: {
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: { RoleArn: string } }
            output: BadRequestException
            outputFormat: 'json'
            status: 480
          }
        | {
            input: { param: { GroupId: string } } & {
              header: {
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: { RoleArn: string } }
            output: InternalServerErrorException
            outputFormat: 'json'
            status: 481
          }
      $delete:
        | {
            input: { param: { GroupId: string } } & {
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
            output: DisassociateRoleFromGroupResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { GroupId: string } } & {
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
            output: BadRequestException
            outputFormat: 'json'
            status: 480
          }
        | {
            input: { param: { GroupId: string } } & {
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
            output: InternalServerErrorException
            outputFormat: 'json'
            status: 481
          }
      $get:
        | {
            input: { param: { GroupId: string } } & {
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
            output: GetAssociatedRoleResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { GroupId: string } } & {
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
            output: BadRequestException
            outputFormat: 'json'
            status: 480
          }
        | {
            input: { param: { GroupId: string } } & {
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
            output: InternalServerErrorException
            outputFormat: 'json'
            status: 481
          }
    }
  } & {
    '/greengrass/servicerole': {
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
            } & { json: { RoleArn: string } }
            output: AssociateServiceRoleToAccountResponse
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
            } & { json: { RoleArn: string } }
            output: BadRequestException
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
            } & { json: { RoleArn: string } }
            output: InternalServerErrorException
            outputFormat: 'json'
            status: 481
          }
      $delete:
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
            }
            output: DisassociateServiceRoleFromAccountResponse
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
            }
            output: InternalServerErrorException
            outputFormat: 'json'
            status: 480
          }
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
            }
            output: GetServiceRoleForAccountResponse
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
            }
            output: InternalServerErrorException
            outputFormat: 'json'
            status: 480
          }
    }
  } & {
    '/greengrass/definition/connectors': {
      $post:
        | {
            input: {
              header: {
                'X-Amzn-Client-Token'?: string | undefined
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
                InitialVersion?: { Connectors?: {} | undefined } | undefined
                Name?: string | undefined
                tags?: { [x: string]: String } | undefined
              }
            }
            output: CreateConnectorDefinitionResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              header: {
                'X-Amzn-Client-Token'?: string | undefined
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
                InitialVersion?: { Connectors?: {} | undefined } | undefined
                Name?: string | undefined
                tags?: { [x: string]: String } | undefined
              }
            }
            output: BadRequestException
            outputFormat: 'json'
            status: 480
          }
      $get: {
        input: { query: { MaxResults?: string | undefined; NextToken?: string | undefined } } & {
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
        output: ListConnectorDefinitionsResponse
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/greengrass/definition/connectors/:ConnectorDefinitionId/versions': {
      $post:
        | {
            input: { param: { ConnectorDefinitionId: string } } & {
              header: {
                'X-Amzn-Client-Token'?: string | undefined
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: { Connectors?: Connector[] | undefined } }
            output: CreateConnectorDefinitionVersionResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { ConnectorDefinitionId: string } } & {
              header: {
                'X-Amzn-Client-Token'?: string | undefined
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: { Connectors?: Connector[] | undefined } }
            output: BadRequestException
            outputFormat: 'json'
            status: 480
          }
      $get:
        | {
            input: { param: { ConnectorDefinitionId: string } } & {
              query: { MaxResults?: string | undefined; NextToken?: string | undefined }
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
            output: ListConnectorDefinitionVersionsResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { ConnectorDefinitionId: string } } & {
              query: { MaxResults?: string | undefined; NextToken?: string | undefined }
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
            output: BadRequestException
            outputFormat: 'json'
            status: 480
          }
    }
  } & {
    '/greengrass/definition/cores': {
      $post:
        | {
            input: {
              header: {
                'X-Amzn-Client-Token'?: string | undefined
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
                InitialVersion?: { Cores?: {} | undefined } | undefined
                Name?: string | undefined
                tags?: { [x: string]: String } | undefined
              }
            }
            output: CreateCoreDefinitionResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              header: {
                'X-Amzn-Client-Token'?: string | undefined
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
                InitialVersion?: { Cores?: {} | undefined } | undefined
                Name?: string | undefined
                tags?: { [x: string]: String } | undefined
              }
            }
            output: BadRequestException
            outputFormat: 'json'
            status: 480
          }
      $get: {
        input: { query: { MaxResults?: string | undefined; NextToken?: string | undefined } } & {
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
        output: ListCoreDefinitionsResponse
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/greengrass/definition/cores/:CoreDefinitionId/versions': {
      $post:
        | {
            input: { param: { CoreDefinitionId: string } } & {
              header: {
                'X-Amzn-Client-Token'?: string | undefined
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: { Cores?: Core[] | undefined } }
            output: CreateCoreDefinitionVersionResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { CoreDefinitionId: string } } & {
              header: {
                'X-Amzn-Client-Token'?: string | undefined
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: { Cores?: Core[] | undefined } }
            output: BadRequestException
            outputFormat: 'json'
            status: 480
          }
      $get:
        | {
            input: { param: { CoreDefinitionId: string } } & {
              query: { MaxResults?: string | undefined; NextToken?: string | undefined }
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
            output: ListCoreDefinitionVersionsResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { CoreDefinitionId: string } } & {
              query: { MaxResults?: string | undefined; NextToken?: string | undefined }
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
            output: BadRequestException
            outputFormat: 'json'
            status: 480
          }
    }
  } & {
    '/greengrass/groups/:GroupId/deployments': {
      $post:
        | {
            input: { param: { GroupId: string } } & {
              header: {
                'X-Amzn-Client-Token'?: string | undefined
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
                DeploymentId?: string | undefined
                DeploymentType:
                  | 'NewDeployment'
                  | 'Redeployment'
                  | 'ResetDeployment'
                  | 'ForceResetDeployment'
                GroupVersionId?: string | undefined
              }
            }
            output: CreateDeploymentResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { GroupId: string } } & {
              header: {
                'X-Amzn-Client-Token'?: string | undefined
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
                DeploymentId?: string | undefined
                DeploymentType:
                  | 'NewDeployment'
                  | 'Redeployment'
                  | 'ResetDeployment'
                  | 'ForceResetDeployment'
                GroupVersionId?: string | undefined
              }
            }
            output: BadRequestException
            outputFormat: 'json'
            status: 480
          }
      $get:
        | {
            input: { param: { GroupId: string } } & {
              query: { MaxResults?: string | undefined; NextToken?: string | undefined }
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
            output: ListDeploymentsResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { GroupId: string } } & {
              query: { MaxResults?: string | undefined; NextToken?: string | undefined }
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
            output: BadRequestException
            outputFormat: 'json'
            status: 480
          }
    }
  } & {
    '/greengrass/definition/devices': {
      $post:
        | {
            input: {
              header: {
                'X-Amzn-Client-Token'?: string | undefined
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
                InitialVersion?: { Devices?: {} | undefined } | undefined
                Name?: string | undefined
                tags?: { [x: string]: String } | undefined
              }
            }
            output: CreateDeviceDefinitionResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              header: {
                'X-Amzn-Client-Token'?: string | undefined
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
                InitialVersion?: { Devices?: {} | undefined } | undefined
                Name?: string | undefined
                tags?: { [x: string]: String } | undefined
              }
            }
            output: BadRequestException
            outputFormat: 'json'
            status: 480
          }
      $get: {
        input: { query: { MaxResults?: string | undefined; NextToken?: string | undefined } } & {
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
        output: ListDeviceDefinitionsResponse
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/greengrass/definition/devices/:DeviceDefinitionId/versions': {
      $post:
        | {
            input: { param: { DeviceDefinitionId: string } } & {
              header: {
                'X-Amzn-Client-Token'?: string | undefined
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: { Devices?: Device[] | undefined } }
            output: CreateDeviceDefinitionVersionResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { DeviceDefinitionId: string } } & {
              header: {
                'X-Amzn-Client-Token'?: string | undefined
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: { Devices?: Device[] | undefined } }
            output: BadRequestException
            outputFormat: 'json'
            status: 480
          }
      $get:
        | {
            input: { param: { DeviceDefinitionId: string } } & {
              query: { MaxResults?: string | undefined; NextToken?: string | undefined }
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
            output: ListDeviceDefinitionVersionsResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { DeviceDefinitionId: string } } & {
              query: { MaxResults?: string | undefined; NextToken?: string | undefined }
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
            output: BadRequestException
            outputFormat: 'json'
            status: 480
          }
    }
  } & {
    '/greengrass/definition/functions': {
      $post:
        | {
            input: {
              header: {
                'X-Amzn-Client-Token'?: string | undefined
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
                InitialVersion?:
                  | {
                      DefaultConfig?:
                        | { Execution?: FunctionDefaultExecutionConfig | undefined }
                        | undefined
                      Functions?: {} | undefined
                    }
                  | undefined
                Name?: string | undefined
                tags?: { [x: string]: String } | undefined
              }
            }
            output: CreateFunctionDefinitionResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              header: {
                'X-Amzn-Client-Token'?: string | undefined
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
                InitialVersion?:
                  | {
                      DefaultConfig?:
                        | { Execution?: FunctionDefaultExecutionConfig | undefined }
                        | undefined
                      Functions?: {} | undefined
                    }
                  | undefined
                Name?: string | undefined
                tags?: { [x: string]: String } | undefined
              }
            }
            output: BadRequestException
            outputFormat: 'json'
            status: 480
          }
      $get: {
        input: { query: { MaxResults?: string | undefined; NextToken?: string | undefined } } & {
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
        output: ListFunctionDefinitionsResponse
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/greengrass/definition/functions/:FunctionDefinitionId/versions': {
      $post:
        | {
            input: { param: { FunctionDefinitionId: string } } & {
              header: {
                'X-Amzn-Client-Token'?: string | undefined
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
                DefaultConfig?:
                  | { Execution?: FunctionDefaultExecutionConfig | undefined }
                  | undefined
                Functions?: Function[] | undefined
              }
            }
            output: CreateFunctionDefinitionVersionResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { FunctionDefinitionId: string } } & {
              header: {
                'X-Amzn-Client-Token'?: string | undefined
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
                DefaultConfig?:
                  | { Execution?: FunctionDefaultExecutionConfig | undefined }
                  | undefined
                Functions?: Function[] | undefined
              }
            }
            output: BadRequestException
            outputFormat: 'json'
            status: 480
          }
      $get:
        | {
            input: { param: { FunctionDefinitionId: string } } & {
              query: { MaxResults?: string | undefined; NextToken?: string | undefined }
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
            output: ListFunctionDefinitionVersionsResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { FunctionDefinitionId: string } } & {
              query: { MaxResults?: string | undefined; NextToken?: string | undefined }
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
            output: BadRequestException
            outputFormat: 'json'
            status: 480
          }
    }
  } & {
    '/greengrass/groups': {
      $post:
        | {
            input: {
              header: {
                'X-Amzn-Client-Token'?: string | undefined
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
                InitialVersion?:
                  | {
                      ConnectorDefinitionVersionArn?: {} | undefined
                      CoreDefinitionVersionArn?: {} | undefined
                      DeviceDefinitionVersionArn?: {} | undefined
                      FunctionDefinitionVersionArn?: {} | undefined
                      LoggerDefinitionVersionArn?: {} | undefined
                      ResourceDefinitionVersionArn?: {} | undefined
                      SubscriptionDefinitionVersionArn?: {} | undefined
                    }
                  | undefined
                Name: string
                tags?: { [x: string]: String } | undefined
              }
            }
            output: CreateGroupResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              header: {
                'X-Amzn-Client-Token'?: string | undefined
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
                InitialVersion?:
                  | {
                      ConnectorDefinitionVersionArn?: {} | undefined
                      CoreDefinitionVersionArn?: {} | undefined
                      DeviceDefinitionVersionArn?: {} | undefined
                      FunctionDefinitionVersionArn?: {} | undefined
                      LoggerDefinitionVersionArn?: {} | undefined
                      ResourceDefinitionVersionArn?: {} | undefined
                      SubscriptionDefinitionVersionArn?: {} | undefined
                    }
                  | undefined
                Name: string
                tags?: { [x: string]: String } | undefined
              }
            }
            output: BadRequestException
            outputFormat: 'json'
            status: 480
          }
      $get: {
        input: { query: { MaxResults?: string | undefined; NextToken?: string | undefined } } & {
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
        output: ListGroupsResponse
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/greengrass/groups/:GroupId/certificateauthorities': {
      $post:
        | {
            input: { param: { GroupId: string } } & {
              header: {
                'X-Amzn-Client-Token'?: string | undefined
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            }
            output: CreateGroupCertificateAuthorityResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { GroupId: string } } & {
              header: {
                'X-Amzn-Client-Token'?: string | undefined
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            }
            output: BadRequestException
            outputFormat: 'json'
            status: 480
          }
        | {
            input: { param: { GroupId: string } } & {
              header: {
                'X-Amzn-Client-Token'?: string | undefined
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            }
            output: InternalServerErrorException
            outputFormat: 'json'
            status: 481
          }
      $get:
        | {
            input: { param: { GroupId: string } } & {
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
            output: ListGroupCertificateAuthoritiesResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { GroupId: string } } & {
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
            output: BadRequestException
            outputFormat: 'json'
            status: 480
          }
        | {
            input: { param: { GroupId: string } } & {
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
            output: InternalServerErrorException
            outputFormat: 'json'
            status: 481
          }
    }
  } & {
    '/greengrass/groups/:GroupId/versions': {
      $post:
        | {
            input: { param: { GroupId: string } } & {
              header: {
                'X-Amzn-Client-Token'?: string | undefined
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
                ConnectorDefinitionVersionArn?: string | undefined
                CoreDefinitionVersionArn?: string | undefined
                DeviceDefinitionVersionArn?: string | undefined
                FunctionDefinitionVersionArn?: string | undefined
                LoggerDefinitionVersionArn?: string | undefined
                ResourceDefinitionVersionArn?: string | undefined
                SubscriptionDefinitionVersionArn?: string | undefined
              }
            }
            output: CreateGroupVersionResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { GroupId: string } } & {
              header: {
                'X-Amzn-Client-Token'?: string | undefined
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
                ConnectorDefinitionVersionArn?: string | undefined
                CoreDefinitionVersionArn?: string | undefined
                DeviceDefinitionVersionArn?: string | undefined
                FunctionDefinitionVersionArn?: string | undefined
                LoggerDefinitionVersionArn?: string | undefined
                ResourceDefinitionVersionArn?: string | undefined
                SubscriptionDefinitionVersionArn?: string | undefined
              }
            }
            output: BadRequestException
            outputFormat: 'json'
            status: 480
          }
      $get:
        | {
            input: { param: { GroupId: string } } & {
              query: { MaxResults?: string | undefined; NextToken?: string | undefined }
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
            output: ListGroupVersionsResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { GroupId: string } } & {
              query: { MaxResults?: string | undefined; NextToken?: string | undefined }
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
            output: BadRequestException
            outputFormat: 'json'
            status: 480
          }
    }
  } & {
    '/greengrass/definition/loggers': {
      $post:
        | {
            input: {
              header: {
                'X-Amzn-Client-Token'?: string | undefined
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
                InitialVersion?: { Loggers?: {} | undefined } | undefined
                Name?: string | undefined
                tags?: { [x: string]: String } | undefined
              }
            }
            output: CreateLoggerDefinitionResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              header: {
                'X-Amzn-Client-Token'?: string | undefined
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
                InitialVersion?: { Loggers?: {} | undefined } | undefined
                Name?: string | undefined
                tags?: { [x: string]: String } | undefined
              }
            }
            output: BadRequestException
            outputFormat: 'json'
            status: 480
          }
      $get: {
        input: { query: { MaxResults?: string | undefined; NextToken?: string | undefined } } & {
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
        output: ListLoggerDefinitionsResponse
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/greengrass/definition/loggers/:LoggerDefinitionId/versions': {
      $post:
        | {
            input: { param: { LoggerDefinitionId: string } } & {
              header: {
                'X-Amzn-Client-Token'?: string | undefined
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: { Loggers?: Logger[] | undefined } }
            output: CreateLoggerDefinitionVersionResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { LoggerDefinitionId: string } } & {
              header: {
                'X-Amzn-Client-Token'?: string | undefined
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: { Loggers?: Logger[] | undefined } }
            output: BadRequestException
            outputFormat: 'json'
            status: 480
          }
      $get:
        | {
            input: { param: { LoggerDefinitionId: string } } & {
              query: { MaxResults?: string | undefined; NextToken?: string | undefined }
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
            output: ListLoggerDefinitionVersionsResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { LoggerDefinitionId: string } } & {
              query: { MaxResults?: string | undefined; NextToken?: string | undefined }
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
            output: BadRequestException
            outputFormat: 'json'
            status: 480
          }
    }
  } & {
    '/greengrass/definition/resources': {
      $post:
        | {
            input: {
              header: {
                'X-Amzn-Client-Token'?: string | undefined
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
                InitialVersion?: { Resources?: {} | undefined } | undefined
                Name?: string | undefined
                tags?: { [x: string]: String } | undefined
              }
            }
            output: CreateResourceDefinitionResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              header: {
                'X-Amzn-Client-Token'?: string | undefined
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
                InitialVersion?: { Resources?: {} | undefined } | undefined
                Name?: string | undefined
                tags?: { [x: string]: String } | undefined
              }
            }
            output: BadRequestException
            outputFormat: 'json'
            status: 480
          }
      $get: {
        input: { query: { MaxResults?: string | undefined; NextToken?: string | undefined } } & {
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
        output: ListResourceDefinitionsResponse
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/greengrass/definition/resources/:ResourceDefinitionId/versions': {
      $post:
        | {
            input: { param: { ResourceDefinitionId: string } } & {
              header: {
                'X-Amzn-Client-Token'?: string | undefined
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: { Resources?: Resource[] | undefined } }
            output: CreateResourceDefinitionVersionResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { ResourceDefinitionId: string } } & {
              header: {
                'X-Amzn-Client-Token'?: string | undefined
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: { Resources?: Resource[] | undefined } }
            output: BadRequestException
            outputFormat: 'json'
            status: 480
          }
      $get:
        | {
            input: { param: { ResourceDefinitionId: string } } & {
              query: { MaxResults?: string | undefined; NextToken?: string | undefined }
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
            output: ListResourceDefinitionVersionsResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { ResourceDefinitionId: string } } & {
              query: { MaxResults?: string | undefined; NextToken?: string | undefined }
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
            output: BadRequestException
            outputFormat: 'json'
            status: 480
          }
    }
  } & {
    '/greengrass/updates': {
      $post:
        | {
            input: {
              header: {
                'X-Amzn-Client-Token'?: string | undefined
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
                S3UrlSignerRole: string
                SoftwareToUpdate: 'core' | 'ota_agent'
                UpdateAgentLogLevel?:
                  | 'NONE'
                  | 'TRACE'
                  | 'DEBUG'
                  | 'VERBOSE'
                  | 'INFO'
                  | 'WARN'
                  | 'ERROR'
                  | 'FATAL'
                  | undefined
                UpdateTargets: String[]
                UpdateTargetsArchitecture: 'armv6l' | 'armv7l' | 'x86_64' | 'aarch64'
                UpdateTargetsOperatingSystem: 'ubuntu' | 'raspbian' | 'amazon_linux' | 'openwrt'
              }
            }
            output: CreateSoftwareUpdateJobResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              header: {
                'X-Amzn-Client-Token'?: string | undefined
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
                S3UrlSignerRole: string
                SoftwareToUpdate: 'core' | 'ota_agent'
                UpdateAgentLogLevel?:
                  | 'NONE'
                  | 'TRACE'
                  | 'DEBUG'
                  | 'VERBOSE'
                  | 'INFO'
                  | 'WARN'
                  | 'ERROR'
                  | 'FATAL'
                  | undefined
                UpdateTargets: String[]
                UpdateTargetsArchitecture: 'armv6l' | 'armv7l' | 'x86_64' | 'aarch64'
                UpdateTargetsOperatingSystem: 'ubuntu' | 'raspbian' | 'amazon_linux' | 'openwrt'
              }
            }
            output: BadRequestException
            outputFormat: 'json'
            status: 480
          }
        | {
            input: {
              header: {
                'X-Amzn-Client-Token'?: string | undefined
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
                S3UrlSignerRole: string
                SoftwareToUpdate: 'core' | 'ota_agent'
                UpdateAgentLogLevel?:
                  | 'NONE'
                  | 'TRACE'
                  | 'DEBUG'
                  | 'VERBOSE'
                  | 'INFO'
                  | 'WARN'
                  | 'ERROR'
                  | 'FATAL'
                  | undefined
                UpdateTargets: String[]
                UpdateTargetsArchitecture: 'armv6l' | 'armv7l' | 'x86_64' | 'aarch64'
                UpdateTargetsOperatingSystem: 'ubuntu' | 'raspbian' | 'amazon_linux' | 'openwrt'
              }
            }
            output: InternalServerErrorException
            outputFormat: 'json'
            status: 481
          }
    }
  } & {
    '/greengrass/definition/subscriptions': {
      $post:
        | {
            input: {
              header: {
                'X-Amzn-Client-Token'?: string | undefined
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
                InitialVersion?: { Subscriptions?: {} | undefined } | undefined
                Name?: string | undefined
                tags?: { [x: string]: String } | undefined
              }
            }
            output: CreateSubscriptionDefinitionResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              header: {
                'X-Amzn-Client-Token'?: string | undefined
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
                InitialVersion?: { Subscriptions?: {} | undefined } | undefined
                Name?: string | undefined
                tags?: { [x: string]: String } | undefined
              }
            }
            output: BadRequestException
            outputFormat: 'json'
            status: 480
          }
      $get: {
        input: { query: { MaxResults?: string | undefined; NextToken?: string | undefined } } & {
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
        output: ListSubscriptionDefinitionsResponse
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/greengrass/definition/subscriptions/:SubscriptionDefinitionId/versions': {
      $post:
        | {
            input: { param: { SubscriptionDefinitionId: string } } & {
              header: {
                'X-Amzn-Client-Token'?: string | undefined
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: { Subscriptions?: Subscription[] | undefined } }
            output: CreateSubscriptionDefinitionVersionResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { SubscriptionDefinitionId: string } } & {
              header: {
                'X-Amzn-Client-Token'?: string | undefined
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: { Subscriptions?: Subscription[] | undefined } }
            output: BadRequestException
            outputFormat: 'json'
            status: 480
          }
      $get:
        | {
            input: { param: { SubscriptionDefinitionId: string } } & {
              query: { MaxResults?: string | undefined; NextToken?: string | undefined }
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
            output: ListSubscriptionDefinitionVersionsResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { SubscriptionDefinitionId: string } } & {
              query: { MaxResults?: string | undefined; NextToken?: string | undefined }
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
            output: BadRequestException
            outputFormat: 'json'
            status: 480
          }
    }
  } & {
    '/greengrass/definition/connectors/:ConnectorDefinitionId': {
      $delete:
        | {
            input: { param: { ConnectorDefinitionId: string } } & {
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
            output: DeleteConnectorDefinitionResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { ConnectorDefinitionId: string } } & {
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
            output: BadRequestException
            outputFormat: 'json'
            status: 480
          }
      $get:
        | {
            input: { param: { ConnectorDefinitionId: string } } & {
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
            output: GetConnectorDefinitionResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { ConnectorDefinitionId: string } } & {
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
            output: BadRequestException
            outputFormat: 'json'
            status: 480
          }
      $put:
        | {
            input: { param: { ConnectorDefinitionId: string } } & {
              header: {
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: { Name?: string | undefined } }
            output: UpdateConnectorDefinitionResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { ConnectorDefinitionId: string } } & {
              header: {
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: { Name?: string | undefined } }
            output: BadRequestException
            outputFormat: 'json'
            status: 480
          }
    }
  } & {
    '/greengrass/definition/cores/:CoreDefinitionId': {
      $delete:
        | {
            input: { param: { CoreDefinitionId: string } } & {
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
            output: DeleteCoreDefinitionResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { CoreDefinitionId: string } } & {
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
            output: BadRequestException
            outputFormat: 'json'
            status: 480
          }
      $get:
        | {
            input: { param: { CoreDefinitionId: string } } & {
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
            output: GetCoreDefinitionResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { CoreDefinitionId: string } } & {
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
            output: BadRequestException
            outputFormat: 'json'
            status: 480
          }
      $put:
        | {
            input: { param: { CoreDefinitionId: string } } & {
              header: {
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: { Name?: string | undefined } }
            output: UpdateCoreDefinitionResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { CoreDefinitionId: string } } & {
              header: {
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: { Name?: string | undefined } }
            output: BadRequestException
            outputFormat: 'json'
            status: 480
          }
    }
  } & {
    '/greengrass/definition/devices/:DeviceDefinitionId': {
      $delete:
        | {
            input: { param: { DeviceDefinitionId: string } } & {
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
            output: DeleteDeviceDefinitionResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { DeviceDefinitionId: string } } & {
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
            output: BadRequestException
            outputFormat: 'json'
            status: 480
          }
      $get:
        | {
            input: { param: { DeviceDefinitionId: string } } & {
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
            output: GetDeviceDefinitionResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { DeviceDefinitionId: string } } & {
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
            output: BadRequestException
            outputFormat: 'json'
            status: 480
          }
      $put:
        | {
            input: { param: { DeviceDefinitionId: string } } & {
              header: {
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: { Name?: string | undefined } }
            output: UpdateDeviceDefinitionResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { DeviceDefinitionId: string } } & {
              header: {
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: { Name?: string | undefined } }
            output: BadRequestException
            outputFormat: 'json'
            status: 480
          }
    }
  } & {
    '/greengrass/definition/functions/:FunctionDefinitionId': {
      $delete:
        | {
            input: { param: { FunctionDefinitionId: string } } & {
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
            output: DeleteFunctionDefinitionResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { FunctionDefinitionId: string } } & {
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
            output: BadRequestException
            outputFormat: 'json'
            status: 480
          }
      $get:
        | {
            input: { param: { FunctionDefinitionId: string } } & {
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
            output: GetFunctionDefinitionResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { FunctionDefinitionId: string } } & {
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
            output: BadRequestException
            outputFormat: 'json'
            status: 480
          }
      $put:
        | {
            input: { param: { FunctionDefinitionId: string } } & {
              header: {
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: { Name?: string | undefined } }
            output: UpdateFunctionDefinitionResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { FunctionDefinitionId: string } } & {
              header: {
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: { Name?: string | undefined } }
            output: BadRequestException
            outputFormat: 'json'
            status: 480
          }
    }
  } & {
    '/greengrass/groups/:GroupId': {
      $delete:
        | {
            input: { param: { GroupId: string } } & {
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
            output: DeleteGroupResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { GroupId: string } } & {
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
            output: BadRequestException
            outputFormat: 'json'
            status: 480
          }
      $get:
        | {
            input: { param: { GroupId: string } } & {
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
            output: GetGroupResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { GroupId: string } } & {
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
            output: BadRequestException
            outputFormat: 'json'
            status: 480
          }
      $put:
        | {
            input: { param: { GroupId: string } } & {
              header: {
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: { Name?: string | undefined } }
            output: UpdateGroupResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { GroupId: string } } & {
              header: {
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: { Name?: string | undefined } }
            output: BadRequestException
            outputFormat: 'json'
            status: 480
          }
    }
  } & {
    '/greengrass/definition/loggers/:LoggerDefinitionId': {
      $delete:
        | {
            input: { param: { LoggerDefinitionId: string } } & {
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
            output: DeleteLoggerDefinitionResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { LoggerDefinitionId: string } } & {
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
            output: BadRequestException
            outputFormat: 'json'
            status: 480
          }
      $get:
        | {
            input: { param: { LoggerDefinitionId: string } } & {
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
            output: GetLoggerDefinitionResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { LoggerDefinitionId: string } } & {
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
            output: BadRequestException
            outputFormat: 'json'
            status: 480
          }
      $put:
        | {
            input: { param: { LoggerDefinitionId: string } } & {
              header: {
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: { Name?: string | undefined } }
            output: UpdateLoggerDefinitionResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { LoggerDefinitionId: string } } & {
              header: {
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: { Name?: string | undefined } }
            output: BadRequestException
            outputFormat: 'json'
            status: 480
          }
    }
  } & {
    '/greengrass/definition/resources/:ResourceDefinitionId': {
      $delete:
        | {
            input: { param: { ResourceDefinitionId: string } } & {
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
            output: DeleteResourceDefinitionResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { ResourceDefinitionId: string } } & {
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
            output: BadRequestException
            outputFormat: 'json'
            status: 480
          }
      $get:
        | {
            input: { param: { ResourceDefinitionId: string } } & {
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
            output: GetResourceDefinitionResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { ResourceDefinitionId: string } } & {
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
            output: BadRequestException
            outputFormat: 'json'
            status: 480
          }
      $put:
        | {
            input: { param: { ResourceDefinitionId: string } } & {
              header: {
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: { Name?: string | undefined } }
            output: UpdateResourceDefinitionResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { ResourceDefinitionId: string } } & {
              header: {
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: { Name?: string | undefined } }
            output: BadRequestException
            outputFormat: 'json'
            status: 480
          }
    }
  } & {
    '/greengrass/definition/subscriptions/:SubscriptionDefinitionId': {
      $delete:
        | {
            input: { param: { SubscriptionDefinitionId: string } } & {
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
            output: DeleteSubscriptionDefinitionResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { SubscriptionDefinitionId: string } } & {
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
            output: BadRequestException
            outputFormat: 'json'
            status: 480
          }
      $get:
        | {
            input: { param: { SubscriptionDefinitionId: string } } & {
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
            output: GetSubscriptionDefinitionResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { SubscriptionDefinitionId: string } } & {
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
            output: BadRequestException
            outputFormat: 'json'
            status: 480
          }
      $put:
        | {
            input: { param: { SubscriptionDefinitionId: string } } & {
              header: {
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: { Name?: string | undefined } }
            output: UpdateSubscriptionDefinitionResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { SubscriptionDefinitionId: string } } & {
              header: {
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: { Name?: string | undefined } }
            output: BadRequestException
            outputFormat: 'json'
            status: 480
          }
    }
  } & {
    '/greengrass/bulk/deployments/:BulkDeploymentId/status': {
      $get:
        | {
            input: { param: { BulkDeploymentId: string } } & {
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
            output: GetBulkDeploymentStatusResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { BulkDeploymentId: string } } & {
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
            output: BadRequestException
            outputFormat: 'json'
            status: 480
          }
    }
  } & {
    '/greengrass/things/:ThingName/connectivityInfo': {
      $get:
        | {
            input: { param: { ThingName: string } } & {
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
            output: GetConnectivityInfoResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { ThingName: string } } & {
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
            output: BadRequestException
            outputFormat: 'json'
            status: 480
          }
        | {
            input: { param: { ThingName: string } } & {
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
            output: InternalServerErrorException
            outputFormat: 'json'
            status: 481
          }
      $put:
        | {
            input: { param: { ThingName: string } } & {
              header: {
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: { ConnectivityInfo?: ConnectivityInfo[] | undefined } }
            output: UpdateConnectivityInfoResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { ThingName: string } } & {
              header: {
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: { ConnectivityInfo?: ConnectivityInfo[] | undefined } }
            output: BadRequestException
            outputFormat: 'json'
            status: 480
          }
        | {
            input: { param: { ThingName: string } } & {
              header: {
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: { ConnectivityInfo?: ConnectivityInfo[] | undefined } }
            output: InternalServerErrorException
            outputFormat: 'json'
            status: 481
          }
    }
  } & {
    '/greengrass/definition/connectors/:ConnectorDefinitionId/versions/:ConnectorDefinitionVersionId': {
      $get:
        | {
            input: {
              param: { ConnectorDefinitionId: string; ConnectorDefinitionVersionId: string }
            } & { query: { NextToken?: string | undefined } } & {
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
            output: GetConnectorDefinitionVersionResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              param: { ConnectorDefinitionId: string; ConnectorDefinitionVersionId: string }
            } & { query: { NextToken?: string | undefined } } & {
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
            output: BadRequestException
            outputFormat: 'json'
            status: 480
          }
    }
  } & {
    '/greengrass/definition/cores/:CoreDefinitionId/versions/:CoreDefinitionVersionId': {
      $get:
        | {
            input: { param: { CoreDefinitionId: string; CoreDefinitionVersionId: string } } & {
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
            output: GetCoreDefinitionVersionResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { CoreDefinitionId: string; CoreDefinitionVersionId: string } } & {
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
            output: BadRequestException
            outputFormat: 'json'
            status: 480
          }
    }
  } & {
    '/greengrass/groups/:GroupId/deployments/:DeploymentId/status': {
      $get:
        | {
            input: { param: { DeploymentId: string; GroupId: string } } & {
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
            output: GetDeploymentStatusResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { DeploymentId: string; GroupId: string } } & {
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
            output: BadRequestException
            outputFormat: 'json'
            status: 480
          }
    }
  } & {
    '/greengrass/definition/devices/:DeviceDefinitionId/versions/:DeviceDefinitionVersionId': {
      $get:
        | {
            input: { param: { DeviceDefinitionId: string; DeviceDefinitionVersionId: string } } & {
              query: { NextToken?: string | undefined }
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
            output: GetDeviceDefinitionVersionResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { DeviceDefinitionId: string; DeviceDefinitionVersionId: string } } & {
              query: { NextToken?: string | undefined }
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
            output: BadRequestException
            outputFormat: 'json'
            status: 480
          }
    }
  } & {
    '/greengrass/definition/functions/:FunctionDefinitionId/versions/:FunctionDefinitionVersionId': {
      $get:
        | {
            input: {
              param: { FunctionDefinitionId: string; FunctionDefinitionVersionId: string }
            } & { query: { NextToken?: string | undefined } } & {
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
            output: GetFunctionDefinitionVersionResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              param: { FunctionDefinitionId: string; FunctionDefinitionVersionId: string }
            } & { query: { NextToken?: string | undefined } } & {
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
            output: BadRequestException
            outputFormat: 'json'
            status: 480
          }
    }
  } & {
    '/greengrass/groups/:GroupId/certificateauthorities/:CertificateAuthorityId': {
      $get:
        | {
            input: { param: { CertificateAuthorityId: string; GroupId: string } } & {
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
            output: GetGroupCertificateAuthorityResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { CertificateAuthorityId: string; GroupId: string } } & {
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
            output: BadRequestException
            outputFormat: 'json'
            status: 480
          }
        | {
            input: { param: { CertificateAuthorityId: string; GroupId: string } } & {
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
            output: InternalServerErrorException
            outputFormat: 'json'
            status: 481
          }
    }
  } & {
    '/greengrass/groups/:GroupId/certificateauthorities/configuration/expiry': {
      $get:
        | {
            input: { param: { GroupId: string } } & {
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
            output: GetGroupCertificateConfigurationResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { GroupId: string } } & {
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
            output: BadRequestException
            outputFormat: 'json'
            status: 480
          }
        | {
            input: { param: { GroupId: string } } & {
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
            output: InternalServerErrorException
            outputFormat: 'json'
            status: 481
          }
      $put:
        | {
            input: { param: { GroupId: string } } & {
              header: {
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: { CertificateExpiryInMilliseconds?: string | undefined } }
            output: UpdateGroupCertificateConfigurationResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { GroupId: string } } & {
              header: {
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: { CertificateExpiryInMilliseconds?: string | undefined } }
            output: BadRequestException
            outputFormat: 'json'
            status: 480
          }
        | {
            input: { param: { GroupId: string } } & {
              header: {
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: { CertificateExpiryInMilliseconds?: string | undefined } }
            output: InternalServerErrorException
            outputFormat: 'json'
            status: 481
          }
    }
  } & {
    '/greengrass/groups/:GroupId/versions/:GroupVersionId': {
      $get:
        | {
            input: { param: { GroupId: string; GroupVersionId: string } } & {
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
            output: GetGroupVersionResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { GroupId: string; GroupVersionId: string } } & {
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
            output: BadRequestException
            outputFormat: 'json'
            status: 480
          }
    }
  } & {
    '/greengrass/definition/loggers/:LoggerDefinitionId/versions/:LoggerDefinitionVersionId': {
      $get:
        | {
            input: { param: { LoggerDefinitionId: string; LoggerDefinitionVersionId: string } } & {
              query: { NextToken?: string | undefined }
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
            output: GetLoggerDefinitionVersionResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { LoggerDefinitionId: string; LoggerDefinitionVersionId: string } } & {
              query: { NextToken?: string | undefined }
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
            output: BadRequestException
            outputFormat: 'json'
            status: 480
          }
    }
  } & {
    '/greengrass/definition/resources/:ResourceDefinitionId/versions/:ResourceDefinitionVersionId': {
      $get:
        | {
            input: {
              param: { ResourceDefinitionId: string; ResourceDefinitionVersionId: string }
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
            output: GetResourceDefinitionVersionResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              param: { ResourceDefinitionId: string; ResourceDefinitionVersionId: string }
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
            output: BadRequestException
            outputFormat: 'json'
            status: 480
          }
    }
  } & {
    '/greengrass/definition/subscriptions/:SubscriptionDefinitionId/versions/:SubscriptionDefinitionVersionId': {
      $get:
        | {
            input: {
              param: { SubscriptionDefinitionId: string; SubscriptionDefinitionVersionId: string }
            } & { query: { NextToken?: string | undefined } } & {
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
            output: GetSubscriptionDefinitionVersionResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              param: { SubscriptionDefinitionId: string; SubscriptionDefinitionVersionId: string }
            } & { query: { NextToken?: string | undefined } } & {
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
            output: BadRequestException
            outputFormat: 'json'
            status: 480
          }
    }
  } & {
    '/greengrass/things/:ThingName/runtimeconfig': {
      $get:
        | {
            input: { param: { ThingName: string } } & {
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
            output: GetThingRuntimeConfigurationResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { ThingName: string } } & {
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
            output: BadRequestException
            outputFormat: 'json'
            status: 480
          }
        | {
            input: { param: { ThingName: string } } & {
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
            output: InternalServerErrorException
            outputFormat: 'json'
            status: 481
          }
      $put:
        | {
            input: { param: { ThingName: string } } & {
              header: {
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: { TelemetryConfiguration?: { Telemetry?: {} | undefined } | undefined } }
            output: UpdateThingRuntimeConfigurationResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { ThingName: string } } & {
              header: {
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: { TelemetryConfiguration?: { Telemetry?: {} | undefined } | undefined } }
            output: BadRequestException
            outputFormat: 'json'
            status: 480
          }
        | {
            input: { param: { ThingName: string } } & {
              header: {
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: { TelemetryConfiguration?: { Telemetry?: {} | undefined } | undefined } }
            output: InternalServerErrorException
            outputFormat: 'json'
            status: 481
          }
    }
  } & {
    '/greengrass/bulk/deployments/:BulkDeploymentId/detailed-reports': {
      $get:
        | {
            input: { param: { BulkDeploymentId: string } } & {
              query: { MaxResults?: string | undefined; NextToken?: string | undefined }
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
            output: ListBulkDeploymentDetailedReportsResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { BulkDeploymentId: string } } & {
              query: { MaxResults?: string | undefined; NextToken?: string | undefined }
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
            output: BadRequestException
            outputFormat: 'json'
            status: 480
          }
    }
  } & {
    '/greengrass/bulk/deployments': {
      $get:
        | {
            input: {
              query: { MaxResults?: string | undefined; NextToken?: string | undefined }
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
            output: ListBulkDeploymentsResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              query: { MaxResults?: string | undefined; NextToken?: string | undefined }
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
            output: BadRequestException
            outputFormat: 'json'
            status: 480
          }
      $post:
        | {
            input: {
              header: {
                'X-Amzn-Client-Token'?: string | undefined
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
                ExecutionRoleArn: string
                InputFileUri: string
                tags?: { [x: string]: String } | undefined
              }
            }
            output: StartBulkDeploymentResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              header: {
                'X-Amzn-Client-Token'?: string | undefined
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
                ExecutionRoleArn: string
                InputFileUri: string
                tags?: { [x: string]: String } | undefined
              }
            }
            output: BadRequestException
            outputFormat: 'json'
            status: 480
          }
    }
  } & {
    '/tags/:resource-arn': {
      $get:
        | {
            input: { param: { 'resource-arn': string } } & {
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
            input: { param: { 'resource-arn': string } } & {
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
            output: BadRequestException
            outputFormat: 'json'
            status: 480
          }
      $post:
        | {
            input: { param: { 'resource-arn': string } } & {
              header: {
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: { tags?: { [x: string]: String } | undefined } }
            output: {}
            outputFormat: string
            status: 204
          }
        | {
            input: { param: { 'resource-arn': string } } & {
              header: {
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: { tags?: { [x: string]: String } | undefined } }
            output: BadRequestException
            outputFormat: 'json'
            status: 480
          }
    }
  } & {
    '/greengrass/groups/:GroupId/deployments/$reset': {
      $post:
        | {
            input: { param: { GroupId: string } } & {
              header: {
                'X-Amzn-Client-Token'?: string | undefined
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: { Force?: boolean | undefined } }
            output: ResetDeploymentsResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { GroupId: string } } & {
              header: {
                'X-Amzn-Client-Token'?: string | undefined
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: { Force?: boolean | undefined } }
            output: BadRequestException
            outputFormat: 'json'
            status: 480
          }
    }
  } & {
    '/greengrass/bulk/deployments/:BulkDeploymentId/$stop': {
      $put:
        | {
            input: { param: { BulkDeploymentId: string } } & {
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
            output: StopBulkDeploymentResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { BulkDeploymentId: string } } & {
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
            output: BadRequestException
            outputFormat: 'json'
            status: 480
          }
    }
  } & {
    '/tags/:resource-arn#tagKeys': {
      $delete:
        | {
            input: { param: { 'resource-arn': string } } & { query: { tagKeys: String[] } } & {
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
            input: { param: { 'resource-arn': string } } & { query: { tagKeys: String[] } } & {
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
            output: BadRequestException
            outputFormat: 'json'
            status: 480
          }
    }
  },
  '/'
>
export default routes
