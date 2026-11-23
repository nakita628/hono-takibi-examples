import { OpenAPIHono } from '@hono/zod-openapi'
import { getPlayStatsRoute, getPlayStatTypesRoute, getPlayTypesRoute } from '../routes'

const app = new OpenAPIHono()

export const playHandler = app
  .openapi(getPlayStatTypesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getPlayStatsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getPlayTypesRoute, (c) => {
    throw new Error('Not implemented')
  })
