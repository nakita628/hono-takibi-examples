import { OpenAPIHono } from '@hono/zod-openapi'
import { getApiEntriesNamesRoute, getApiEntriesRoute } from '../routes'

const app = new OpenAPIHono()

export const entryApiHandler = app
  .openapi(getApiEntriesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiEntriesNamesRoute, (c) => {
    throw new Error('Not implemented')
  })
