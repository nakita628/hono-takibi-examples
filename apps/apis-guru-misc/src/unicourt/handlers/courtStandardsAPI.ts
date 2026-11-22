import { OpenAPIHono } from '@hono/zod-openapi'
import {
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
} from '../routes'

const app = new OpenAPIHono()

export const courtStandardsAPIHandler = app
  .openapi(getMasterDataAreaOfLawRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getMasterDataAreaOfLawAreaOfLawIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getMasterDataAttorneyRepresentationTypeRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getMasterDataAttorneyRepresentationTypeAttorneyRepresentationTypeIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getMasterDataAttorneyTypeRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getMasterDataAttorneyTypeAttorneyTypeIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getMasterDataCaseClassRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getMasterDataCaseClassCaseClassIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getMasterDataCaseRelationshipTypeRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getMasterDataCaseRelationshipTypeCaseRelationshipTypeIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getMasterDataCaseStatusRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getMasterDataCaseStatusCaseStatusIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getMasterDataCaseStatusGroupRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getMasterDataCaseStatusGroupCaseStatusGroupIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getMasterDataCaseTypeRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getMasterDataCaseTypeCaseTypeIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getMasterDataCaseTypeGroupRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getMasterDataCaseTypeGroupCaseTypeGroupIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getMasterDataCauseOfActionRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getMasterDataCauseOfActionCauseOfActionIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getMasterDataCauseOfActionAdditionalDataRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getMasterDataCauseOfActionAdditionalDataCauseOfActionAdditionalDataIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getMasterDataCauseOfActionGroupRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getMasterDataCauseOfActionGroupCauseOfActionGroupIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getMasterDataChargeRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getMasterDataChargeChargeIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getMasterDataChargeAdditionalDataRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getMasterDataChargeAdditionalDataChargeAdditionalDataIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getMasterDataChargeDegreeRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getMasterDataChargeDegreeChargeDegreeIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getMasterDataChargeGroupRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getMasterDataChargeGroupChargeGroupIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getMasterDataChargeSeverityRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getMasterDataChargeSeverityChargeSeverityIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getMasterDataCourtRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getMasterDataCourtCourtIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getMasterDataCourtCourtIdAppealCourtsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getMasterDataCourtCourtIdCourtLocationsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getMasterDataCourtCourtIdJurisdictionGeoRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getMasterDataCourtLocationRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getMasterDataCourtLocationCourtLocationIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getMasterDataCourtLocationCourtLocationIdCourtsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getMasterDataCourtServiceStatusRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getMasterDataCourtServiceStatusCourtServiceStatusIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getMasterDataCourtSystemRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getMasterDataCourtSystemCourtSystemIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getMasterDataCourtTypeRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getMasterDataCourtTypeCourtTypeIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getMasterDataJudgeTypeRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getMasterDataJudgeTypeJudgeTypeIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getMasterDataJurisdictionGeoRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getMasterDataJurisdictionGeoJurisdictionGeoIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getMasterDataJurisdictionGeoJurisdictionGeoIdCourtsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getMasterDataPartyRoleRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getMasterDataPartyRolePartyRoleIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getMasterDataPartyRoleGroupRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getMasterDataPartyRoleGroupPartyRoleGroupIdRoute, (c) => {
    throw new Error('Not implemented')
  })
