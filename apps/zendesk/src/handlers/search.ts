import { OpenAPIHono } from '@hono/zod-openapi'
import { getApiV2SearchCountRoute, getApiV2SearchExportRoute, getApiV2SearchRoute } from '../routes'

const app = new OpenAPIHono()

export const searchHandler = app
  .openapi(getApiV2SearchRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV2SearchCountRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV2SearchExportRoute, (c) => {
    throw new Error('Not implemented')
  })
