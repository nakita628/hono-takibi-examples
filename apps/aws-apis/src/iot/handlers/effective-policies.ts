import { OpenAPIHono } from '@hono/zod-openapi'
import { postEffectivePoliciesRoute } from '../routes'

const app = new OpenAPIHono()

export const effectivePoliciesHandler = app.openapi(postEffectivePoliciesRoute, (c) => {
  throw new Error('Not implemented')
})
