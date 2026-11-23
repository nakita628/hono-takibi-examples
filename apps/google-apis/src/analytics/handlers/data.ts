import { OpenAPIHono } from '@hono/zod-openapi'
import { getDataGaRoute, getDataMcfRoute, getDataRealtimeRoute } from '../routes'

const app = new OpenAPIHono()

export const dataHandler = app
  .openapi(getDataGaRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getDataMcfRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getDataRealtimeRoute, (c) => {
    throw new Error('Not implemented')
  })
