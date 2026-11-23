import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteV1betaNameRoute,
  getV1betaNameRoute,
  getV1betaParentCrawledUrlsRoute,
  getV1betaParentFindingsRoute,
  getV1betaParentFindingTypeStatsRoute,
  getV1betaParentScanConfigsRoute,
  getV1betaParentScanRunsRoute,
  patchV1betaNameRoute,
  postV1betaNameStartRoute,
  postV1betaNameStopRoute,
  postV1betaParentScanConfigsRoute,
} from '../routes'

const app = new OpenAPIHono()

export const v1betaHandler = app
  .openapi(deleteV1betaNameRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV1betaNameRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchV1betaNameRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV1betaNameStartRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV1betaNameStopRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV1betaParentCrawledUrlsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV1betaParentFindingTypeStatsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV1betaParentFindingsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV1betaParentScanConfigsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV1betaParentScanConfigsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV1betaParentScanRunsRoute, (c) => {
    throw new Error('Not implemented')
  })
