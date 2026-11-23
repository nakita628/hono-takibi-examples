import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteV1betaNameRoute,
  getV1betaNameLocationsRoute,
  getV1betaNameOperationsRoute,
  getV1betaNameRoute,
  getV1betaParentWorkflowsRoute,
  patchV1betaNameRoute,
  postV1betaParentWorkflowsRoute,
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
  .openapi(getV1betaNameLocationsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV1betaNameOperationsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV1betaParentWorkflowsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV1betaParentWorkflowsRoute, (c) => {
    throw new Error('Not implemented')
  })
