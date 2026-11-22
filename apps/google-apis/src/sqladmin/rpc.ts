import type { InferRequestType, ClientRequestOptions } from 'hono/client'
import { parseResponse } from 'hono/client'
import { client } from './client'

export async function getV1Flags(
  args: InferRequestType<typeof client.v1.flags.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1.flags.$get(args, options))
}

export async function getV1ProjectsProjectInstances(
  args: InferRequestType<(typeof client.v1.projects)[':project']['instances']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1.projects[':project'].instances.$get(args, options))
}

export async function postV1ProjectsProjectInstances(
  args: InferRequestType<(typeof client.v1.projects)[':project']['instances']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1.projects[':project'].instances.$post(args, options))
}

export async function getV1ProjectsProjectInstancesInstance(
  args: InferRequestType<(typeof client.v1.projects)[':project']['instances'][':instance']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.v1.projects[':project'].instances[':instance'].$get(args, options),
  )
}

export async function putV1ProjectsProjectInstancesInstance(
  args: InferRequestType<(typeof client.v1.projects)[':project']['instances'][':instance']['$put']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.v1.projects[':project'].instances[':instance'].$put(args, options),
  )
}

export async function deleteV1ProjectsProjectInstancesInstance(
  args: InferRequestType<
    (typeof client.v1.projects)[':project']['instances'][':instance']['$delete']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.v1.projects[':project'].instances[':instance'].$delete(args, options),
  )
}

export async function patchV1ProjectsProjectInstancesInstance(
  args: InferRequestType<
    (typeof client.v1.projects)[':project']['instances'][':instance']['$patch']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.v1.projects[':project'].instances[':instance'].$patch(args, options),
  )
}

export async function postV1ProjectsProjectInstancesInstanceAddServerCa(
  args: InferRequestType<
    (typeof client.v1.projects)[':project']['instances'][':instance']['addServerCa']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.v1.projects[':project'].instances[':instance'].addServerCa.$post(args, options),
  )
}

export async function getV1ProjectsProjectInstancesInstanceBackupRuns(
  args: InferRequestType<
    (typeof client.v1.projects)[':project']['instances'][':instance']['backupRuns']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.v1.projects[':project'].instances[':instance'].backupRuns.$get(args, options),
  )
}

export async function postV1ProjectsProjectInstancesInstanceBackupRuns(
  args: InferRequestType<
    (typeof client.v1.projects)[':project']['instances'][':instance']['backupRuns']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.v1.projects[':project'].instances[':instance'].backupRuns.$post(args, options),
  )
}

export async function getV1ProjectsProjectInstancesInstanceBackupRunsId(
  args: InferRequestType<
    (typeof client.v1.projects)[':project']['instances'][':instance']['backupRuns'][':id']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.v1.projects[':project'].instances[':instance'].backupRuns[':id'].$get(args, options),
  )
}

export async function deleteV1ProjectsProjectInstancesInstanceBackupRunsId(
  args: InferRequestType<
    (typeof client.v1.projects)[':project']['instances'][':instance']['backupRuns'][':id']['$delete']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.v1.projects[':project'].instances[':instance'].backupRuns[':id'].$delete(args, options),
  )
}

export async function postV1ProjectsProjectInstancesInstanceClone(
  args: InferRequestType<
    (typeof client.v1.projects)[':project']['instances'][':instance']['clone']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.v1.projects[':project'].instances[':instance'].clone.$post(args, options),
  )
}

export async function getV1ProjectsProjectInstancesInstanceConnectSettings(
  args: InferRequestType<
    (typeof client.v1.projects)[':project']['instances'][':instance']['connectSettings']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.v1.projects[':project'].instances[':instance'].connectSettings.$get(args, options),
  )
}

export async function postV1ProjectsProjectInstancesInstanceCreateEphemeral(
  args: InferRequestType<
    (typeof client.v1.projects)[':project']['instances'][':instance']['createEphemeral']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.v1.projects[':project'].instances[':instance'].createEphemeral.$post(args, options),
  )
}

export async function getV1ProjectsProjectInstancesInstanceDatabases(
  args: InferRequestType<
    (typeof client.v1.projects)[':project']['instances'][':instance']['databases']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.v1.projects[':project'].instances[':instance'].databases.$get(args, options),
  )
}

export async function postV1ProjectsProjectInstancesInstanceDatabases(
  args: InferRequestType<
    (typeof client.v1.projects)[':project']['instances'][':instance']['databases']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.v1.projects[':project'].instances[':instance'].databases.$post(args, options),
  )
}

export async function getV1ProjectsProjectInstancesInstanceDatabasesDatabase(
  args: InferRequestType<
    (typeof client.v1.projects)[':project']['instances'][':instance']['databases'][':database']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.v1.projects[':project'].instances[':instance'].databases[':database'].$get(
      args,
      options,
    ),
  )
}

export async function putV1ProjectsProjectInstancesInstanceDatabasesDatabase(
  args: InferRequestType<
    (typeof client.v1.projects)[':project']['instances'][':instance']['databases'][':database']['$put']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.v1.projects[':project'].instances[':instance'].databases[':database'].$put(
      args,
      options,
    ),
  )
}

export async function deleteV1ProjectsProjectInstancesInstanceDatabasesDatabase(
  args: InferRequestType<
    (typeof client.v1.projects)[':project']['instances'][':instance']['databases'][':database']['$delete']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.v1.projects[':project'].instances[':instance'].databases[':database'].$delete(
      args,
      options,
    ),
  )
}

export async function patchV1ProjectsProjectInstancesInstanceDatabasesDatabase(
  args: InferRequestType<
    (typeof client.v1.projects)[':project']['instances'][':instance']['databases'][':database']['$patch']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.v1.projects[':project'].instances[':instance'].databases[':database'].$patch(
      args,
      options,
    ),
  )
}

export async function postV1ProjectsProjectInstancesInstanceDemote(
  args: InferRequestType<
    (typeof client.v1.projects)[':project']['instances'][':instance']['demote']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.v1.projects[':project'].instances[':instance'].demote.$post(args, options),
  )
}

export async function postV1ProjectsProjectInstancesInstanceDemoteMaster(
  args: InferRequestType<
    (typeof client.v1.projects)[':project']['instances'][':instance']['demoteMaster']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.v1.projects[':project'].instances[':instance'].demoteMaster.$post(args, options),
  )
}

export async function postV1ProjectsProjectInstancesInstanceExport(
  args: InferRequestType<
    (typeof client.v1.projects)[':project']['instances'][':instance']['export']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.v1.projects[':project'].instances[':instance'].export.$post(args, options),
  )
}

export async function postV1ProjectsProjectInstancesInstanceFailover(
  args: InferRequestType<
    (typeof client.v1.projects)[':project']['instances'][':instance']['failover']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.v1.projects[':project'].instances[':instance'].failover.$post(args, options),
  )
}

export async function getV1ProjectsProjectInstancesInstanceGetDiskShrinkConfig(
  args: InferRequestType<
    (typeof client.v1.projects)[':project']['instances'][':instance']['getDiskShrinkConfig']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.v1.projects[':project'].instances[':instance'].getDiskShrinkConfig.$get(args, options),
  )
}

export async function getV1ProjectsProjectInstancesInstanceGetLatestRecoveryTime(
  args: InferRequestType<
    (typeof client.v1.projects)[':project']['instances'][':instance']['getLatestRecoveryTime']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.v1.projects[':project'].instances[':instance'].getLatestRecoveryTime.$get(args, options),
  )
}

export async function postV1ProjectsProjectInstancesInstanceImport(
  args: InferRequestType<
    (typeof client.v1.projects)[':project']['instances'][':instance']['import']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.v1.projects[':project'].instances[':instance'].import.$post(args, options),
  )
}

export async function getV1ProjectsProjectInstancesInstanceListServerCas(
  args: InferRequestType<
    (typeof client.v1.projects)[':project']['instances'][':instance']['listServerCas']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.v1.projects[':project'].instances[':instance'].listServerCas.$get(args, options),
  )
}

export async function postV1ProjectsProjectInstancesInstancePerformDiskShrink(
  args: InferRequestType<
    (typeof client.v1.projects)[':project']['instances'][':instance']['performDiskShrink']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.v1.projects[':project'].instances[':instance'].performDiskShrink.$post(args, options),
  )
}

export async function postV1ProjectsProjectInstancesInstancePromoteReplica(
  args: InferRequestType<
    (typeof client.v1.projects)[':project']['instances'][':instance']['promoteReplica']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.v1.projects[':project'].instances[':instance'].promoteReplica.$post(args, options),
  )
}

export async function postV1ProjectsProjectInstancesInstanceReencrypt(
  args: InferRequestType<
    (typeof client.v1.projects)[':project']['instances'][':instance']['reencrypt']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.v1.projects[':project'].instances[':instance'].reencrypt.$post(args, options),
  )
}

export async function postV1ProjectsProjectInstancesInstanceRescheduleMaintenance(
  args: InferRequestType<
    (typeof client.v1.projects)[':project']['instances'][':instance']['rescheduleMaintenance']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.v1.projects[':project'].instances[':instance'].rescheduleMaintenance.$post(
      args,
      options,
    ),
  )
}

export async function postV1ProjectsProjectInstancesInstanceResetReplicaSize(
  args: InferRequestType<
    (typeof client.v1.projects)[':project']['instances'][':instance']['resetReplicaSize']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.v1.projects[':project'].instances[':instance'].resetReplicaSize.$post(args, options),
  )
}

export async function postV1ProjectsProjectInstancesInstanceResetSslConfig(
  args: InferRequestType<
    (typeof client.v1.projects)[':project']['instances'][':instance']['resetSslConfig']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.v1.projects[':project'].instances[':instance'].resetSslConfig.$post(args, options),
  )
}

export async function postV1ProjectsProjectInstancesInstanceRestart(
  args: InferRequestType<
    (typeof client.v1.projects)[':project']['instances'][':instance']['restart']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.v1.projects[':project'].instances[':instance'].restart.$post(args, options),
  )
}

export async function postV1ProjectsProjectInstancesInstanceRestoreBackup(
  args: InferRequestType<
    (typeof client.v1.projects)[':project']['instances'][':instance']['restoreBackup']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.v1.projects[':project'].instances[':instance'].restoreBackup.$post(args, options),
  )
}

export async function postV1ProjectsProjectInstancesInstanceRotateServerCa(
  args: InferRequestType<
    (typeof client.v1.projects)[':project']['instances'][':instance']['rotateServerCa']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.v1.projects[':project'].instances[':instance'].rotateServerCa.$post(args, options),
  )
}

export async function getV1ProjectsProjectInstancesInstanceSslCerts(
  args: InferRequestType<
    (typeof client.v1.projects)[':project']['instances'][':instance']['sslCerts']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.v1.projects[':project'].instances[':instance'].sslCerts.$get(args, options),
  )
}

export async function postV1ProjectsProjectInstancesInstanceSslCerts(
  args: InferRequestType<
    (typeof client.v1.projects)[':project']['instances'][':instance']['sslCerts']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.v1.projects[':project'].instances[':instance'].sslCerts.$post(args, options),
  )
}

export async function getV1ProjectsProjectInstancesInstanceSslCertsSha1Fingerprint(
  args: InferRequestType<
    (typeof client.v1.projects)[':project']['instances'][':instance']['sslCerts'][':sha1Fingerprint']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.v1.projects[':project'].instances[':instance'].sslCerts[':sha1Fingerprint'].$get(
      args,
      options,
    ),
  )
}

export async function deleteV1ProjectsProjectInstancesInstanceSslCertsSha1Fingerprint(
  args: InferRequestType<
    (typeof client.v1.projects)[':project']['instances'][':instance']['sslCerts'][':sha1Fingerprint']['$delete']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.v1.projects[':project'].instances[':instance'].sslCerts[':sha1Fingerprint'].$delete(
      args,
      options,
    ),
  )
}

export async function postV1ProjectsProjectInstancesInstanceStartExternalSync(
  args: InferRequestType<
    (typeof client.v1.projects)[':project']['instances'][':instance']['startExternalSync']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.v1.projects[':project'].instances[':instance'].startExternalSync.$post(args, options),
  )
}

export async function postV1ProjectsProjectInstancesInstanceStartReplica(
  args: InferRequestType<
    (typeof client.v1.projects)[':project']['instances'][':instance']['startReplica']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.v1.projects[':project'].instances[':instance'].startReplica.$post(args, options),
  )
}

export async function postV1ProjectsProjectInstancesInstanceStopReplica(
  args: InferRequestType<
    (typeof client.v1.projects)[':project']['instances'][':instance']['stopReplica']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.v1.projects[':project'].instances[':instance'].stopReplica.$post(args, options),
  )
}

export async function postV1ProjectsProjectInstancesInstanceSwitchover(
  args: InferRequestType<
    (typeof client.v1.projects)[':project']['instances'][':instance']['switchover']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.v1.projects[':project'].instances[':instance'].switchover.$post(args, options),
  )
}

export async function postV1ProjectsProjectInstancesInstanceTruncateLog(
  args: InferRequestType<
    (typeof client.v1.projects)[':project']['instances'][':instance']['truncateLog']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.v1.projects[':project'].instances[':instance'].truncateLog.$post(args, options),
  )
}

export async function getV1ProjectsProjectInstancesInstanceUsers(
  args: InferRequestType<
    (typeof client.v1.projects)[':project']['instances'][':instance']['users']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.v1.projects[':project'].instances[':instance'].users.$get(args, options),
  )
}

export async function putV1ProjectsProjectInstancesInstanceUsers(
  args: InferRequestType<
    (typeof client.v1.projects)[':project']['instances'][':instance']['users']['$put']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.v1.projects[':project'].instances[':instance'].users.$put(args, options),
  )
}

export async function postV1ProjectsProjectInstancesInstanceUsers(
  args: InferRequestType<
    (typeof client.v1.projects)[':project']['instances'][':instance']['users']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.v1.projects[':project'].instances[':instance'].users.$post(args, options),
  )
}

export async function deleteV1ProjectsProjectInstancesInstanceUsers(
  args: InferRequestType<
    (typeof client.v1.projects)[':project']['instances'][':instance']['users']['$delete']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.v1.projects[':project'].instances[':instance'].users.$delete(args, options),
  )
}

export async function getV1ProjectsProjectInstancesInstanceUsersName(
  args: InferRequestType<
    (typeof client.v1.projects)[':project']['instances'][':instance']['users'][':name']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.v1.projects[':project'].instances[':instance'].users[':name'].$get(args, options),
  )
}

export async function postV1ProjectsProjectInstancesInstanceVerifyExternalSyncSettings(
  args: InferRequestType<
    (typeof client.v1.projects)[':project']['instances'][':instance']['verifyExternalSyncSettings']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.v1.projects[':project'].instances[':instance'].verifyExternalSyncSettings.$post(
      args,
      options,
    ),
  )
}

export async function postV1ProjectsProjectInstancesInstanceGenerateEphemeralCert(
  args: InferRequestType<
    (typeof client.v1.projects)[':project']['instances'][':instance:generateEphemeralCert']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.v1.projects[':project'].instances[':instance:generateEphemeralCert'].$post(
      args,
      options,
    ),
  )
}

export async function getV1ProjectsProjectOperations(
  args: InferRequestType<(typeof client.v1.projects)[':project']['operations']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1.projects[':project'].operations.$get(args, options))
}

export async function getV1ProjectsProjectOperationsOperation(
  args: InferRequestType<
    (typeof client.v1.projects)[':project']['operations'][':operation']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.v1.projects[':project'].operations[':operation'].$get(args, options),
  )
}

export async function postV1ProjectsProjectOperationsOperationCancel(
  args: InferRequestType<
    (typeof client.v1.projects)[':project']['operations'][':operation']['cancel']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.v1.projects[':project'].operations[':operation'].cancel.$post(args, options),
  )
}

export async function getV1ProjectsProjectTiers(
  args: InferRequestType<(typeof client.v1.projects)[':project']['tiers']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1.projects[':project'].tiers.$get(args, options))
}
