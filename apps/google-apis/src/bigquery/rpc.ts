import type { InferRequestType, ClientRequestOptions } from 'hono/client'
import { parseResponse } from 'hono/client'
import { client } from './client'

export async function getProjects(
  args: InferRequestType<typeof client.projects.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.projects.$get(args, options))
}

export async function getProjectsProjectIdDatasets(
  args: InferRequestType<(typeof client.projects)[':projectId']['datasets']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.projects[':projectId'].datasets.$get(args, options))
}

export async function postProjectsProjectIdDatasets(
  args: InferRequestType<(typeof client.projects)[':projectId']['datasets']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.projects[':projectId'].datasets.$post(args, options))
}

export async function getProjectsProjectIdDatasetsDatasetId(
  args: InferRequestType<(typeof client.projects)[':projectId']['datasets'][':datasetId']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.projects[':projectId'].datasets[':datasetId'].$get(args, options),
  )
}

export async function putProjectsProjectIdDatasetsDatasetId(
  args: InferRequestType<(typeof client.projects)[':projectId']['datasets'][':datasetId']['$put']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.projects[':projectId'].datasets[':datasetId'].$put(args, options),
  )
}

export async function deleteProjectsProjectIdDatasetsDatasetId(
  args: InferRequestType<
    (typeof client.projects)[':projectId']['datasets'][':datasetId']['$delete']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.projects[':projectId'].datasets[':datasetId'].$delete(args, options),
  )
}

export async function patchProjectsProjectIdDatasetsDatasetId(
  args: InferRequestType<
    (typeof client.projects)[':projectId']['datasets'][':datasetId']['$patch']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.projects[':projectId'].datasets[':datasetId'].$patch(args, options),
  )
}

export async function getProjectsProjectIdDatasetsDatasetIdModels(
  args: InferRequestType<
    (typeof client.projects)[':projectId']['datasets'][':datasetId']['models']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.projects[':projectId'].datasets[':datasetId'].models.$get(args, options),
  )
}

export async function getProjectsProjectIdDatasetsDatasetIdModelsModelId(
  args: InferRequestType<
    (typeof client.projects)[':projectId']['datasets'][':datasetId']['models'][':modelId']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.projects[':projectId'].datasets[':datasetId'].models[':modelId'].$get(args, options),
  )
}

export async function deleteProjectsProjectIdDatasetsDatasetIdModelsModelId(
  args: InferRequestType<
    (typeof client.projects)[':projectId']['datasets'][':datasetId']['models'][':modelId']['$delete']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.projects[':projectId'].datasets[':datasetId'].models[':modelId'].$delete(args, options),
  )
}

export async function patchProjectsProjectIdDatasetsDatasetIdModelsModelId(
  args: InferRequestType<
    (typeof client.projects)[':projectId']['datasets'][':datasetId']['models'][':modelId']['$patch']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.projects[':projectId'].datasets[':datasetId'].models[':modelId'].$patch(args, options),
  )
}

export async function getProjectsProjectIdDatasetsDatasetIdRoutines(
  args: InferRequestType<
    (typeof client.projects)[':projectId']['datasets'][':datasetId']['routines']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.projects[':projectId'].datasets[':datasetId'].routines.$get(args, options),
  )
}

export async function postProjectsProjectIdDatasetsDatasetIdRoutines(
  args: InferRequestType<
    (typeof client.projects)[':projectId']['datasets'][':datasetId']['routines']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.projects[':projectId'].datasets[':datasetId'].routines.$post(args, options),
  )
}

export async function getProjectsProjectIdDatasetsDatasetIdRoutinesRoutineId(
  args: InferRequestType<
    (typeof client.projects)[':projectId']['datasets'][':datasetId']['routines'][':routineId']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.projects[':projectId'].datasets[':datasetId'].routines[':routineId'].$get(args, options),
  )
}

export async function putProjectsProjectIdDatasetsDatasetIdRoutinesRoutineId(
  args: InferRequestType<
    (typeof client.projects)[':projectId']['datasets'][':datasetId']['routines'][':routineId']['$put']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.projects[':projectId'].datasets[':datasetId'].routines[':routineId'].$put(args, options),
  )
}

export async function deleteProjectsProjectIdDatasetsDatasetIdRoutinesRoutineId(
  args: InferRequestType<
    (typeof client.projects)[':projectId']['datasets'][':datasetId']['routines'][':routineId']['$delete']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.projects[':projectId'].datasets[':datasetId'].routines[':routineId'].$delete(
      args,
      options,
    ),
  )
}

export async function getProjectsProjectIdDatasetsDatasetIdTables(
  args: InferRequestType<
    (typeof client.projects)[':projectId']['datasets'][':datasetId']['tables']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.projects[':projectId'].datasets[':datasetId'].tables.$get(args, options),
  )
}

export async function postProjectsProjectIdDatasetsDatasetIdTables(
  args: InferRequestType<
    (typeof client.projects)[':projectId']['datasets'][':datasetId']['tables']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.projects[':projectId'].datasets[':datasetId'].tables.$post(args, options),
  )
}

export async function getProjectsProjectIdDatasetsDatasetIdTablesTableId(
  args: InferRequestType<
    (typeof client.projects)[':projectId']['datasets'][':datasetId']['tables'][':tableId']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.projects[':projectId'].datasets[':datasetId'].tables[':tableId'].$get(args, options),
  )
}

export async function putProjectsProjectIdDatasetsDatasetIdTablesTableId(
  args: InferRequestType<
    (typeof client.projects)[':projectId']['datasets'][':datasetId']['tables'][':tableId']['$put']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.projects[':projectId'].datasets[':datasetId'].tables[':tableId'].$put(args, options),
  )
}

export async function deleteProjectsProjectIdDatasetsDatasetIdTablesTableId(
  args: InferRequestType<
    (typeof client.projects)[':projectId']['datasets'][':datasetId']['tables'][':tableId']['$delete']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.projects[':projectId'].datasets[':datasetId'].tables[':tableId'].$delete(args, options),
  )
}

export async function patchProjectsProjectIdDatasetsDatasetIdTablesTableId(
  args: InferRequestType<
    (typeof client.projects)[':projectId']['datasets'][':datasetId']['tables'][':tableId']['$patch']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.projects[':projectId'].datasets[':datasetId'].tables[':tableId'].$patch(args, options),
  )
}

export async function getProjectsProjectIdDatasetsDatasetIdTablesTableIdData(
  args: InferRequestType<
    (typeof client.projects)[':projectId']['datasets'][':datasetId']['tables'][':tableId']['data']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.projects[':projectId'].datasets[':datasetId'].tables[':tableId'].data.$get(
      args,
      options,
    ),
  )
}

export async function postProjectsProjectIdDatasetsDatasetIdTablesTableIdInsertAll(
  args: InferRequestType<
    (typeof client.projects)[':projectId']['datasets'][':datasetId']['tables'][':tableId']['insertAll']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.projects[':projectId'].datasets[':datasetId'].tables[':tableId'].insertAll.$post(
      args,
      options,
    ),
  )
}

export async function getProjectsProjectIdDatasetsDatasetIdTablesTableIdRowAccessPolicies(
  args: InferRequestType<
    (typeof client.projects)[':projectId']['datasets'][':datasetId']['tables'][':tableId']['rowAccessPolicies']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.projects[':projectId'].datasets[':datasetId'].tables[':tableId'].rowAccessPolicies.$get(
      args,
      options,
    ),
  )
}

export async function postProjectsProjectIdDatasetsDatasetIdUndelete(
  args: InferRequestType<
    (typeof client.projects)[':projectId']['datasets'][':datasetId:undelete']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.projects[':projectId'].datasets[':datasetId:undelete'].$post(args, options),
  )
}

export async function getProjectsProjectIdJobs(
  args: InferRequestType<(typeof client.projects)[':projectId']['jobs']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.projects[':projectId'].jobs.$get(args, options))
}

export async function postProjectsProjectIdJobs(
  args: InferRequestType<(typeof client.projects)[':projectId']['jobs']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.projects[':projectId'].jobs.$post(args, options))
}

export async function getProjectsProjectIdJobsJobId(
  args: InferRequestType<(typeof client.projects)[':projectId']['jobs'][':jobId']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.projects[':projectId'].jobs[':jobId'].$get(args, options))
}

export async function postProjectsProjectIdJobsJobIdCancel(
  args: InferRequestType<
    (typeof client.projects)[':projectId']['jobs'][':jobId']['cancel']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.projects[':projectId'].jobs[':jobId'].cancel.$post(args, options),
  )
}

export async function deleteProjectsProjectIdJobsJobIdDelete(
  args: InferRequestType<
    (typeof client.projects)[':projectId']['jobs'][':jobId']['delete']['$delete']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.projects[':projectId'].jobs[':jobId'].delete.$delete(args, options),
  )
}

export async function postProjectsProjectIdQueries(
  args: InferRequestType<(typeof client.projects)[':projectId']['queries']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.projects[':projectId'].queries.$post(args, options))
}

export async function getProjectsProjectIdQueriesJobId(
  args: InferRequestType<(typeof client.projects)[':projectId']['queries'][':jobId']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.projects[':projectId'].queries[':jobId'].$get(args, options))
}

export async function getProjectsProjectIdServiceAccount(
  args: InferRequestType<(typeof client.projects)[':projectId']['serviceAccount']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.projects[':projectId'].serviceAccount.$get(args, options))
}

export async function postResourceGetIamPolicy(
  args: InferRequestType<(typeof client)[':resource:getIamPolicy']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client[':resource:getIamPolicy'].$post(args, options))
}

export async function postResourceSetIamPolicy(
  args: InferRequestType<(typeof client)[':resource:setIamPolicy']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client[':resource:setIamPolicy'].$post(args, options))
}

export async function postResourceTestIamPermissions(
  args: InferRequestType<(typeof client)[':resource:testIamPermissions']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client[':resource:testIamPermissions'].$post(args, options))
}
