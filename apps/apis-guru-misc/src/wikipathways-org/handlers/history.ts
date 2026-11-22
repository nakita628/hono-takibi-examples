import { OpenAPIHono } from '@hono/zod-openapi'
import { getGetPathwayHistoryRoute, getGetRecentChangesRoute } from '../routes'

const app = new OpenAPIHono()

export const historyHandler = app
  .openapi(getGetPathwayHistoryRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getGetRecentChangesRoute, (c) => {
    throw new Error('Not implemented')
  })
