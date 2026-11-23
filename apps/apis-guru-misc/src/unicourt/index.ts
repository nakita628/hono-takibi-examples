import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteCaseTrackCaseIdRoute,
  deletePacerCredentialPacerUserIdRoute,
  getAttorneyAttorneyIdAssociatedPartiesRoute,
  getAttorneyAttorneyIdRoute,
  getBillingCyclesRoute,
  getBillingCycleUsageBillingCycleRoute,
  getCallbacksRoute,
  getCaseCaseIdAttorneysRoute,
  getCaseCaseIdDocketEntriesPrimaryDocumentsRoute,
  getCaseCaseIdDocketEntriesRoute,
  getCaseCaseIdDocketEntriesSecondaryDocumentsRoute,
  getCaseCaseIdDocumentsRoute,
  getCaseCaseIdHearingsRoute,
  getCaseCaseIdJudgesRoute,
  getCaseCaseIdPartiesRoute,
  getCaseCaseIdRelatedCasesRoute,
  getCaseCaseIdRoute,
  getCaseCountAnalyticsByAreaOfLawRoute,
  getCaseCountAnalyticsByCaseClassRoute,
  getCaseCountAnalyticsByCaseFiledDateRoute,
  getCaseCountAnalyticsByCaseTypeGroupRoute,
  getCaseCountAnalyticsByCaseTypeRoute,
  getCaseCountAnalyticsByCourtLocationRoute,
  getCaseCountAnalyticsByCourtRoute,
  getCaseCountAnalyticsByCourtSystemRoute,
  getCaseCountAnalyticsByCourtTypeRoute,
  getCaseCountAnalyticsByJurisdictionGeoRoute,
  getCaseCountAnalyticsByNormAttorneyRoute,
  getCaseCountAnalyticsByNormJudgeRoute,
  getCaseCountAnalyticsByNormLawFirmRoute,
  getCaseCountAnalyticsByNormPartyRoute,
  getCaseCountAnalyticsByPartyRoleGroupRoute,
  getCaseCountAnalyticsByPartyRoleRoute,
  getCaseDocumentCaseDocumentIdRoute,
  getCaseDocumentDownloadCaseDocumentIdRoute,
  getCaseDocumentOrderCallbacksCaseDocumentOrderCallbackIdRoute,
  getCaseDocumentOrderCallbacksRoute,
  getCaseExportCallbacksCaseExportCallbackIdRoute,
  getCaseExportCallbacksRoute,
  getCaseExportCaseIdRoute,
  getCaseSearchCaseSearchIdRoute,
  getCaseSearchRoute,
  getCaseTrackCaseIdRoute,
  getCaseTracksRoute,
  getCaseUpdateCaseIdRoute,
  getCaseUpdatesRoute,
  getCourtCoverageCourtIdRoute,
  getDailyUsageDateRoute,
  getJudgeJudgeIdRoute,
  getMasterDataAreaOfLawAreaOfLawIdRoute,
  getMasterDataAreaOfLawRoute,
  getMasterDataAttorneyRepresentationTypeAttorneyRepresentationTypeIdRoute,
  getMasterDataAttorneyRepresentationTypeRoute,
  getMasterDataAttorneyTypeAttorneyTypeIdRoute,
  getMasterDataAttorneyTypeRoute,
  getMasterDataCaseClassCaseClassIdRoute,
  getMasterDataCaseClassRoute,
  getMasterDataCaseRelationshipTypeCaseRelationshipTypeIdRoute,
  getMasterDataCaseRelationshipTypeRoute,
  getMasterDataCaseStatusCaseStatusIdRoute,
  getMasterDataCaseStatusGroupCaseStatusGroupIdRoute,
  getMasterDataCaseStatusGroupRoute,
  getMasterDataCaseStatusRoute,
  getMasterDataCaseTypeCaseTypeIdRoute,
  getMasterDataCaseTypeGroupCaseTypeGroupIdRoute,
  getMasterDataCaseTypeGroupRoute,
  getMasterDataCaseTypeRoute,
  getMasterDataCauseOfActionAdditionalDataCauseOfActionAdditionalDataIdRoute,
  getMasterDataCauseOfActionAdditionalDataRoute,
  getMasterDataCauseOfActionCauseOfActionIdRoute,
  getMasterDataCauseOfActionGroupCauseOfActionGroupIdRoute,
  getMasterDataCauseOfActionGroupRoute,
  getMasterDataCauseOfActionRoute,
  getMasterDataChargeAdditionalDataChargeAdditionalDataIdRoute,
  getMasterDataChargeAdditionalDataRoute,
  getMasterDataChargeChargeIdRoute,
  getMasterDataChargeDegreeChargeDegreeIdRoute,
  getMasterDataChargeDegreeRoute,
  getMasterDataChargeGroupChargeGroupIdRoute,
  getMasterDataChargeGroupRoute,
  getMasterDataChargeRoute,
  getMasterDataChargeSeverityChargeSeverityIdRoute,
  getMasterDataChargeSeverityRoute,
  getMasterDataCourtCourtIdAppealCourtsRoute,
  getMasterDataCourtCourtIdCourtLocationsRoute,
  getMasterDataCourtCourtIdJurisdictionGeoRoute,
  getMasterDataCourtCourtIdRoute,
  getMasterDataCourtLocationCourtLocationIdCourtsRoute,
  getMasterDataCourtLocationCourtLocationIdRoute,
  getMasterDataCourtLocationRoute,
  getMasterDataCourtRoute,
  getMasterDataCourtServiceStatusCourtServiceStatusIdRoute,
  getMasterDataCourtServiceStatusRoute,
  getMasterDataCourtSystemCourtSystemIdRoute,
  getMasterDataCourtSystemRoute,
  getMasterDataCourtTypeCourtTypeIdRoute,
  getMasterDataCourtTypeRoute,
  getMasterDataJudgeTypeJudgeTypeIdRoute,
  getMasterDataJudgeTypeRoute,
  getMasterDataJurisdictionGeoJurisdictionGeoIdCourtsRoute,
  getMasterDataJurisdictionGeoJurisdictionGeoIdRoute,
  getMasterDataJurisdictionGeoRoute,
  getMasterDataPartyRoleGroupPartyRoleGroupIdRoute,
  getMasterDataPartyRoleGroupRoute,
  getMasterDataPartyRolePartyRoleIdRoute,
  getMasterDataPartyRoleRoute,
  getNormAttorneyNormAttorneyIdAssociatedNormJudgesRoute,
  getNormAttorneyNormAttorneyIdAssociatedNormLawFirmsRoute,
  getNormAttorneyNormAttorneyIdAssociatedNormPartiesRoute,
  getNormAttorneyNormAttorneyIdCaseCountAnalyticsByOpposingNormAttorneyRoute,
  getNormAttorneyNormAttorneyIdRoute,
  getNormAttorneySearchNormAttorneySearchIdRoute,
  getNormAttorneySearchRoute,
  getNormJudgeNormJudgeIdAssociatedNormAttorneysRoute,
  getNormJudgeNormJudgeIdAssociatedNormLawFirmsRoute,
  getNormJudgeNormJudgeIdAssociatedNormPartiesRoute,
  getNormJudgeNormJudgeIdRoute,
  getNormJudgeSearchNormJudgeSearchIdRoute,
  getNormJudgeSearchRoute,
  getNormLawFirmNormLawFirmIdAssociatedNormAttorneysRoute,
  getNormLawFirmNormLawFirmIdAssociatedNormJudgesRoute,
  getNormLawFirmNormLawFirmIdAssociatedNormPartiesRoute,
  getNormLawFirmNormLawFirmIdCaseCountAnalyticsByOpposingNormLawFirmRoute,
  getNormLawFirmNormLawFirmIdRoute,
  getNormLawFirmSearchNormLawFirmSearchIdRoute,
  getNormLawFirmSearchRoute,
  getNormPartyNormPartyIdAssociatedNormAttorneysRoute,
  getNormPartyNormPartyIdAssociatedNormJudgesRoute,
  getNormPartyNormPartyIdAssociatedNormLawFirmsRoute,
  getNormPartyNormPartyIdCaseCountAnalyticsByOpposingNormPartyRoute,
  getNormPartyNormPartyIdRoute,
  getNormPartySearchNormPartySearchIdRoute,
  getNormPartySearchRoute,
  getPacerCaseLocatorCaseSearchAllCourtsRoute,
  getPacerCaseLocatorCaseSearchAppealCourtsRoute,
  getPacerCaseLocatorCaseSearchBankruptcyCourtsRoute,
  getPacerCaseLocatorCaseSearchCivilCourtsRoute,
  getPacerCaseLocatorCaseSearchCriminalCourtsRoute,
  getPacerCaseLocatorCaseSearchMultiDistrictCourtsRoute,
  getPacerCaseLocatorPartySearchAllCourtsRoute,
  getPacerCaseLocatorPartySearchAppealCourtsRoute,
  getPacerCaseLocatorPartySearchBankruptcyCourtsRoute,
  getPacerCaseLocatorPartySearchCivilCourtsRoute,
  getPacerCaseLocatorPartySearchCriminalCourtsRoute,
  getPacerCaseLocatorPartySearchMultiDistrictCourtsRoute,
  getPacerCredentialPacerUserIdRoute,
  getPacerCredentialRoute,
  getPacerImportCaseByCourtUsingCaseNumberRoute,
  getPartyPartyIdAssociatedAttorneysRoute,
  getPartyPartyIdRoute,
  postGenerateNewTokenRoute,
  putCaseDocumentOrderRoute,
  putCaseTrackRoute,
  putCaseUpdateRoute,
  putInvalidateAllTokensRoute,
  putInvalidateTokenRoute,
  putListAllTokenIdsRoute,
  putPacerCredentialRoute,
} from './routes'
import {
  deleteCaseTrackCaseIdRouteHandler,
  deletePacerCredentialPacerUserIdRouteHandler,
  getAttorneyAttorneyIdAssociatedPartiesRouteHandler,
  getAttorneyAttorneyIdRouteHandler,
  getBillingCyclesRouteHandler,
  getBillingCycleUsageBillingCycleRouteHandler,
  getCallbacksRouteHandler,
  getCaseCaseIdAttorneysRouteHandler,
  getCaseCaseIdDocketEntriesPrimaryDocumentsRouteHandler,
  getCaseCaseIdDocketEntriesRouteHandler,
  getCaseCaseIdDocketEntriesSecondaryDocumentsRouteHandler,
  getCaseCaseIdDocumentsRouteHandler,
  getCaseCaseIdHearingsRouteHandler,
  getCaseCaseIdJudgesRouteHandler,
  getCaseCaseIdPartiesRouteHandler,
  getCaseCaseIdRelatedCasesRouteHandler,
  getCaseCaseIdRouteHandler,
  getCaseCountAnalyticsByAreaOfLawRouteHandler,
  getCaseCountAnalyticsByCaseClassRouteHandler,
  getCaseCountAnalyticsByCaseFiledDateRouteHandler,
  getCaseCountAnalyticsByCaseTypeGroupRouteHandler,
  getCaseCountAnalyticsByCaseTypeRouteHandler,
  getCaseCountAnalyticsByCourtLocationRouteHandler,
  getCaseCountAnalyticsByCourtRouteHandler,
  getCaseCountAnalyticsByCourtSystemRouteHandler,
  getCaseCountAnalyticsByCourtTypeRouteHandler,
  getCaseCountAnalyticsByJurisdictionGeoRouteHandler,
  getCaseCountAnalyticsByNormAttorneyRouteHandler,
  getCaseCountAnalyticsByNormJudgeRouteHandler,
  getCaseCountAnalyticsByNormLawFirmRouteHandler,
  getCaseCountAnalyticsByNormPartyRouteHandler,
  getCaseCountAnalyticsByPartyRoleGroupRouteHandler,
  getCaseCountAnalyticsByPartyRoleRouteHandler,
  getCaseDocumentCaseDocumentIdRouteHandler,
  getCaseDocumentDownloadCaseDocumentIdRouteHandler,
  getCaseDocumentOrderCallbacksCaseDocumentOrderCallbackIdRouteHandler,
  getCaseDocumentOrderCallbacksRouteHandler,
  getCaseExportCallbacksCaseExportCallbackIdRouteHandler,
  getCaseExportCallbacksRouteHandler,
  getCaseExportCaseIdRouteHandler,
  getCaseSearchCaseSearchIdRouteHandler,
  getCaseSearchRouteHandler,
  getCaseTrackCaseIdRouteHandler,
  getCaseTracksRouteHandler,
  getCaseUpdateCaseIdRouteHandler,
  getCaseUpdatesRouteHandler,
  getCourtCoverageCourtIdRouteHandler,
  getDailyUsageDateRouteHandler,
  getJudgeJudgeIdRouteHandler,
  getMasterDataAreaOfLawAreaOfLawIdRouteHandler,
  getMasterDataAreaOfLawRouteHandler,
  getMasterDataAttorneyRepresentationTypeAttorneyRepresentationTypeIdRouteHandler,
  getMasterDataAttorneyRepresentationTypeRouteHandler,
  getMasterDataAttorneyTypeAttorneyTypeIdRouteHandler,
  getMasterDataAttorneyTypeRouteHandler,
  getMasterDataCaseClassCaseClassIdRouteHandler,
  getMasterDataCaseClassRouteHandler,
  getMasterDataCaseRelationshipTypeCaseRelationshipTypeIdRouteHandler,
  getMasterDataCaseRelationshipTypeRouteHandler,
  getMasterDataCaseStatusCaseStatusIdRouteHandler,
  getMasterDataCaseStatusGroupCaseStatusGroupIdRouteHandler,
  getMasterDataCaseStatusGroupRouteHandler,
  getMasterDataCaseStatusRouteHandler,
  getMasterDataCaseTypeCaseTypeIdRouteHandler,
  getMasterDataCaseTypeGroupCaseTypeGroupIdRouteHandler,
  getMasterDataCaseTypeGroupRouteHandler,
  getMasterDataCaseTypeRouteHandler,
  getMasterDataCauseOfActionAdditionalDataCauseOfActionAdditionalDataIdRouteHandler,
  getMasterDataCauseOfActionAdditionalDataRouteHandler,
  getMasterDataCauseOfActionCauseOfActionIdRouteHandler,
  getMasterDataCauseOfActionGroupCauseOfActionGroupIdRouteHandler,
  getMasterDataCauseOfActionGroupRouteHandler,
  getMasterDataCauseOfActionRouteHandler,
  getMasterDataChargeAdditionalDataChargeAdditionalDataIdRouteHandler,
  getMasterDataChargeAdditionalDataRouteHandler,
  getMasterDataChargeChargeIdRouteHandler,
  getMasterDataChargeDegreeChargeDegreeIdRouteHandler,
  getMasterDataChargeDegreeRouteHandler,
  getMasterDataChargeGroupChargeGroupIdRouteHandler,
  getMasterDataChargeGroupRouteHandler,
  getMasterDataChargeRouteHandler,
  getMasterDataChargeSeverityChargeSeverityIdRouteHandler,
  getMasterDataChargeSeverityRouteHandler,
  getMasterDataCourtCourtIdAppealCourtsRouteHandler,
  getMasterDataCourtCourtIdCourtLocationsRouteHandler,
  getMasterDataCourtCourtIdJurisdictionGeoRouteHandler,
  getMasterDataCourtCourtIdRouteHandler,
  getMasterDataCourtLocationCourtLocationIdCourtsRouteHandler,
  getMasterDataCourtLocationCourtLocationIdRouteHandler,
  getMasterDataCourtLocationRouteHandler,
  getMasterDataCourtRouteHandler,
  getMasterDataCourtServiceStatusCourtServiceStatusIdRouteHandler,
  getMasterDataCourtServiceStatusRouteHandler,
  getMasterDataCourtSystemCourtSystemIdRouteHandler,
  getMasterDataCourtSystemRouteHandler,
  getMasterDataCourtTypeCourtTypeIdRouteHandler,
  getMasterDataCourtTypeRouteHandler,
  getMasterDataJudgeTypeJudgeTypeIdRouteHandler,
  getMasterDataJudgeTypeRouteHandler,
  getMasterDataJurisdictionGeoJurisdictionGeoIdCourtsRouteHandler,
  getMasterDataJurisdictionGeoJurisdictionGeoIdRouteHandler,
  getMasterDataJurisdictionGeoRouteHandler,
  getMasterDataPartyRoleGroupPartyRoleGroupIdRouteHandler,
  getMasterDataPartyRoleGroupRouteHandler,
  getMasterDataPartyRolePartyRoleIdRouteHandler,
  getMasterDataPartyRoleRouteHandler,
  getNormAttorneyNormAttorneyIdAssociatedNormJudgesRouteHandler,
  getNormAttorneyNormAttorneyIdAssociatedNormLawFirmsRouteHandler,
  getNormAttorneyNormAttorneyIdAssociatedNormPartiesRouteHandler,
  getNormAttorneyNormAttorneyIdCaseCountAnalyticsByOpposingNormAttorneyRouteHandler,
  getNormAttorneyNormAttorneyIdRouteHandler,
  getNormAttorneySearchNormAttorneySearchIdRouteHandler,
  getNormAttorneySearchRouteHandler,
  getNormJudgeNormJudgeIdAssociatedNormAttorneysRouteHandler,
  getNormJudgeNormJudgeIdAssociatedNormLawFirmsRouteHandler,
  getNormJudgeNormJudgeIdAssociatedNormPartiesRouteHandler,
  getNormJudgeNormJudgeIdRouteHandler,
  getNormJudgeSearchNormJudgeSearchIdRouteHandler,
  getNormJudgeSearchRouteHandler,
  getNormLawFirmNormLawFirmIdAssociatedNormAttorneysRouteHandler,
  getNormLawFirmNormLawFirmIdAssociatedNormJudgesRouteHandler,
  getNormLawFirmNormLawFirmIdAssociatedNormPartiesRouteHandler,
  getNormLawFirmNormLawFirmIdCaseCountAnalyticsByOpposingNormLawFirmRouteHandler,
  getNormLawFirmNormLawFirmIdRouteHandler,
  getNormLawFirmSearchNormLawFirmSearchIdRouteHandler,
  getNormLawFirmSearchRouteHandler,
  getNormPartyNormPartyIdAssociatedNormAttorneysRouteHandler,
  getNormPartyNormPartyIdAssociatedNormJudgesRouteHandler,
  getNormPartyNormPartyIdAssociatedNormLawFirmsRouteHandler,
  getNormPartyNormPartyIdCaseCountAnalyticsByOpposingNormPartyRouteHandler,
  getNormPartyNormPartyIdRouteHandler,
  getNormPartySearchNormPartySearchIdRouteHandler,
  getNormPartySearchRouteHandler,
  getPacerCaseLocatorCaseSearchAllCourtsRouteHandler,
  getPacerCaseLocatorCaseSearchAppealCourtsRouteHandler,
  getPacerCaseLocatorCaseSearchBankruptcyCourtsRouteHandler,
  getPacerCaseLocatorCaseSearchCivilCourtsRouteHandler,
  getPacerCaseLocatorCaseSearchCriminalCourtsRouteHandler,
  getPacerCaseLocatorCaseSearchMultiDistrictCourtsRouteHandler,
  getPacerCaseLocatorPartySearchAllCourtsRouteHandler,
  getPacerCaseLocatorPartySearchAppealCourtsRouteHandler,
  getPacerCaseLocatorPartySearchBankruptcyCourtsRouteHandler,
  getPacerCaseLocatorPartySearchCivilCourtsRouteHandler,
  getPacerCaseLocatorPartySearchCriminalCourtsRouteHandler,
  getPacerCaseLocatorPartySearchMultiDistrictCourtsRouteHandler,
  getPacerCredentialPacerUserIdRouteHandler,
  getPacerCredentialRouteHandler,
  getPacerImportCaseByCourtUsingCaseNumberRouteHandler,
  getPartyPartyIdAssociatedAttorneysRouteHandler,
  getPartyPartyIdRouteHandler,
  postGenerateNewTokenRouteHandler,
  putCaseDocumentOrderRouteHandler,
  putCaseTrackRouteHandler,
  putCaseUpdateRouteHandler,
  putInvalidateAllTokensRouteHandler,
  putInvalidateTokenRouteHandler,
  putListAllTokenIdsRouteHandler,
  putPacerCredentialRouteHandler,
} from './handlers'

const app = new OpenAPIHono()

export const api = app
  .openapi(getAttorneyAttorneyIdRoute, getAttorneyAttorneyIdRouteHandler)
  .openapi(
    getAttorneyAttorneyIdAssociatedPartiesRoute,
    getAttorneyAttorneyIdAssociatedPartiesRouteHandler,
  )
  .openapi(getBillingCycleUsageBillingCycleRoute, getBillingCycleUsageBillingCycleRouteHandler)
  .openapi(getBillingCyclesRoute, getBillingCyclesRouteHandler)
  .openapi(getCallbacksRoute, getCallbacksRouteHandler)
  .openapi(getCaseCaseIdRoute, getCaseCaseIdRouteHandler)
  .openapi(getCaseCaseIdAttorneysRoute, getCaseCaseIdAttorneysRouteHandler)
  .openapi(getCaseCaseIdDocketEntriesRoute, getCaseCaseIdDocketEntriesRouteHandler)
  .openapi(
    getCaseCaseIdDocketEntriesPrimaryDocumentsRoute,
    getCaseCaseIdDocketEntriesPrimaryDocumentsRouteHandler,
  )
  .openapi(
    getCaseCaseIdDocketEntriesSecondaryDocumentsRoute,
    getCaseCaseIdDocketEntriesSecondaryDocumentsRouteHandler,
  )
  .openapi(getCaseCaseIdDocumentsRoute, getCaseCaseIdDocumentsRouteHandler)
  .openapi(getCaseCaseIdHearingsRoute, getCaseCaseIdHearingsRouteHandler)
  .openapi(getCaseCaseIdJudgesRoute, getCaseCaseIdJudgesRouteHandler)
  .openapi(getCaseCaseIdPartiesRoute, getCaseCaseIdPartiesRouteHandler)
  .openapi(getCaseCaseIdRelatedCasesRoute, getCaseCaseIdRelatedCasesRouteHandler)
  .openapi(getCaseCountAnalyticsByAreaOfLawRoute, getCaseCountAnalyticsByAreaOfLawRouteHandler)
  .openapi(getCaseCountAnalyticsByCaseClassRoute, getCaseCountAnalyticsByCaseClassRouteHandler)
  .openapi(
    getCaseCountAnalyticsByCaseFiledDateRoute,
    getCaseCountAnalyticsByCaseFiledDateRouteHandler,
  )
  .openapi(getCaseCountAnalyticsByCaseTypeRoute, getCaseCountAnalyticsByCaseTypeRouteHandler)
  .openapi(
    getCaseCountAnalyticsByCaseTypeGroupRoute,
    getCaseCountAnalyticsByCaseTypeGroupRouteHandler,
  )
  .openapi(getCaseCountAnalyticsByCourtRoute, getCaseCountAnalyticsByCourtRouteHandler)
  .openapi(
    getCaseCountAnalyticsByCourtLocationRoute,
    getCaseCountAnalyticsByCourtLocationRouteHandler,
  )
  .openapi(getCaseCountAnalyticsByCourtSystemRoute, getCaseCountAnalyticsByCourtSystemRouteHandler)
  .openapi(getCaseCountAnalyticsByCourtTypeRoute, getCaseCountAnalyticsByCourtTypeRouteHandler)
  .openapi(
    getCaseCountAnalyticsByJurisdictionGeoRoute,
    getCaseCountAnalyticsByJurisdictionGeoRouteHandler,
  )
  .openapi(
    getCaseCountAnalyticsByNormAttorneyRoute,
    getCaseCountAnalyticsByNormAttorneyRouteHandler,
  )
  .openapi(getCaseCountAnalyticsByNormJudgeRoute, getCaseCountAnalyticsByNormJudgeRouteHandler)
  .openapi(getCaseCountAnalyticsByNormLawFirmRoute, getCaseCountAnalyticsByNormLawFirmRouteHandler)
  .openapi(getCaseCountAnalyticsByNormPartyRoute, getCaseCountAnalyticsByNormPartyRouteHandler)
  .openapi(getCaseCountAnalyticsByPartyRoleRoute, getCaseCountAnalyticsByPartyRoleRouteHandler)
  .openapi(
    getCaseCountAnalyticsByPartyRoleGroupRoute,
    getCaseCountAnalyticsByPartyRoleGroupRouteHandler,
  )
  .openapi(getCaseDocumentCaseDocumentIdRoute, getCaseDocumentCaseDocumentIdRouteHandler)
  .openapi(
    getCaseDocumentDownloadCaseDocumentIdRoute,
    getCaseDocumentDownloadCaseDocumentIdRouteHandler,
  )
  .openapi(putCaseDocumentOrderRoute, putCaseDocumentOrderRouteHandler)
  .openapi(getCaseDocumentOrderCallbacksRoute, getCaseDocumentOrderCallbacksRouteHandler)
  .openapi(
    getCaseDocumentOrderCallbacksCaseDocumentOrderCallbackIdRoute,
    getCaseDocumentOrderCallbacksCaseDocumentOrderCallbackIdRouteHandler,
  )
  .openapi(getCaseExportCallbacksRoute, getCaseExportCallbacksRouteHandler)
  .openapi(
    getCaseExportCallbacksCaseExportCallbackIdRoute,
    getCaseExportCallbacksCaseExportCallbackIdRouteHandler,
  )
  .openapi(getCaseExportCaseIdRoute, getCaseExportCaseIdRouteHandler)
  .openapi(getCaseSearchRoute, getCaseSearchRouteHandler)
  .openapi(getCaseSearchCaseSearchIdRoute, getCaseSearchCaseSearchIdRouteHandler)
  .openapi(putCaseTrackRoute, putCaseTrackRouteHandler)
  .openapi(deleteCaseTrackCaseIdRoute, deleteCaseTrackCaseIdRouteHandler)
  .openapi(getCaseTrackCaseIdRoute, getCaseTrackCaseIdRouteHandler)
  .openapi(getCaseTracksRoute, getCaseTracksRouteHandler)
  .openapi(putCaseUpdateRoute, putCaseUpdateRouteHandler)
  .openapi(getCaseUpdateCaseIdRoute, getCaseUpdateCaseIdRouteHandler)
  .openapi(getCaseUpdatesRoute, getCaseUpdatesRouteHandler)
  .openapi(getCourtCoverageCourtIdRoute, getCourtCoverageCourtIdRouteHandler)
  .openapi(getDailyUsageDateRoute, getDailyUsageDateRouteHandler)
  .openapi(postGenerateNewTokenRoute, postGenerateNewTokenRouteHandler)
  .openapi(putInvalidateAllTokensRoute, putInvalidateAllTokensRouteHandler)
  .openapi(putInvalidateTokenRoute, putInvalidateTokenRouteHandler)
  .openapi(getJudgeJudgeIdRoute, getJudgeJudgeIdRouteHandler)
  .openapi(putListAllTokenIdsRoute, putListAllTokenIdsRouteHandler)
  .openapi(getMasterDataAreaOfLawRoute, getMasterDataAreaOfLawRouteHandler)
  .openapi(getMasterDataAreaOfLawAreaOfLawIdRoute, getMasterDataAreaOfLawAreaOfLawIdRouteHandler)
  .openapi(
    getMasterDataAttorneyRepresentationTypeRoute,
    getMasterDataAttorneyRepresentationTypeRouteHandler,
  )
  .openapi(
    getMasterDataAttorneyRepresentationTypeAttorneyRepresentationTypeIdRoute,
    getMasterDataAttorneyRepresentationTypeAttorneyRepresentationTypeIdRouteHandler,
  )
  .openapi(getMasterDataAttorneyTypeRoute, getMasterDataAttorneyTypeRouteHandler)
  .openapi(
    getMasterDataAttorneyTypeAttorneyTypeIdRoute,
    getMasterDataAttorneyTypeAttorneyTypeIdRouteHandler,
  )
  .openapi(getMasterDataCaseClassRoute, getMasterDataCaseClassRouteHandler)
  .openapi(getMasterDataCaseClassCaseClassIdRoute, getMasterDataCaseClassCaseClassIdRouteHandler)
  .openapi(getMasterDataCaseRelationshipTypeRoute, getMasterDataCaseRelationshipTypeRouteHandler)
  .openapi(
    getMasterDataCaseRelationshipTypeCaseRelationshipTypeIdRoute,
    getMasterDataCaseRelationshipTypeCaseRelationshipTypeIdRouteHandler,
  )
  .openapi(getMasterDataCaseStatusRoute, getMasterDataCaseStatusRouteHandler)
  .openapi(
    getMasterDataCaseStatusCaseStatusIdRoute,
    getMasterDataCaseStatusCaseStatusIdRouteHandler,
  )
  .openapi(getMasterDataCaseStatusGroupRoute, getMasterDataCaseStatusGroupRouteHandler)
  .openapi(
    getMasterDataCaseStatusGroupCaseStatusGroupIdRoute,
    getMasterDataCaseStatusGroupCaseStatusGroupIdRouteHandler,
  )
  .openapi(getMasterDataCaseTypeRoute, getMasterDataCaseTypeRouteHandler)
  .openapi(getMasterDataCaseTypeCaseTypeIdRoute, getMasterDataCaseTypeCaseTypeIdRouteHandler)
  .openapi(getMasterDataCaseTypeGroupRoute, getMasterDataCaseTypeGroupRouteHandler)
  .openapi(
    getMasterDataCaseTypeGroupCaseTypeGroupIdRoute,
    getMasterDataCaseTypeGroupCaseTypeGroupIdRouteHandler,
  )
  .openapi(getMasterDataCauseOfActionRoute, getMasterDataCauseOfActionRouteHandler)
  .openapi(
    getMasterDataCauseOfActionCauseOfActionIdRoute,
    getMasterDataCauseOfActionCauseOfActionIdRouteHandler,
  )
  .openapi(
    getMasterDataCauseOfActionAdditionalDataRoute,
    getMasterDataCauseOfActionAdditionalDataRouteHandler,
  )
  .openapi(
    getMasterDataCauseOfActionAdditionalDataCauseOfActionAdditionalDataIdRoute,
    getMasterDataCauseOfActionAdditionalDataCauseOfActionAdditionalDataIdRouteHandler,
  )
  .openapi(getMasterDataCauseOfActionGroupRoute, getMasterDataCauseOfActionGroupRouteHandler)
  .openapi(
    getMasterDataCauseOfActionGroupCauseOfActionGroupIdRoute,
    getMasterDataCauseOfActionGroupCauseOfActionGroupIdRouteHandler,
  )
  .openapi(getMasterDataChargeRoute, getMasterDataChargeRouteHandler)
  .openapi(getMasterDataChargeChargeIdRoute, getMasterDataChargeChargeIdRouteHandler)
  .openapi(getMasterDataChargeAdditionalDataRoute, getMasterDataChargeAdditionalDataRouteHandler)
  .openapi(
    getMasterDataChargeAdditionalDataChargeAdditionalDataIdRoute,
    getMasterDataChargeAdditionalDataChargeAdditionalDataIdRouteHandler,
  )
  .openapi(getMasterDataChargeDegreeRoute, getMasterDataChargeDegreeRouteHandler)
  .openapi(
    getMasterDataChargeDegreeChargeDegreeIdRoute,
    getMasterDataChargeDegreeChargeDegreeIdRouteHandler,
  )
  .openapi(getMasterDataChargeGroupRoute, getMasterDataChargeGroupRouteHandler)
  .openapi(
    getMasterDataChargeGroupChargeGroupIdRoute,
    getMasterDataChargeGroupChargeGroupIdRouteHandler,
  )
  .openapi(getMasterDataChargeSeverityRoute, getMasterDataChargeSeverityRouteHandler)
  .openapi(
    getMasterDataChargeSeverityChargeSeverityIdRoute,
    getMasterDataChargeSeverityChargeSeverityIdRouteHandler,
  )
  .openapi(getMasterDataCourtRoute, getMasterDataCourtRouteHandler)
  .openapi(getMasterDataCourtCourtIdRoute, getMasterDataCourtCourtIdRouteHandler)
  .openapi(
    getMasterDataCourtCourtIdAppealCourtsRoute,
    getMasterDataCourtCourtIdAppealCourtsRouteHandler,
  )
  .openapi(
    getMasterDataCourtCourtIdCourtLocationsRoute,
    getMasterDataCourtCourtIdCourtLocationsRouteHandler,
  )
  .openapi(
    getMasterDataCourtCourtIdJurisdictionGeoRoute,
    getMasterDataCourtCourtIdJurisdictionGeoRouteHandler,
  )
  .openapi(getMasterDataCourtLocationRoute, getMasterDataCourtLocationRouteHandler)
  .openapi(
    getMasterDataCourtLocationCourtLocationIdRoute,
    getMasterDataCourtLocationCourtLocationIdRouteHandler,
  )
  .openapi(
    getMasterDataCourtLocationCourtLocationIdCourtsRoute,
    getMasterDataCourtLocationCourtLocationIdCourtsRouteHandler,
  )
  .openapi(getMasterDataCourtServiceStatusRoute, getMasterDataCourtServiceStatusRouteHandler)
  .openapi(
    getMasterDataCourtServiceStatusCourtServiceStatusIdRoute,
    getMasterDataCourtServiceStatusCourtServiceStatusIdRouteHandler,
  )
  .openapi(getMasterDataCourtSystemRoute, getMasterDataCourtSystemRouteHandler)
  .openapi(
    getMasterDataCourtSystemCourtSystemIdRoute,
    getMasterDataCourtSystemCourtSystemIdRouteHandler,
  )
  .openapi(getMasterDataCourtTypeRoute, getMasterDataCourtTypeRouteHandler)
  .openapi(getMasterDataCourtTypeCourtTypeIdRoute, getMasterDataCourtTypeCourtTypeIdRouteHandler)
  .openapi(getMasterDataJudgeTypeRoute, getMasterDataJudgeTypeRouteHandler)
  .openapi(getMasterDataJudgeTypeJudgeTypeIdRoute, getMasterDataJudgeTypeJudgeTypeIdRouteHandler)
  .openapi(getMasterDataJurisdictionGeoRoute, getMasterDataJurisdictionGeoRouteHandler)
  .openapi(
    getMasterDataJurisdictionGeoJurisdictionGeoIdRoute,
    getMasterDataJurisdictionGeoJurisdictionGeoIdRouteHandler,
  )
  .openapi(
    getMasterDataJurisdictionGeoJurisdictionGeoIdCourtsRoute,
    getMasterDataJurisdictionGeoJurisdictionGeoIdCourtsRouteHandler,
  )
  .openapi(getMasterDataPartyRoleRoute, getMasterDataPartyRoleRouteHandler)
  .openapi(getMasterDataPartyRolePartyRoleIdRoute, getMasterDataPartyRolePartyRoleIdRouteHandler)
  .openapi(getMasterDataPartyRoleGroupRoute, getMasterDataPartyRoleGroupRouteHandler)
  .openapi(
    getMasterDataPartyRoleGroupPartyRoleGroupIdRoute,
    getMasterDataPartyRoleGroupPartyRoleGroupIdRouteHandler,
  )
  .openapi(getNormAttorneyNormAttorneyIdRoute, getNormAttorneyNormAttorneyIdRouteHandler)
  .openapi(
    getNormAttorneyNormAttorneyIdAssociatedNormJudgesRoute,
    getNormAttorneyNormAttorneyIdAssociatedNormJudgesRouteHandler,
  )
  .openapi(
    getNormAttorneyNormAttorneyIdAssociatedNormLawFirmsRoute,
    getNormAttorneyNormAttorneyIdAssociatedNormLawFirmsRouteHandler,
  )
  .openapi(
    getNormAttorneyNormAttorneyIdAssociatedNormPartiesRoute,
    getNormAttorneyNormAttorneyIdAssociatedNormPartiesRouteHandler,
  )
  .openapi(
    getNormAttorneyNormAttorneyIdCaseCountAnalyticsByOpposingNormAttorneyRoute,
    getNormAttorneyNormAttorneyIdCaseCountAnalyticsByOpposingNormAttorneyRouteHandler,
  )
  .openapi(getNormAttorneySearchRoute, getNormAttorneySearchRouteHandler)
  .openapi(
    getNormAttorneySearchNormAttorneySearchIdRoute,
    getNormAttorneySearchNormAttorneySearchIdRouteHandler,
  )
  .openapi(getNormJudgeNormJudgeIdRoute, getNormJudgeNormJudgeIdRouteHandler)
  .openapi(
    getNormJudgeNormJudgeIdAssociatedNormAttorneysRoute,
    getNormJudgeNormJudgeIdAssociatedNormAttorneysRouteHandler,
  )
  .openapi(
    getNormJudgeNormJudgeIdAssociatedNormLawFirmsRoute,
    getNormJudgeNormJudgeIdAssociatedNormLawFirmsRouteHandler,
  )
  .openapi(
    getNormJudgeNormJudgeIdAssociatedNormPartiesRoute,
    getNormJudgeNormJudgeIdAssociatedNormPartiesRouteHandler,
  )
  .openapi(getNormJudgeSearchRoute, getNormJudgeSearchRouteHandler)
  .openapi(
    getNormJudgeSearchNormJudgeSearchIdRoute,
    getNormJudgeSearchNormJudgeSearchIdRouteHandler,
  )
  .openapi(getNormLawFirmNormLawFirmIdRoute, getNormLawFirmNormLawFirmIdRouteHandler)
  .openapi(
    getNormLawFirmNormLawFirmIdAssociatedNormAttorneysRoute,
    getNormLawFirmNormLawFirmIdAssociatedNormAttorneysRouteHandler,
  )
  .openapi(
    getNormLawFirmNormLawFirmIdAssociatedNormJudgesRoute,
    getNormLawFirmNormLawFirmIdAssociatedNormJudgesRouteHandler,
  )
  .openapi(
    getNormLawFirmNormLawFirmIdAssociatedNormPartiesRoute,
    getNormLawFirmNormLawFirmIdAssociatedNormPartiesRouteHandler,
  )
  .openapi(
    getNormLawFirmNormLawFirmIdCaseCountAnalyticsByOpposingNormLawFirmRoute,
    getNormLawFirmNormLawFirmIdCaseCountAnalyticsByOpposingNormLawFirmRouteHandler,
  )
  .openapi(getNormLawFirmSearchRoute, getNormLawFirmSearchRouteHandler)
  .openapi(
    getNormLawFirmSearchNormLawFirmSearchIdRoute,
    getNormLawFirmSearchNormLawFirmSearchIdRouteHandler,
  )
  .openapi(getNormPartyNormPartyIdRoute, getNormPartyNormPartyIdRouteHandler)
  .openapi(
    getNormPartyNormPartyIdAssociatedNormAttorneysRoute,
    getNormPartyNormPartyIdAssociatedNormAttorneysRouteHandler,
  )
  .openapi(
    getNormPartyNormPartyIdAssociatedNormJudgesRoute,
    getNormPartyNormPartyIdAssociatedNormJudgesRouteHandler,
  )
  .openapi(
    getNormPartyNormPartyIdAssociatedNormLawFirmsRoute,
    getNormPartyNormPartyIdAssociatedNormLawFirmsRouteHandler,
  )
  .openapi(
    getNormPartyNormPartyIdCaseCountAnalyticsByOpposingNormPartyRoute,
    getNormPartyNormPartyIdCaseCountAnalyticsByOpposingNormPartyRouteHandler,
  )
  .openapi(getNormPartySearchRoute, getNormPartySearchRouteHandler)
  .openapi(
    getNormPartySearchNormPartySearchIdRoute,
    getNormPartySearchNormPartySearchIdRouteHandler,
  )
  .openapi(
    getPacerImportCaseByCourtUsingCaseNumberRoute,
    getPacerImportCaseByCourtUsingCaseNumberRouteHandler,
  )
  .openapi(
    getPacerCaseLocatorCaseSearchAllCourtsRoute,
    getPacerCaseLocatorCaseSearchAllCourtsRouteHandler,
  )
  .openapi(
    getPacerCaseLocatorCaseSearchAppealCourtsRoute,
    getPacerCaseLocatorCaseSearchAppealCourtsRouteHandler,
  )
  .openapi(
    getPacerCaseLocatorCaseSearchBankruptcyCourtsRoute,
    getPacerCaseLocatorCaseSearchBankruptcyCourtsRouteHandler,
  )
  .openapi(
    getPacerCaseLocatorCaseSearchCivilCourtsRoute,
    getPacerCaseLocatorCaseSearchCivilCourtsRouteHandler,
  )
  .openapi(
    getPacerCaseLocatorCaseSearchCriminalCourtsRoute,
    getPacerCaseLocatorCaseSearchCriminalCourtsRouteHandler,
  )
  .openapi(
    getPacerCaseLocatorCaseSearchMultiDistrictCourtsRoute,
    getPacerCaseLocatorCaseSearchMultiDistrictCourtsRouteHandler,
  )
  .openapi(
    getPacerCaseLocatorPartySearchAllCourtsRoute,
    getPacerCaseLocatorPartySearchAllCourtsRouteHandler,
  )
  .openapi(
    getPacerCaseLocatorPartySearchAppealCourtsRoute,
    getPacerCaseLocatorPartySearchAppealCourtsRouteHandler,
  )
  .openapi(
    getPacerCaseLocatorPartySearchBankruptcyCourtsRoute,
    getPacerCaseLocatorPartySearchBankruptcyCourtsRouteHandler,
  )
  .openapi(
    getPacerCaseLocatorPartySearchCivilCourtsRoute,
    getPacerCaseLocatorPartySearchCivilCourtsRouteHandler,
  )
  .openapi(
    getPacerCaseLocatorPartySearchCriminalCourtsRoute,
    getPacerCaseLocatorPartySearchCriminalCourtsRouteHandler,
  )
  .openapi(
    getPacerCaseLocatorPartySearchMultiDistrictCourtsRoute,
    getPacerCaseLocatorPartySearchMultiDistrictCourtsRouteHandler,
  )
  .openapi(getPacerCredentialRoute, getPacerCredentialRouteHandler)
  .openapi(putPacerCredentialRoute, putPacerCredentialRouteHandler)
  .openapi(deletePacerCredentialPacerUserIdRoute, deletePacerCredentialPacerUserIdRouteHandler)
  .openapi(getPacerCredentialPacerUserIdRoute, getPacerCredentialPacerUserIdRouteHandler)
  .openapi(getPartyPartyIdRoute, getPartyPartyIdRouteHandler)
  .openapi(getPartyPartyIdAssociatedAttorneysRoute, getPartyPartyIdAssociatedAttorneysRouteHandler)

export default app
