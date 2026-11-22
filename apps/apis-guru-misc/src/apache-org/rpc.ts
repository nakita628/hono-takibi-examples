import type { InferRequestType, ClientRequestOptions } from 'hono/client'
import { parseResponse } from 'hono/client'
import { client } from './client'

export async function getConfig(options?: ClientRequestOptions) {
  return await parseResponse(client.config.$get(undefined, options))
}

export async function getConnections(
  args: InferRequestType<typeof client.connections.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.connections.$get(args, options))
}

export async function postConnections(
  args: InferRequestType<typeof client.connections.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.connections.$post(args, options))
}

export async function postConnectionsTest(
  args: InferRequestType<typeof client.connections.test.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.connections.test.$post(args, options))
}

export async function getConnectionsConnectionId(
  args: InferRequestType<(typeof client.connections)[':connection_id']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.connections[':connection_id'].$get(args, options))
}

export async function deleteConnectionsConnectionId(
  args: InferRequestType<(typeof client.connections)[':connection_id']['$delete']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.connections[':connection_id'].$delete(args, options))
}

export async function patchConnectionsConnectionId(
  args: InferRequestType<(typeof client.connections)[':connection_id']['$patch']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.connections[':connection_id'].$patch(args, options))
}

export async function getDagSourcesFileToken(
  args: InferRequestType<(typeof client.dagSources)[':file_token']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.dagSources[':file_token'].$get(args, options))
}

export async function getDagWarnings(
  args: InferRequestType<typeof client.dagWarnings.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.dagWarnings.$get(args, options))
}

export async function getDags(
  args: InferRequestType<typeof client.dags.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.dags.$get(args, options))
}

export async function patchDags(
  args: InferRequestType<typeof client.dags.$patch>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.dags.$patch(args, options))
}

export async function getDagsDagId(
  args: InferRequestType<(typeof client.dags)[':dag_id']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.dags[':dag_id'].$get(args, options))
}

export async function deleteDagsDagId(
  args: InferRequestType<(typeof client.dags)[':dag_id']['$delete']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.dags[':dag_id'].$delete(args, options))
}

export async function patchDagsDagId(
  args: InferRequestType<(typeof client.dags)[':dag_id']['$patch']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.dags[':dag_id'].$patch(args, options))
}

export async function postDagsDagIdClearTaskInstances(
  args: InferRequestType<(typeof client.dags)[':dag_id']['clearTaskInstances']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.dags[':dag_id'].clearTaskInstances.$post(args, options))
}

export async function getDagsDagIdDagRuns(
  args: InferRequestType<(typeof client.dags)[':dag_id']['dagRuns']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.dags[':dag_id'].dagRuns.$get(args, options))
}

export async function postDagsDagIdDagRuns(
  args: InferRequestType<(typeof client.dags)[':dag_id']['dagRuns']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.dags[':dag_id'].dagRuns.$post(args, options))
}

export async function getDagsDagIdDagRunsDagRunId(
  args: InferRequestType<(typeof client.dags)[':dag_id']['dagRuns'][':dag_run_id']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.dags[':dag_id'].dagRuns[':dag_run_id'].$get(args, options))
}

export async function deleteDagsDagIdDagRunsDagRunId(
  args: InferRequestType<(typeof client.dags)[':dag_id']['dagRuns'][':dag_run_id']['$delete']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.dags[':dag_id'].dagRuns[':dag_run_id'].$delete(args, options))
}

export async function patchDagsDagIdDagRunsDagRunId(
  args: InferRequestType<(typeof client.dags)[':dag_id']['dagRuns'][':dag_run_id']['$patch']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.dags[':dag_id'].dagRuns[':dag_run_id'].$patch(args, options))
}

export async function postDagsDagIdDagRunsDagRunIdClear(
  args: InferRequestType<
    (typeof client.dags)[':dag_id']['dagRuns'][':dag_run_id']['clear']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.dags[':dag_id'].dagRuns[':dag_run_id'].clear.$post(args, options),
  )
}

export async function patchDagsDagIdDagRunsDagRunIdSetNote(
  args: InferRequestType<
    (typeof client.dags)[':dag_id']['dagRuns'][':dag_run_id']['setNote']['$patch']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.dags[':dag_id'].dagRuns[':dag_run_id'].setNote.$patch(args, options),
  )
}

export async function getDagsDagIdDagRunsDagRunIdTaskInstances(
  args: InferRequestType<
    (typeof client.dags)[':dag_id']['dagRuns'][':dag_run_id']['taskInstances']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.dags[':dag_id'].dagRuns[':dag_run_id'].taskInstances.$get(args, options),
  )
}

export async function getDagsDagIdDagRunsDagRunIdTaskInstancesTaskId(
  args: InferRequestType<
    (typeof client.dags)[':dag_id']['dagRuns'][':dag_run_id']['taskInstances'][':task_id']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.dags[':dag_id'].dagRuns[':dag_run_id'].taskInstances[':task_id'].$get(args, options),
  )
}

export async function patchDagsDagIdDagRunsDagRunIdTaskInstancesTaskId(
  args: InferRequestType<
    (typeof client.dags)[':dag_id']['dagRuns'][':dag_run_id']['taskInstances'][':task_id']['$patch']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.dags[':dag_id'].dagRuns[':dag_run_id'].taskInstances[':task_id'].$patch(args, options),
  )
}

export async function getDagsDagIdDagRunsDagRunIdTaskInstancesTaskIdLinks(
  args: InferRequestType<
    (typeof client.dags)[':dag_id']['dagRuns'][':dag_run_id']['taskInstances'][':task_id']['links']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.dags[':dag_id'].dagRuns[':dag_run_id'].taskInstances[':task_id'].links.$get(
      args,
      options,
    ),
  )
}

export async function getDagsDagIdDagRunsDagRunIdTaskInstancesTaskIdListMapped(
  args: InferRequestType<
    (typeof client.dags)[':dag_id']['dagRuns'][':dag_run_id']['taskInstances'][':task_id']['listMapped']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.dags[':dag_id'].dagRuns[':dag_run_id'].taskInstances[':task_id'].listMapped.$get(
      args,
      options,
    ),
  )
}

export async function getDagsDagIdDagRunsDagRunIdTaskInstancesTaskIdLogsTaskTryNumber(
  args: InferRequestType<
    (typeof client.dags)[':dag_id']['dagRuns'][':dag_run_id']['taskInstances'][':task_id']['logs'][':task_try_number']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.dags[':dag_id'].dagRuns[':dag_run_id'].taskInstances[':task_id'].logs[
      ':task_try_number'
    ].$get(args, options),
  )
}

export async function patchDagsDagIdDagRunsDagRunIdTaskInstancesTaskIdSetNote(
  args: InferRequestType<
    (typeof client.dags)[':dag_id']['dagRuns'][':dag_run_id']['taskInstances'][':task_id']['setNote']['$patch']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.dags[':dag_id'].dagRuns[':dag_run_id'].taskInstances[':task_id'].setNote.$patch(
      args,
      options,
    ),
  )
}

export async function getDagsDagIdDagRunsDagRunIdTaskInstancesTaskIdXcomEntries(
  args: InferRequestType<
    (typeof client.dags)[':dag_id']['dagRuns'][':dag_run_id']['taskInstances'][':task_id']['xcomEntries']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.dags[':dag_id'].dagRuns[':dag_run_id'].taskInstances[':task_id'].xcomEntries.$get(
      args,
      options,
    ),
  )
}

export async function getDagsDagIdDagRunsDagRunIdTaskInstancesTaskIdXcomEntriesXcomKey(
  args: InferRequestType<
    (typeof client.dags)[':dag_id']['dagRuns'][':dag_run_id']['taskInstances'][':task_id']['xcomEntries'][':xcom_key']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.dags[':dag_id'].dagRuns[':dag_run_id'].taskInstances[':task_id'].xcomEntries[
      ':xcom_key'
    ].$get(args, options),
  )
}

export async function getDagsDagIdDagRunsDagRunIdTaskInstancesTaskIdMapIndex(
  args: InferRequestType<
    (typeof client.dags)[':dag_id']['dagRuns'][':dag_run_id']['taskInstances'][':task_id'][':map_index']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.dags[':dag_id'].dagRuns[':dag_run_id'].taskInstances[':task_id'][':map_index'].$get(
      args,
      options,
    ),
  )
}

export async function patchDagsDagIdDagRunsDagRunIdTaskInstancesTaskIdMapIndex(
  args: InferRequestType<
    (typeof client.dags)[':dag_id']['dagRuns'][':dag_run_id']['taskInstances'][':task_id'][':map_index']['$patch']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.dags[':dag_id'].dagRuns[':dag_run_id'].taskInstances[':task_id'][':map_index'].$patch(
      args,
      options,
    ),
  )
}

export async function patchDagsDagIdDagRunsDagRunIdTaskInstancesTaskIdMapIndexSetNote(
  args: InferRequestType<
    (typeof client.dags)[':dag_id']['dagRuns'][':dag_run_id']['taskInstances'][':task_id'][':map_index']['setNote']['$patch']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.dags[':dag_id'].dagRuns[':dag_run_id'].taskInstances[':task_id'][
      ':map_index'
    ].setNote.$patch(args, options),
  )
}

export async function getDagsDagIdDagRunsDagRunIdUpstreamDatasetEvents(
  args: InferRequestType<
    (typeof client.dags)[':dag_id']['dagRuns'][':dag_run_id']['upstreamDatasetEvents']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.dags[':dag_id'].dagRuns[':dag_run_id'].upstreamDatasetEvents.$get(args, options),
  )
}

export async function getDagsDagIdDetails(
  args: InferRequestType<(typeof client.dags)[':dag_id']['details']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.dags[':dag_id'].details.$get(args, options))
}

export async function getDagsDagIdTasks(
  args: InferRequestType<(typeof client.dags)[':dag_id']['tasks']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.dags[':dag_id'].tasks.$get(args, options))
}

export async function getDagsDagIdTasksTaskId(
  args: InferRequestType<(typeof client.dags)[':dag_id']['tasks'][':task_id']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.dags[':dag_id'].tasks[':task_id'].$get(args, options))
}

export async function postDagsDagIdUpdateTaskInstancesState(
  args: InferRequestType<(typeof client.dags)[':dag_id']['updateTaskInstancesState']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.dags[':dag_id'].updateTaskInstancesState.$post(args, options))
}

export async function postDagsTildeDagRunsList(
  args: InferRequestType<(typeof client.dags)['~']['dagRuns']['list']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.dags['~'].dagRuns.list.$post(args, options))
}

export async function postDagsTildeDagRunsTildeTaskInstancesList(
  args: InferRequestType<
    (typeof client.dags)['~']['dagRuns']['~']['taskInstances']['list']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.dags['~'].dagRuns['~'].taskInstances.list.$post(args, options))
}

export async function getDatasets(
  args: InferRequestType<typeof client.datasets.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.datasets.$get(args, options))
}

export async function getDatasetsEvents(
  args: InferRequestType<typeof client.datasets.events.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.datasets.events.$get(args, options))
}

export async function getDatasetsUri(
  args: InferRequestType<(typeof client.datasets)[':uri']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.datasets[':uri'].$get(args, options))
}

export async function getEventLogs(
  args: InferRequestType<typeof client.eventLogs.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.eventLogs.$get(args, options))
}

export async function getEventLogsEventLogId(
  args: InferRequestType<(typeof client.eventLogs)[':event_log_id']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.eventLogs[':event_log_id'].$get(args, options))
}

export async function getHealth(options?: ClientRequestOptions) {
  return await parseResponse(client.health.$get(undefined, options))
}

export async function getImportErrors(
  args: InferRequestType<typeof client.importErrors.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.importErrors.$get(args, options))
}

export async function getImportErrorsImportErrorId(
  args: InferRequestType<(typeof client.importErrors)[':import_error_id']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.importErrors[':import_error_id'].$get(args, options))
}

export async function getPermissions(
  args: InferRequestType<typeof client.permissions.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.permissions.$get(args, options))
}

export async function getPlugins(
  args: InferRequestType<typeof client.plugins.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.plugins.$get(args, options))
}

export async function getPools(
  args: InferRequestType<typeof client.pools.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.pools.$get(args, options))
}

export async function postPools(
  args: InferRequestType<typeof client.pools.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.pools.$post(args, options))
}

export async function getPoolsPoolName(
  args: InferRequestType<(typeof client.pools)[':pool_name']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.pools[':pool_name'].$get(args, options))
}

export async function deletePoolsPoolName(
  args: InferRequestType<(typeof client.pools)[':pool_name']['$delete']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.pools[':pool_name'].$delete(args, options))
}

export async function patchPoolsPoolName(
  args: InferRequestType<(typeof client.pools)[':pool_name']['$patch']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.pools[':pool_name'].$patch(args, options))
}

export async function getProviders(options?: ClientRequestOptions) {
  return await parseResponse(client.providers.$get(undefined, options))
}

export async function getRoles(
  args: InferRequestType<typeof client.roles.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.roles.$get(args, options))
}

export async function postRoles(
  args: InferRequestType<typeof client.roles.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.roles.$post(args, options))
}

export async function getRolesRoleName(
  args: InferRequestType<(typeof client.roles)[':role_name']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.roles[':role_name'].$get(args, options))
}

export async function deleteRolesRoleName(
  args: InferRequestType<(typeof client.roles)[':role_name']['$delete']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.roles[':role_name'].$delete(args, options))
}

export async function patchRolesRoleName(
  args: InferRequestType<(typeof client.roles)[':role_name']['$patch']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.roles[':role_name'].$patch(args, options))
}

export async function getUsers(
  args: InferRequestType<typeof client.users.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.users.$get(args, options))
}

export async function postUsers(
  args: InferRequestType<typeof client.users.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.users.$post(args, options))
}

export async function getUsersUsername(
  args: InferRequestType<(typeof client.users)[':username']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.users[':username'].$get(args, options))
}

export async function deleteUsersUsername(
  args: InferRequestType<(typeof client.users)[':username']['$delete']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.users[':username'].$delete(args, options))
}

export async function patchUsersUsername(
  args: InferRequestType<(typeof client.users)[':username']['$patch']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.users[':username'].$patch(args, options))
}

export async function getVariables(
  args: InferRequestType<typeof client.variables.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.variables.$get(args, options))
}

export async function postVariables(
  args: InferRequestType<typeof client.variables.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.variables.$post(args, options))
}

export async function getVariablesVariableKey(
  args: InferRequestType<(typeof client.variables)[':variable_key']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.variables[':variable_key'].$get(args, options))
}

export async function deleteVariablesVariableKey(
  args: InferRequestType<(typeof client.variables)[':variable_key']['$delete']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.variables[':variable_key'].$delete(args, options))
}

export async function patchVariablesVariableKey(
  args: InferRequestType<(typeof client.variables)[':variable_key']['$patch']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.variables[':variable_key'].$patch(args, options))
}

export async function getVersion(options?: ClientRequestOptions) {
  return await parseResponse(client.version.$get(undefined, options))
}
