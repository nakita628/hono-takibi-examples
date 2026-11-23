import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteV1betaNameRoute,
  getV1betaNameRoute,
  getV1betaParentInstancesRoute,
  postV1betaNameDisableRoute,
  postV1betaNameReenableRoute,
  postV1betaNameUndeleteRoute,
  postV1betaParentInstancesRoute,
} from '../routes'

const app = new OpenAPIHono()

export const v1betaHandler = app
  .openapi(deleteV1betaNameRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV1betaNameRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV1betaNameDisableRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV1betaNameReenableRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV1betaNameUndeleteRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV1betaParentInstancesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV1betaParentInstancesRoute, (c) => {
    throw new Error('Not implemented')
  })
