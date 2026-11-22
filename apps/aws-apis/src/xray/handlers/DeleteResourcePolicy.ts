import { OpenAPIHono } from '@hono/zod-openapi'
import { postDeleteResourcePolicyRoute } from '../routes'

const app = new OpenAPIHono()

export const DeleteResourcePolicyHandler = app.openapi(postDeleteResourcePolicyRoute, (c) => {
  throw new Error('Not implemented')
})
