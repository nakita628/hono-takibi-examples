import { OpenAPIHono } from '@hono/zod-openapi'
import { postOriginKeysRoute } from '../routes'

const app = new OpenAPIHono()

export const originKeysHandler = app.openapi(postOriginKeysRoute, (c) => {
  throw new Error('Not implemented')
})
