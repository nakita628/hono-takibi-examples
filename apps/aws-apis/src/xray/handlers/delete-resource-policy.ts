import { OpenAPIHono } from '@hono/zod-openapi'
import { postDeleteResourcePolicyRoute } from '../routes'

const app = new OpenAPIHono()

export const deleteResourcePolicyHandler = app.openapi(postDeleteResourcePolicyRoute, (c) => {
  throw new Error('Not implemented')
})
