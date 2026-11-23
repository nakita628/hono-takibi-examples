import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteV1betaNameRoute,
  getV1betaNameOperationsRoute,
  getV1betaNameRoute,
  getV1betaParentDocumentsRoute,
  getV1betaParentUserEventsCollectRoute,
  patchV1betaNameRoute,
  postV1betaParentDocumentsImportRoute,
  postV1betaParentDocumentsRoute,
  postV1betaParentUserEventsImportRoute,
  postV1betaParentUserEventsWriteRoute,
  postV1betaServingConfigRecommendRoute,
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
  .openapi(getV1betaNameOperationsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV1betaParentDocumentsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV1betaParentDocumentsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV1betaParentDocumentsImportRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV1betaParentUserEventsCollectRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV1betaParentUserEventsImportRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV1betaParentUserEventsWriteRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV1betaServingConfigRecommendRoute, (c) => {
    throw new Error('Not implemented')
  })
