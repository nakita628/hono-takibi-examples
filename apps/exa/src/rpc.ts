import type { InferRequestType, ClientRequestOptions } from 'hono/client'
import { parseResponse } from 'hono/client'
import { client } from './client'

export async function postSearch(
  args: InferRequestType<typeof client.search.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.search.$post(args, options))
}

export async function postContents(
  args: InferRequestType<typeof client.contents.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.contents.$post(args, options))
}

export async function postAnswer(
  args: InferRequestType<typeof client.answer.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.answer.$post(args, options))
}

export async function postFindSimilar(
  args: InferRequestType<typeof client.findSimilar.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.findSimilar.$post(args, options))
}

export async function getMonitors(
  args: InferRequestType<typeof client.monitors.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.monitors.$get(args, options))
}

export async function postMonitors(
  args: InferRequestType<typeof client.monitors.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.monitors.$post(args, options))
}

export async function postMonitorsBatch(
  args: InferRequestType<typeof client.monitors.batch.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.monitors.batch.$post(args, options))
}

export async function getMonitorsId(
  args: InferRequestType<(typeof client.monitors)[':id']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.monitors[':id'].$get(args, options))
}

export async function deleteMonitorsId(
  args: InferRequestType<(typeof client.monitors)[':id']['$delete']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.monitors[':id'].$delete(args, options))
}

export async function patchMonitorsId(
  args: InferRequestType<(typeof client.monitors)[':id']['$patch']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.monitors[':id'].$patch(args, options))
}

export async function postMonitorsIdTrigger(
  args: InferRequestType<(typeof client.monitors)[':id']['trigger']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.monitors[':id'].trigger.$post(args, options))
}

export async function getMonitorsIdRuns(
  args: InferRequestType<(typeof client.monitors)[':id']['runs']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.monitors[':id'].runs.$get(args, options))
}

export async function getMonitorsIdRunsRunId(
  args: InferRequestType<(typeof client.monitors)[':id']['runs'][':runId']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.monitors[':id'].runs[':runId'].$get(args, options))
}

export async function getAgentRuns(
  args: InferRequestType<typeof client.agent.runs.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.agent.runs.$get(args, options))
}

export async function postAgentRuns(
  args: InferRequestType<typeof client.agent.runs.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.agent.runs.$post(args, options))
}

export async function getAgentRunsId(
  args: InferRequestType<(typeof client.agent.runs)[':id']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.agent.runs[':id'].$get(args, options))
}

export async function deleteAgentRunsId(
  args: InferRequestType<(typeof client.agent.runs)[':id']['$delete']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.agent.runs[':id'].$delete(args, options))
}

export async function postAgentRunsIdCancel(
  args: InferRequestType<(typeof client.agent.runs)[':id']['cancel']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.agent.runs[':id'].cancel.$post(args, options))
}

export async function postAgentRunsIdStop(
  args: InferRequestType<(typeof client.agent.runs)[':id']['stop']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.agent.runs[':id'].stop.$post(args, options))
}

export async function getAgentRunsIdEvents(
  args: InferRequestType<(typeof client.agent.runs)[':id']['events']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.agent.runs[':id'].events.$get(args, options))
}

export async function getBatches(
  args: InferRequestType<typeof client.batches.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.batches.$get(args, options))
}

export async function postBatches(
  args: InferRequestType<typeof client.batches.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.batches.$post(args, options))
}

export async function getBatchesId(
  args: InferRequestType<(typeof client.batches)[':id']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.batches[':id'].$get(args, options))
}

export async function deleteBatchesId(
  args: InferRequestType<(typeof client.batches)[':id']['$delete']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.batches[':id'].$delete(args, options))
}

export async function postBatchesIdCancel(
  args: InferRequestType<(typeof client.batches)[':id']['cancel']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.batches[':id'].cancel.$post(args, options))
}

export async function getV0TeamsMe(options?: ClientRequestOptions) {
  return await parseResponse(client.v0.teams.me.$get(undefined, options))
}

export async function getV0Websets(
  args: InferRequestType<typeof client.v0.websets.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v0.websets.$get(args, options))
}

export async function postV0Websets(
  args: InferRequestType<typeof client.v0.websets.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v0.websets.$post(args, options))
}

export async function getV0WebsetsId(
  args: InferRequestType<(typeof client.v0.websets)[':id']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v0.websets[':id'].$get(args, options))
}

export async function postV0WebsetsId(
  args: InferRequestType<(typeof client.v0.websets)[':id']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v0.websets[':id'].$post(args, options))
}

export async function deleteV0WebsetsId(
  args: InferRequestType<(typeof client.v0.websets)[':id']['$delete']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v0.websets[':id'].$delete(args, options))
}

export async function postV0WebsetsIdCancel(
  args: InferRequestType<(typeof client.v0.websets)[':id']['cancel']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v0.websets[':id'].cancel.$post(args, options))
}

export async function postV0WebsetsWebsetSearches(
  args: InferRequestType<(typeof client.v0.websets)[':webset']['searches']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v0.websets[':webset'].searches.$post(args, options))
}

export async function getV0WebsetsWebsetSearchesId(
  args: InferRequestType<(typeof client.v0.websets)[':webset']['searches'][':id']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v0.websets[':webset'].searches[':id'].$get(args, options))
}

export async function postV0WebsetsWebsetSearchesIdCancel(
  args: InferRequestType<
    (typeof client.v0.websets)[':webset']['searches'][':id']['cancel']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.v0.websets[':webset'].searches[':id'].cancel.$post(args, options),
  )
}

export async function postV0WebsetsWebsetEnrichments(
  args: InferRequestType<(typeof client.v0.websets)[':webset']['enrichments']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v0.websets[':webset'].enrichments.$post(args, options))
}

export async function getV0WebsetsWebsetEnrichmentsId(
  args: InferRequestType<(typeof client.v0.websets)[':webset']['enrichments'][':id']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v0.websets[':webset'].enrichments[':id'].$get(args, options))
}

export async function deleteV0WebsetsWebsetEnrichmentsId(
  args: InferRequestType<(typeof client.v0.websets)[':webset']['enrichments'][':id']['$delete']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v0.websets[':webset'].enrichments[':id'].$delete(args, options))
}

export async function patchV0WebsetsWebsetEnrichmentsId(
  args: InferRequestType<(typeof client.v0.websets)[':webset']['enrichments'][':id']['$patch']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v0.websets[':webset'].enrichments[':id'].$patch(args, options))
}

export async function postV0WebsetsWebsetEnrichmentsIdCancel(
  args: InferRequestType<
    (typeof client.v0.websets)[':webset']['enrichments'][':id']['cancel']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.v0.websets[':webset'].enrichments[':id'].cancel.$post(args, options),
  )
}

export async function getV0WebsetsWebsetItemsId(
  args: InferRequestType<(typeof client.v0.websets)[':webset']['items'][':id']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v0.websets[':webset'].items[':id'].$get(args, options))
}

export async function deleteV0WebsetsWebsetItemsId(
  args: InferRequestType<(typeof client.v0.websets)[':webset']['items'][':id']['$delete']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v0.websets[':webset'].items[':id'].$delete(args, options))
}

export async function getV0WebsetsWebsetItems(
  args: InferRequestType<(typeof client.v0.websets)[':webset']['items']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v0.websets[':webset'].items.$get(args, options))
}

export async function postV0WebsetsPreview(
  args: InferRequestType<typeof client.v0.websets.preview.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v0.websets.preview.$post(args, options))
}

export async function getV0Monitors(
  args: InferRequestType<typeof client.v0.monitors.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v0.monitors.$get(args, options))
}

export async function postV0Monitors(
  args: InferRequestType<typeof client.v0.monitors.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v0.monitors.$post(args, options))
}

export async function getV0MonitorsId(
  args: InferRequestType<(typeof client.v0.monitors)[':id']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v0.monitors[':id'].$get(args, options))
}

export async function deleteV0MonitorsId(
  args: InferRequestType<(typeof client.v0.monitors)[':id']['$delete']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v0.monitors[':id'].$delete(args, options))
}

export async function patchV0MonitorsId(
  args: InferRequestType<(typeof client.v0.monitors)[':id']['$patch']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v0.monitors[':id'].$patch(args, options))
}

export async function getV0MonitorsMonitorRuns(
  args: InferRequestType<(typeof client.v0.monitors)[':monitor']['runs']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v0.monitors[':monitor'].runs.$get(args, options))
}

export async function getV0MonitorsMonitorRunsId(
  args: InferRequestType<(typeof client.v0.monitors)[':monitor']['runs'][':id']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v0.monitors[':monitor'].runs[':id'].$get(args, options))
}

export async function getV0Imports(
  args: InferRequestType<typeof client.v0.imports.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v0.imports.$get(args, options))
}

export async function postV0Imports(
  args: InferRequestType<typeof client.v0.imports.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v0.imports.$post(args, options))
}

export async function getV0ImportsId(
  args: InferRequestType<(typeof client.v0.imports)[':id']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v0.imports[':id'].$get(args, options))
}

export async function deleteV0ImportsId(
  args: InferRequestType<(typeof client.v0.imports)[':id']['$delete']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v0.imports[':id'].$delete(args, options))
}

export async function patchV0ImportsId(
  args: InferRequestType<(typeof client.v0.imports)[':id']['$patch']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v0.imports[':id'].$patch(args, options))
}

export async function getV0Webhooks(
  args: InferRequestType<typeof client.v0.webhooks.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v0.webhooks.$get(args, options))
}

export async function postV0Webhooks(
  args: InferRequestType<typeof client.v0.webhooks.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v0.webhooks.$post(args, options))
}

export async function getV0WebhooksId(
  args: InferRequestType<(typeof client.v0.webhooks)[':id']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v0.webhooks[':id'].$get(args, options))
}

export async function deleteV0WebhooksId(
  args: InferRequestType<(typeof client.v0.webhooks)[':id']['$delete']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v0.webhooks[':id'].$delete(args, options))
}

export async function patchV0WebhooksId(
  args: InferRequestType<(typeof client.v0.webhooks)[':id']['$patch']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v0.webhooks[':id'].$patch(args, options))
}

export async function getV0WebhooksIdAttempts(
  args: InferRequestType<(typeof client.v0.webhooks)[':id']['attempts']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v0.webhooks[':id'].attempts.$get(args, options))
}

export async function getV0Events(
  args: InferRequestType<typeof client.v0.events.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v0.events.$get(args, options))
}

export async function getV0EventsId(
  args: InferRequestType<(typeof client.v0.events)[':id']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v0.events[':id'].$get(args, options))
}
