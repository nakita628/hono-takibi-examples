import type { InferRequestType, ClientRequestOptions } from 'hono/client'
import { parseResponse } from 'hono/client'
import { client } from './client'

export async function postV1b3ProjectsProjectIdWorkerMessages(
  args: InferRequestType<(typeof client.v1b3.projects)[':projectId']['WorkerMessages']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1b3.projects[':projectId'].WorkerMessages.$post(args, options))
}

export async function getV1b3ProjectsProjectIdJobs(
  args: InferRequestType<(typeof client.v1b3.projects)[':projectId']['jobs']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1b3.projects[':projectId'].jobs.$get(args, options))
}

export async function postV1b3ProjectsProjectIdJobs(
  args: InferRequestType<(typeof client.v1b3.projects)[':projectId']['jobs']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1b3.projects[':projectId'].jobs.$post(args, options))
}

export async function getV1b3ProjectsProjectIdJobsJobId(
  args: InferRequestType<(typeof client.v1b3.projects)[':projectId']['jobs'][':jobId']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1b3.projects[':projectId'].jobs[':jobId'].$get(args, options))
}

export async function putV1b3ProjectsProjectIdJobsJobId(
  args: InferRequestType<(typeof client.v1b3.projects)[':projectId']['jobs'][':jobId']['$put']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1b3.projects[':projectId'].jobs[':jobId'].$put(args, options))
}

export async function postV1b3ProjectsProjectIdJobsJobIdDebugGetConfig(
  args: InferRequestType<
    (typeof client.v1b3.projects)[':projectId']['jobs'][':jobId']['debug']['getConfig']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.v1b3.projects[':projectId'].jobs[':jobId'].debug.getConfig.$post(args, options),
  )
}

export async function postV1b3ProjectsProjectIdJobsJobIdDebugSendCapture(
  args: InferRequestType<
    (typeof client.v1b3.projects)[':projectId']['jobs'][':jobId']['debug']['sendCapture']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.v1b3.projects[':projectId'].jobs[':jobId'].debug.sendCapture.$post(args, options),
  )
}

export async function getV1b3ProjectsProjectIdJobsJobIdMessages(
  args: InferRequestType<
    (typeof client.v1b3.projects)[':projectId']['jobs'][':jobId']['messages']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.v1b3.projects[':projectId'].jobs[':jobId'].messages.$get(args, options),
  )
}

export async function getV1b3ProjectsProjectIdJobsJobIdMetrics(
  args: InferRequestType<
    (typeof client.v1b3.projects)[':projectId']['jobs'][':jobId']['metrics']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.v1b3.projects[':projectId'].jobs[':jobId'].metrics.$get(args, options),
  )
}

export async function postV1b3ProjectsProjectIdJobsJobIdWorkItemsLease(
  args: InferRequestType<
    (typeof client.v1b3.projects)[':projectId']['jobs'][':jobId']['workItems:lease']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.v1b3.projects[':projectId'].jobs[':jobId']['workItems:lease'].$post(args, options),
  )
}

export async function postV1b3ProjectsProjectIdJobsJobIdWorkItemsReportStatus(
  args: InferRequestType<
    (typeof client.v1b3.projects)[':projectId']['jobs'][':jobId']['workItems:reportStatus']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.v1b3.projects[':projectId'].jobs[':jobId']['workItems:reportStatus'].$post(
      args,
      options,
    ),
  )
}

export async function postV1b3ProjectsProjectIdJobsJobIdSnapshot(
  args: InferRequestType<
    (typeof client.v1b3.projects)[':projectId']['jobs'][':jobId:snapshot']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.v1b3.projects[':projectId'].jobs[':jobId:snapshot'].$post(args, options),
  )
}

export async function getV1b3ProjectsProjectIdJobsAggregated(
  args: InferRequestType<(typeof client.v1b3.projects)[':projectId']['jobs:aggregated']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.v1b3.projects[':projectId']['jobs:aggregated'].$get(args, options),
  )
}

export async function postV1b3ProjectsProjectIdLocationsLocationWorkerMessages(
  args: InferRequestType<
    (typeof client.v1b3.projects)[':projectId']['locations'][':location']['WorkerMessages']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.v1b3.projects[':projectId'].locations[':location'].WorkerMessages.$post(args, options),
  )
}

export async function postV1b3ProjectsProjectIdLocationsLocationFlexTemplatesLaunch(
  args: InferRequestType<
    (typeof client.v1b3.projects)[':projectId']['locations'][':location']['flexTemplates:launch']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.v1b3.projects[':projectId'].locations[':location']['flexTemplates:launch'].$post(
      args,
      options,
    ),
  )
}

export async function getV1b3ProjectsProjectIdLocationsLocationJobs(
  args: InferRequestType<
    (typeof client.v1b3.projects)[':projectId']['locations'][':location']['jobs']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.v1b3.projects[':projectId'].locations[':location'].jobs.$get(args, options),
  )
}

export async function postV1b3ProjectsProjectIdLocationsLocationJobs(
  args: InferRequestType<
    (typeof client.v1b3.projects)[':projectId']['locations'][':location']['jobs']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.v1b3.projects[':projectId'].locations[':location'].jobs.$post(args, options),
  )
}

export async function getV1b3ProjectsProjectIdLocationsLocationJobsJobId(
  args: InferRequestType<
    (typeof client.v1b3.projects)[':projectId']['locations'][':location']['jobs'][':jobId']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.v1b3.projects[':projectId'].locations[':location'].jobs[':jobId'].$get(args, options),
  )
}

export async function putV1b3ProjectsProjectIdLocationsLocationJobsJobId(
  args: InferRequestType<
    (typeof client.v1b3.projects)[':projectId']['locations'][':location']['jobs'][':jobId']['$put']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.v1b3.projects[':projectId'].locations[':location'].jobs[':jobId'].$put(args, options),
  )
}

export async function postV1b3ProjectsProjectIdLocationsLocationJobsJobIdDebugGetConfig(
  args: InferRequestType<
    (typeof client.v1b3.projects)[':projectId']['locations'][':location']['jobs'][':jobId']['debug']['getConfig']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.v1b3.projects[':projectId'].locations[':location'].jobs[':jobId'].debug.getConfig.$post(
      args,
      options,
    ),
  )
}

export async function postV1b3ProjectsProjectIdLocationsLocationJobsJobIdDebugSendCapture(
  args: InferRequestType<
    (typeof client.v1b3.projects)[':projectId']['locations'][':location']['jobs'][':jobId']['debug']['sendCapture']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.v1b3.projects[':projectId'].locations[':location'].jobs[
      ':jobId'
    ].debug.sendCapture.$post(args, options),
  )
}

export async function getV1b3ProjectsProjectIdLocationsLocationJobsJobIdExecutionDetails(
  args: InferRequestType<
    (typeof client.v1b3.projects)[':projectId']['locations'][':location']['jobs'][':jobId']['executionDetails']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.v1b3.projects[':projectId'].locations[':location'].jobs[':jobId'].executionDetails.$get(
      args,
      options,
    ),
  )
}

export async function getV1b3ProjectsProjectIdLocationsLocationJobsJobIdMessages(
  args: InferRequestType<
    (typeof client.v1b3.projects)[':projectId']['locations'][':location']['jobs'][':jobId']['messages']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.v1b3.projects[':projectId'].locations[':location'].jobs[':jobId'].messages.$get(
      args,
      options,
    ),
  )
}

export async function getV1b3ProjectsProjectIdLocationsLocationJobsJobIdMetrics(
  args: InferRequestType<
    (typeof client.v1b3.projects)[':projectId']['locations'][':location']['jobs'][':jobId']['metrics']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.v1b3.projects[':projectId'].locations[':location'].jobs[':jobId'].metrics.$get(
      args,
      options,
    ),
  )
}

export async function getV1b3ProjectsProjectIdLocationsLocationJobsJobIdSnapshots(
  args: InferRequestType<
    (typeof client.v1b3.projects)[':projectId']['locations'][':location']['jobs'][':jobId']['snapshots']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.v1b3.projects[':projectId'].locations[':location'].jobs[':jobId'].snapshots.$get(
      args,
      options,
    ),
  )
}

export async function getV1b3ProjectsProjectIdLocationsLocationJobsJobIdStagesStageIdExecutionDetails(
  args: InferRequestType<
    (typeof client.v1b3.projects)[':projectId']['locations'][':location']['jobs'][':jobId']['stages'][':stageId']['executionDetails']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.v1b3.projects[':projectId'].locations[':location'].jobs[':jobId'].stages[
      ':stageId'
    ].executionDetails.$get(args, options),
  )
}

export async function postV1b3ProjectsProjectIdLocationsLocationJobsJobIdWorkItemsLease(
  args: InferRequestType<
    (typeof client.v1b3.projects)[':projectId']['locations'][':location']['jobs'][':jobId']['workItems:lease']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.v1b3.projects[':projectId'].locations[':location'].jobs[':jobId'][
      'workItems:lease'
    ].$post(args, options),
  )
}

export async function postV1b3ProjectsProjectIdLocationsLocationJobsJobIdWorkItemsReportStatus(
  args: InferRequestType<
    (typeof client.v1b3.projects)[':projectId']['locations'][':location']['jobs'][':jobId']['workItems:reportStatus']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.v1b3.projects[':projectId'].locations[':location'].jobs[':jobId'][
      'workItems:reportStatus'
    ].$post(args, options),
  )
}

export async function postV1b3ProjectsProjectIdLocationsLocationJobsJobIdSnapshot(
  args: InferRequestType<
    (typeof client.v1b3.projects)[':projectId']['locations'][':location']['jobs'][':jobId:snapshot']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.v1b3.projects[':projectId'].locations[':location'].jobs[':jobId:snapshot'].$post(
      args,
      options,
    ),
  )
}

export async function getV1b3ProjectsProjectIdLocationsLocationSnapshots(
  args: InferRequestType<
    (typeof client.v1b3.projects)[':projectId']['locations'][':location']['snapshots']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.v1b3.projects[':projectId'].locations[':location'].snapshots.$get(args, options),
  )
}

export async function getV1b3ProjectsProjectIdLocationsLocationSnapshotsSnapshotId(
  args: InferRequestType<
    (typeof client.v1b3.projects)[':projectId']['locations'][':location']['snapshots'][':snapshotId']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.v1b3.projects[':projectId'].locations[':location'].snapshots[':snapshotId'].$get(
      args,
      options,
    ),
  )
}

export async function deleteV1b3ProjectsProjectIdLocationsLocationSnapshotsSnapshotId(
  args: InferRequestType<
    (typeof client.v1b3.projects)[':projectId']['locations'][':location']['snapshots'][':snapshotId']['$delete']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.v1b3.projects[':projectId'].locations[':location'].snapshots[':snapshotId'].$delete(
      args,
      options,
    ),
  )
}

export async function postV1b3ProjectsProjectIdLocationsLocationTemplates(
  args: InferRequestType<
    (typeof client.v1b3.projects)[':projectId']['locations'][':location']['templates']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.v1b3.projects[':projectId'].locations[':location'].templates.$post(args, options),
  )
}

export async function getV1b3ProjectsProjectIdLocationsLocationTemplatesGet(
  args: InferRequestType<
    (typeof client.v1b3.projects)[':projectId']['locations'][':location']['templates:get']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.v1b3.projects[':projectId'].locations[':location']['templates:get'].$get(args, options),
  )
}

export async function postV1b3ProjectsProjectIdLocationsLocationTemplatesLaunch(
  args: InferRequestType<
    (typeof client.v1b3.projects)[':projectId']['locations'][':location']['templates:launch']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.v1b3.projects[':projectId'].locations[':location']['templates:launch'].$post(
      args,
      options,
    ),
  )
}

export async function getV1b3ProjectsProjectIdSnapshots(
  args: InferRequestType<(typeof client.v1b3.projects)[':projectId']['snapshots']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1b3.projects[':projectId'].snapshots.$get(args, options))
}

export async function deleteV1b3ProjectsProjectIdSnapshots(
  args: InferRequestType<(typeof client.v1b3.projects)[':projectId']['snapshots']['$delete']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1b3.projects[':projectId'].snapshots.$delete(args, options))
}

export async function getV1b3ProjectsProjectIdSnapshotsSnapshotId(
  args: InferRequestType<
    (typeof client.v1b3.projects)[':projectId']['snapshots'][':snapshotId']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.v1b3.projects[':projectId'].snapshots[':snapshotId'].$get(args, options),
  )
}

export async function postV1b3ProjectsProjectIdTemplates(
  args: InferRequestType<(typeof client.v1b3.projects)[':projectId']['templates']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1b3.projects[':projectId'].templates.$post(args, options))
}

export async function getV1b3ProjectsProjectIdTemplatesGet(
  args: InferRequestType<(typeof client.v1b3.projects)[':projectId']['templates:get']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.v1b3.projects[':projectId']['templates:get'].$get(args, options),
  )
}

export async function postV1b3ProjectsProjectIdTemplatesLaunch(
  args: InferRequestType<(typeof client.v1b3.projects)[':projectId']['templates:launch']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.v1b3.projects[':projectId']['templates:launch'].$post(args, options),
  )
}
