import { OpenAPIHono } from '@hono/zod-openapi'
import {
  postBeaconAccountRiskV1EvaluateRoute,
  postBeaconDuplicateGetRoute,
  postBeaconReportCreateRoute,
  postBeaconReportGetRoute,
  postBeaconReportListRoute,
  postBeaconReportSyndicationGetRoute,
  postBeaconReportSyndicationListRoute,
  postBeaconUserAccountInsightsGetRoute,
  postBeaconUserCreateRoute,
  postBeaconUserGetRoute,
  postBeaconUserHistoryListRoute,
  postBeaconUserReviewRoute,
  postBeaconUserUpdateRoute,
} from '../routes'

const app = new OpenAPIHono()

export const beaconHandler = app
  .openapi(postBeaconAccountRiskV1EvaluateRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postBeaconUserCreateRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postBeaconUserGetRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postBeaconUserReviewRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postBeaconReportCreateRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postBeaconReportListRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postBeaconReportSyndicationListRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postBeaconReportGetRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postBeaconReportSyndicationGetRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postBeaconUserUpdateRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postBeaconDuplicateGetRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postBeaconUserHistoryListRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postBeaconUserAccountInsightsGetRoute, (c) => {
    throw new Error('Not implemented')
  })
