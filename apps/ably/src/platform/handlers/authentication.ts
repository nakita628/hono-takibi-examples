import { OpenAPIHono } from '@hono/zod-openapi'
import { postKeysKeyNameRequestTokenRoute } from '../routes'

const app = new OpenAPIHono()

export const authenticationHandler = app.openapi(postKeysKeyNameRequestTokenRoute, (c) => {
  throw new Error('Not implemented')
})
