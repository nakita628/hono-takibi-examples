import type { InferRequestType, ClientRequestOptions } from 'hono/client'
import { parseResponse } from 'hono/client'
import { client } from './client'

export async function getAttorneyAttorneyId(
  args: InferRequestType<(typeof client.attorney)[':attorneyId']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.attorney[':attorneyId'].$get(args, options))
}

export async function getAttorneyAttorneyIdAssociatedParties(
  args: InferRequestType<(typeof client.attorney)[':attorneyId']['associatedParties']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.attorney[':attorneyId'].associatedParties.$get(args, options))
}

export async function getBillingCycleUsageBillingCycle(
  args: InferRequestType<(typeof client.billingCycleUsage)[':billingCycle']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.billingCycleUsage[':billingCycle'].$get(args, options))
}

export async function getBillingCycles(options?: ClientRequestOptions) {
  return await parseResponse(client.billingCycles.$get(undefined, options))
}

export async function getCallbacks(
  args: InferRequestType<typeof client.callbacks.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.callbacks.$get(args, options))
}

export async function getCaseCaseId(
  args: InferRequestType<(typeof client.case)[':caseId']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.case[':caseId'].$get(args, options))
}

export async function getCaseCaseIdAttorneys(
  args: InferRequestType<(typeof client.case)[':caseId']['attorneys']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.case[':caseId'].attorneys.$get(args, options))
}

export async function getCaseCaseIdDocketEntries(
  args: InferRequestType<(typeof client.case)[':caseId']['docketEntries']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.case[':caseId'].docketEntries.$get(args, options))
}

export async function getCaseCaseIdDocketEntriesPrimaryDocuments(
  args: InferRequestType<
    (typeof client.case)[':caseId']['docketEntries']['primaryDocuments']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.case[':caseId'].docketEntries.primaryDocuments.$get(args, options),
  )
}

export async function getCaseCaseIdDocketEntriesSecondaryDocuments(
  args: InferRequestType<
    (typeof client.case)[':caseId']['docketEntries']['secondaryDocuments']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.case[':caseId'].docketEntries.secondaryDocuments.$get(args, options),
  )
}

export async function getCaseCaseIdDocuments(
  args: InferRequestType<(typeof client.case)[':caseId']['documents']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.case[':caseId'].documents.$get(args, options))
}

export async function getCaseCaseIdHearings(
  args: InferRequestType<(typeof client.case)[':caseId']['hearings']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.case[':caseId'].hearings.$get(args, options))
}

export async function getCaseCaseIdJudges(
  args: InferRequestType<(typeof client.case)[':caseId']['judges']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.case[':caseId'].judges.$get(args, options))
}

export async function getCaseCaseIdParties(
  args: InferRequestType<(typeof client.case)[':caseId']['parties']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.case[':caseId'].parties.$get(args, options))
}

export async function getCaseCaseIdRelatedCases(
  args: InferRequestType<(typeof client.case)[':caseId']['relatedCases']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.case[':caseId'].relatedCases.$get(args, options))
}

export async function getCaseCountAnalyticsByAreaOfLaw(
  args: InferRequestType<typeof client.caseCountAnalyticsByAreaOfLaw.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.caseCountAnalyticsByAreaOfLaw.$get(args, options))
}

export async function getCaseCountAnalyticsByCaseClass(
  args: InferRequestType<typeof client.caseCountAnalyticsByCaseClass.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.caseCountAnalyticsByCaseClass.$get(args, options))
}

export async function getCaseCountAnalyticsByCaseFiledDate(
  args: InferRequestType<typeof client.caseCountAnalyticsByCaseFiledDate.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.caseCountAnalyticsByCaseFiledDate.$get(args, options))
}

export async function getCaseCountAnalyticsByCaseType(
  args: InferRequestType<typeof client.caseCountAnalyticsByCaseType.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.caseCountAnalyticsByCaseType.$get(args, options))
}

export async function getCaseCountAnalyticsByCaseTypeGroup(
  args: InferRequestType<typeof client.caseCountAnalyticsByCaseTypeGroup.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.caseCountAnalyticsByCaseTypeGroup.$get(args, options))
}

export async function getCaseCountAnalyticsByCourt(
  args: InferRequestType<typeof client.caseCountAnalyticsByCourt.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.caseCountAnalyticsByCourt.$get(args, options))
}

export async function getCaseCountAnalyticsByCourtLocation(
  args: InferRequestType<typeof client.caseCountAnalyticsByCourtLocation.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.caseCountAnalyticsByCourtLocation.$get(args, options))
}

export async function getCaseCountAnalyticsByCourtSystem(
  args: InferRequestType<typeof client.caseCountAnalyticsByCourtSystem.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.caseCountAnalyticsByCourtSystem.$get(args, options))
}

export async function getCaseCountAnalyticsByCourtType(
  args: InferRequestType<typeof client.caseCountAnalyticsByCourtType.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.caseCountAnalyticsByCourtType.$get(args, options))
}

export async function getCaseCountAnalyticsByJurisdictionGeo(
  args: InferRequestType<typeof client.caseCountAnalyticsByJurisdictionGeo.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.caseCountAnalyticsByJurisdictionGeo.$get(args, options))
}

export async function getCaseCountAnalyticsByNormAttorney(
  args: InferRequestType<typeof client.caseCountAnalyticsByNormAttorney.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.caseCountAnalyticsByNormAttorney.$get(args, options))
}

export async function getCaseCountAnalyticsByNormJudge(
  args: InferRequestType<typeof client.caseCountAnalyticsByNormJudge.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.caseCountAnalyticsByNormJudge.$get(args, options))
}

export async function getCaseCountAnalyticsByNormLawFirm(
  args: InferRequestType<typeof client.caseCountAnalyticsByNormLawFirm.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.caseCountAnalyticsByNormLawFirm.$get(args, options))
}

export async function getCaseCountAnalyticsByNormParty(
  args: InferRequestType<typeof client.caseCountAnalyticsByNormParty.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.caseCountAnalyticsByNormParty.$get(args, options))
}

export async function getCaseCountAnalyticsByPartyRole(
  args: InferRequestType<typeof client.caseCountAnalyticsByPartyRole.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.caseCountAnalyticsByPartyRole.$get(args, options))
}

export async function getCaseCountAnalyticsByPartyRoleGroup(
  args: InferRequestType<typeof client.caseCountAnalyticsByPartyRoleGroup.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.caseCountAnalyticsByPartyRoleGroup.$get(args, options))
}

export async function getCaseDocumentCaseDocumentId(
  args: InferRequestType<(typeof client.caseDocument)[':caseDocumentId']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.caseDocument[':caseDocumentId'].$get(args, options))
}

export async function getCaseDocumentDownloadCaseDocumentId(
  args: InferRequestType<(typeof client.caseDocumentDownload)[':caseDocumentId']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.caseDocumentDownload[':caseDocumentId'].$get(args, options))
}

export async function putCaseDocumentOrder(
  args: InferRequestType<typeof client.caseDocumentOrder.$put>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.caseDocumentOrder.$put(args, options))
}

export async function getCaseDocumentOrderCallbacks(
  args: InferRequestType<typeof client.caseDocumentOrder.callbacks.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.caseDocumentOrder.callbacks.$get(args, options))
}

export async function getCaseDocumentOrderCallbacksCaseDocumentOrderCallbackId(
  args: InferRequestType<
    (typeof client.caseDocumentOrder.callbacks)[':caseDocumentOrderCallbackId']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.caseDocumentOrder.callbacks[':caseDocumentOrderCallbackId'].$get(args, options),
  )
}

export async function getCaseExportCallbacks(
  args: InferRequestType<typeof client.caseExport.callbacks.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.caseExport.callbacks.$get(args, options))
}

export async function getCaseExportCallbacksCaseExportCallbackId(
  args: InferRequestType<(typeof client.caseExport.callbacks)[':caseExportCallbackId']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.caseExport.callbacks[':caseExportCallbackId'].$get(args, options),
  )
}

export async function getCaseExportCaseId(
  args: InferRequestType<(typeof client.caseExport)[':caseId']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.caseExport[':caseId'].$get(args, options))
}

export async function getCaseSearch(
  args: InferRequestType<typeof client.caseSearch.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.caseSearch.$get(args, options))
}

export async function getCaseSearchCaseSearchId(
  args: InferRequestType<(typeof client.caseSearch)[':caseSearchId']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.caseSearch[':caseSearchId'].$get(args, options))
}

export async function putCaseTrack(
  args: InferRequestType<typeof client.caseTrack.$put>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.caseTrack.$put(args, options))
}

export async function getCaseTrackCaseId(
  args: InferRequestType<(typeof client.caseTrack)[':caseId']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.caseTrack[':caseId'].$get(args, options))
}

export async function deleteCaseTrackCaseId(
  args: InferRequestType<(typeof client.caseTrack)[':caseId']['$delete']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.caseTrack[':caseId'].$delete(args, options))
}

export async function getCaseTracks(
  args: InferRequestType<typeof client.caseTracks.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.caseTracks.$get(args, options))
}

export async function putCaseUpdate(
  args: InferRequestType<typeof client.caseUpdate.$put>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.caseUpdate.$put(args, options))
}

export async function getCaseUpdateCaseId(
  args: InferRequestType<(typeof client.caseUpdate)[':caseId']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.caseUpdate[':caseId'].$get(args, options))
}

export async function getCaseUpdates(
  args: InferRequestType<typeof client.caseUpdates.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.caseUpdates.$get(args, options))
}

export async function getCourtCoverageCourtId(
  args: InferRequestType<(typeof client.courtCoverage)[':courtId']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.courtCoverage[':courtId'].$get(args, options))
}

export async function getDailyUsageDate(
  args: InferRequestType<(typeof client.dailyUsage)[':date']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.dailyUsage[':date'].$get(args, options))
}

export async function postGenerateNewToken(
  args: InferRequestType<typeof client.generateNewToken.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.generateNewToken.$post(args, options))
}

export async function putInvalidateAllTokens(
  args: InferRequestType<typeof client.invalidateAllTokens.$put>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.invalidateAllTokens.$put(args, options))
}

export async function putInvalidateToken(
  args: InferRequestType<typeof client.invalidateToken.$put>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.invalidateToken.$put(args, options))
}

export async function getJudgeJudgeId(
  args: InferRequestType<(typeof client.judge)[':judgeId']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.judge[':judgeId'].$get(args, options))
}

export async function putListAllTokenIds(
  args: InferRequestType<typeof client.listAllTokenIds.$put>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.listAllTokenIds.$put(args, options))
}

export async function getMasterDataAreaOfLaw(
  args: InferRequestType<typeof client.masterData.areaOfLaw.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.masterData.areaOfLaw.$get(args, options))
}

export async function getMasterDataAreaOfLawAreaOfLawId(
  args: InferRequestType<(typeof client.masterData.areaOfLaw)[':areaOfLawId']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.masterData.areaOfLaw[':areaOfLawId'].$get(args, options))
}

export async function getMasterDataAttorneyRepresentationType(
  args: InferRequestType<typeof client.masterData.attorneyRepresentationType.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.masterData.attorneyRepresentationType.$get(args, options))
}

export async function getMasterDataAttorneyRepresentationTypeAttorneyRepresentationTypeId(
  args: InferRequestType<
    (typeof client.masterData.attorneyRepresentationType)[':attorneyRepresentationTypeId']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.masterData.attorneyRepresentationType[':attorneyRepresentationTypeId'].$get(
      args,
      options,
    ),
  )
}

export async function getMasterDataAttorneyType(
  args: InferRequestType<typeof client.masterData.attorneyType.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.masterData.attorneyType.$get(args, options))
}

export async function getMasterDataAttorneyTypeAttorneyTypeId(
  args: InferRequestType<(typeof client.masterData.attorneyType)[':attorneyTypeId']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.masterData.attorneyType[':attorneyTypeId'].$get(args, options))
}

export async function getMasterDataCaseClass(
  args: InferRequestType<typeof client.masterData.caseClass.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.masterData.caseClass.$get(args, options))
}

export async function getMasterDataCaseClassCaseClassId(
  args: InferRequestType<(typeof client.masterData.caseClass)[':caseClassId']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.masterData.caseClass[':caseClassId'].$get(args, options))
}

export async function getMasterDataCaseRelationshipType(
  args: InferRequestType<typeof client.masterData.caseRelationshipType.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.masterData.caseRelationshipType.$get(args, options))
}

export async function getMasterDataCaseRelationshipTypeCaseRelationshipTypeId(
  args: InferRequestType<
    (typeof client.masterData.caseRelationshipType)[':caseRelationshipTypeId']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.masterData.caseRelationshipType[':caseRelationshipTypeId'].$get(args, options),
  )
}

export async function getMasterDataCaseStatus(
  args: InferRequestType<typeof client.masterData.caseStatus.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.masterData.caseStatus.$get(args, options))
}

export async function getMasterDataCaseStatusCaseStatusId(
  args: InferRequestType<(typeof client.masterData.caseStatus)[':caseStatusId']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.masterData.caseStatus[':caseStatusId'].$get(args, options))
}

export async function getMasterDataCaseStatusGroup(
  args: InferRequestType<typeof client.masterData.caseStatusGroup.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.masterData.caseStatusGroup.$get(args, options))
}

export async function getMasterDataCaseStatusGroupCaseStatusGroupId(
  args: InferRequestType<(typeof client.masterData.caseStatusGroup)[':caseStatusGroupId']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.masterData.caseStatusGroup[':caseStatusGroupId'].$get(args, options),
  )
}

export async function getMasterDataCaseType(
  args: InferRequestType<typeof client.masterData.caseType.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.masterData.caseType.$get(args, options))
}

export async function getMasterDataCaseTypeCaseTypeId(
  args: InferRequestType<(typeof client.masterData.caseType)[':caseTypeId']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.masterData.caseType[':caseTypeId'].$get(args, options))
}

export async function getMasterDataCaseTypeGroup(
  args: InferRequestType<typeof client.masterData.caseTypeGroup.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.masterData.caseTypeGroup.$get(args, options))
}

export async function getMasterDataCaseTypeGroupCaseTypeGroupId(
  args: InferRequestType<(typeof client.masterData.caseTypeGroup)[':caseTypeGroupId']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.masterData.caseTypeGroup[':caseTypeGroupId'].$get(args, options),
  )
}

export async function getMasterDataCauseOfAction(
  args: InferRequestType<typeof client.masterData.causeOfAction.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.masterData.causeOfAction.$get(args, options))
}

export async function getMasterDataCauseOfActionCauseOfActionId(
  args: InferRequestType<(typeof client.masterData.causeOfAction)[':causeOfActionId']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.masterData.causeOfAction[':causeOfActionId'].$get(args, options),
  )
}

export async function getMasterDataCauseOfActionAdditionalData(
  args: InferRequestType<typeof client.masterData.causeOfActionAdditionalData.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.masterData.causeOfActionAdditionalData.$get(args, options))
}

export async function getMasterDataCauseOfActionAdditionalDataCauseOfActionAdditionalDataId(
  args: InferRequestType<
    (typeof client.masterData.causeOfActionAdditionalData)[':causeOfActionAdditionalDataId']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.masterData.causeOfActionAdditionalData[':causeOfActionAdditionalDataId'].$get(
      args,
      options,
    ),
  )
}

export async function getMasterDataCauseOfActionGroup(
  args: InferRequestType<typeof client.masterData.causeOfActionGroup.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.masterData.causeOfActionGroup.$get(args, options))
}

export async function getMasterDataCauseOfActionGroupCauseOfActionGroupId(
  args: InferRequestType<
    (typeof client.masterData.causeOfActionGroup)[':causeOfActionGroupId']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.masterData.causeOfActionGroup[':causeOfActionGroupId'].$get(args, options),
  )
}

export async function getMasterDataCharge(
  args: InferRequestType<typeof client.masterData.charge.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.masterData.charge.$get(args, options))
}

export async function getMasterDataChargeChargeId(
  args: InferRequestType<(typeof client.masterData.charge)[':chargeId']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.masterData.charge[':chargeId'].$get(args, options))
}

export async function getMasterDataChargeAdditionalData(
  args: InferRequestType<typeof client.masterData.chargeAdditionalData.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.masterData.chargeAdditionalData.$get(args, options))
}

export async function getMasterDataChargeAdditionalDataChargeAdditionalDataId(
  args: InferRequestType<
    (typeof client.masterData.chargeAdditionalData)[':chargeAdditionalDataId']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.masterData.chargeAdditionalData[':chargeAdditionalDataId'].$get(args, options),
  )
}

export async function getMasterDataChargeDegree(
  args: InferRequestType<typeof client.masterData.chargeDegree.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.masterData.chargeDegree.$get(args, options))
}

export async function getMasterDataChargeDegreeChargeDegreeId(
  args: InferRequestType<(typeof client.masterData.chargeDegree)[':chargeDegreeId']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.masterData.chargeDegree[':chargeDegreeId'].$get(args, options))
}

export async function getMasterDataChargeGroup(
  args: InferRequestType<typeof client.masterData.chargeGroup.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.masterData.chargeGroup.$get(args, options))
}

export async function getMasterDataChargeGroupChargeGroupId(
  args: InferRequestType<(typeof client.masterData.chargeGroup)[':chargeGroupId']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.masterData.chargeGroup[':chargeGroupId'].$get(args, options))
}

export async function getMasterDataChargeSeverity(
  args: InferRequestType<typeof client.masterData.chargeSeverity.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.masterData.chargeSeverity.$get(args, options))
}

export async function getMasterDataChargeSeverityChargeSeverityId(
  args: InferRequestType<(typeof client.masterData.chargeSeverity)[':chargeSeverityId']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.masterData.chargeSeverity[':chargeSeverityId'].$get(args, options),
  )
}

export async function getMasterDataCourt(
  args: InferRequestType<typeof client.masterData.court.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.masterData.court.$get(args, options))
}

export async function getMasterDataCourtCourtId(
  args: InferRequestType<(typeof client.masterData.court)[':courtId']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.masterData.court[':courtId'].$get(args, options))
}

export async function getMasterDataCourtCourtIdAppealCourts(
  args: InferRequestType<(typeof client.masterData.court)[':courtId']['appealCourts']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.masterData.court[':courtId'].appealCourts.$get(args, options))
}

export async function getMasterDataCourtCourtIdCourtLocations(
  args: InferRequestType<(typeof client.masterData.court)[':courtId']['courtLocations']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.masterData.court[':courtId'].courtLocations.$get(args, options))
}

export async function getMasterDataCourtCourtIdJurisdictionGeo(
  args: InferRequestType<(typeof client.masterData.court)[':courtId']['jurisdictionGeo']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.masterData.court[':courtId'].jurisdictionGeo.$get(args, options),
  )
}

export async function getMasterDataCourtLocation(
  args: InferRequestType<typeof client.masterData.courtLocation.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.masterData.courtLocation.$get(args, options))
}

export async function getMasterDataCourtLocationCourtLocationId(
  args: InferRequestType<(typeof client.masterData.courtLocation)[':courtLocationId']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.masterData.courtLocation[':courtLocationId'].$get(args, options),
  )
}

export async function getMasterDataCourtLocationCourtLocationIdCourts(
  args: InferRequestType<
    (typeof client.masterData.courtLocation)[':courtLocationId']['courts']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.masterData.courtLocation[':courtLocationId'].courts.$get(args, options),
  )
}

export async function getMasterDataCourtServiceStatus(
  args: InferRequestType<typeof client.masterData.courtServiceStatus.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.masterData.courtServiceStatus.$get(args, options))
}

export async function getMasterDataCourtServiceStatusCourtServiceStatusId(
  args: InferRequestType<
    (typeof client.masterData.courtServiceStatus)[':courtServiceStatusId']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.masterData.courtServiceStatus[':courtServiceStatusId'].$get(args, options),
  )
}

export async function getMasterDataCourtSystem(
  args: InferRequestType<typeof client.masterData.courtSystem.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.masterData.courtSystem.$get(args, options))
}

export async function getMasterDataCourtSystemCourtSystemId(
  args: InferRequestType<(typeof client.masterData.courtSystem)[':courtSystemId']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.masterData.courtSystem[':courtSystemId'].$get(args, options))
}

export async function getMasterDataCourtType(
  args: InferRequestType<typeof client.masterData.courtType.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.masterData.courtType.$get(args, options))
}

export async function getMasterDataCourtTypeCourtTypeId(
  args: InferRequestType<(typeof client.masterData.courtType)[':courtTypeId']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.masterData.courtType[':courtTypeId'].$get(args, options))
}

export async function getMasterDataJudgeType(
  args: InferRequestType<typeof client.masterData.judgeType.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.masterData.judgeType.$get(args, options))
}

export async function getMasterDataJudgeTypeJudgeTypeId(
  args: InferRequestType<(typeof client.masterData.judgeType)[':judgeTypeId']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.masterData.judgeType[':judgeTypeId'].$get(args, options))
}

export async function getMasterDataJurisdictionGeo(
  args: InferRequestType<typeof client.masterData.jurisdictionGeo.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.masterData.jurisdictionGeo.$get(args, options))
}

export async function getMasterDataJurisdictionGeoJurisdictionGeoId(
  args: InferRequestType<(typeof client.masterData.jurisdictionGeo)[':jurisdictionGeoId']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.masterData.jurisdictionGeo[':jurisdictionGeoId'].$get(args, options),
  )
}

export async function getMasterDataJurisdictionGeoJurisdictionGeoIdCourts(
  args: InferRequestType<
    (typeof client.masterData.jurisdictionGeo)[':jurisdictionGeoId']['courts']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.masterData.jurisdictionGeo[':jurisdictionGeoId'].courts.$get(args, options),
  )
}

export async function getMasterDataPartyRole(
  args: InferRequestType<typeof client.masterData.partyRole.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.masterData.partyRole.$get(args, options))
}

export async function getMasterDataPartyRolePartyRoleId(
  args: InferRequestType<(typeof client.masterData.partyRole)[':partyRoleId']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.masterData.partyRole[':partyRoleId'].$get(args, options))
}

export async function getMasterDataPartyRoleGroup(
  args: InferRequestType<typeof client.masterData.partyRoleGroup.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.masterData.partyRoleGroup.$get(args, options))
}

export async function getMasterDataPartyRoleGroupPartyRoleGroupId(
  args: InferRequestType<(typeof client.masterData.partyRoleGroup)[':partyRoleGroupId']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.masterData.partyRoleGroup[':partyRoleGroupId'].$get(args, options),
  )
}

export async function getNormAttorneyNormAttorneyId(
  args: InferRequestType<(typeof client.normAttorney)[':normAttorneyId']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.normAttorney[':normAttorneyId'].$get(args, options))
}

export async function getNormAttorneyNormAttorneyIdAssociatedNormJudges(
  args: InferRequestType<
    (typeof client.normAttorney)[':normAttorneyId']['associatedNormJudges']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.normAttorney[':normAttorneyId'].associatedNormJudges.$get(args, options),
  )
}

export async function getNormAttorneyNormAttorneyIdAssociatedNormLawFirms(
  args: InferRequestType<
    (typeof client.normAttorney)[':normAttorneyId']['associatedNormLawFirms']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.normAttorney[':normAttorneyId'].associatedNormLawFirms.$get(args, options),
  )
}

export async function getNormAttorneyNormAttorneyIdAssociatedNormParties(
  args: InferRequestType<
    (typeof client.normAttorney)[':normAttorneyId']['associatedNormParties']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.normAttorney[':normAttorneyId'].associatedNormParties.$get(args, options),
  )
}

export async function getNormAttorneyNormAttorneyIdCaseCountAnalyticsByOpposingNormAttorney(
  args: InferRequestType<
    (typeof client.normAttorney)[':normAttorneyId']['caseCountAnalyticsByOpposingNormAttorney']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.normAttorney[':normAttorneyId'].caseCountAnalyticsByOpposingNormAttorney.$get(
      args,
      options,
    ),
  )
}

export async function getNormAttorneySearch(
  args: InferRequestType<typeof client.normAttorneySearch.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.normAttorneySearch.$get(args, options))
}

export async function getNormAttorneySearchNormAttorneySearchId(
  args: InferRequestType<(typeof client.normAttorneySearch)[':normAttorneySearchId']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.normAttorneySearch[':normAttorneySearchId'].$get(args, options))
}

export async function getNormJudgeNormJudgeId(
  args: InferRequestType<(typeof client.normJudge)[':normJudgeId']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.normJudge[':normJudgeId'].$get(args, options))
}

export async function getNormJudgeNormJudgeIdAssociatedNormAttorneys(
  args: InferRequestType<
    (typeof client.normJudge)[':normJudgeId']['associatedNormAttorneys']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.normJudge[':normJudgeId'].associatedNormAttorneys.$get(args, options),
  )
}

export async function getNormJudgeNormJudgeIdAssociatedNormLawFirms(
  args: InferRequestType<
    (typeof client.normJudge)[':normJudgeId']['associatedNormLawFirms']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.normJudge[':normJudgeId'].associatedNormLawFirms.$get(args, options),
  )
}

export async function getNormJudgeNormJudgeIdAssociatedNormParties(
  args: InferRequestType<
    (typeof client.normJudge)[':normJudgeId']['associatedNormParties']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.normJudge[':normJudgeId'].associatedNormParties.$get(args, options),
  )
}

export async function getNormJudgeSearch(
  args: InferRequestType<typeof client.normJudgeSearch.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.normJudgeSearch.$get(args, options))
}

export async function getNormJudgeSearchNormJudgeSearchId(
  args: InferRequestType<(typeof client.normJudgeSearch)[':normJudgeSearchId']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.normJudgeSearch[':normJudgeSearchId'].$get(args, options))
}

export async function getNormLawFirmNormLawFirmId(
  args: InferRequestType<(typeof client.normLawFirm)[':normLawFirmId']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.normLawFirm[':normLawFirmId'].$get(args, options))
}

export async function getNormLawFirmNormLawFirmIdAssociatedNormAttorneys(
  args: InferRequestType<
    (typeof client.normLawFirm)[':normLawFirmId']['associatedNormAttorneys']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.normLawFirm[':normLawFirmId'].associatedNormAttorneys.$get(args, options),
  )
}

export async function getNormLawFirmNormLawFirmIdAssociatedNormJudges(
  args: InferRequestType<
    (typeof client.normLawFirm)[':normLawFirmId']['associatedNormJudges']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.normLawFirm[':normLawFirmId'].associatedNormJudges.$get(args, options),
  )
}

export async function getNormLawFirmNormLawFirmIdAssociatedNormParties(
  args: InferRequestType<
    (typeof client.normLawFirm)[':normLawFirmId']['associatedNormParties']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.normLawFirm[':normLawFirmId'].associatedNormParties.$get(args, options),
  )
}

export async function getNormLawFirmNormLawFirmIdCaseCountAnalyticsByOpposingNormLawFirm(
  args: InferRequestType<
    (typeof client.normLawFirm)[':normLawFirmId']['caseCountAnalyticsByOpposingNormLawFirm']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.normLawFirm[':normLawFirmId'].caseCountAnalyticsByOpposingNormLawFirm.$get(
      args,
      options,
    ),
  )
}

export async function getNormLawFirmSearch(
  args: InferRequestType<typeof client.normLawFirmSearch.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.normLawFirmSearch.$get(args, options))
}

export async function getNormLawFirmSearchNormLawFirmSearchId(
  args: InferRequestType<(typeof client.normLawFirmSearch)[':normLawFirmSearchId']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.normLawFirmSearch[':normLawFirmSearchId'].$get(args, options))
}

export async function getNormPartyNormPartyId(
  args: InferRequestType<(typeof client.normParty)[':normPartyId']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.normParty[':normPartyId'].$get(args, options))
}

export async function getNormPartyNormPartyIdAssociatedNormAttorneys(
  args: InferRequestType<
    (typeof client.normParty)[':normPartyId']['associatedNormAttorneys']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.normParty[':normPartyId'].associatedNormAttorneys.$get(args, options),
  )
}

export async function getNormPartyNormPartyIdAssociatedNormJudges(
  args: InferRequestType<(typeof client.normParty)[':normPartyId']['associatedNormJudges']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.normParty[':normPartyId'].associatedNormJudges.$get(args, options),
  )
}

export async function getNormPartyNormPartyIdAssociatedNormLawFirms(
  args: InferRequestType<
    (typeof client.normParty)[':normPartyId']['associatedNormLawFirms']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.normParty[':normPartyId'].associatedNormLawFirms.$get(args, options),
  )
}

export async function getNormPartyNormPartyIdCaseCountAnalyticsByOpposingNormParty(
  args: InferRequestType<
    (typeof client.normParty)[':normPartyId']['caseCountAnalyticsByOpposingNormParty']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.normParty[':normPartyId'].caseCountAnalyticsByOpposingNormParty.$get(args, options),
  )
}

export async function getNormPartySearch(
  args: InferRequestType<typeof client.normPartySearch.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.normPartySearch.$get(args, options))
}

export async function getNormPartySearchNormPartySearchId(
  args: InferRequestType<(typeof client.normPartySearch)[':normPartySearchId']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.normPartySearch[':normPartySearchId'].$get(args, options))
}

export async function getPacerImportCaseByCourtUsingCaseNumber(
  args: InferRequestType<typeof client.pacer.importCaseByCourtUsingCaseNumber.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.pacer.importCaseByCourtUsingCaseNumber.$get(args, options))
}

export async function getPacerCaseLocatorCaseSearchAllCourts(
  args: InferRequestType<typeof client.pacerCaseLocator.caseSearch.allCourts.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.pacerCaseLocator.caseSearch.allCourts.$get(args, options))
}

export async function getPacerCaseLocatorCaseSearchAppealCourts(
  args: InferRequestType<typeof client.pacerCaseLocator.caseSearch.appealCourts.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.pacerCaseLocator.caseSearch.appealCourts.$get(args, options))
}

export async function getPacerCaseLocatorCaseSearchBankruptcyCourts(
  args: InferRequestType<typeof client.pacerCaseLocator.caseSearch.bankruptcyCourts.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.pacerCaseLocator.caseSearch.bankruptcyCourts.$get(args, options),
  )
}

export async function getPacerCaseLocatorCaseSearchCivilCourts(
  args: InferRequestType<typeof client.pacerCaseLocator.caseSearch.civilCourts.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.pacerCaseLocator.caseSearch.civilCourts.$get(args, options))
}

export async function getPacerCaseLocatorCaseSearchCriminalCourts(
  args: InferRequestType<typeof client.pacerCaseLocator.caseSearch.criminalCourts.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.pacerCaseLocator.caseSearch.criminalCourts.$get(args, options))
}

export async function getPacerCaseLocatorCaseSearchMultiDistrictCourts(
  args: InferRequestType<typeof client.pacerCaseLocator.caseSearch.multiDistrictCourts.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.pacerCaseLocator.caseSearch.multiDistrictCourts.$get(args, options),
  )
}

export async function getPacerCaseLocatorPartySearchAllCourts(
  args: InferRequestType<typeof client.pacerCaseLocator.partySearch.allCourts.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.pacerCaseLocator.partySearch.allCourts.$get(args, options))
}

export async function getPacerCaseLocatorPartySearchAppealCourts(
  args: InferRequestType<typeof client.pacerCaseLocator.partySearch.appealCourts.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.pacerCaseLocator.partySearch.appealCourts.$get(args, options))
}

export async function getPacerCaseLocatorPartySearchBankruptcyCourts(
  args: InferRequestType<typeof client.pacerCaseLocator.partySearch.bankruptcyCourts.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.pacerCaseLocator.partySearch.bankruptcyCourts.$get(args, options),
  )
}

export async function getPacerCaseLocatorPartySearchCivilCourts(
  args: InferRequestType<typeof client.pacerCaseLocator.partySearch.civilCourts.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.pacerCaseLocator.partySearch.civilCourts.$get(args, options))
}

export async function getPacerCaseLocatorPartySearchCriminalCourts(
  args: InferRequestType<typeof client.pacerCaseLocator.partySearch.criminalCourts.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.pacerCaseLocator.partySearch.criminalCourts.$get(args, options))
}

export async function getPacerCaseLocatorPartySearchMultiDistrictCourts(
  args: InferRequestType<typeof client.pacerCaseLocator.partySearch.multiDistrictCourts.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.pacerCaseLocator.partySearch.multiDistrictCourts.$get(args, options),
  )
}

export async function getPacerCredential(
  args: InferRequestType<typeof client.pacerCredential.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.pacerCredential.$get(args, options))
}

export async function putPacerCredential(
  args: InferRequestType<typeof client.pacerCredential.$put>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.pacerCredential.$put(args, options))
}

export async function getPacerCredentialPacerUserId(
  args: InferRequestType<(typeof client.pacerCredential)[':pacerUserId']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.pacerCredential[':pacerUserId'].$get(args, options))
}

export async function deletePacerCredentialPacerUserId(
  args: InferRequestType<(typeof client.pacerCredential)[':pacerUserId']['$delete']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.pacerCredential[':pacerUserId'].$delete(args, options))
}

export async function getPartyPartyId(
  args: InferRequestType<(typeof client.party)[':partyId']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.party[':partyId'].$get(args, options))
}

export async function getPartyPartyIdAssociatedAttorneys(
  args: InferRequestType<(typeof client.party)[':partyId']['associatedAttorneys']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.party[':partyId'].associatedAttorneys.$get(args, options))
}
