import { OpenAPIHono } from '@hono/zod-openapi'
import { getApiSystemStatsRoute, getHealthRoute } from '../routes'

const app = new OpenAPIHono()

export const systemHandler = app
  .openapi(getApiSystemStatsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getHealthRoute, (c) => {
    throw new Error('Not implemented')
  })
