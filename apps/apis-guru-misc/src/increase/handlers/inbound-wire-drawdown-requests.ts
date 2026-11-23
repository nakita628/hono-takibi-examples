import { OpenAPIHono } from '@hono/zod-openapi'
import {
  getInboundWireDrawdownRequestsInboundWireDrawdownRequestIdRoute,
  getInboundWireDrawdownRequestsRoute,
} from '../routes'

const app = new OpenAPIHono()

export const inboundWireDrawdownRequestsHandler = app
  .openapi(getInboundWireDrawdownRequestsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getInboundWireDrawdownRequestsInboundWireDrawdownRequestIdRoute, (c) => {
    throw new Error('Not implemented')
  })
