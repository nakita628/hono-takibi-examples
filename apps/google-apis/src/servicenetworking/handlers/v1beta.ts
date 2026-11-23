import { OpenAPIHono } from '@hono/zod-openapi'
import {
  getV1betaNameRoute,
  getV1betaParentConnectionsRoute,
  patchV1betaNameConnectionsRoute,
  postV1betaParentAddSubnetworkRoute,
  postV1betaParentConnectionsRoute,
  postV1betaParentSearchRangeRoute,
} from '../routes'

const app = new OpenAPIHono()

export const v1betaHandler = app
  .openapi(getV1betaNameRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchV1betaNameConnectionsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV1betaParentConnectionsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV1betaParentConnectionsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV1betaParentAddSubnetworkRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV1betaParentSearchRangeRoute, (c) => {
    throw new Error('Not implemented')
  })
