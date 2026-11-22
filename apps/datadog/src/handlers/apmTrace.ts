import { OpenAPIHono } from '@hono/zod-openapi'
import { getApiV2PrunedTraceTraceIdRoute, getApiV2TraceTraceIdRoute } from '../routes'

const app = new OpenAPIHono()

export const apmTraceHandler = app
  .openapi(getApiV2PrunedTraceTraceIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV2TraceTraceIdRoute, (c) => {
    throw new Error('Not implemented')
  })
