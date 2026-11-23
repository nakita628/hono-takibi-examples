import { OpenAPIHono } from '@hono/zod-openapi'
import { putPutComponentPolicyRoute } from '../routes'

const app = new OpenAPIHono()

export const putComponentPolicyHandler = app.openapi(putPutComponentPolicyRoute, (c) => {
  throw new Error('Not implemented')
})
