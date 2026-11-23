import { OpenAPIHono } from '@hono/zod-openapi'
import {
  attorneyHandler,
  billingCyclesHandler,
  billingCycleUsageHandler,
  callbacksHandler,
  caseCountAnalyticsByAreaOfLawHandler,
  caseCountAnalyticsByCaseClassHandler,
  caseCountAnalyticsByCaseFiledDateHandler,
  caseCountAnalyticsByCaseTypeGroupHandler,
  caseCountAnalyticsByCaseTypeHandler,
  caseCountAnalyticsByCourtHandler,
  caseCountAnalyticsByCourtLocationHandler,
  caseCountAnalyticsByCourtSystemHandler,
  caseCountAnalyticsByCourtTypeHandler,
  caseCountAnalyticsByJurisdictionGeoHandler,
  caseCountAnalyticsByNormAttorneyHandler,
  caseCountAnalyticsByNormJudgeHandler,
  caseCountAnalyticsByNormLawFirmHandler,
  caseCountAnalyticsByNormPartyHandler,
  caseCountAnalyticsByPartyRoleGroupHandler,
  caseCountAnalyticsByPartyRoleHandler,
  caseDocumentDownloadHandler,
  caseDocumentHandler,
  caseDocumentOrderHandler,
  caseExportHandler,
  caseHandler,
  caseSearchHandler,
  caseTrackHandler,
  caseTracksHandler,
  caseUpdateHandler,
  caseUpdatesHandler,
  courtCoverageHandler,
  dailyUsageHandler,
  generateNewTokenHandler,
  invalidateAllTokensHandler,
  invalidateTokenHandler,
  judgeHandler,
  listAllTokenIdsHandler,
  masterDataHandler,
  normAttorneyHandler,
  normAttorneySearchHandler,
  normJudgeHandler,
  normJudgeSearchHandler,
  normLawFirmHandler,
  normLawFirmSearchHandler,
  normPartyHandler,
  normPartySearchHandler,
  pacerCaseLocatorHandler,
  pacerCredentialHandler,
  pacerHandler,
  partyHandler,
} from './handlers'

const app = new OpenAPIHono()

export const api = app
  .route('/', attorneyHandler)
  .route('/', billingCycleUsageHandler)
  .route('/', billingCyclesHandler)
  .route('/', callbacksHandler)
  .route('/', caseHandler)
  .route('/', caseCountAnalyticsByAreaOfLawHandler)
  .route('/', caseCountAnalyticsByCaseClassHandler)
  .route('/', caseCountAnalyticsByCaseFiledDateHandler)
  .route('/', caseCountAnalyticsByCaseTypeHandler)
  .route('/', caseCountAnalyticsByCaseTypeGroupHandler)
  .route('/', caseCountAnalyticsByCourtHandler)
  .route('/', caseCountAnalyticsByCourtLocationHandler)
  .route('/', caseCountAnalyticsByCourtSystemHandler)
  .route('/', caseCountAnalyticsByCourtTypeHandler)
  .route('/', caseCountAnalyticsByJurisdictionGeoHandler)
  .route('/', caseCountAnalyticsByNormAttorneyHandler)
  .route('/', caseCountAnalyticsByNormJudgeHandler)
  .route('/', caseCountAnalyticsByNormLawFirmHandler)
  .route('/', caseCountAnalyticsByNormPartyHandler)
  .route('/', caseCountAnalyticsByPartyRoleHandler)
  .route('/', caseCountAnalyticsByPartyRoleGroupHandler)
  .route('/', caseDocumentHandler)
  .route('/', caseDocumentDownloadHandler)
  .route('/', caseDocumentOrderHandler)
  .route('/', caseExportHandler)
  .route('/', caseSearchHandler)
  .route('/', caseTrackHandler)
  .route('/', caseTracksHandler)
  .route('/', caseUpdateHandler)
  .route('/', caseUpdatesHandler)
  .route('/', courtCoverageHandler)
  .route('/', dailyUsageHandler)
  .route('/', generateNewTokenHandler)
  .route('/', invalidateAllTokensHandler)
  .route('/', invalidateTokenHandler)
  .route('/', judgeHandler)
  .route('/', listAllTokenIdsHandler)
  .route('/', masterDataHandler)
  .route('/', normAttorneyHandler)
  .route('/', normAttorneySearchHandler)
  .route('/', normJudgeHandler)
  .route('/', normJudgeSearchHandler)
  .route('/', normLawFirmHandler)
  .route('/', normLawFirmSearchHandler)
  .route('/', normPartyHandler)
  .route('/', normPartySearchHandler)
  .route('/', pacerHandler)
  .route('/', pacerCaseLocatorHandler)
  .route('/', pacerCredentialHandler)
  .route('/', partyHandler)

export default app
