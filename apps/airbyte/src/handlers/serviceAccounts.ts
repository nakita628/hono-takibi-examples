import { OpenAPIHono } from '@hono/zod-openapi'
import { postV1ServiceAccountsTokenRoute } from '../routes'

const app = new OpenAPIHono()

export const serviceAccountsHandler = app.openapi(postV1ServiceAccountsTokenRoute, (c) => {
  throw new Error('Not implemented')
})
