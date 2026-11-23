import type { InferRequestType, ClientRequestOptions } from 'hono/client'
import { parseResponse } from 'hono/client'
import { client } from './client'

export async function postXAmzTargetAWSServerMigrationServiceV20161024CreateApp(
  args: InferRequestType<
    (typeof client)['#X-Amz-Target=AWSServerMigrationService_V2016_10_24.CreateApp']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['#X-Amz-Target=AWSServerMigrationService_V2016_10_24.CreateApp'].$post(args, options),
  )
}

export async function postXAmzTargetAWSServerMigrationServiceV20161024CreateReplicationJob(
  args: InferRequestType<
    (typeof client)['#X-Amz-Target=AWSServerMigrationService_V2016_10_24.CreateReplicationJob']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['#X-Amz-Target=AWSServerMigrationService_V2016_10_24.CreateReplicationJob'].$post(
      args,
      options,
    ),
  )
}

export async function postXAmzTargetAWSServerMigrationServiceV20161024DeleteApp(
  args: InferRequestType<
    (typeof client)['#X-Amz-Target=AWSServerMigrationService_V2016_10_24.DeleteApp']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['#X-Amz-Target=AWSServerMigrationService_V2016_10_24.DeleteApp'].$post(args, options),
  )
}

export async function postXAmzTargetAWSServerMigrationServiceV20161024DeleteAppLaunchConfiguration(
  args: InferRequestType<
    (typeof client)['#X-Amz-Target=AWSServerMigrationService_V2016_10_24.DeleteAppLaunchConfiguration']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client[
      '#X-Amz-Target=AWSServerMigrationService_V2016_10_24.DeleteAppLaunchConfiguration'
    ].$post(args, options),
  )
}

export async function postXAmzTargetAWSServerMigrationServiceV20161024DeleteAppReplicationConfiguration(
  args: InferRequestType<
    (typeof client)['#X-Amz-Target=AWSServerMigrationService_V2016_10_24.DeleteAppReplicationConfiguration']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client[
      '#X-Amz-Target=AWSServerMigrationService_V2016_10_24.DeleteAppReplicationConfiguration'
    ].$post(args, options),
  )
}

export async function postXAmzTargetAWSServerMigrationServiceV20161024DeleteAppValidationConfiguration(
  args: InferRequestType<
    (typeof client)['#X-Amz-Target=AWSServerMigrationService_V2016_10_24.DeleteAppValidationConfiguration']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client[
      '#X-Amz-Target=AWSServerMigrationService_V2016_10_24.DeleteAppValidationConfiguration'
    ].$post(args, options),
  )
}

export async function postXAmzTargetAWSServerMigrationServiceV20161024DeleteReplicationJob(
  args: InferRequestType<
    (typeof client)['#X-Amz-Target=AWSServerMigrationService_V2016_10_24.DeleteReplicationJob']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['#X-Amz-Target=AWSServerMigrationService_V2016_10_24.DeleteReplicationJob'].$post(
      args,
      options,
    ),
  )
}

export async function postXAmzTargetAWSServerMigrationServiceV20161024DeleteServerCatalog(
  args: InferRequestType<
    (typeof client)['#X-Amz-Target=AWSServerMigrationService_V2016_10_24.DeleteServerCatalog']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['#X-Amz-Target=AWSServerMigrationService_V2016_10_24.DeleteServerCatalog'].$post(
      args,
      options,
    ),
  )
}

export async function postXAmzTargetAWSServerMigrationServiceV20161024DisassociateConnector(
  args: InferRequestType<
    (typeof client)['#X-Amz-Target=AWSServerMigrationService_V2016_10_24.DisassociateConnector']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['#X-Amz-Target=AWSServerMigrationService_V2016_10_24.DisassociateConnector'].$post(
      args,
      options,
    ),
  )
}

export async function postXAmzTargetAWSServerMigrationServiceV20161024GenerateChangeSet(
  args: InferRequestType<
    (typeof client)['#X-Amz-Target=AWSServerMigrationService_V2016_10_24.GenerateChangeSet']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['#X-Amz-Target=AWSServerMigrationService_V2016_10_24.GenerateChangeSet'].$post(
      args,
      options,
    ),
  )
}

export async function postXAmzTargetAWSServerMigrationServiceV20161024GenerateTemplate(
  args: InferRequestType<
    (typeof client)['#X-Amz-Target=AWSServerMigrationService_V2016_10_24.GenerateTemplate']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['#X-Amz-Target=AWSServerMigrationService_V2016_10_24.GenerateTemplate'].$post(
      args,
      options,
    ),
  )
}

export async function postXAmzTargetAWSServerMigrationServiceV20161024GetApp(
  args: InferRequestType<
    (typeof client)['#X-Amz-Target=AWSServerMigrationService_V2016_10_24.GetApp']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['#X-Amz-Target=AWSServerMigrationService_V2016_10_24.GetApp'].$post(args, options),
  )
}

export async function postXAmzTargetAWSServerMigrationServiceV20161024GetAppLaunchConfiguration(
  args: InferRequestType<
    (typeof client)['#X-Amz-Target=AWSServerMigrationService_V2016_10_24.GetAppLaunchConfiguration']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['#X-Amz-Target=AWSServerMigrationService_V2016_10_24.GetAppLaunchConfiguration'].$post(
      args,
      options,
    ),
  )
}

export async function postXAmzTargetAWSServerMigrationServiceV20161024GetAppReplicationConfiguration(
  args: InferRequestType<
    (typeof client)['#X-Amz-Target=AWSServerMigrationService_V2016_10_24.GetAppReplicationConfiguration']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client[
      '#X-Amz-Target=AWSServerMigrationService_V2016_10_24.GetAppReplicationConfiguration'
    ].$post(args, options),
  )
}

export async function postXAmzTargetAWSServerMigrationServiceV20161024GetAppValidationConfiguration(
  args: InferRequestType<
    (typeof client)['#X-Amz-Target=AWSServerMigrationService_V2016_10_24.GetAppValidationConfiguration']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client[
      '#X-Amz-Target=AWSServerMigrationService_V2016_10_24.GetAppValidationConfiguration'
    ].$post(args, options),
  )
}

export async function postXAmzTargetAWSServerMigrationServiceV20161024GetAppValidationOutput(
  args: InferRequestType<
    (typeof client)['#X-Amz-Target=AWSServerMigrationService_V2016_10_24.GetAppValidationOutput']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['#X-Amz-Target=AWSServerMigrationService_V2016_10_24.GetAppValidationOutput'].$post(
      args,
      options,
    ),
  )
}

export async function postXAmzTargetAWSServerMigrationServiceV20161024GetConnectors(
  args: InferRequestType<
    (typeof client)['#X-Amz-Target=AWSServerMigrationService_V2016_10_24.GetConnectors']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['#X-Amz-Target=AWSServerMigrationService_V2016_10_24.GetConnectors'].$post(
      args,
      options,
    ),
  )
}

export async function postXAmzTargetAWSServerMigrationServiceV20161024GetReplicationJobs(
  args: InferRequestType<
    (typeof client)['#X-Amz-Target=AWSServerMigrationService_V2016_10_24.GetReplicationJobs']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['#X-Amz-Target=AWSServerMigrationService_V2016_10_24.GetReplicationJobs'].$post(
      args,
      options,
    ),
  )
}

export async function postXAmzTargetAWSServerMigrationServiceV20161024GetReplicationRuns(
  args: InferRequestType<
    (typeof client)['#X-Amz-Target=AWSServerMigrationService_V2016_10_24.GetReplicationRuns']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['#X-Amz-Target=AWSServerMigrationService_V2016_10_24.GetReplicationRuns'].$post(
      args,
      options,
    ),
  )
}

export async function postXAmzTargetAWSServerMigrationServiceV20161024GetServers(
  args: InferRequestType<
    (typeof client)['#X-Amz-Target=AWSServerMigrationService_V2016_10_24.GetServers']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['#X-Amz-Target=AWSServerMigrationService_V2016_10_24.GetServers'].$post(args, options),
  )
}

export async function postXAmzTargetAWSServerMigrationServiceV20161024ImportAppCatalog(
  args: InferRequestType<
    (typeof client)['#X-Amz-Target=AWSServerMigrationService_V2016_10_24.ImportAppCatalog']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['#X-Amz-Target=AWSServerMigrationService_V2016_10_24.ImportAppCatalog'].$post(
      args,
      options,
    ),
  )
}

export async function postXAmzTargetAWSServerMigrationServiceV20161024ImportServerCatalog(
  args: InferRequestType<
    (typeof client)['#X-Amz-Target=AWSServerMigrationService_V2016_10_24.ImportServerCatalog']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['#X-Amz-Target=AWSServerMigrationService_V2016_10_24.ImportServerCatalog'].$post(
      args,
      options,
    ),
  )
}

export async function postXAmzTargetAWSServerMigrationServiceV20161024LaunchApp(
  args: InferRequestType<
    (typeof client)['#X-Amz-Target=AWSServerMigrationService_V2016_10_24.LaunchApp']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['#X-Amz-Target=AWSServerMigrationService_V2016_10_24.LaunchApp'].$post(args, options),
  )
}

export async function postXAmzTargetAWSServerMigrationServiceV20161024ListApps(
  args: InferRequestType<
    (typeof client)['#X-Amz-Target=AWSServerMigrationService_V2016_10_24.ListApps']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['#X-Amz-Target=AWSServerMigrationService_V2016_10_24.ListApps'].$post(args, options),
  )
}

export async function postXAmzTargetAWSServerMigrationServiceV20161024NotifyAppValidationOutput(
  args: InferRequestType<
    (typeof client)['#X-Amz-Target=AWSServerMigrationService_V2016_10_24.NotifyAppValidationOutput']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['#X-Amz-Target=AWSServerMigrationService_V2016_10_24.NotifyAppValidationOutput'].$post(
      args,
      options,
    ),
  )
}

export async function postXAmzTargetAWSServerMigrationServiceV20161024PutAppLaunchConfiguration(
  args: InferRequestType<
    (typeof client)['#X-Amz-Target=AWSServerMigrationService_V2016_10_24.PutAppLaunchConfiguration']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['#X-Amz-Target=AWSServerMigrationService_V2016_10_24.PutAppLaunchConfiguration'].$post(
      args,
      options,
    ),
  )
}

export async function postXAmzTargetAWSServerMigrationServiceV20161024PutAppReplicationConfiguration(
  args: InferRequestType<
    (typeof client)['#X-Amz-Target=AWSServerMigrationService_V2016_10_24.PutAppReplicationConfiguration']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client[
      '#X-Amz-Target=AWSServerMigrationService_V2016_10_24.PutAppReplicationConfiguration'
    ].$post(args, options),
  )
}

export async function postXAmzTargetAWSServerMigrationServiceV20161024PutAppValidationConfiguration(
  args: InferRequestType<
    (typeof client)['#X-Amz-Target=AWSServerMigrationService_V2016_10_24.PutAppValidationConfiguration']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client[
      '#X-Amz-Target=AWSServerMigrationService_V2016_10_24.PutAppValidationConfiguration'
    ].$post(args, options),
  )
}

export async function postXAmzTargetAWSServerMigrationServiceV20161024StartAppReplication(
  args: InferRequestType<
    (typeof client)['#X-Amz-Target=AWSServerMigrationService_V2016_10_24.StartAppReplication']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['#X-Amz-Target=AWSServerMigrationService_V2016_10_24.StartAppReplication'].$post(
      args,
      options,
    ),
  )
}

export async function postXAmzTargetAWSServerMigrationServiceV20161024StartOnDemandAppReplication(
  args: InferRequestType<
    (typeof client)['#X-Amz-Target=AWSServerMigrationService_V2016_10_24.StartOnDemandAppReplication']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['#X-Amz-Target=AWSServerMigrationService_V2016_10_24.StartOnDemandAppReplication'].$post(
      args,
      options,
    ),
  )
}

export async function postXAmzTargetAWSServerMigrationServiceV20161024StartOnDemandReplicationRun(
  args: InferRequestType<
    (typeof client)['#X-Amz-Target=AWSServerMigrationService_V2016_10_24.StartOnDemandReplicationRun']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['#X-Amz-Target=AWSServerMigrationService_V2016_10_24.StartOnDemandReplicationRun'].$post(
      args,
      options,
    ),
  )
}

export async function postXAmzTargetAWSServerMigrationServiceV20161024StopAppReplication(
  args: InferRequestType<
    (typeof client)['#X-Amz-Target=AWSServerMigrationService_V2016_10_24.StopAppReplication']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['#X-Amz-Target=AWSServerMigrationService_V2016_10_24.StopAppReplication'].$post(
      args,
      options,
    ),
  )
}

export async function postXAmzTargetAWSServerMigrationServiceV20161024TerminateApp(
  args: InferRequestType<
    (typeof client)['#X-Amz-Target=AWSServerMigrationService_V2016_10_24.TerminateApp']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['#X-Amz-Target=AWSServerMigrationService_V2016_10_24.TerminateApp'].$post(args, options),
  )
}

export async function postXAmzTargetAWSServerMigrationServiceV20161024UpdateApp(
  args: InferRequestType<
    (typeof client)['#X-Amz-Target=AWSServerMigrationService_V2016_10_24.UpdateApp']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['#X-Amz-Target=AWSServerMigrationService_V2016_10_24.UpdateApp'].$post(args, options),
  )
}

export async function postXAmzTargetAWSServerMigrationServiceV20161024UpdateReplicationJob(
  args: InferRequestType<
    (typeof client)['#X-Amz-Target=AWSServerMigrationService_V2016_10_24.UpdateReplicationJob']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['#X-Amz-Target=AWSServerMigrationService_V2016_10_24.UpdateReplicationJob'].$post(
      args,
      options,
    ),
  )
}
