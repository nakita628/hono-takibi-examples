import { OpenAPIHono } from '@hono/zod-openapi'
import { getStatsAppRoute, getStatsDbRoute } from '../routes'

const app = new OpenAPIHono()

export const statsHandler = app
  .openapi(getStatsAppRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getStatsDbRoute, (c) => {
    throw new Error('Not implemented')
  })
