import type { InferRequestType, ClientRequestOptions } from 'hono/client'
import { parseResponse } from 'hono/client'
import { client } from './client'

export async function getMonitor(
  args: InferRequestType<typeof client.monitor.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.monitor.$get(args, options))
}

export async function postMonitor(
  args: InferRequestType<typeof client.monitor.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.monitor.$post(args, options))
}

export async function getMonitorMonitorId(
  args: InferRequestType<(typeof client.monitor)[':monitorId']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.monitor[':monitorId'].$get(args, options))
}

export async function deleteMonitorMonitorId(
  args: InferRequestType<(typeof client.monitor)[':monitorId']['$delete']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.monitor[':monitorId'].$delete(args, options))
}

export async function patchMonitorMonitorId(
  args: InferRequestType<(typeof client.monitor)[':monitorId']['$patch']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.monitor[':monitorId'].$patch(args, options))
}

export async function postMonitorMonitorIdRun(
  args: InferRequestType<(typeof client.monitor)[':monitorId']['run']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.monitor[':monitorId'].run.$post(args, options))
}

export async function getMonitorMonitorIdChecks(
  args: InferRequestType<(typeof client.monitor)[':monitorId']['checks']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.monitor[':monitorId'].checks.$get(args, options))
}

export async function getMonitorMonitorIdChecksCheckId(
  args: InferRequestType<(typeof client.monitor)[':monitorId']['checks'][':checkId']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.monitor[':monitorId'].checks[':checkId'].$get(args, options))
}

export async function postScrape(
  args: InferRequestType<typeof client.scrape.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.scrape.$post(args, options))
}

export async function postScrapeJobIdInteract(
  args: InferRequestType<(typeof client.scrape)[':jobId']['interact']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.scrape[':jobId'].interact.$post(args, options))
}

export async function deleteScrapeJobIdInteract(
  args: InferRequestType<(typeof client.scrape)[':jobId']['interact']['$delete']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.scrape[':jobId'].interact.$delete(args, options))
}

export async function postParse(
  args: InferRequestType<typeof client.parse.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.parse.$post(args, options))
}

export async function getParseFormats(options?: ClientRequestOptions) {
  return await parseResponse(client.parse.formats.$get(undefined, options))
}

export async function postBatchScrape(
  args: InferRequestType<typeof client.batch.scrape.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.batch.scrape.$post(args, options))
}

export async function getBatchScrapeId(
  args: InferRequestType<(typeof client.batch.scrape)[':id']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.batch.scrape[':id'].$get(args, options))
}

export async function deleteBatchScrapeId(
  args: InferRequestType<(typeof client.batch.scrape)[':id']['$delete']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.batch.scrape[':id'].$delete(args, options))
}

export async function getBatchScrapeIdErrors(
  args: InferRequestType<(typeof client.batch.scrape)[':id']['errors']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.batch.scrape[':id'].errors.$get(args, options))
}

export async function getCrawlId(
  args: InferRequestType<(typeof client.crawl)[':id']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.crawl[':id'].$get(args, options))
}

export async function deleteCrawlId(
  args: InferRequestType<(typeof client.crawl)[':id']['$delete']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.crawl[':id'].$delete(args, options))
}

export async function getCrawlIdErrors(
  args: InferRequestType<(typeof client.crawl)[':id']['errors']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.crawl[':id'].errors.$get(args, options))
}

export async function postCrawl(
  args: InferRequestType<typeof client.crawl.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.crawl.$post(args, options))
}

export async function postCrawlParamsPreview(
  args: InferRequestType<(typeof client.crawl)['params-preview']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.crawl['params-preview'].$post(args, options))
}

export async function postMap(
  args: InferRequestType<typeof client.map.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.map.$post(args, options))
}

export async function postExtract(
  args: InferRequestType<typeof client.extract.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.extract.$post(args, options))
}

export async function getExtractId(
  args: InferRequestType<(typeof client.extract)[':id']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.extract[':id'].$get(args, options))
}

export async function getAgent(
  args: InferRequestType<typeof client.agent.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.agent.$get(args, options))
}

export async function postAgent(
  args: InferRequestType<typeof client.agent.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.agent.$post(args, options))
}

export async function getAgentJobId(
  args: InferRequestType<(typeof client.agent)[':jobId']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.agent[':jobId'].$get(args, options))
}

export async function deleteAgentJobId(
  args: InferRequestType<(typeof client.agent)[':jobId']['$delete']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.agent[':jobId'].$delete(args, options))
}

export async function getAgentJobIdTrace(
  args: InferRequestType<(typeof client.agent)[':jobId']['trace']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.agent[':jobId'].trace.$get(args, options))
}

export async function getAgentJobIdSnapshotsSnapshotId(
  args: InferRequestType<(typeof client.agent)[':jobId']['snapshots'][':snapshotId']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.agent[':jobId'].snapshots[':snapshotId'].$get(args, options))
}

export async function getCrawlActive(options?: ClientRequestOptions) {
  return await parseResponse(client.crawl.active.$get(undefined, options))
}

export async function getTeamCreditUsage(options?: ClientRequestOptions) {
  return await parseResponse(client.team['credit-usage'].$get(undefined, options))
}

export async function getTeamCreditUsageHistorical(
  args: InferRequestType<(typeof client.team)['credit-usage']['historical']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.team['credit-usage'].historical.$get(args, options))
}

export async function getTeamTokenUsage(options?: ClientRequestOptions) {
  return await parseResponse(client.team['token-usage'].$get(undefined, options))
}

export async function getTeamTokenUsageHistorical(
  args: InferRequestType<(typeof client.team)['token-usage']['historical']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.team['token-usage'].historical.$get(args, options))
}

export async function getTeamQueueStatus(options?: ClientRequestOptions) {
  return await parseResponse(client.team['queue-status'].$get(undefined, options))
}

export async function getTeamActivity(
  args: InferRequestType<typeof client.team.activity.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.team.activity.$get(args, options))
}

export async function postSearch(
  args: InferRequestType<typeof client.search.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.search.$post(args, options))
}

export async function getInteract(
  args: InferRequestType<typeof client.interact.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.interact.$get(args, options))
}

export async function postInteract(
  args: InferRequestType<typeof client.interact.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.interact.$post(args, options))
}

export async function postInteractSessionIdExecute(
  args: InferRequestType<(typeof client.interact)[':sessionId']['execute']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.interact[':sessionId'].execute.$post(args, options))
}

export async function deleteInteractSessionId(
  args: InferRequestType<(typeof client.interact)[':sessionId']['$delete']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.interact[':sessionId'].$delete(args, options))
}

export async function getScrapeJobId(
  args: InferRequestType<(typeof client.scrape)[':jobId']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.scrape[':jobId'].$get(args, options))
}

export async function postSearchJobIdFeedback(
  args: InferRequestType<(typeof client.search)[':jobId']['feedback']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.search[':jobId'].feedback.$post(args, options))
}

export async function postSupportAsk(
  args: InferRequestType<typeof client.support.ask.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.support.ask.$post(args, options))
}

export async function getSearchResearchPapers(
  args: InferRequestType<typeof client.search.research.papers.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.search.research.papers.$get(args, options))
}

export async function getSearchResearchPapersId(
  args: InferRequestType<(typeof client.search.research.papers)[':id']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.search.research.papers[':id'].$get(args, options))
}

export async function getSearchResearchPapersIdSimilar(
  args: InferRequestType<(typeof client.search.research.papers)[':id']['similar']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.search.research.papers[':id'].similar.$get(args, options))
}

export async function getSearchDeveloper(
  args: InferRequestType<typeof client.search.developer.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.search.developer.$get(args, options))
}

export async function postSearchDeveloper(
  args: InferRequestType<typeof client.search.developer.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.search.developer.$post(args, options))
}

export async function getSearchGov(
  args: InferRequestType<typeof client.search.gov.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.search.gov.$get(args, options))
}

export async function postSearchGov(
  args: InferRequestType<typeof client.search.gov.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.search.gov.$post(args, options))
}

export async function postFeedback(
  args: InferRequestType<typeof client.feedback.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.feedback.$post(args, options))
}

export async function getTeamThreatProtection(options?: ClientRequestOptions) {
  return await parseResponse(client.team['threat-protection'].$get(undefined, options))
}

export async function putTeamThreatProtection(
  args: InferRequestType<(typeof client.team)['threat-protection']['$put']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.team['threat-protection'].$put(args, options))
}
