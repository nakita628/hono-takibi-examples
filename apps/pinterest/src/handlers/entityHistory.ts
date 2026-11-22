import { OpenAPIHono } from '@hono/zod-openapi'
import { getAdAccountsEntityHistoryRoute } from '../routes'

const app = new OpenAPIHono()

export const entityHistoryHandler = app.openapi(getAdAccountsEntityHistoryRoute, (c) => {
  throw new Error('Not implemented')
})
