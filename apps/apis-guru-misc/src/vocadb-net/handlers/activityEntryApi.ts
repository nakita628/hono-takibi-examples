import { OpenAPIHono } from '@hono/zod-openapi'
import { getApiActivityEntriesRoute } from '../routes'

const app = new OpenAPIHono()

export const activityEntryApiHandler = app.openapi(getApiActivityEntriesRoute, (c) => {
  throw new Error('Not implemented')
})
