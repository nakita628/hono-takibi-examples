type CreateAppRequest = {
  name?: {} | undefined
  description?: {} | undefined
  roleName?: {} | undefined
  clientToken?: {} | undefined
  serverGroups?: {} | undefined
  tags?: {} | undefined
}
type CreateAppResponse = {
  appSummary?:
    | {
        appId?: {} | undefined
        importedAppId?: {} | undefined
        name?: {} | undefined
        description?: {} | undefined
        status?: {} | undefined
        statusMessage?: {} | undefined
        replicationConfigurationStatus?: {} | undefined
        replicationStatus?: {} | undefined
        replicationStatusMessage?: {} | undefined
        latestReplicationTime?: {} | undefined
        launchConfigurationStatus?: {} | undefined
        launchStatus?: {} | undefined
        launchStatusMessage?: {} | undefined
        launchDetails?:
          | {
              latestLaunchTime?: {} | undefined
              stackName?: {} | undefined
              stackId?: {} | undefined
            }
          | undefined
        creationTime?: {} | undefined
        lastModified?: {} | undefined
        roleName?: {} | undefined
        totalServerGroups?: {} | undefined
        totalServers?: {} | undefined
      }
    | undefined
  serverGroups?: {} | undefined
  tags?: {} | undefined
}
type CreateReplicationJobRequest = {
  serverId: {}
  seedReplicationTime: {}
  frequency?: {} | undefined
  runOnce?: {} | undefined
  licenseType?: {} | undefined
  roleName?: {} | undefined
  description?: {} | undefined
  numberOfRecentAmisToKeep?: {} | undefined
  encrypted?: {} | undefined
  kmsKeyId?: {} | undefined
}
type CreateReplicationJobResponse = { replicationJobId?: {} | undefined }
type DeleteAppRequest = {
  appId?: {} | undefined
  forceStopAppReplication?: {} | undefined
  forceTerminateApp?: {} | undefined
}
type DeleteAppResponse = { [x: string]: unknown }
type DeleteAppLaunchConfigurationRequest = { appId?: {} | undefined }
type DeleteAppLaunchConfigurationResponse = { [x: string]: unknown }
type DeleteAppReplicationConfigurationRequest = { appId?: {} | undefined }
type DeleteAppReplicationConfigurationResponse = { [x: string]: unknown }
type DeleteAppValidationConfigurationRequest = { appId: {} }
type DeleteAppValidationConfigurationResponse = { [x: string]: unknown }
type DeleteReplicationJobRequest = { replicationJobId: {} }
type DeleteReplicationJobResponse = { [x: string]: unknown }
type DeleteServerCatalogRequest = { [x: string]: unknown }
type DeleteServerCatalogResponse = { [x: string]: unknown }
type DisassociateConnectorRequest = { connectorId: {} }
type DisassociateConnectorResponse = { [x: string]: unknown }
type GenerateChangeSetRequest = { appId?: {} | undefined; changesetFormat?: {} | undefined }
type GenerateChangeSetResponse = {
  s3Location?: { bucket?: {} | undefined; key?: {} | undefined } | undefined
}
type GenerateTemplateRequest = { appId?: {} | undefined; templateFormat?: {} | undefined }
type GenerateTemplateResponse = {
  s3Location?: { bucket?: {} | undefined; key?: {} | undefined } | undefined
}
type GetAppRequest = { appId?: {} | undefined }
type GetAppResponse = {
  appSummary?:
    | {
        appId?: {} | undefined
        importedAppId?: {} | undefined
        name?: {} | undefined
        description?: {} | undefined
        status?: {} | undefined
        statusMessage?: {} | undefined
        replicationConfigurationStatus?: {} | undefined
        replicationStatus?: {} | undefined
        replicationStatusMessage?: {} | undefined
        latestReplicationTime?: {} | undefined
        launchConfigurationStatus?: {} | undefined
        launchStatus?: {} | undefined
        launchStatusMessage?: {} | undefined
        launchDetails?:
          | {
              latestLaunchTime?: {} | undefined
              stackName?: {} | undefined
              stackId?: {} | undefined
            }
          | undefined
        creationTime?: {} | undefined
        lastModified?: {} | undefined
        roleName?: {} | undefined
        totalServerGroups?: {} | undefined
        totalServers?: {} | undefined
      }
    | undefined
  serverGroups?: {} | undefined
  tags?: {} | undefined
}
type GetAppLaunchConfigurationRequest = { appId?: {} | undefined }
type GetAppLaunchConfigurationResponse = {
  appId?: {} | undefined
  roleName?: {} | undefined
  autoLaunch?: {} | undefined
  serverGroupLaunchConfigurations?: {} | undefined
}
type GetAppReplicationConfigurationRequest = { appId?: {} | undefined }
type GetAppReplicationConfigurationResponse = {
  serverGroupReplicationConfigurations?: {} | undefined
}
type GetAppValidationConfigurationRequest = { appId: {} }
type GetAppValidationConfigurationResponse = {
  appValidationConfigurations?: {} | undefined
  serverGroupValidationConfigurations?: {} | undefined
}
type GetAppValidationOutputRequest = { appId: {} }
type GetAppValidationOutputResponse = { validationOutputList?: {} | undefined }
type GetConnectorsRequest = { nextToken?: {} | undefined; maxResults?: {} | undefined }
type GetConnectorsResponse = { connectorList?: {} | undefined; nextToken?: {} | undefined }
type GetReplicationJobsRequest = {
  replicationJobId?: {} | undefined
  nextToken?: {} | undefined
  maxResults?: {} | undefined
}
type GetReplicationJobsResponse = {
  replicationJobList?: {} | undefined
  nextToken?: {} | undefined
}
type GetReplicationRunsRequest = {
  replicationJobId: {}
  nextToken?: {} | undefined
  maxResults?: {} | undefined
}
type GetReplicationRunsResponse = {
  replicationJob?:
    | {
        replicationJobId?: {} | undefined
        serverId?: {} | undefined
        serverType?: {} | undefined
        vmServer?:
          | {
              vmServerAddress?: { vmManagerId?: {} | undefined; vmId?: {} | undefined } | undefined
              vmName?: {} | undefined
              vmManagerName?: {} | undefined
              vmManagerType?: {} | undefined
              vmPath?: {} | undefined
            }
          | undefined
        seedReplicationTime?: {} | undefined
        frequency?: {} | undefined
        runOnce?: {} | undefined
        nextReplicationRunStartTime?: {} | undefined
        licenseType?: {} | undefined
        roleName?: {} | undefined
        latestAmiId?: {} | undefined
        state?: {} | undefined
        statusMessage?: {} | undefined
        description?: {} | undefined
        numberOfRecentAmisToKeep?: {} | undefined
        encrypted?: {} | undefined
        kmsKeyId?: {} | undefined
        replicationRunList?: {} | undefined
      }
    | undefined
  replicationRunList?: {} | undefined
  nextToken?: {} | undefined
}
type GetServersRequest = {
  nextToken?: {} | undefined
  maxResults?: {} | undefined
  vmServerAddressList?: {} | undefined
}
type GetServersResponse = {
  lastModifiedOn?: {} | undefined
  serverCatalogStatus?: {} | undefined
  serverList?: {} | undefined
  nextToken?: {} | undefined
}
type ImportAppCatalogRequest = { roleName?: {} | undefined }
type ImportAppCatalogResponse = { [x: string]: unknown }
type ImportServerCatalogRequest = { [x: string]: unknown }
type ImportServerCatalogResponse = { [x: string]: unknown }
type LaunchAppRequest = { appId?: {} | undefined }
type LaunchAppResponse = { [x: string]: unknown }
type ListAppsRequest = {
  appIds?: {} | undefined
  nextToken?: {} | undefined
  maxResults?: {} | undefined
}
type ListAppsResponse = { apps?: {} | undefined; nextToken?: {} | undefined }
type NotifyAppValidationOutputRequest = {
  appId: {}
  notificationContext?:
    | { validationId?: {} | undefined; status?: {} | undefined; statusMessage?: {} | undefined }
    | undefined
}
type NotifyAppValidationOutputResponse = { [x: string]: unknown }
type PutAppLaunchConfigurationRequest = {
  appId?: {} | undefined
  roleName?: {} | undefined
  autoLaunch?: {} | undefined
  serverGroupLaunchConfigurations?: {} | undefined
}
type PutAppLaunchConfigurationResponse = { [x: string]: unknown }
type PutAppReplicationConfigurationRequest = {
  appId?: {} | undefined
  serverGroupReplicationConfigurations?: {} | undefined
}
type PutAppReplicationConfigurationResponse = { [x: string]: unknown }
type PutAppValidationConfigurationRequest = {
  appId: {}
  appValidationConfigurations?: {} | undefined
  serverGroupValidationConfigurations?: {} | undefined
}
type PutAppValidationConfigurationResponse = { [x: string]: unknown }
type StartAppReplicationRequest = { appId?: {} | undefined }
type StartAppReplicationResponse = { [x: string]: unknown }
type StartOnDemandAppReplicationRequest = { appId: {}; description?: {} | undefined }
type StartOnDemandAppReplicationResponse = { [x: string]: unknown }
type StartOnDemandReplicationRunRequest = { replicationJobId: {}; description?: {} | undefined }
type StartOnDemandReplicationRunResponse = { replicationRunId?: {} | undefined }
type StopAppReplicationRequest = { appId?: {} | undefined }
type StopAppReplicationResponse = { [x: string]: unknown }
type TerminateAppRequest = { appId?: {} | undefined }
type TerminateAppResponse = { [x: string]: unknown }
type UpdateAppRequest = {
  appId?: {} | undefined
  name?: {} | undefined
  description?: {} | undefined
  roleName?: {} | undefined
  serverGroups?: {} | undefined
  tags?: {} | undefined
}
type UpdateAppResponse = {
  appSummary?:
    | {
        appId?: {} | undefined
        importedAppId?: {} | undefined
        name?: {} | undefined
        description?: {} | undefined
        status?: {} | undefined
        statusMessage?: {} | undefined
        replicationConfigurationStatus?: {} | undefined
        replicationStatus?: {} | undefined
        replicationStatusMessage?: {} | undefined
        latestReplicationTime?: {} | undefined
        launchConfigurationStatus?: {} | undefined
        launchStatus?: {} | undefined
        launchStatusMessage?: {} | undefined
        launchDetails?:
          | {
              latestLaunchTime?: {} | undefined
              stackName?: {} | undefined
              stackId?: {} | undefined
            }
          | undefined
        creationTime?: {} | undefined
        lastModified?: {} | undefined
        roleName?: {} | undefined
        totalServerGroups?: {} | undefined
        totalServers?: {} | undefined
      }
    | undefined
  serverGroups?: {} | undefined
  tags?: {} | undefined
}
type UpdateReplicationJobRequest = {
  replicationJobId: {}
  frequency?: {} | undefined
  nextReplicationRunStartTime?: {} | undefined
  licenseType?: {} | undefined
  roleName?: {} | undefined
  description?: {} | undefined
  numberOfRecentAmisToKeep?: {} | undefined
  encrypted?: {} | undefined
  kmsKeyId?: {} | undefined
}
type UpdateReplicationJobResponse = { [x: string]: unknown }
declare const routes: import('@hono/zod-openapi').OpenAPIHono<
  import('hono/types').Env,
  {
    '/#X-Amz-Target=AWSServerMigrationService_V2016_10_24.CreateApp': {
      $post: {
        input: {
          header: {
            'X-Amz-Target': 'AWSServerMigrationService_V2016_10_24.CreateApp'
            'X-Amz-Content-Sha256'?: string | undefined
            'X-Amz-Date'?: string | undefined
            'X-Amz-Algorithm'?: string | undefined
            'X-Amz-Credential'?: string | undefined
            'X-Amz-Security-Token'?: string | undefined
            'X-Amz-Signature'?: string | undefined
            'X-Amz-SignedHeaders'?: string | undefined
          }
        } & { json: CreateAppRequest }
        output: CreateAppResponse
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/#X-Amz-Target=AWSServerMigrationService_V2016_10_24.CreateReplicationJob': {
      $post: {
        input: {
          header: {
            'X-Amz-Target': 'AWSServerMigrationService_V2016_10_24.CreateReplicationJob'
            'X-Amz-Content-Sha256'?: string | undefined
            'X-Amz-Date'?: string | undefined
            'X-Amz-Algorithm'?: string | undefined
            'X-Amz-Credential'?: string | undefined
            'X-Amz-Security-Token'?: string | undefined
            'X-Amz-Signature'?: string | undefined
            'X-Amz-SignedHeaders'?: string | undefined
          }
        } & { json: CreateReplicationJobRequest }
        output: CreateReplicationJobResponse
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/#X-Amz-Target=AWSServerMigrationService_V2016_10_24.DeleteApp': {
      $post: {
        input: {
          header: {
            'X-Amz-Target': 'AWSServerMigrationService_V2016_10_24.DeleteApp'
            'X-Amz-Content-Sha256'?: string | undefined
            'X-Amz-Date'?: string | undefined
            'X-Amz-Algorithm'?: string | undefined
            'X-Amz-Credential'?: string | undefined
            'X-Amz-Security-Token'?: string | undefined
            'X-Amz-Signature'?: string | undefined
            'X-Amz-SignedHeaders'?: string | undefined
          }
        } & { json: DeleteAppRequest }
        output: DeleteAppResponse
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/#X-Amz-Target=AWSServerMigrationService_V2016_10_24.DeleteAppLaunchConfiguration': {
      $post: {
        input: {
          header: {
            'X-Amz-Target': 'AWSServerMigrationService_V2016_10_24.DeleteAppLaunchConfiguration'
            'X-Amz-Content-Sha256'?: string | undefined
            'X-Amz-Date'?: string | undefined
            'X-Amz-Algorithm'?: string | undefined
            'X-Amz-Credential'?: string | undefined
            'X-Amz-Security-Token'?: string | undefined
            'X-Amz-Signature'?: string | undefined
            'X-Amz-SignedHeaders'?: string | undefined
          }
        } & { json: DeleteAppLaunchConfigurationRequest }
        output: DeleteAppLaunchConfigurationResponse
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/#X-Amz-Target=AWSServerMigrationService_V2016_10_24.DeleteAppReplicationConfiguration': {
      $post: {
        input: {
          header: {
            'X-Amz-Target': 'AWSServerMigrationService_V2016_10_24.DeleteAppReplicationConfiguration'
            'X-Amz-Content-Sha256'?: string | undefined
            'X-Amz-Date'?: string | undefined
            'X-Amz-Algorithm'?: string | undefined
            'X-Amz-Credential'?: string | undefined
            'X-Amz-Security-Token'?: string | undefined
            'X-Amz-Signature'?: string | undefined
            'X-Amz-SignedHeaders'?: string | undefined
          }
        } & { json: DeleteAppReplicationConfigurationRequest }
        output: DeleteAppReplicationConfigurationResponse
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/#X-Amz-Target=AWSServerMigrationService_V2016_10_24.DeleteAppValidationConfiguration': {
      $post: {
        input: {
          header: {
            'X-Amz-Target': 'AWSServerMigrationService_V2016_10_24.DeleteAppValidationConfiguration'
            'X-Amz-Content-Sha256'?: string | undefined
            'X-Amz-Date'?: string | undefined
            'X-Amz-Algorithm'?: string | undefined
            'X-Amz-Credential'?: string | undefined
            'X-Amz-Security-Token'?: string | undefined
            'X-Amz-Signature'?: string | undefined
            'X-Amz-SignedHeaders'?: string | undefined
          }
        } & { json: DeleteAppValidationConfigurationRequest }
        output: DeleteAppValidationConfigurationResponse
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/#X-Amz-Target=AWSServerMigrationService_V2016_10_24.DeleteReplicationJob': {
      $post: {
        input: {
          header: {
            'X-Amz-Target': 'AWSServerMigrationService_V2016_10_24.DeleteReplicationJob'
            'X-Amz-Content-Sha256'?: string | undefined
            'X-Amz-Date'?: string | undefined
            'X-Amz-Algorithm'?: string | undefined
            'X-Amz-Credential'?: string | undefined
            'X-Amz-Security-Token'?: string | undefined
            'X-Amz-Signature'?: string | undefined
            'X-Amz-SignedHeaders'?: string | undefined
          }
        } & { json: DeleteReplicationJobRequest }
        output: DeleteReplicationJobResponse
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/#X-Amz-Target=AWSServerMigrationService_V2016_10_24.DeleteServerCatalog': {
      $post: {
        input: {
          header: {
            'X-Amz-Target': 'AWSServerMigrationService_V2016_10_24.DeleteServerCatalog'
            'X-Amz-Content-Sha256'?: string | undefined
            'X-Amz-Date'?: string | undefined
            'X-Amz-Algorithm'?: string | undefined
            'X-Amz-Credential'?: string | undefined
            'X-Amz-Security-Token'?: string | undefined
            'X-Amz-Signature'?: string | undefined
            'X-Amz-SignedHeaders'?: string | undefined
          }
        } & { json: DeleteServerCatalogRequest }
        output: DeleteServerCatalogResponse
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/#X-Amz-Target=AWSServerMigrationService_V2016_10_24.DisassociateConnector': {
      $post: {
        input: {
          header: {
            'X-Amz-Target': 'AWSServerMigrationService_V2016_10_24.DisassociateConnector'
            'X-Amz-Content-Sha256'?: string | undefined
            'X-Amz-Date'?: string | undefined
            'X-Amz-Algorithm'?: string | undefined
            'X-Amz-Credential'?: string | undefined
            'X-Amz-Security-Token'?: string | undefined
            'X-Amz-Signature'?: string | undefined
            'X-Amz-SignedHeaders'?: string | undefined
          }
        } & { json: DisassociateConnectorRequest }
        output: DisassociateConnectorResponse
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/#X-Amz-Target=AWSServerMigrationService_V2016_10_24.GenerateChangeSet': {
      $post: {
        input: {
          header: {
            'X-Amz-Target': 'AWSServerMigrationService_V2016_10_24.GenerateChangeSet'
            'X-Amz-Content-Sha256'?: string | undefined
            'X-Amz-Date'?: string | undefined
            'X-Amz-Algorithm'?: string | undefined
            'X-Amz-Credential'?: string | undefined
            'X-Amz-Security-Token'?: string | undefined
            'X-Amz-Signature'?: string | undefined
            'X-Amz-SignedHeaders'?: string | undefined
          }
        } & { json: GenerateChangeSetRequest }
        output: GenerateChangeSetResponse
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/#X-Amz-Target=AWSServerMigrationService_V2016_10_24.GenerateTemplate': {
      $post: {
        input: {
          header: {
            'X-Amz-Target': 'AWSServerMigrationService_V2016_10_24.GenerateTemplate'
            'X-Amz-Content-Sha256'?: string | undefined
            'X-Amz-Date'?: string | undefined
            'X-Amz-Algorithm'?: string | undefined
            'X-Amz-Credential'?: string | undefined
            'X-Amz-Security-Token'?: string | undefined
            'X-Amz-Signature'?: string | undefined
            'X-Amz-SignedHeaders'?: string | undefined
          }
        } & { json: GenerateTemplateRequest }
        output: GenerateTemplateResponse
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/#X-Amz-Target=AWSServerMigrationService_V2016_10_24.GetApp': {
      $post: {
        input: {
          header: {
            'X-Amz-Target': 'AWSServerMigrationService_V2016_10_24.GetApp'
            'X-Amz-Content-Sha256'?: string | undefined
            'X-Amz-Date'?: string | undefined
            'X-Amz-Algorithm'?: string | undefined
            'X-Amz-Credential'?: string | undefined
            'X-Amz-Security-Token'?: string | undefined
            'X-Amz-Signature'?: string | undefined
            'X-Amz-SignedHeaders'?: string | undefined
          }
        } & { json: GetAppRequest }
        output: GetAppResponse
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/#X-Amz-Target=AWSServerMigrationService_V2016_10_24.GetAppLaunchConfiguration': {
      $post: {
        input: {
          header: {
            'X-Amz-Target': 'AWSServerMigrationService_V2016_10_24.GetAppLaunchConfiguration'
            'X-Amz-Content-Sha256'?: string | undefined
            'X-Amz-Date'?: string | undefined
            'X-Amz-Algorithm'?: string | undefined
            'X-Amz-Credential'?: string | undefined
            'X-Amz-Security-Token'?: string | undefined
            'X-Amz-Signature'?: string | undefined
            'X-Amz-SignedHeaders'?: string | undefined
          }
        } & { json: GetAppLaunchConfigurationRequest }
        output: GetAppLaunchConfigurationResponse
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/#X-Amz-Target=AWSServerMigrationService_V2016_10_24.GetAppReplicationConfiguration': {
      $post: {
        input: {
          header: {
            'X-Amz-Target': 'AWSServerMigrationService_V2016_10_24.GetAppReplicationConfiguration'
            'X-Amz-Content-Sha256'?: string | undefined
            'X-Amz-Date'?: string | undefined
            'X-Amz-Algorithm'?: string | undefined
            'X-Amz-Credential'?: string | undefined
            'X-Amz-Security-Token'?: string | undefined
            'X-Amz-Signature'?: string | undefined
            'X-Amz-SignedHeaders'?: string | undefined
          }
        } & { json: GetAppReplicationConfigurationRequest }
        output: GetAppReplicationConfigurationResponse
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/#X-Amz-Target=AWSServerMigrationService_V2016_10_24.GetAppValidationConfiguration': {
      $post: {
        input: {
          header: {
            'X-Amz-Target': 'AWSServerMigrationService_V2016_10_24.GetAppValidationConfiguration'
            'X-Amz-Content-Sha256'?: string | undefined
            'X-Amz-Date'?: string | undefined
            'X-Amz-Algorithm'?: string | undefined
            'X-Amz-Credential'?: string | undefined
            'X-Amz-Security-Token'?: string | undefined
            'X-Amz-Signature'?: string | undefined
            'X-Amz-SignedHeaders'?: string | undefined
          }
        } & { json: GetAppValidationConfigurationRequest }
        output: GetAppValidationConfigurationResponse
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/#X-Amz-Target=AWSServerMigrationService_V2016_10_24.GetAppValidationOutput': {
      $post: {
        input: {
          header: {
            'X-Amz-Target': 'AWSServerMigrationService_V2016_10_24.GetAppValidationOutput'
            'X-Amz-Content-Sha256'?: string | undefined
            'X-Amz-Date'?: string | undefined
            'X-Amz-Algorithm'?: string | undefined
            'X-Amz-Credential'?: string | undefined
            'X-Amz-Security-Token'?: string | undefined
            'X-Amz-Signature'?: string | undefined
            'X-Amz-SignedHeaders'?: string | undefined
          }
        } & { json: GetAppValidationOutputRequest }
        output: GetAppValidationOutputResponse
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/#X-Amz-Target=AWSServerMigrationService_V2016_10_24.GetConnectors': {
      $post: {
        input: { query: { maxResults?: string | undefined; nextToken?: string | undefined } } & {
          header: {
            'X-Amz-Target': 'AWSServerMigrationService_V2016_10_24.GetConnectors'
            'X-Amz-Content-Sha256'?: string | undefined
            'X-Amz-Date'?: string | undefined
            'X-Amz-Algorithm'?: string | undefined
            'X-Amz-Credential'?: string | undefined
            'X-Amz-Security-Token'?: string | undefined
            'X-Amz-Signature'?: string | undefined
            'X-Amz-SignedHeaders'?: string | undefined
          }
        } & { json: GetConnectorsRequest }
        output: GetConnectorsResponse
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/#X-Amz-Target=AWSServerMigrationService_V2016_10_24.GetReplicationJobs': {
      $post: {
        input: { query: { maxResults?: string | undefined; nextToken?: string | undefined } } & {
          header: {
            'X-Amz-Target': 'AWSServerMigrationService_V2016_10_24.GetReplicationJobs'
            'X-Amz-Content-Sha256'?: string | undefined
            'X-Amz-Date'?: string | undefined
            'X-Amz-Algorithm'?: string | undefined
            'X-Amz-Credential'?: string | undefined
            'X-Amz-Security-Token'?: string | undefined
            'X-Amz-Signature'?: string | undefined
            'X-Amz-SignedHeaders'?: string | undefined
          }
        } & { json: GetReplicationJobsRequest }
        output: GetReplicationJobsResponse
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/#X-Amz-Target=AWSServerMigrationService_V2016_10_24.GetReplicationRuns': {
      $post: {
        input: { query: { maxResults?: string | undefined; nextToken?: string | undefined } } & {
          header: {
            'X-Amz-Target': 'AWSServerMigrationService_V2016_10_24.GetReplicationRuns'
            'X-Amz-Content-Sha256'?: string | undefined
            'X-Amz-Date'?: string | undefined
            'X-Amz-Algorithm'?: string | undefined
            'X-Amz-Credential'?: string | undefined
            'X-Amz-Security-Token'?: string | undefined
            'X-Amz-Signature'?: string | undefined
            'X-Amz-SignedHeaders'?: string | undefined
          }
        } & { json: GetReplicationRunsRequest }
        output: GetReplicationRunsResponse
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/#X-Amz-Target=AWSServerMigrationService_V2016_10_24.GetServers': {
      $post: {
        input: { query: { maxResults?: string | undefined; nextToken?: string | undefined } } & {
          header: {
            'X-Amz-Target': 'AWSServerMigrationService_V2016_10_24.GetServers'
            'X-Amz-Content-Sha256'?: string | undefined
            'X-Amz-Date'?: string | undefined
            'X-Amz-Algorithm'?: string | undefined
            'X-Amz-Credential'?: string | undefined
            'X-Amz-Security-Token'?: string | undefined
            'X-Amz-Signature'?: string | undefined
            'X-Amz-SignedHeaders'?: string | undefined
          }
        } & { json: GetServersRequest }
        output: GetServersResponse
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/#X-Amz-Target=AWSServerMigrationService_V2016_10_24.ImportAppCatalog': {
      $post: {
        input: {
          header: {
            'X-Amz-Target': 'AWSServerMigrationService_V2016_10_24.ImportAppCatalog'
            'X-Amz-Content-Sha256'?: string | undefined
            'X-Amz-Date'?: string | undefined
            'X-Amz-Algorithm'?: string | undefined
            'X-Amz-Credential'?: string | undefined
            'X-Amz-Security-Token'?: string | undefined
            'X-Amz-Signature'?: string | undefined
            'X-Amz-SignedHeaders'?: string | undefined
          }
        } & { json: ImportAppCatalogRequest }
        output: ImportAppCatalogResponse
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/#X-Amz-Target=AWSServerMigrationService_V2016_10_24.ImportServerCatalog': {
      $post: {
        input: {
          header: {
            'X-Amz-Target': 'AWSServerMigrationService_V2016_10_24.ImportServerCatalog'
            'X-Amz-Content-Sha256'?: string | undefined
            'X-Amz-Date'?: string | undefined
            'X-Amz-Algorithm'?: string | undefined
            'X-Amz-Credential'?: string | undefined
            'X-Amz-Security-Token'?: string | undefined
            'X-Amz-Signature'?: string | undefined
            'X-Amz-SignedHeaders'?: string | undefined
          }
        } & { json: ImportServerCatalogRequest }
        output: ImportServerCatalogResponse
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/#X-Amz-Target=AWSServerMigrationService_V2016_10_24.LaunchApp': {
      $post: {
        input: {
          header: {
            'X-Amz-Target': 'AWSServerMigrationService_V2016_10_24.LaunchApp'
            'X-Amz-Content-Sha256'?: string | undefined
            'X-Amz-Date'?: string | undefined
            'X-Amz-Algorithm'?: string | undefined
            'X-Amz-Credential'?: string | undefined
            'X-Amz-Security-Token'?: string | undefined
            'X-Amz-Signature'?: string | undefined
            'X-Amz-SignedHeaders'?: string | undefined
          }
        } & { json: LaunchAppRequest }
        output: LaunchAppResponse
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/#X-Amz-Target=AWSServerMigrationService_V2016_10_24.ListApps': {
      $post: {
        input: {
          header: {
            'X-Amz-Target': 'AWSServerMigrationService_V2016_10_24.ListApps'
            'X-Amz-Content-Sha256'?: string | undefined
            'X-Amz-Date'?: string | undefined
            'X-Amz-Algorithm'?: string | undefined
            'X-Amz-Credential'?: string | undefined
            'X-Amz-Security-Token'?: string | undefined
            'X-Amz-Signature'?: string | undefined
            'X-Amz-SignedHeaders'?: string | undefined
          }
        } & { json: ListAppsRequest }
        output: ListAppsResponse
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/#X-Amz-Target=AWSServerMigrationService_V2016_10_24.NotifyAppValidationOutput': {
      $post: {
        input: {
          header: {
            'X-Amz-Target': 'AWSServerMigrationService_V2016_10_24.NotifyAppValidationOutput'
            'X-Amz-Content-Sha256'?: string | undefined
            'X-Amz-Date'?: string | undefined
            'X-Amz-Algorithm'?: string | undefined
            'X-Amz-Credential'?: string | undefined
            'X-Amz-Security-Token'?: string | undefined
            'X-Amz-Signature'?: string | undefined
            'X-Amz-SignedHeaders'?: string | undefined
          }
        } & { json: NotifyAppValidationOutputRequest }
        output: NotifyAppValidationOutputResponse
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/#X-Amz-Target=AWSServerMigrationService_V2016_10_24.PutAppLaunchConfiguration': {
      $post: {
        input: {
          header: {
            'X-Amz-Target': 'AWSServerMigrationService_V2016_10_24.PutAppLaunchConfiguration'
            'X-Amz-Content-Sha256'?: string | undefined
            'X-Amz-Date'?: string | undefined
            'X-Amz-Algorithm'?: string | undefined
            'X-Amz-Credential'?: string | undefined
            'X-Amz-Security-Token'?: string | undefined
            'X-Amz-Signature'?: string | undefined
            'X-Amz-SignedHeaders'?: string | undefined
          }
        } & { json: PutAppLaunchConfigurationRequest }
        output: PutAppLaunchConfigurationResponse
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/#X-Amz-Target=AWSServerMigrationService_V2016_10_24.PutAppReplicationConfiguration': {
      $post: {
        input: {
          header: {
            'X-Amz-Target': 'AWSServerMigrationService_V2016_10_24.PutAppReplicationConfiguration'
            'X-Amz-Content-Sha256'?: string | undefined
            'X-Amz-Date'?: string | undefined
            'X-Amz-Algorithm'?: string | undefined
            'X-Amz-Credential'?: string | undefined
            'X-Amz-Security-Token'?: string | undefined
            'X-Amz-Signature'?: string | undefined
            'X-Amz-SignedHeaders'?: string | undefined
          }
        } & { json: PutAppReplicationConfigurationRequest }
        output: PutAppReplicationConfigurationResponse
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/#X-Amz-Target=AWSServerMigrationService_V2016_10_24.PutAppValidationConfiguration': {
      $post: {
        input: {
          header: {
            'X-Amz-Target': 'AWSServerMigrationService_V2016_10_24.PutAppValidationConfiguration'
            'X-Amz-Content-Sha256'?: string | undefined
            'X-Amz-Date'?: string | undefined
            'X-Amz-Algorithm'?: string | undefined
            'X-Amz-Credential'?: string | undefined
            'X-Amz-Security-Token'?: string | undefined
            'X-Amz-Signature'?: string | undefined
            'X-Amz-SignedHeaders'?: string | undefined
          }
        } & { json: PutAppValidationConfigurationRequest }
        output: PutAppValidationConfigurationResponse
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/#X-Amz-Target=AWSServerMigrationService_V2016_10_24.StartAppReplication': {
      $post: {
        input: {
          header: {
            'X-Amz-Target': 'AWSServerMigrationService_V2016_10_24.StartAppReplication'
            'X-Amz-Content-Sha256'?: string | undefined
            'X-Amz-Date'?: string | undefined
            'X-Amz-Algorithm'?: string | undefined
            'X-Amz-Credential'?: string | undefined
            'X-Amz-Security-Token'?: string | undefined
            'X-Amz-Signature'?: string | undefined
            'X-Amz-SignedHeaders'?: string | undefined
          }
        } & { json: StartAppReplicationRequest }
        output: StartAppReplicationResponse
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/#X-Amz-Target=AWSServerMigrationService_V2016_10_24.StartOnDemandAppReplication': {
      $post: {
        input: {
          header: {
            'X-Amz-Target': 'AWSServerMigrationService_V2016_10_24.StartOnDemandAppReplication'
            'X-Amz-Content-Sha256'?: string | undefined
            'X-Amz-Date'?: string | undefined
            'X-Amz-Algorithm'?: string | undefined
            'X-Amz-Credential'?: string | undefined
            'X-Amz-Security-Token'?: string | undefined
            'X-Amz-Signature'?: string | undefined
            'X-Amz-SignedHeaders'?: string | undefined
          }
        } & { json: StartOnDemandAppReplicationRequest }
        output: StartOnDemandAppReplicationResponse
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/#X-Amz-Target=AWSServerMigrationService_V2016_10_24.StartOnDemandReplicationRun': {
      $post: {
        input: {
          header: {
            'X-Amz-Target': 'AWSServerMigrationService_V2016_10_24.StartOnDemandReplicationRun'
            'X-Amz-Content-Sha256'?: string | undefined
            'X-Amz-Date'?: string | undefined
            'X-Amz-Algorithm'?: string | undefined
            'X-Amz-Credential'?: string | undefined
            'X-Amz-Security-Token'?: string | undefined
            'X-Amz-Signature'?: string | undefined
            'X-Amz-SignedHeaders'?: string | undefined
          }
        } & { json: StartOnDemandReplicationRunRequest }
        output: StartOnDemandReplicationRunResponse
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/#X-Amz-Target=AWSServerMigrationService_V2016_10_24.StopAppReplication': {
      $post: {
        input: {
          header: {
            'X-Amz-Target': 'AWSServerMigrationService_V2016_10_24.StopAppReplication'
            'X-Amz-Content-Sha256'?: string | undefined
            'X-Amz-Date'?: string | undefined
            'X-Amz-Algorithm'?: string | undefined
            'X-Amz-Credential'?: string | undefined
            'X-Amz-Security-Token'?: string | undefined
            'X-Amz-Signature'?: string | undefined
            'X-Amz-SignedHeaders'?: string | undefined
          }
        } & { json: StopAppReplicationRequest }
        output: StopAppReplicationResponse
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/#X-Amz-Target=AWSServerMigrationService_V2016_10_24.TerminateApp': {
      $post: {
        input: {
          header: {
            'X-Amz-Target': 'AWSServerMigrationService_V2016_10_24.TerminateApp'
            'X-Amz-Content-Sha256'?: string | undefined
            'X-Amz-Date'?: string | undefined
            'X-Amz-Algorithm'?: string | undefined
            'X-Amz-Credential'?: string | undefined
            'X-Amz-Security-Token'?: string | undefined
            'X-Amz-Signature'?: string | undefined
            'X-Amz-SignedHeaders'?: string | undefined
          }
        } & { json: TerminateAppRequest }
        output: TerminateAppResponse
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/#X-Amz-Target=AWSServerMigrationService_V2016_10_24.UpdateApp': {
      $post: {
        input: {
          header: {
            'X-Amz-Target': 'AWSServerMigrationService_V2016_10_24.UpdateApp'
            'X-Amz-Content-Sha256'?: string | undefined
            'X-Amz-Date'?: string | undefined
            'X-Amz-Algorithm'?: string | undefined
            'X-Amz-Credential'?: string | undefined
            'X-Amz-Security-Token'?: string | undefined
            'X-Amz-Signature'?: string | undefined
            'X-Amz-SignedHeaders'?: string | undefined
          }
        } & { json: UpdateAppRequest }
        output: UpdateAppResponse
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/#X-Amz-Target=AWSServerMigrationService_V2016_10_24.UpdateReplicationJob': {
      $post: {
        input: {
          header: {
            'X-Amz-Target': 'AWSServerMigrationService_V2016_10_24.UpdateReplicationJob'
            'X-Amz-Content-Sha256'?: string | undefined
            'X-Amz-Date'?: string | undefined
            'X-Amz-Algorithm'?: string | undefined
            'X-Amz-Credential'?: string | undefined
            'X-Amz-Security-Token'?: string | undefined
            'X-Amz-Signature'?: string | undefined
            'X-Amz-SignedHeaders'?: string | undefined
          }
        } & { json: UpdateReplicationJobRequest }
        output: UpdateReplicationJobResponse
        outputFormat: 'json'
        status: 200
      }
    }
  },
  '/'
>
export default routes
