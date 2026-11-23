import { OpenAPIHono } from '@hono/zod-openapi'
import { postSandboxUserCompanyRoute } from '../routes'

const app = new OpenAPIHono()

export const sandboxUserCompanyHandler = app.openapi(postSandboxUserCompanyRoute, (c) => {
  throw new Error('Not implemented')
})
