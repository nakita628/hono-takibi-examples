import { OpenAPIHono } from '@hono/zod-openapi'
import { getGrantAccountsIdRoute } from '../routes'

const app = new OpenAPIHono()

export const grantAccountsHandler = app.openapi(getGrantAccountsIdRoute, (c) => {
  throw new Error('Not implemented')
})
