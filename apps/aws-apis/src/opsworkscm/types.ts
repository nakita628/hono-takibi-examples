type AssociateNodeRequest = { ServerName: {}; NodeName: {}; EngineAttributes: {} }
type AssociateNodeResponse = { NodeAssociationStatusToken?: {} | undefined }
type InvalidStateException = { [x: string]: unknown }
type ResourceNotFoundException = { [x: string]: unknown }
type ValidationException = { [x: string]: unknown }
type CreateBackupRequest = { ServerName: {}; Description?: {} | undefined; Tags?: {} | undefined }
type CreateBackupResponse = {
  Backup?:
    | {
        BackupArn?: {} | undefined
        BackupId?: {} | undefined
        BackupType?: {} | undefined
        CreatedAt?: {} | undefined
        Description?: {} | undefined
        Engine?: {} | undefined
        EngineModel?: {} | undefined
        EngineVersion?: {} | undefined
        InstanceProfileArn?: {} | undefined
        InstanceType?: {} | undefined
        KeyPair?: {} | undefined
        PreferredBackupWindow?: {} | undefined
        PreferredMaintenanceWindow?: {} | undefined
        S3DataSize?: {} | undefined
        S3DataUrl?: {} | undefined
        S3LogUrl?: {} | undefined
        SecurityGroupIds?: {} | undefined
        ServerName?: {} | undefined
        ServiceRoleArn?: {} | undefined
        Status?: {} | undefined
        StatusDescription?: {} | undefined
        SubnetIds?: {} | undefined
        ToolsVersion?: {} | undefined
        UserArn?: {} | undefined
      }
    | undefined
}
type LimitExceededException = { [x: string]: unknown }
type CreateServerRequest = {
  AssociatePublicIpAddress?: {} | undefined
  CustomDomain?: {} | undefined
  CustomCertificate?: {} | undefined
  CustomPrivateKey?: {} | undefined
  DisableAutomatedBackup?: {} | undefined
  Engine: {}
  EngineModel?: {} | undefined
  EngineVersion?: {} | undefined
  EngineAttributes?: {} | undefined
  BackupRetentionCount?: {} | undefined
  ServerName: {}
  InstanceProfileArn: {}
  InstanceType: {}
  KeyPair?: {} | undefined
  PreferredMaintenanceWindow?: {} | undefined
  PreferredBackupWindow?: {} | undefined
  SecurityGroupIds?: {} | undefined
  ServiceRoleArn: {}
  SubnetIds?: {} | undefined
  Tags?: {} | undefined
  BackupId?: {} | undefined
}
type CreateServerResponse = {
  Server?:
    | {
        AssociatePublicIpAddress?: {} | undefined
        BackupRetentionCount?: {} | undefined
        ServerName?: {} | undefined
        CreatedAt?: {} | undefined
        CloudFormationStackArn?: {} | undefined
        CustomDomain?: {} | undefined
        DisableAutomatedBackup?: {} | undefined
        Endpoint?: {} | undefined
        Engine?: {} | undefined
        EngineModel?: {} | undefined
        EngineAttributes?: {} | undefined
        EngineVersion?: {} | undefined
        InstanceProfileArn?: {} | undefined
        InstanceType?: {} | undefined
        KeyPair?: {} | undefined
        MaintenanceStatus?: {} | undefined
        PreferredMaintenanceWindow?: {} | undefined
        PreferredBackupWindow?: {} | undefined
        SecurityGroupIds?: {} | undefined
        ServiceRoleArn?: {} | undefined
        Status?: {} | undefined
        StatusReason?: {} | undefined
        SubnetIds?: {} | undefined
        ServerArn?: {} | undefined
      }
    | undefined
}
type ResourceAlreadyExistsException = { [x: string]: unknown }
type DeleteBackupRequest = { BackupId: {} }
type DeleteBackupResponse = { [x: string]: unknown }
type DeleteServerRequest = { ServerName: {} }
type DeleteServerResponse = { [x: string]: unknown }
type DescribeAccountAttributesRequest = { [x: string]: unknown }
type DescribeAccountAttributesResponse = { Attributes?: {} | undefined }
type DescribeBackupsRequest = {
  BackupId?: {} | undefined
  ServerName?: {} | undefined
  NextToken?: {} | undefined
  MaxResults?: {} | undefined
}
type DescribeBackupsResponse = { Backups?: {} | undefined; NextToken?: {} | undefined }
type InvalidNextTokenException = { [x: string]: unknown }
type DescribeEventsRequest = {
  ServerName: {}
  NextToken?: {} | undefined
  MaxResults?: {} | undefined
}
type DescribeEventsResponse = { ServerEvents?: {} | undefined; NextToken?: {} | undefined }
type DescribeNodeAssociationStatusRequest = { NodeAssociationStatusToken: {}; ServerName: {} }
type DescribeNodeAssociationStatusResponse = {
  NodeAssociationStatus?: {} | undefined
  EngineAttributes?: {} | undefined
}
type DescribeServersRequest = {
  ServerName?: {} | undefined
  NextToken?: {} | undefined
  MaxResults?: {} | undefined
}
type DescribeServersResponse = { Servers?: {} | undefined; NextToken?: {} | undefined }
type DisassociateNodeRequest = { ServerName: {}; NodeName: {}; EngineAttributes?: {} | undefined }
type DisassociateNodeResponse = { NodeAssociationStatusToken?: {} | undefined }
type ExportServerEngineAttributeRequest = {
  ExportAttributeName: {}
  ServerName: {}
  InputAttributes?: {} | undefined
}
type ExportServerEngineAttributeResponse = {
  EngineAttribute?: { Name?: {} | undefined; Value?: {} | undefined } | undefined
  ServerName?: {} | undefined
}
type ListTagsForResourceRequest = {
  ResourceArn: {}
  NextToken?: {} | undefined
  MaxResults?: {} | undefined
}
type ListTagsForResourceResponse = { Tags?: {} | undefined; NextToken?: {} | undefined }
type RestoreServerRequest = {
  BackupId: {}
  ServerName: {}
  InstanceType?: {} | undefined
  KeyPair?: {} | undefined
}
type Server = {
  AssociatePublicIpAddress?: {} | undefined
  BackupRetentionCount?: {} | undefined
  ServerName?: {} | undefined
  CreatedAt?: {} | undefined
  CloudFormationStackArn?: {} | undefined
  CustomDomain?: {} | undefined
  DisableAutomatedBackup?: {} | undefined
  Endpoint?: {} | undefined
  Engine?: {} | undefined
  EngineModel?: {} | undefined
  EngineAttributes?: {} | undefined
  EngineVersion?: {} | undefined
  InstanceProfileArn?: {} | undefined
  InstanceType?: {} | undefined
  KeyPair?: {} | undefined
  MaintenanceStatus?: {} | undefined
  PreferredMaintenanceWindow?: {} | undefined
  PreferredBackupWindow?: {} | undefined
  SecurityGroupIds?: {} | undefined
  ServiceRoleArn?: {} | undefined
  Status?: {} | undefined
  StatusReason?: {} | undefined
  SubnetIds?: {} | undefined
  ServerArn?: {} | undefined
}
type RestoreServerResponse = { Server?: Server | undefined }
type StartMaintenanceRequest = { ServerName: {}; EngineAttributes?: {} | undefined }
type StartMaintenanceResponse = {
  Server?:
    | {
        AssociatePublicIpAddress?: {} | undefined
        BackupRetentionCount?: {} | undefined
        ServerName?: {} | undefined
        CreatedAt?: {} | undefined
        CloudFormationStackArn?: {} | undefined
        CustomDomain?: {} | undefined
        DisableAutomatedBackup?: {} | undefined
        Endpoint?: {} | undefined
        Engine?: {} | undefined
        EngineModel?: {} | undefined
        EngineAttributes?: {} | undefined
        EngineVersion?: {} | undefined
        InstanceProfileArn?: {} | undefined
        InstanceType?: {} | undefined
        KeyPair?: {} | undefined
        MaintenanceStatus?: {} | undefined
        PreferredMaintenanceWindow?: {} | undefined
        PreferredBackupWindow?: {} | undefined
        SecurityGroupIds?: {} | undefined
        ServiceRoleArn?: {} | undefined
        Status?: {} | undefined
        StatusReason?: {} | undefined
        SubnetIds?: {} | undefined
        ServerArn?: {} | undefined
      }
    | undefined
}
type TagResourceRequest = { ResourceArn: {}; Tags: {} }
type TagResourceResponse = { [x: string]: unknown }
type UntagResourceRequest = { ResourceArn: {}; TagKeys: {} }
type UntagResourceResponse = { [x: string]: unknown }
type TimeWindowDefinition = string
type UpdateServerRequest = {
  DisableAutomatedBackup?: {} | undefined
  BackupRetentionCount?: {} | undefined
  ServerName: {}
  PreferredMaintenanceWindow?: TimeWindowDefinition | undefined
  PreferredBackupWindow?: TimeWindowDefinition | undefined
}
type UpdateServerResponse = {
  Server?:
    | {
        AssociatePublicIpAddress?: {} | undefined
        BackupRetentionCount?: {} | undefined
        ServerName?: {} | undefined
        CreatedAt?: {} | undefined
        CloudFormationStackArn?: {} | undefined
        CustomDomain?: {} | undefined
        DisableAutomatedBackup?: {} | undefined
        Endpoint?: {} | undefined
        Engine?: {} | undefined
        EngineModel?: {} | undefined
        EngineAttributes?: {} | undefined
        EngineVersion?: {} | undefined
        InstanceProfileArn?: {} | undefined
        InstanceType?: {} | undefined
        KeyPair?: {} | undefined
        MaintenanceStatus?: {} | undefined
        PreferredMaintenanceWindow?: {} | undefined
        PreferredBackupWindow?: {} | undefined
        SecurityGroupIds?: {} | undefined
        ServiceRoleArn?: {} | undefined
        Status?: {} | undefined
        StatusReason?: {} | undefined
        SubnetIds?: {} | undefined
        ServerArn?: {} | undefined
      }
    | undefined
}
type UpdateServerEngineAttributesRequest = {
  ServerName: {}
  AttributeName: {}
  AttributeValue?: {} | undefined
}
type UpdateServerEngineAttributesResponse = {
  Server?:
    | {
        AssociatePublicIpAddress?: {} | undefined
        BackupRetentionCount?: {} | undefined
        ServerName?: {} | undefined
        CreatedAt?: {} | undefined
        CloudFormationStackArn?: {} | undefined
        CustomDomain?: {} | undefined
        DisableAutomatedBackup?: {} | undefined
        Endpoint?: {} | undefined
        Engine?: {} | undefined
        EngineModel?: {} | undefined
        EngineAttributes?: {} | undefined
        EngineVersion?: {} | undefined
        InstanceProfileArn?: {} | undefined
        InstanceType?: {} | undefined
        KeyPair?: {} | undefined
        MaintenanceStatus?: {} | undefined
        PreferredMaintenanceWindow?: {} | undefined
        PreferredBackupWindow?: {} | undefined
        SecurityGroupIds?: {} | undefined
        ServiceRoleArn?: {} | undefined
        Status?: {} | undefined
        StatusReason?: {} | undefined
        SubnetIds?: {} | undefined
        ServerArn?: {} | undefined
      }
    | undefined
}
declare const routes: import('@hono/zod-openapi').OpenAPIHono<
  import('hono/types').Env,
  {
    '/#X-Amz-Target=OpsWorksCM_V2016_11_01.AssociateNode': {
      $post:
        | {
            input: {
              header: {
                'X-Amz-Target': 'OpsWorksCM_V2016_11_01.AssociateNode'
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: AssociateNodeRequest }
            output: AssociateNodeResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              header: {
                'X-Amz-Target': 'OpsWorksCM_V2016_11_01.AssociateNode'
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: AssociateNodeRequest }
            output: InvalidStateException
            outputFormat: 'json'
            status: 480
          }
        | {
            input: {
              header: {
                'X-Amz-Target': 'OpsWorksCM_V2016_11_01.AssociateNode'
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: AssociateNodeRequest }
            output: ResourceNotFoundException
            outputFormat: 'json'
            status: 481
          }
        | {
            input: {
              header: {
                'X-Amz-Target': 'OpsWorksCM_V2016_11_01.AssociateNode'
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: AssociateNodeRequest }
            output: ValidationException
            outputFormat: 'json'
            status: 482
          }
    }
  } & {
    '/#X-Amz-Target=OpsWorksCM_V2016_11_01.CreateBackup': {
      $post:
        | {
            input: {
              header: {
                'X-Amz-Target': 'OpsWorksCM_V2016_11_01.CreateBackup'
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: CreateBackupRequest }
            output: CreateBackupResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              header: {
                'X-Amz-Target': 'OpsWorksCM_V2016_11_01.CreateBackup'
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: CreateBackupRequest }
            output: InvalidStateException
            outputFormat: 'json'
            status: 480
          }
        | {
            input: {
              header: {
                'X-Amz-Target': 'OpsWorksCM_V2016_11_01.CreateBackup'
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: CreateBackupRequest }
            output: LimitExceededException
            outputFormat: 'json'
            status: 481
          }
        | {
            input: {
              header: {
                'X-Amz-Target': 'OpsWorksCM_V2016_11_01.CreateBackup'
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: CreateBackupRequest }
            output: ResourceNotFoundException
            outputFormat: 'json'
            status: 482
          }
        | {
            input: {
              header: {
                'X-Amz-Target': 'OpsWorksCM_V2016_11_01.CreateBackup'
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: CreateBackupRequest }
            output: ValidationException
            outputFormat: 'json'
            status: 483
          }
    }
  } & {
    '/#X-Amz-Target=OpsWorksCM_V2016_11_01.CreateServer': {
      $post:
        | {
            input: {
              header: {
                'X-Amz-Target': 'OpsWorksCM_V2016_11_01.CreateServer'
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: CreateServerRequest }
            output: CreateServerResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              header: {
                'X-Amz-Target': 'OpsWorksCM_V2016_11_01.CreateServer'
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: CreateServerRequest }
            output: LimitExceededException
            outputFormat: 'json'
            status: 480
          }
        | {
            input: {
              header: {
                'X-Amz-Target': 'OpsWorksCM_V2016_11_01.CreateServer'
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: CreateServerRequest }
            output: ResourceAlreadyExistsException
            outputFormat: 'json'
            status: 481
          }
        | {
            input: {
              header: {
                'X-Amz-Target': 'OpsWorksCM_V2016_11_01.CreateServer'
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: CreateServerRequest }
            output: ResourceNotFoundException
            outputFormat: 'json'
            status: 482
          }
        | {
            input: {
              header: {
                'X-Amz-Target': 'OpsWorksCM_V2016_11_01.CreateServer'
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: CreateServerRequest }
            output: ValidationException
            outputFormat: 'json'
            status: 483
          }
    }
  } & {
    '/#X-Amz-Target=OpsWorksCM_V2016_11_01.DeleteBackup': {
      $post:
        | {
            input: {
              header: {
                'X-Amz-Target': 'OpsWorksCM_V2016_11_01.DeleteBackup'
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
        | {
            input: {
              header: {
                'X-Amz-Target': 'OpsWorksCM_V2016_11_01.DeleteBackup'
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: DeleteBackupRequest }
            output: InvalidStateException
            outputFormat: 'json'
            status: 480
          }
        | {
            input: {
              header: {
                'X-Amz-Target': 'OpsWorksCM_V2016_11_01.DeleteBackup'
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: DeleteBackupRequest }
            output: ResourceNotFoundException
            outputFormat: 'json'
            status: 481
          }
        | {
            input: {
              header: {
                'X-Amz-Target': 'OpsWorksCM_V2016_11_01.DeleteBackup'
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: DeleteBackupRequest }
            output: ValidationException
            outputFormat: 'json'
            status: 482
          }
    }
  } & {
    '/#X-Amz-Target=OpsWorksCM_V2016_11_01.DeleteServer': {
      $post:
        | {
            input: {
              header: {
                'X-Amz-Target': 'OpsWorksCM_V2016_11_01.DeleteServer'
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: DeleteServerRequest }
            output: DeleteServerResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              header: {
                'X-Amz-Target': 'OpsWorksCM_V2016_11_01.DeleteServer'
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: DeleteServerRequest }
            output: InvalidStateException
            outputFormat: 'json'
            status: 480
          }
        | {
            input: {
              header: {
                'X-Amz-Target': 'OpsWorksCM_V2016_11_01.DeleteServer'
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: DeleteServerRequest }
            output: ResourceNotFoundException
            outputFormat: 'json'
            status: 481
          }
        | {
            input: {
              header: {
                'X-Amz-Target': 'OpsWorksCM_V2016_11_01.DeleteServer'
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: DeleteServerRequest }
            output: ValidationException
            outputFormat: 'json'
            status: 482
          }
    }
  } & {
    '/#X-Amz-Target=OpsWorksCM_V2016_11_01.DescribeAccountAttributes': {
      $post: {
        input: {
          header: {
            'X-Amz-Target': 'OpsWorksCM_V2016_11_01.DescribeAccountAttributes'
            'X-Amz-Content-Sha256'?: string | undefined
            'X-Amz-Date'?: string | undefined
            'X-Amz-Algorithm'?: string | undefined
            'X-Amz-Credential'?: string | undefined
            'X-Amz-Security-Token'?: string | undefined
            'X-Amz-Signature'?: string | undefined
            'X-Amz-SignedHeaders'?: string | undefined
          }
        } & { json: DescribeAccountAttributesRequest }
        output: DescribeAccountAttributesResponse
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/#X-Amz-Target=OpsWorksCM_V2016_11_01.DescribeBackups': {
      $post:
        | {
            input: {
              query: { MaxResults?: string | undefined; NextToken?: string | undefined }
            } & {
              header: {
                'X-Amz-Target': 'OpsWorksCM_V2016_11_01.DescribeBackups'
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
        | {
            input: {
              query: { MaxResults?: string | undefined; NextToken?: string | undefined }
            } & {
              header: {
                'X-Amz-Target': 'OpsWorksCM_V2016_11_01.DescribeBackups'
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: DescribeBackupsRequest }
            output: ValidationException
            outputFormat: 'json'
            status: 480
          }
        | {
            input: {
              query: { MaxResults?: string | undefined; NextToken?: string | undefined }
            } & {
              header: {
                'X-Amz-Target': 'OpsWorksCM_V2016_11_01.DescribeBackups'
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: DescribeBackupsRequest }
            output: ResourceNotFoundException
            outputFormat: 'json'
            status: 481
          }
        | {
            input: {
              query: { MaxResults?: string | undefined; NextToken?: string | undefined }
            } & {
              header: {
                'X-Amz-Target': 'OpsWorksCM_V2016_11_01.DescribeBackups'
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: DescribeBackupsRequest }
            output: InvalidNextTokenException
            outputFormat: 'json'
            status: 482
          }
    }
  } & {
    '/#X-Amz-Target=OpsWorksCM_V2016_11_01.DescribeEvents': {
      $post:
        | {
            input: {
              query: { MaxResults?: string | undefined; NextToken?: string | undefined }
            } & {
              header: {
                'X-Amz-Target': 'OpsWorksCM_V2016_11_01.DescribeEvents'
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: DescribeEventsRequest }
            output: DescribeEventsResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              query: { MaxResults?: string | undefined; NextToken?: string | undefined }
            } & {
              header: {
                'X-Amz-Target': 'OpsWorksCM_V2016_11_01.DescribeEvents'
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: DescribeEventsRequest }
            output: ValidationException
            outputFormat: 'json'
            status: 480
          }
        | {
            input: {
              query: { MaxResults?: string | undefined; NextToken?: string | undefined }
            } & {
              header: {
                'X-Amz-Target': 'OpsWorksCM_V2016_11_01.DescribeEvents'
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: DescribeEventsRequest }
            output: InvalidNextTokenException
            outputFormat: 'json'
            status: 481
          }
        | {
            input: {
              query: { MaxResults?: string | undefined; NextToken?: string | undefined }
            } & {
              header: {
                'X-Amz-Target': 'OpsWorksCM_V2016_11_01.DescribeEvents'
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: DescribeEventsRequest }
            output: ResourceNotFoundException
            outputFormat: 'json'
            status: 482
          }
    }
  } & {
    '/#X-Amz-Target=OpsWorksCM_V2016_11_01.DescribeNodeAssociationStatus': {
      $post:
        | {
            input: {
              header: {
                'X-Amz-Target': 'OpsWorksCM_V2016_11_01.DescribeNodeAssociationStatus'
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: DescribeNodeAssociationStatusRequest }
            output: DescribeNodeAssociationStatusResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              header: {
                'X-Amz-Target': 'OpsWorksCM_V2016_11_01.DescribeNodeAssociationStatus'
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: DescribeNodeAssociationStatusRequest }
            output: ResourceNotFoundException
            outputFormat: 'json'
            status: 480
          }
        | {
            input: {
              header: {
                'X-Amz-Target': 'OpsWorksCM_V2016_11_01.DescribeNodeAssociationStatus'
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: DescribeNodeAssociationStatusRequest }
            output: ValidationException
            outputFormat: 'json'
            status: 481
          }
    }
  } & {
    '/#X-Amz-Target=OpsWorksCM_V2016_11_01.DescribeServers': {
      $post:
        | {
            input: {
              query: { MaxResults?: string | undefined; NextToken?: string | undefined }
            } & {
              header: {
                'X-Amz-Target': 'OpsWorksCM_V2016_11_01.DescribeServers'
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: DescribeServersRequest }
            output: DescribeServersResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              query: { MaxResults?: string | undefined; NextToken?: string | undefined }
            } & {
              header: {
                'X-Amz-Target': 'OpsWorksCM_V2016_11_01.DescribeServers'
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: DescribeServersRequest }
            output: ValidationException
            outputFormat: 'json'
            status: 480
          }
        | {
            input: {
              query: { MaxResults?: string | undefined; NextToken?: string | undefined }
            } & {
              header: {
                'X-Amz-Target': 'OpsWorksCM_V2016_11_01.DescribeServers'
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: DescribeServersRequest }
            output: ResourceNotFoundException
            outputFormat: 'json'
            status: 481
          }
        | {
            input: {
              query: { MaxResults?: string | undefined; NextToken?: string | undefined }
            } & {
              header: {
                'X-Amz-Target': 'OpsWorksCM_V2016_11_01.DescribeServers'
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: DescribeServersRequest }
            output: InvalidNextTokenException
            outputFormat: 'json'
            status: 482
          }
    }
  } & {
    '/#X-Amz-Target=OpsWorksCM_V2016_11_01.DisassociateNode': {
      $post:
        | {
            input: {
              header: {
                'X-Amz-Target': 'OpsWorksCM_V2016_11_01.DisassociateNode'
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: DisassociateNodeRequest }
            output: DisassociateNodeResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              header: {
                'X-Amz-Target': 'OpsWorksCM_V2016_11_01.DisassociateNode'
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: DisassociateNodeRequest }
            output: InvalidStateException
            outputFormat: 'json'
            status: 480
          }
        | {
            input: {
              header: {
                'X-Amz-Target': 'OpsWorksCM_V2016_11_01.DisassociateNode'
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: DisassociateNodeRequest }
            output: ResourceNotFoundException
            outputFormat: 'json'
            status: 481
          }
        | {
            input: {
              header: {
                'X-Amz-Target': 'OpsWorksCM_V2016_11_01.DisassociateNode'
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: DisassociateNodeRequest }
            output: ValidationException
            outputFormat: 'json'
            status: 482
          }
    }
  } & {
    '/#X-Amz-Target=OpsWorksCM_V2016_11_01.ExportServerEngineAttribute': {
      $post:
        | {
            input: {
              header: {
                'X-Amz-Target': 'OpsWorksCM_V2016_11_01.ExportServerEngineAttribute'
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: ExportServerEngineAttributeRequest }
            output: ExportServerEngineAttributeResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              header: {
                'X-Amz-Target': 'OpsWorksCM_V2016_11_01.ExportServerEngineAttribute'
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: ExportServerEngineAttributeRequest }
            output: ValidationException
            outputFormat: 'json'
            status: 480
          }
        | {
            input: {
              header: {
                'X-Amz-Target': 'OpsWorksCM_V2016_11_01.ExportServerEngineAttribute'
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: ExportServerEngineAttributeRequest }
            output: ResourceNotFoundException
            outputFormat: 'json'
            status: 481
          }
        | {
            input: {
              header: {
                'X-Amz-Target': 'OpsWorksCM_V2016_11_01.ExportServerEngineAttribute'
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: ExportServerEngineAttributeRequest }
            output: InvalidStateException
            outputFormat: 'json'
            status: 482
          }
    }
  } & {
    '/#X-Amz-Target=OpsWorksCM_V2016_11_01.ListTagsForResource': {
      $post:
        | {
            input: {
              query: { MaxResults?: string | undefined; NextToken?: string | undefined }
            } & {
              header: {
                'X-Amz-Target': 'OpsWorksCM_V2016_11_01.ListTagsForResource'
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
                'X-Amz-Target': 'OpsWorksCM_V2016_11_01.ListTagsForResource'
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: ListTagsForResourceRequest }
            output: ResourceNotFoundException
            outputFormat: 'json'
            status: 480
          }
        | {
            input: {
              query: { MaxResults?: string | undefined; NextToken?: string | undefined }
            } & {
              header: {
                'X-Amz-Target': 'OpsWorksCM_V2016_11_01.ListTagsForResource'
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: ListTagsForResourceRequest }
            output: ValidationException
            outputFormat: 'json'
            status: 481
          }
    }
  } & {
    '/#X-Amz-Target=OpsWorksCM_V2016_11_01.RestoreServer': {
      $post:
        | {
            input: {
              header: {
                'X-Amz-Target': 'OpsWorksCM_V2016_11_01.RestoreServer'
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: RestoreServerRequest }
            output: RestoreServerResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              header: {
                'X-Amz-Target': 'OpsWorksCM_V2016_11_01.RestoreServer'
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: RestoreServerRequest }
            output: InvalidStateException
            outputFormat: 'json'
            status: 480
          }
        | {
            input: {
              header: {
                'X-Amz-Target': 'OpsWorksCM_V2016_11_01.RestoreServer'
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: RestoreServerRequest }
            output: ResourceNotFoundException
            outputFormat: 'json'
            status: 481
          }
        | {
            input: {
              header: {
                'X-Amz-Target': 'OpsWorksCM_V2016_11_01.RestoreServer'
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: RestoreServerRequest }
            output: ValidationException
            outputFormat: 'json'
            status: 482
          }
    }
  } & {
    '/#X-Amz-Target=OpsWorksCM_V2016_11_01.StartMaintenance': {
      $post:
        | {
            input: {
              header: {
                'X-Amz-Target': 'OpsWorksCM_V2016_11_01.StartMaintenance'
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: StartMaintenanceRequest }
            output: StartMaintenanceResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              header: {
                'X-Amz-Target': 'OpsWorksCM_V2016_11_01.StartMaintenance'
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: StartMaintenanceRequest }
            output: InvalidStateException
            outputFormat: 'json'
            status: 480
          }
        | {
            input: {
              header: {
                'X-Amz-Target': 'OpsWorksCM_V2016_11_01.StartMaintenance'
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: StartMaintenanceRequest }
            output: ResourceNotFoundException
            outputFormat: 'json'
            status: 481
          }
        | {
            input: {
              header: {
                'X-Amz-Target': 'OpsWorksCM_V2016_11_01.StartMaintenance'
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: StartMaintenanceRequest }
            output: ValidationException
            outputFormat: 'json'
            status: 482
          }
    }
  } & {
    '/#X-Amz-Target=OpsWorksCM_V2016_11_01.TagResource': {
      $post:
        | {
            input: {
              header: {
                'X-Amz-Target': 'OpsWorksCM_V2016_11_01.TagResource'
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
                'X-Amz-Target': 'OpsWorksCM_V2016_11_01.TagResource'
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: TagResourceRequest }
            output: ResourceNotFoundException
            outputFormat: 'json'
            status: 480
          }
        | {
            input: {
              header: {
                'X-Amz-Target': 'OpsWorksCM_V2016_11_01.TagResource'
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: TagResourceRequest }
            output: ValidationException
            outputFormat: 'json'
            status: 481
          }
        | {
            input: {
              header: {
                'X-Amz-Target': 'OpsWorksCM_V2016_11_01.TagResource'
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: TagResourceRequest }
            output: InvalidStateException
            outputFormat: 'json'
            status: 482
          }
    }
  } & {
    '/#X-Amz-Target=OpsWorksCM_V2016_11_01.UntagResource': {
      $post:
        | {
            input: {
              header: {
                'X-Amz-Target': 'OpsWorksCM_V2016_11_01.UntagResource'
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
                'X-Amz-Target': 'OpsWorksCM_V2016_11_01.UntagResource'
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: UntagResourceRequest }
            output: ResourceNotFoundException
            outputFormat: 'json'
            status: 480
          }
        | {
            input: {
              header: {
                'X-Amz-Target': 'OpsWorksCM_V2016_11_01.UntagResource'
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: UntagResourceRequest }
            output: ValidationException
            outputFormat: 'json'
            status: 481
          }
        | {
            input: {
              header: {
                'X-Amz-Target': 'OpsWorksCM_V2016_11_01.UntagResource'
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: UntagResourceRequest }
            output: InvalidStateException
            outputFormat: 'json'
            status: 482
          }
    }
  } & {
    '/#X-Amz-Target=OpsWorksCM_V2016_11_01.UpdateServer': {
      $post:
        | {
            input: {
              header: {
                'X-Amz-Target': 'OpsWorksCM_V2016_11_01.UpdateServer'
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: UpdateServerRequest }
            output: UpdateServerResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              header: {
                'X-Amz-Target': 'OpsWorksCM_V2016_11_01.UpdateServer'
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: UpdateServerRequest }
            output: InvalidStateException
            outputFormat: 'json'
            status: 480
          }
        | {
            input: {
              header: {
                'X-Amz-Target': 'OpsWorksCM_V2016_11_01.UpdateServer'
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: UpdateServerRequest }
            output: ResourceNotFoundException
            outputFormat: 'json'
            status: 481
          }
        | {
            input: {
              header: {
                'X-Amz-Target': 'OpsWorksCM_V2016_11_01.UpdateServer'
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: UpdateServerRequest }
            output: ValidationException
            outputFormat: 'json'
            status: 482
          }
    }
  } & {
    '/#X-Amz-Target=OpsWorksCM_V2016_11_01.UpdateServerEngineAttributes': {
      $post:
        | {
            input: {
              header: {
                'X-Amz-Target': 'OpsWorksCM_V2016_11_01.UpdateServerEngineAttributes'
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: UpdateServerEngineAttributesRequest }
            output: UpdateServerEngineAttributesResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              header: {
                'X-Amz-Target': 'OpsWorksCM_V2016_11_01.UpdateServerEngineAttributes'
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: UpdateServerEngineAttributesRequest }
            output: InvalidStateException
            outputFormat: 'json'
            status: 480
          }
        | {
            input: {
              header: {
                'X-Amz-Target': 'OpsWorksCM_V2016_11_01.UpdateServerEngineAttributes'
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: UpdateServerEngineAttributesRequest }
            output: ResourceNotFoundException
            outputFormat: 'json'
            status: 481
          }
        | {
            input: {
              header: {
                'X-Amz-Target': 'OpsWorksCM_V2016_11_01.UpdateServerEngineAttributes'
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: UpdateServerEngineAttributesRequest }
            output: ValidationException
            outputFormat: 'json'
            status: 482
          }
    }
  },
  '/'
>
export default routes
