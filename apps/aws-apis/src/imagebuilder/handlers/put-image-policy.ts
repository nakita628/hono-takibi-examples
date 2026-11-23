import { OpenAPIHono } from '@hono/zod-openapi'
import { putPutImagePolicyRoute } from '../routes'

const app = new OpenAPIHono()

export const putImagePolicyHandler = app.openapi(putPutImagePolicyRoute, (c) => {
  throw new Error('Not implemented')
})
