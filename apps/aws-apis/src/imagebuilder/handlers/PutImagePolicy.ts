import { OpenAPIHono } from '@hono/zod-openapi'
import { putPutImagePolicyRoute } from '../routes'

const app = new OpenAPIHono()

export const PutImagePolicyHandler = app.openapi(putPutImagePolicyRoute, (c) => {
  throw new Error('Not implemented')
})
