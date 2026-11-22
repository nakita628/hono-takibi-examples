import { OpenAPIHono } from '@hono/zod-openapi'
import {
  getRadarEmailSecuritySummaryArcRoute,
  getRadarEmailSecuritySummaryDimensionRoute,
  getRadarEmailSecuritySummaryDkimRoute,
  getRadarEmailSecuritySummaryDmarcRoute,
  getRadarEmailSecuritySummaryMaliciousRoute,
  getRadarEmailSecuritySummarySpamRoute,
  getRadarEmailSecuritySummarySpfRoute,
  getRadarEmailSecuritySummarySpoofRoute,
  getRadarEmailSecuritySummaryThreatCategoryRoute,
  getRadarEmailSecuritySummaryTlsVersionRoute,
  getRadarEmailSecurityTimeseriesGroupsArcRoute,
  getRadarEmailSecurityTimeseriesGroupsDimensionRoute,
  getRadarEmailSecurityTimeseriesGroupsDkimRoute,
  getRadarEmailSecurityTimeseriesGroupsDmarcRoute,
  getRadarEmailSecurityTimeseriesGroupsMaliciousRoute,
  getRadarEmailSecurityTimeseriesGroupsSpamRoute,
  getRadarEmailSecurityTimeseriesGroupsSpfRoute,
  getRadarEmailSecurityTimeseriesGroupsSpoofRoute,
  getRadarEmailSecurityTimeseriesGroupsThreatCategoryRoute,
  getRadarEmailSecurityTimeseriesGroupsTlsVersionRoute,
  getRadarEmailSecurityTopTldsMaliciousMaliciousRoute,
  getRadarEmailSecurityTopTldsRoute,
  getRadarEmailSecurityTopTldsSpamSpamRoute,
  getRadarEmailSecurityTopTldsSpoofSpoofRoute,
} from '../routes'

const app = new OpenAPIHono()

export const radarEmailSecurityHandler = app
  .openapi(getRadarEmailSecuritySummaryArcRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getRadarEmailSecuritySummaryDkimRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getRadarEmailSecuritySummaryDmarcRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getRadarEmailSecuritySummaryMaliciousRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getRadarEmailSecuritySummarySpamRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getRadarEmailSecuritySummarySpfRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getRadarEmailSecuritySummarySpoofRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getRadarEmailSecuritySummaryThreatCategoryRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getRadarEmailSecuritySummaryTlsVersionRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getRadarEmailSecuritySummaryDimensionRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getRadarEmailSecurityTimeseriesGroupsArcRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getRadarEmailSecurityTimeseriesGroupsDkimRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getRadarEmailSecurityTimeseriesGroupsDmarcRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getRadarEmailSecurityTimeseriesGroupsMaliciousRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getRadarEmailSecurityTimeseriesGroupsSpamRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getRadarEmailSecurityTimeseriesGroupsSpfRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getRadarEmailSecurityTimeseriesGroupsSpoofRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getRadarEmailSecurityTimeseriesGroupsThreatCategoryRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getRadarEmailSecurityTimeseriesGroupsTlsVersionRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getRadarEmailSecurityTimeseriesGroupsDimensionRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getRadarEmailSecurityTopTldsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getRadarEmailSecurityTopTldsMaliciousMaliciousRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getRadarEmailSecurityTopTldsSpamSpamRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getRadarEmailSecurityTopTldsSpoofSpoofRoute, (c) => {
    throw new Error('Not implemented')
  })
