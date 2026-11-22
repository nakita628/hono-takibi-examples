import { OpenAPIHono } from '@hono/zod-openapi'
import { getAdminRealmsRealmKeysRoute } from '../routes'

const app = new OpenAPIHono()

export const keyHandler = app.openapi(getAdminRealmsRealmKeysRoute, (c) => {
  throw new Error('Not implemented')
})
