import { OpenAPIHono } from '@hono/zod-openapi'
import {
  getWireDrawdownRequestsRoute,
  getWireDrawdownRequestsWireDrawdownRequestIdRoute,
  postWireDrawdownRequestsRoute,
} from '../routes'

const app = new OpenAPIHono()

export const wireDrawdownRequestsHandler = app
  .openapi(getWireDrawdownRequestsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postWireDrawdownRequestsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getWireDrawdownRequestsWireDrawdownRequestIdRoute, (c) => {
    throw new Error('Not implemented')
  })
