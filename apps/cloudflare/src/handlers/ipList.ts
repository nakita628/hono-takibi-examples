import { OpenAPIHono } from '@hono/zod-openapi'
import { getAccountsAccountIdIntelIpListsRoute } from '../routes'

const app = new OpenAPIHono()

export const ipListHandler = app.openapi(getAccountsAccountIdIntelIpListsRoute, (c) => {
  throw new Error('Not implemented')
})
