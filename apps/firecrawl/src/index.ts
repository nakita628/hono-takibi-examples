import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteAgentJobIdRoute,
  deleteBatchScrapeIdRoute,
  deleteCrawlIdRoute,
  deleteInteractSessionIdRoute,
  deleteMonitorMonitorIdRoute,
  deleteScrapeJobIdInteractRoute,
  getAgentJobIdRoute,
  getAgentJobIdSnapshotsSnapshotIdRoute,
  getAgentJobIdTraceRoute,
  getAgentRoute,
  getBatchScrapeIdErrorsRoute,
  getBatchScrapeIdRoute,
  getCrawlActiveRoute,
  getCrawlIdErrorsRoute,
  getCrawlIdRoute,
  getExtractIdRoute,
  getInteractRoute,
  getMonitorMonitorIdChecksCheckIdRoute,
  getMonitorMonitorIdChecksRoute,
  getMonitorMonitorIdRoute,
  getMonitorRoute,
  getParseFormatsRoute,
  getScrapeJobIdRoute,
  getSearchDeveloperRoute,
  getSearchGovRoute,
  getSearchResearchPapersIdRoute,
  getSearchResearchPapersIdSimilarRoute,
  getSearchResearchPapersRoute,
  getTeamActivityRoute,
  getTeamCreditUsageHistoricalRoute,
  getTeamCreditUsageRoute,
  getTeamQueueStatusRoute,
  getTeamThreatProtectionRoute,
  getTeamTokenUsageHistoricalRoute,
  getTeamTokenUsageRoute,
  patchMonitorMonitorIdRoute,
  postAgentRoute,
  postBatchScrapeRoute,
  postCrawlParamsPreviewRoute,
  postCrawlRoute,
  postExtractRoute,
  postFeedbackRoute,
  postInteractRoute,
  postInteractSessionIdExecuteRoute,
  postMapRoute,
  postMonitorMonitorIdRunRoute,
  postMonitorRoute,
  postParseRoute,
  postScrapeJobIdInteractRoute,
  postScrapeRoute,
  postSearchDeveloperRoute,
  postSearchGovRoute,
  postSearchJobIdFeedbackRoute,
  postSearchRoute,
  postSupportAskRoute,
  putTeamThreatProtectionRoute,
} from './routes'
import {
  deleteAgentJobIdRouteHandler,
  deleteBatchScrapeIdRouteHandler,
  deleteCrawlIdRouteHandler,
  deleteInteractSessionIdRouteHandler,
  deleteMonitorMonitorIdRouteHandler,
  deleteScrapeJobIdInteractRouteHandler,
  getAgentJobIdRouteHandler,
  getAgentJobIdSnapshotsSnapshotIdRouteHandler,
  getAgentJobIdTraceRouteHandler,
  getAgentRouteHandler,
  getBatchScrapeIdErrorsRouteHandler,
  getBatchScrapeIdRouteHandler,
  getCrawlActiveRouteHandler,
  getCrawlIdErrorsRouteHandler,
  getCrawlIdRouteHandler,
  getExtractIdRouteHandler,
  getInteractRouteHandler,
  getMonitorMonitorIdChecksCheckIdRouteHandler,
  getMonitorMonitorIdChecksRouteHandler,
  getMonitorMonitorIdRouteHandler,
  getMonitorRouteHandler,
  getParseFormatsRouteHandler,
  getScrapeJobIdRouteHandler,
  getSearchDeveloperRouteHandler,
  getSearchGovRouteHandler,
  getSearchResearchPapersIdRouteHandler,
  getSearchResearchPapersIdSimilarRouteHandler,
  getSearchResearchPapersRouteHandler,
  getTeamActivityRouteHandler,
  getTeamCreditUsageHistoricalRouteHandler,
  getTeamCreditUsageRouteHandler,
  getTeamQueueStatusRouteHandler,
  getTeamThreatProtectionRouteHandler,
  getTeamTokenUsageHistoricalRouteHandler,
  getTeamTokenUsageRouteHandler,
  patchMonitorMonitorIdRouteHandler,
  postAgentRouteHandler,
  postBatchScrapeRouteHandler,
  postCrawlParamsPreviewRouteHandler,
  postCrawlRouteHandler,
  postExtractRouteHandler,
  postFeedbackRouteHandler,
  postInteractRouteHandler,
  postInteractSessionIdExecuteRouteHandler,
  postMapRouteHandler,
  postMonitorMonitorIdRunRouteHandler,
  postMonitorRouteHandler,
  postParseRouteHandler,
  postScrapeJobIdInteractRouteHandler,
  postScrapeRouteHandler,
  postSearchDeveloperRouteHandler,
  postSearchGovRouteHandler,
  postSearchJobIdFeedbackRouteHandler,
  postSearchRouteHandler,
  postSupportAskRouteHandler,
  putTeamThreatProtectionRouteHandler,
} from './handlers'

const app = new OpenAPIHono()

export const api = app
  .openapi(postMonitorRoute, postMonitorRouteHandler)
  .openapi(getMonitorRoute, getMonitorRouteHandler)
  .openapi(getMonitorMonitorIdRoute, getMonitorMonitorIdRouteHandler)
  .openapi(patchMonitorMonitorIdRoute, patchMonitorMonitorIdRouteHandler)
  .openapi(deleteMonitorMonitorIdRoute, deleteMonitorMonitorIdRouteHandler)
  .openapi(postMonitorMonitorIdRunRoute, postMonitorMonitorIdRunRouteHandler)
  .openapi(getMonitorMonitorIdChecksRoute, getMonitorMonitorIdChecksRouteHandler)
  .openapi(getMonitorMonitorIdChecksCheckIdRoute, getMonitorMonitorIdChecksCheckIdRouteHandler)
  .openapi(postScrapeRoute, postScrapeRouteHandler)
  .openapi(postScrapeJobIdInteractRoute, postScrapeJobIdInteractRouteHandler)
  .openapi(deleteScrapeJobIdInteractRoute, deleteScrapeJobIdInteractRouteHandler)
  .openapi(postParseRoute, postParseRouteHandler)
  .openapi(getParseFormatsRoute, getParseFormatsRouteHandler)
  .openapi(postBatchScrapeRoute, postBatchScrapeRouteHandler)
  .openapi(getBatchScrapeIdRoute, getBatchScrapeIdRouteHandler)
  .openapi(deleteBatchScrapeIdRoute, deleteBatchScrapeIdRouteHandler)
  .openapi(getBatchScrapeIdErrorsRoute, getBatchScrapeIdErrorsRouteHandler)
  .openapi(getCrawlIdRoute, getCrawlIdRouteHandler)
  .openapi(deleteCrawlIdRoute, deleteCrawlIdRouteHandler)
  .openapi(getCrawlIdErrorsRoute, getCrawlIdErrorsRouteHandler)
  .openapi(postCrawlRoute, postCrawlRouteHandler)
  .openapi(postCrawlParamsPreviewRoute, postCrawlParamsPreviewRouteHandler)
  .openapi(postMapRoute, postMapRouteHandler)
  .openapi(postExtractRoute, postExtractRouteHandler)
  .openapi(getExtractIdRoute, getExtractIdRouteHandler)
  .openapi(getAgentRoute, getAgentRouteHandler)
  .openapi(postAgentRoute, postAgentRouteHandler)
  .openapi(getAgentJobIdRoute, getAgentJobIdRouteHandler)
  .openapi(deleteAgentJobIdRoute, deleteAgentJobIdRouteHandler)
  .openapi(getAgentJobIdTraceRoute, getAgentJobIdTraceRouteHandler)
  .openapi(getAgentJobIdSnapshotsSnapshotIdRoute, getAgentJobIdSnapshotsSnapshotIdRouteHandler)
  .openapi(getCrawlActiveRoute, getCrawlActiveRouteHandler)
  .openapi(getTeamCreditUsageRoute, getTeamCreditUsageRouteHandler)
  .openapi(getTeamCreditUsageHistoricalRoute, getTeamCreditUsageHistoricalRouteHandler)
  .openapi(getTeamTokenUsageRoute, getTeamTokenUsageRouteHandler)
  .openapi(getTeamTokenUsageHistoricalRoute, getTeamTokenUsageHistoricalRouteHandler)
  .openapi(getTeamQueueStatusRoute, getTeamQueueStatusRouteHandler)
  .openapi(getTeamActivityRoute, getTeamActivityRouteHandler)
  .openapi(postSearchRoute, postSearchRouteHandler)
  .openapi(postInteractRoute, postInteractRouteHandler)
  .openapi(getInteractRoute, getInteractRouteHandler)
  .openapi(postInteractSessionIdExecuteRoute, postInteractSessionIdExecuteRouteHandler)
  .openapi(deleteInteractSessionIdRoute, deleteInteractSessionIdRouteHandler)
  .openapi(getScrapeJobIdRoute, getScrapeJobIdRouteHandler)
  .openapi(postSearchJobIdFeedbackRoute, postSearchJobIdFeedbackRouteHandler)
  .openapi(postSupportAskRoute, postSupportAskRouteHandler)
  .openapi(getSearchResearchPapersRoute, getSearchResearchPapersRouteHandler)
  .openapi(getSearchResearchPapersIdRoute, getSearchResearchPapersIdRouteHandler)
  .openapi(getSearchResearchPapersIdSimilarRoute, getSearchResearchPapersIdSimilarRouteHandler)
  .openapi(getSearchDeveloperRoute, getSearchDeveloperRouteHandler)
  .openapi(postSearchDeveloperRoute, postSearchDeveloperRouteHandler)
  .openapi(getSearchGovRoute, getSearchGovRouteHandler)
  .openapi(postSearchGovRoute, postSearchGovRouteHandler)
  .openapi(postFeedbackRoute, postFeedbackRouteHandler)
  .openapi(getTeamThreatProtectionRoute, getTeamThreatProtectionRouteHandler)
  .openapi(putTeamThreatProtectionRoute, putTeamThreatProtectionRouteHandler)

export default app
