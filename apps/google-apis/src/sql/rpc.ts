import type { InferRequestType, ClientRequestOptions } from 'hono/client'
import { parseResponse } from 'hono/client'
import { client } from './client'

export async function getSqlV1beta4Flags(
  args: InferRequestType<typeof client.sql.v1beta4.flags.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.sql.v1beta4.flags.$get(args, options))
}

export async function getSqlV1beta4ProjectsProjectInstances(
  args: InferRequestType<(typeof client.sql.v1beta4.projects)[':project']['instances']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.sql.v1beta4.projects[':project'].instances.$get(args, options))
}

export async function postSqlV1beta4ProjectsProjectInstances(
  args: InferRequestType<(typeof client.sql.v1beta4.projects)[':project']['instances']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.sql.v1beta4.projects[':project'].instances.$post(args, options))
}

export async function getSqlV1beta4ProjectsProjectInstancesInstance(
  args: InferRequestType<
    (typeof client.sql.v1beta4.projects)[':project']['instances'][':instance']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.sql.v1beta4.projects[':project'].instances[':instance'].$get(args, options),
  )
}

export async function putSqlV1beta4ProjectsProjectInstancesInstance(
  args: InferRequestType<
    (typeof client.sql.v1beta4.projects)[':project']['instances'][':instance']['$put']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.sql.v1beta4.projects[':project'].instances[':instance'].$put(args, options),
  )
}

export async function deleteSqlV1beta4ProjectsProjectInstancesInstance(
  args: InferRequestType<
    (typeof client.sql.v1beta4.projects)[':project']['instances'][':instance']['$delete']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.sql.v1beta4.projects[':project'].instances[':instance'].$delete(args, options),
  )
}

export async function patchSqlV1beta4ProjectsProjectInstancesInstance(
  args: InferRequestType<
    (typeof client.sql.v1beta4.projects)[':project']['instances'][':instance']['$patch']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.sql.v1beta4.projects[':project'].instances[':instance'].$patch(args, options),
  )
}

export async function postSqlV1beta4ProjectsProjectInstancesInstanceAddServerCa(
  args: InferRequestType<
    (typeof client.sql.v1beta4.projects)[':project']['instances'][':instance']['addServerCa']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.sql.v1beta4.projects[':project'].instances[':instance'].addServerCa.$post(args, options),
  )
}

export async function getSqlV1beta4ProjectsProjectInstancesInstanceBackupRuns(
  args: InferRequestType<
    (typeof client.sql.v1beta4.projects)[':project']['instances'][':instance']['backupRuns']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.sql.v1beta4.projects[':project'].instances[':instance'].backupRuns.$get(args, options),
  )
}

export async function postSqlV1beta4ProjectsProjectInstancesInstanceBackupRuns(
  args: InferRequestType<
    (typeof client.sql.v1beta4.projects)[':project']['instances'][':instance']['backupRuns']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.sql.v1beta4.projects[':project'].instances[':instance'].backupRuns.$post(args, options),
  )
}

export async function getSqlV1beta4ProjectsProjectInstancesInstanceBackupRunsId(
  args: InferRequestType<
    (typeof client.sql.v1beta4.projects)[':project']['instances'][':instance']['backupRuns'][':id']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.sql.v1beta4.projects[':project'].instances[':instance'].backupRuns[':id'].$get(
      args,
      options,
    ),
  )
}

export async function deleteSqlV1beta4ProjectsProjectInstancesInstanceBackupRunsId(
  args: InferRequestType<
    (typeof client.sql.v1beta4.projects)[':project']['instances'][':instance']['backupRuns'][':id']['$delete']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.sql.v1beta4.projects[':project'].instances[':instance'].backupRuns[':id'].$delete(
      args,
      options,
    ),
  )
}

export async function postSqlV1beta4ProjectsProjectInstancesInstanceClone(
  args: InferRequestType<
    (typeof client.sql.v1beta4.projects)[':project']['instances'][':instance']['clone']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.sql.v1beta4.projects[':project'].instances[':instance'].clone.$post(args, options),
  )
}

export async function getSqlV1beta4ProjectsProjectInstancesInstanceConnectSettings(
  args: InferRequestType<
    (typeof client.sql.v1beta4.projects)[':project']['instances'][':instance']['connectSettings']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.sql.v1beta4.projects[':project'].instances[':instance'].connectSettings.$get(
      args,
      options,
    ),
  )
}

export async function postSqlV1beta4ProjectsProjectInstancesInstanceCreateEphemeral(
  args: InferRequestType<
    (typeof client.sql.v1beta4.projects)[':project']['instances'][':instance']['createEphemeral']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.sql.v1beta4.projects[':project'].instances[':instance'].createEphemeral.$post(
      args,
      options,
    ),
  )
}

export async function getSqlV1beta4ProjectsProjectInstancesInstanceDatabases(
  args: InferRequestType<
    (typeof client.sql.v1beta4.projects)[':project']['instances'][':instance']['databases']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.sql.v1beta4.projects[':project'].instances[':instance'].databases.$get(args, options),
  )
}

export async function postSqlV1beta4ProjectsProjectInstancesInstanceDatabases(
  args: InferRequestType<
    (typeof client.sql.v1beta4.projects)[':project']['instances'][':instance']['databases']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.sql.v1beta4.projects[':project'].instances[':instance'].databases.$post(args, options),
  )
}

export async function getSqlV1beta4ProjectsProjectInstancesInstanceDatabasesDatabase(
  args: InferRequestType<
    (typeof client.sql.v1beta4.projects)[':project']['instances'][':instance']['databases'][':database']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.sql.v1beta4.projects[':project'].instances[':instance'].databases[':database'].$get(
      args,
      options,
    ),
  )
}

export async function putSqlV1beta4ProjectsProjectInstancesInstanceDatabasesDatabase(
  args: InferRequestType<
    (typeof client.sql.v1beta4.projects)[':project']['instances'][':instance']['databases'][':database']['$put']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.sql.v1beta4.projects[':project'].instances[':instance'].databases[':database'].$put(
      args,
      options,
    ),
  )
}

export async function deleteSqlV1beta4ProjectsProjectInstancesInstanceDatabasesDatabase(
  args: InferRequestType<
    (typeof client.sql.v1beta4.projects)[':project']['instances'][':instance']['databases'][':database']['$delete']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.sql.v1beta4.projects[':project'].instances[':instance'].databases[':database'].$delete(
      args,
      options,
    ),
  )
}

export async function patchSqlV1beta4ProjectsProjectInstancesInstanceDatabasesDatabase(
  args: InferRequestType<
    (typeof client.sql.v1beta4.projects)[':project']['instances'][':instance']['databases'][':database']['$patch']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.sql.v1beta4.projects[':project'].instances[':instance'].databases[':database'].$patch(
      args,
      options,
    ),
  )
}

export async function postSqlV1beta4ProjectsProjectInstancesInstanceDemoteMaster(
  args: InferRequestType<
    (typeof client.sql.v1beta4.projects)[':project']['instances'][':instance']['demoteMaster']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.sql.v1beta4.projects[':project'].instances[':instance'].demoteMaster.$post(
      args,
      options,
    ),
  )
}

export async function postSqlV1beta4ProjectsProjectInstancesInstanceExport(
  args: InferRequestType<
    (typeof client.sql.v1beta4.projects)[':project']['instances'][':instance']['export']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.sql.v1beta4.projects[':project'].instances[':instance'].export.$post(args, options),
  )
}

export async function postSqlV1beta4ProjectsProjectInstancesInstanceFailover(
  args: InferRequestType<
    (typeof client.sql.v1beta4.projects)[':project']['instances'][':instance']['failover']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.sql.v1beta4.projects[':project'].instances[':instance'].failover.$post(args, options),
  )
}

export async function getSqlV1beta4ProjectsProjectInstancesInstanceGetDiskShrinkConfig(
  args: InferRequestType<
    (typeof client.sql.v1beta4.projects)[':project']['instances'][':instance']['getDiskShrinkConfig']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.sql.v1beta4.projects[':project'].instances[':instance'].getDiskShrinkConfig.$get(
      args,
      options,
    ),
  )
}

export async function postSqlV1beta4ProjectsProjectInstancesInstanceImport(
  args: InferRequestType<
    (typeof client.sql.v1beta4.projects)[':project']['instances'][':instance']['import']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.sql.v1beta4.projects[':project'].instances[':instance'].import.$post(args, options),
  )
}

export async function getSqlV1beta4ProjectsProjectInstancesInstanceListServerCas(
  args: InferRequestType<
    (typeof client.sql.v1beta4.projects)[':project']['instances'][':instance']['listServerCas']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.sql.v1beta4.projects[':project'].instances[':instance'].listServerCas.$get(
      args,
      options,
    ),
  )
}

export async function postSqlV1beta4ProjectsProjectInstancesInstancePerformDiskShrink(
  args: InferRequestType<
    (typeof client.sql.v1beta4.projects)[':project']['instances'][':instance']['performDiskShrink']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.sql.v1beta4.projects[':project'].instances[':instance'].performDiskShrink.$post(
      args,
      options,
    ),
  )
}

export async function postSqlV1beta4ProjectsProjectInstancesInstancePromoteReplica(
  args: InferRequestType<
    (typeof client.sql.v1beta4.projects)[':project']['instances'][':instance']['promoteReplica']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.sql.v1beta4.projects[':project'].instances[':instance'].promoteReplica.$post(
      args,
      options,
    ),
  )
}

export async function postSqlV1beta4ProjectsProjectInstancesInstanceRescheduleMaintenance(
  args: InferRequestType<
    (typeof client.sql.v1beta4.projects)[':project']['instances'][':instance']['rescheduleMaintenance']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.sql.v1beta4.projects[':project'].instances[':instance'].rescheduleMaintenance.$post(
      args,
      options,
    ),
  )
}

export async function postSqlV1beta4ProjectsProjectInstancesInstanceResetReplicaSize(
  args: InferRequestType<
    (typeof client.sql.v1beta4.projects)[':project']['instances'][':instance']['resetReplicaSize']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.sql.v1beta4.projects[':project'].instances[':instance'].resetReplicaSize.$post(
      args,
      options,
    ),
  )
}

export async function postSqlV1beta4ProjectsProjectInstancesInstanceResetSslConfig(
  args: InferRequestType<
    (typeof client.sql.v1beta4.projects)[':project']['instances'][':instance']['resetSslConfig']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.sql.v1beta4.projects[':project'].instances[':instance'].resetSslConfig.$post(
      args,
      options,
    ),
  )
}

export async function postSqlV1beta4ProjectsProjectInstancesInstanceRestart(
  args: InferRequestType<
    (typeof client.sql.v1beta4.projects)[':project']['instances'][':instance']['restart']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.sql.v1beta4.projects[':project'].instances[':instance'].restart.$post(args, options),
  )
}

export async function postSqlV1beta4ProjectsProjectInstancesInstanceRestoreBackup(
  args: InferRequestType<
    (typeof client.sql.v1beta4.projects)[':project']['instances'][':instance']['restoreBackup']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.sql.v1beta4.projects[':project'].instances[':instance'].restoreBackup.$post(
      args,
      options,
    ),
  )
}

export async function postSqlV1beta4ProjectsProjectInstancesInstanceRotateServerCa(
  args: InferRequestType<
    (typeof client.sql.v1beta4.projects)[':project']['instances'][':instance']['rotateServerCa']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.sql.v1beta4.projects[':project'].instances[':instance'].rotateServerCa.$post(
      args,
      options,
    ),
  )
}

export async function getSqlV1beta4ProjectsProjectInstancesInstanceSslCerts(
  args: InferRequestType<
    (typeof client.sql.v1beta4.projects)[':project']['instances'][':instance']['sslCerts']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.sql.v1beta4.projects[':project'].instances[':instance'].sslCerts.$get(args, options),
  )
}

export async function postSqlV1beta4ProjectsProjectInstancesInstanceSslCerts(
  args: InferRequestType<
    (typeof client.sql.v1beta4.projects)[':project']['instances'][':instance']['sslCerts']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.sql.v1beta4.projects[':project'].instances[':instance'].sslCerts.$post(args, options),
  )
}

export async function getSqlV1beta4ProjectsProjectInstancesInstanceSslCertsSha1Fingerprint(
  args: InferRequestType<
    (typeof client.sql.v1beta4.projects)[':project']['instances'][':instance']['sslCerts'][':sha1Fingerprint']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.sql.v1beta4.projects[':project'].instances[':instance'].sslCerts[
      ':sha1Fingerprint'
    ].$get(args, options),
  )
}

export async function deleteSqlV1beta4ProjectsProjectInstancesInstanceSslCertsSha1Fingerprint(
  args: InferRequestType<
    (typeof client.sql.v1beta4.projects)[':project']['instances'][':instance']['sslCerts'][':sha1Fingerprint']['$delete']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.sql.v1beta4.projects[':project'].instances[':instance'].sslCerts[
      ':sha1Fingerprint'
    ].$delete(args, options),
  )
}

export async function postSqlV1beta4ProjectsProjectInstancesInstanceStartExternalSync(
  args: InferRequestType<
    (typeof client.sql.v1beta4.projects)[':project']['instances'][':instance']['startExternalSync']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.sql.v1beta4.projects[':project'].instances[':instance'].startExternalSync.$post(
      args,
      options,
    ),
  )
}

export async function postSqlV1beta4ProjectsProjectInstancesInstanceStartReplica(
  args: InferRequestType<
    (typeof client.sql.v1beta4.projects)[':project']['instances'][':instance']['startReplica']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.sql.v1beta4.projects[':project'].instances[':instance'].startReplica.$post(
      args,
      options,
    ),
  )
}

export async function postSqlV1beta4ProjectsProjectInstancesInstanceStopReplica(
  args: InferRequestType<
    (typeof client.sql.v1beta4.projects)[':project']['instances'][':instance']['stopReplica']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.sql.v1beta4.projects[':project'].instances[':instance'].stopReplica.$post(args, options),
  )
}

export async function postSqlV1beta4ProjectsProjectInstancesInstanceTruncateLog(
  args: InferRequestType<
    (typeof client.sql.v1beta4.projects)[':project']['instances'][':instance']['truncateLog']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.sql.v1beta4.projects[':project'].instances[':instance'].truncateLog.$post(args, options),
  )
}

export async function getSqlV1beta4ProjectsProjectInstancesInstanceUsers(
  args: InferRequestType<
    (typeof client.sql.v1beta4.projects)[':project']['instances'][':instance']['users']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.sql.v1beta4.projects[':project'].instances[':instance'].users.$get(args, options),
  )
}

export async function putSqlV1beta4ProjectsProjectInstancesInstanceUsers(
  args: InferRequestType<
    (typeof client.sql.v1beta4.projects)[':project']['instances'][':instance']['users']['$put']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.sql.v1beta4.projects[':project'].instances[':instance'].users.$put(args, options),
  )
}

export async function postSqlV1beta4ProjectsProjectInstancesInstanceUsers(
  args: InferRequestType<
    (typeof client.sql.v1beta4.projects)[':project']['instances'][':instance']['users']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.sql.v1beta4.projects[':project'].instances[':instance'].users.$post(args, options),
  )
}

export async function deleteSqlV1beta4ProjectsProjectInstancesInstanceUsers(
  args: InferRequestType<
    (typeof client.sql.v1beta4.projects)[':project']['instances'][':instance']['users']['$delete']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.sql.v1beta4.projects[':project'].instances[':instance'].users.$delete(args, options),
  )
}

export async function getSqlV1beta4ProjectsProjectInstancesInstanceUsersName(
  args: InferRequestType<
    (typeof client.sql.v1beta4.projects)[':project']['instances'][':instance']['users'][':name']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.sql.v1beta4.projects[':project'].instances[':instance'].users[':name'].$get(
      args,
      options,
    ),
  )
}

export async function postSqlV1beta4ProjectsProjectInstancesInstanceVerifyExternalSyncSettings(
  args: InferRequestType<
    (typeof client.sql.v1beta4.projects)[':project']['instances'][':instance']['verifyExternalSyncSettings']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.sql.v1beta4.projects[':project'].instances[':instance'].verifyExternalSyncSettings.$post(
      args,
      options,
    ),
  )
}

export async function postSqlV1beta4ProjectsProjectInstancesInstanceGenerateEphemeralCert(
  args: InferRequestType<
    (typeof client.sql.v1beta4.projects)[':project']['instances'][':instance:generateEphemeralCert']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.sql.v1beta4.projects[':project'].instances[':instance:generateEphemeralCert'].$post(
      args,
      options,
    ),
  )
}

export async function getSqlV1beta4ProjectsProjectOperations(
  args: InferRequestType<(typeof client.sql.v1beta4.projects)[':project']['operations']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.sql.v1beta4.projects[':project'].operations.$get(args, options))
}

export async function getSqlV1beta4ProjectsProjectOperationsOperation(
  args: InferRequestType<
    (typeof client.sql.v1beta4.projects)[':project']['operations'][':operation']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.sql.v1beta4.projects[':project'].operations[':operation'].$get(args, options),
  )
}

export async function getSqlV1beta4ProjectsProjectTiers(
  args: InferRequestType<(typeof client.sql.v1beta4.projects)[':project']['tiers']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.sql.v1beta4.projects[':project'].tiers.$get(args, options))
}
