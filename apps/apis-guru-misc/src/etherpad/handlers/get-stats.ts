import { OpenAPIHono } from '@hono/zod-openapi'
import { getGetStatsRoute, postGetStatsRoute } from '../routes'

const app = new OpenAPIHono()

export const getStatsHandler = app
  .openapi(getGetStatsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postGetStatsRoute, (c) => {
    throw new Error('Not implemented')
  })
