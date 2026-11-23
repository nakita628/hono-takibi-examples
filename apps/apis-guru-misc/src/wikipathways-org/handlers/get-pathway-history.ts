import { OpenAPIHono } from '@hono/zod-openapi'
import { getGetPathwayHistoryRoute } from '../routes'

const app = new OpenAPIHono()

export const getPathwayHistoryHandler = app.openapi(getGetPathwayHistoryRoute, (c) => {
  throw new Error('Not implemented')
})
