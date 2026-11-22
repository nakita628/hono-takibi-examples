import type { InferRequestType, ClientRequestOptions } from 'hono/client'
import { parseResponse } from 'hono/client'
import { client } from './client'

export async function getIssueTriggers(
  args: InferRequestType<(typeof client)['issue-triggers']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['issue-triggers'].$get(args, options))
}

export async function putIssueTriggers(
  args: InferRequestType<(typeof client)['issue-triggers']['$put']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['issue-triggers'].$put(args, options))
}

export async function postIssueTriggers(
  args: InferRequestType<(typeof client)['issue-triggers']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['issue-triggers'].$post(args, options))
}

export async function getIssueTriggersId(
  args: InferRequestType<(typeof client)['issue-triggers'][':id']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['issue-triggers'][':id'].$get(args, options))
}

export async function putIssueTriggersId(
  args: InferRequestType<(typeof client)['issue-triggers'][':id']['$put']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['issue-triggers'][':id'].$put(args, options))
}

export async function deleteIssueTriggersId(
  args: InferRequestType<(typeof client)['issue-triggers'][':id']['$delete']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['issue-triggers'][':id'].$delete(args, options))
}

export async function putIssueTriggersIdDisable(
  args: InferRequestType<(typeof client)['issue-triggers'][':id']['disable']['$put']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['issue-triggers'][':id'].disable.$put(args, options))
}

export async function putIssueTriggersIdEnable(
  args: InferRequestType<(typeof client)['issue-triggers'][':id']['enable']['$put']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['issue-triggers'][':id'].enable.$put(args, options))
}

export async function getAttempts(
  args: InferRequestType<typeof client.attempts.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.attempts.$get(args, options))
}

export async function getAttemptsId(
  args: InferRequestType<(typeof client.attempts)[':id']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.attempts[':id'].$get(args, options))
}

export async function getBookmarks(
  args: InferRequestType<typeof client.bookmarks.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.bookmarks.$get(args, options))
}

export async function postBookmarks(
  args: InferRequestType<typeof client.bookmarks.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.bookmarks.$post(args, options))
}

export async function getBookmarksId(
  args: InferRequestType<(typeof client.bookmarks)[':id']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.bookmarks[':id'].$get(args, options))
}

export async function putBookmarksId(
  args: InferRequestType<(typeof client.bookmarks)[':id']['$put']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.bookmarks[':id'].$put(args, options))
}

export async function deleteBookmarksId(
  args: InferRequestType<(typeof client.bookmarks)[':id']['$delete']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.bookmarks[':id'].$delete(args, options))
}

export async function getBookmarksIdRawBody(
  args: InferRequestType<(typeof client.bookmarks)[':id']['raw_body']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.bookmarks[':id'].raw_body.$get(args, options))
}

export async function postBookmarksIdTrigger(
  args: InferRequestType<(typeof client.bookmarks)[':id']['trigger']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.bookmarks[':id'].trigger.$post(args, options))
}

export async function getDestinations(
  args: InferRequestType<typeof client.destinations.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.destinations.$get(args, options))
}

export async function putDestinations(
  args: InferRequestType<typeof client.destinations.$put>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.destinations.$put(args, options))
}

export async function postDestinations(
  args: InferRequestType<typeof client.destinations.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.destinations.$post(args, options))
}

export async function getDestinationsId(
  args: InferRequestType<(typeof client.destinations)[':id']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.destinations[':id'].$get(args, options))
}

export async function putDestinationsId(
  args: InferRequestType<(typeof client.destinations)[':id']['$put']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.destinations[':id'].$put(args, options))
}

export async function deleteDestinationsId(
  args: InferRequestType<(typeof client.destinations)[':id']['$delete']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.destinations[':id'].$delete(args, options))
}

export async function putDestinationsIdDisable(
  args: InferRequestType<(typeof client.destinations)[':id']['disable']['$put']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.destinations[':id'].disable.$put(args, options))
}

export async function putDestinationsIdArchive(
  args: InferRequestType<(typeof client.destinations)[':id']['archive']['$put']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.destinations[':id'].archive.$put(args, options))
}

export async function putDestinationsIdEnable(
  args: InferRequestType<(typeof client.destinations)[':id']['enable']['$put']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.destinations[':id'].enable.$put(args, options))
}

export async function putDestinationsIdUnarchive(
  args: InferRequestType<(typeof client.destinations)[':id']['unarchive']['$put']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.destinations[':id'].unarchive.$put(args, options))
}

export async function getBulkEventsRetry(
  args: InferRequestType<typeof client.bulk.events.retry.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.bulk.events.retry.$get(args, options))
}

export async function postBulkEventsRetry(
  args: InferRequestType<typeof client.bulk.events.retry.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.bulk.events.retry.$post(args, options))
}

export async function getBulkEventsRetryPlan(
  args: InferRequestType<typeof client.bulk.events.retry.plan.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.bulk.events.retry.plan.$get(args, options))
}

export async function getBulkEventsRetryId(
  args: InferRequestType<(typeof client.bulk.events.retry)[':id']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.bulk.events.retry[':id'].$get(args, options))
}

export async function postBulkEventsRetryIdCancel(
  args: InferRequestType<(typeof client.bulk.events.retry)[':id']['cancel']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.bulk.events.retry[':id'].cancel.$post(args, options))
}

export async function getEvents(
  args: InferRequestType<typeof client.events.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.events.$get(args, options))
}

export async function getEventsId(
  args: InferRequestType<(typeof client.events)[':id']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.events[':id'].$get(args, options))
}

export async function getEventsIdRawBody(
  args: InferRequestType<(typeof client.events)[':id']['raw_body']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.events[':id'].raw_body.$get(args, options))
}

export async function postEventsIdRetry(
  args: InferRequestType<(typeof client.events)[':id']['retry']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.events[':id'].retry.$post(args, options))
}

export async function putEventsIdMute(
  args: InferRequestType<(typeof client.events)[':id']['mute']['$put']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.events[':id'].mute.$put(args, options))
}

export async function getBulkIgnoredEventsRetry(
  args: InferRequestType<(typeof client.bulk)['ignored-events']['retry']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.bulk['ignored-events'].retry.$get(args, options))
}

export async function postBulkIgnoredEventsRetry(
  args: InferRequestType<(typeof client.bulk)['ignored-events']['retry']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.bulk['ignored-events'].retry.$post(args, options))
}

export async function getBulkIgnoredEventsRetryPlan(
  args: InferRequestType<(typeof client.bulk)['ignored-events']['retry']['plan']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.bulk['ignored-events'].retry.plan.$get(args, options))
}

export async function getBulkIgnoredEventsRetryId(
  args: InferRequestType<(typeof client.bulk)['ignored-events']['retry'][':id']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.bulk['ignored-events'].retry[':id'].$get(args, options))
}

export async function postBulkIgnoredEventsRetryIdCancel(
  args: InferRequestType<(typeof client.bulk)['ignored-events']['retry'][':id']['cancel']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.bulk['ignored-events'].retry[':id'].cancel.$post(args, options))
}

export async function getIntegrations(
  args: InferRequestType<typeof client.integrations.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.integrations.$get(args, options))
}

export async function postIntegrations(
  args: InferRequestType<typeof client.integrations.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.integrations.$post(args, options))
}

export async function getIntegrationsId(
  args: InferRequestType<(typeof client.integrations)[':id']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.integrations[':id'].$get(args, options))
}

export async function putIntegrationsId(
  args: InferRequestType<(typeof client.integrations)[':id']['$put']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.integrations[':id'].$put(args, options))
}

export async function deleteIntegrationsId(
  args: InferRequestType<(typeof client.integrations)[':id']['$delete']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.integrations[':id'].$delete(args, options))
}

export async function putIntegrationsIdAttachSourceId(
  args: InferRequestType<(typeof client.integrations)[':id']['attach'][':source_id']['$put']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.integrations[':id'].attach[':source_id'].$put(args, options))
}

export async function putIntegrationsIdDetachSourceId(
  args: InferRequestType<(typeof client.integrations)[':id']['detach'][':source_id']['$put']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.integrations[':id'].detach[':source_id'].$put(args, options))
}

export async function getIssues(
  args: InferRequestType<typeof client.issues.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.issues.$get(args, options))
}

export async function getIssuesCount(
  args: InferRequestType<typeof client.issues.count.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.issues.count.$get(args, options))
}

export async function getIssuesId(
  args: InferRequestType<(typeof client.issues)[':id']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.issues[':id'].$get(args, options))
}

export async function putIssuesId(
  args: InferRequestType<(typeof client.issues)[':id']['$put']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.issues[':id'].$put(args, options))
}

export async function deleteIssuesId(
  args: InferRequestType<(typeof client.issues)[':id']['$delete']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.issues[':id'].$delete(args, options))
}

export async function getRequests(
  args: InferRequestType<typeof client.requests.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.requests.$get(args, options))
}

export async function getRequestsId(
  args: InferRequestType<(typeof client.requests)[':id']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.requests[':id'].$get(args, options))
}

export async function getRequestsIdRawBody(
  args: InferRequestType<(typeof client.requests)[':id']['raw_body']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.requests[':id'].raw_body.$get(args, options))
}

export async function postRequestsIdRetry(
  args: InferRequestType<(typeof client.requests)[':id']['retry']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.requests[':id'].retry.$post(args, options))
}

export async function getRequestsIdEvents(
  args: InferRequestType<(typeof client.requests)[':id']['events']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.requests[':id'].events.$get(args, options))
}

export async function getRequestsIdIgnoredEvents(
  args: InferRequestType<(typeof client.requests)[':id']['ignored_events']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.requests[':id'].ignored_events.$get(args, options))
}

export async function getBulkRequestsRetry(
  args: InferRequestType<typeof client.bulk.requests.retry.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.bulk.requests.retry.$get(args, options))
}

export async function postBulkRequestsRetry(
  args: InferRequestType<typeof client.bulk.requests.retry.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.bulk.requests.retry.$post(args, options))
}

export async function getBulkRequestsRetryPlan(
  args: InferRequestType<typeof client.bulk.requests.retry.plan.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.bulk.requests.retry.plan.$get(args, options))
}

export async function getBulkRequestsRetryId(
  args: InferRequestType<(typeof client.bulk.requests.retry)[':id']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.bulk.requests.retry[':id'].$get(args, options))
}

export async function postBulkRequestsRetryIdCancel(
  args: InferRequestType<(typeof client.bulk.requests.retry)[':id']['cancel']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.bulk.requests.retry[':id'].cancel.$post(args, options))
}

export async function getSources(
  args: InferRequestType<typeof client.sources.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.sources.$get(args, options))
}

export async function putSources(
  args: InferRequestType<typeof client.sources.$put>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.sources.$put(args, options))
}

export async function postSources(
  args: InferRequestType<typeof client.sources.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.sources.$post(args, options))
}

export async function getSourcesId(
  args: InferRequestType<(typeof client.sources)[':id']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.sources[':id'].$get(args, options))
}

export async function putSourcesId(
  args: InferRequestType<(typeof client.sources)[':id']['$put']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.sources[':id'].$put(args, options))
}

export async function deleteSourcesId(
  args: InferRequestType<(typeof client.sources)[':id']['$delete']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.sources[':id'].$delete(args, options))
}

export async function putSourcesIdDisable(
  args: InferRequestType<(typeof client.sources)[':id']['disable']['$put']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.sources[':id'].disable.$put(args, options))
}

export async function putSourcesIdArchive(
  args: InferRequestType<(typeof client.sources)[':id']['archive']['$put']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.sources[':id'].archive.$put(args, options))
}

export async function putSourcesIdEnable(
  args: InferRequestType<(typeof client.sources)[':id']['enable']['$put']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.sources[':id'].enable.$put(args, options))
}

export async function putSourcesIdUnarchive(
  args: InferRequestType<(typeof client.sources)[':id']['unarchive']['$put']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.sources[':id'].unarchive.$put(args, options))
}

export async function putNotificationsWebhooks(
  args: InferRequestType<typeof client.notifications.webhooks.$put>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.notifications.webhooks.$put(args, options))
}

export async function getTeamsCurrentCustomDomains(options?: ClientRequestOptions) {
  return await parseResponse(client.teams.current.custom_domains.$get(undefined, options))
}

export async function postTeamsCurrentCustomDomains(
  args: InferRequestType<typeof client.teams.current.custom_domains.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.teams.current.custom_domains.$post(args, options))
}

export async function deleteTeamsCurrentCustomDomainsDomainId(
  args: InferRequestType<(typeof client.teams.current.custom_domains)[':domain_id']['$delete']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.teams.current.custom_domains[':domain_id'].$delete(args, options),
  )
}

export async function getTransformations(
  args: InferRequestType<typeof client.transformations.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.transformations.$get(args, options))
}

export async function putTransformations(
  args: InferRequestType<typeof client.transformations.$put>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.transformations.$put(args, options))
}

export async function postTransformations(
  args: InferRequestType<typeof client.transformations.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.transformations.$post(args, options))
}

export async function getTransformationsId(
  args: InferRequestType<(typeof client.transformations)[':id']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.transformations[':id'].$get(args, options))
}

export async function putTransformationsId(
  args: InferRequestType<(typeof client.transformations)[':id']['$put']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.transformations[':id'].$put(args, options))
}

export async function deleteTransformationsId(
  args: InferRequestType<(typeof client.transformations)[':id']['$delete']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.transformations[':id'].$delete(args, options))
}

export async function putTransformationsRun(
  args: InferRequestType<typeof client.transformations.run.$put>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.transformations.run.$put(args, options))
}

export async function getTransformationsIdExecutions(
  args: InferRequestType<(typeof client.transformations)[':id']['executions']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.transformations[':id'].executions.$get(args, options))
}

export async function getTransformationsIdExecutionsExecutionId(
  args: InferRequestType<
    (typeof client.transformations)[':id']['executions'][':execution_id']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.transformations[':id'].executions[':execution_id'].$get(args, options),
  )
}

export async function getConnections(
  args: InferRequestType<typeof client.connections.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.connections.$get(args, options))
}

export async function putConnections(
  args: InferRequestType<typeof client.connections.$put>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.connections.$put(args, options))
}

export async function postConnections(
  args: InferRequestType<typeof client.connections.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.connections.$post(args, options))
}

export async function getConnectionsCount(
  args: InferRequestType<typeof client.connections.count.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.connections.count.$get(args, options))
}

export async function getConnectionsId(
  args: InferRequestType<(typeof client.connections)[':id']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.connections[':id'].$get(args, options))
}

export async function putConnectionsId(
  args: InferRequestType<(typeof client.connections)[':id']['$put']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.connections[':id'].$put(args, options))
}

export async function deleteConnectionsId(
  args: InferRequestType<(typeof client.connections)[':id']['$delete']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.connections[':id'].$delete(args, options))
}

export async function putConnectionsIdDisable(
  args: InferRequestType<(typeof client.connections)[':id']['disable']['$put']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.connections[':id'].disable.$put(args, options))
}

export async function putConnectionsIdArchive(
  args: InferRequestType<(typeof client.connections)[':id']['archive']['$put']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.connections[':id'].archive.$put(args, options))
}

export async function putConnectionsIdEnable(
  args: InferRequestType<(typeof client.connections)[':id']['enable']['$put']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.connections[':id'].enable.$put(args, options))
}

export async function putConnectionsIdUnarchive(
  args: InferRequestType<(typeof client.connections)[':id']['unarchive']['$put']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.connections[':id'].unarchive.$put(args, options))
}

export async function putConnectionsIdPause(
  args: InferRequestType<(typeof client.connections)[':id']['pause']['$put']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.connections[':id'].pause.$put(args, options))
}

export async function putConnectionsIdUnpause(
  args: InferRequestType<(typeof client.connections)[':id']['unpause']['$put']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.connections[':id'].unpause.$put(args, options))
}
