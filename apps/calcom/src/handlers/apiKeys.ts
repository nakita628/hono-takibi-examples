import { OpenAPIHono } from '@hono/zod-openapi'
import { postV2ApiKeysRefreshRoute } from '../routes'

const app = new OpenAPIHono()

export const apiKeysHandler = app.openapi(postV2ApiKeysRefreshRoute, (c) => {
  throw new Error('Not implemented')
})
