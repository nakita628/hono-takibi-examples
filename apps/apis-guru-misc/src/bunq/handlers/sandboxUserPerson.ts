import { OpenAPIHono } from '@hono/zod-openapi'
import { postSandboxUserPersonRoute } from '../routes'

const app = new OpenAPIHono()

export const sandboxUserPersonHandler = app.openapi(postSandboxUserPersonRoute, (c) => {
  throw new Error('Not implemented')
})
