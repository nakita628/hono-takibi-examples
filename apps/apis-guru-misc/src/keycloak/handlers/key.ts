import { OpenAPIHono } from '@hono/zod-openapi'
import { getRealmKeysRoute } from '../routes'

const app = new OpenAPIHono()

export const keyHandler = app.openapi(getRealmKeysRoute, (c) => {
  throw new Error('Not implemented')
})
