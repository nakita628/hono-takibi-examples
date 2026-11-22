import { OpenAPIHono } from '@hono/zod-openapi'
import {
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
  getNormAttorneyNormAttorneyIdCaseCountAnalyticsByOpposingNormAttorneyRoute,
  getNormLawFirmNormLawFirmIdCaseCountAnalyticsByOpposingNormLawFirmRoute,
  getNormPartyNormPartyIdCaseCountAnalyticsByOpposingNormPartyRoute,
} from '../routes'

const app = new OpenAPIHono()

export const caseAnalyticsAPIHandler = app
  .openapi(getCaseCountAnalyticsByAreaOfLawRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getCaseCountAnalyticsByCaseClassRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getCaseCountAnalyticsByCaseFiledDateRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getCaseCountAnalyticsByCaseTypeRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getCaseCountAnalyticsByCaseTypeGroupRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getCaseCountAnalyticsByCourtRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getCaseCountAnalyticsByCourtLocationRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getCaseCountAnalyticsByCourtSystemRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getCaseCountAnalyticsByCourtTypeRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getCaseCountAnalyticsByJurisdictionGeoRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getCaseCountAnalyticsByNormAttorneyRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getCaseCountAnalyticsByNormJudgeRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getCaseCountAnalyticsByNormLawFirmRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getCaseCountAnalyticsByNormPartyRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getCaseCountAnalyticsByPartyRoleRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getCaseCountAnalyticsByPartyRoleGroupRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getNormAttorneyNormAttorneyIdCaseCountAnalyticsByOpposingNormAttorneyRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getNormLawFirmNormLawFirmIdCaseCountAnalyticsByOpposingNormLawFirmRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getNormPartyNormPartyIdCaseCountAnalyticsByOpposingNormPartyRoute, (c) => {
    throw new Error('Not implemented')
  })
