import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteFlowsIdRoute,
  deleteFlowsRoute,
  getFlowsIdRoute,
  getFlowsRoute,
  patchFlowsIdRoute,
  patchFlowsRoute,
  postFlowsRoute,
} from '../routes'

const app = new OpenAPIHono()

export const flowsHandler = app
  .openapi(getFlowsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postFlowsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchFlowsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteFlowsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getFlowsIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchFlowsIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteFlowsIdRoute, (c) => {
    throw new Error('Not implemented')
  })
