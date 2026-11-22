import { OpenAPIHono } from '@hono/zod-openapi'
import { postPutResourcePolicyRoute } from '../routes'

const app = new OpenAPIHono()

export const putResourcePolicyHandler = app.openapi(postPutResourcePolicyRoute, (c) => {
  throw new Error('Not implemented')
})
