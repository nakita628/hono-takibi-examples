import { OpenAPIHono } from '@hono/zod-openapi'
import { getAppsAppIdAccountingEntriesIndexRoute } from '../routes'

const app = new OpenAPIHono()

export const entriesHandler = app.openapi(getAppsAppIdAccountingEntriesIndexRoute, (c) => {
  throw new Error('Not implemented')
})
