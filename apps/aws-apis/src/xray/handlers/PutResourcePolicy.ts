import { OpenAPIHono } from '@hono/zod-openapi'
import { postPutResourcePolicyRoute } from '../routes'

const app = new OpenAPIHono()

export const PutResourcePolicyHandler = app.openapi(postPutResourcePolicyRoute, (c) => {
  throw new Error('Not implemented')
})
