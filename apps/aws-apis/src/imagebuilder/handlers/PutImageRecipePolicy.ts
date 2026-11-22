import { OpenAPIHono } from '@hono/zod-openapi'
import { putPutImageRecipePolicyRoute } from '../routes'

const app = new OpenAPIHono()

export const PutImageRecipePolicyHandler = app.openapi(putPutImageRecipePolicyRoute, (c) => {
  throw new Error('Not implemented')
})
