import { OpenAPIHono } from '@hono/zod-openapi'
import { putPutImageRecipePolicyRoute } from '../routes'

const app = new OpenAPIHono()

export const putImageRecipePolicyHandler = app.openapi(putPutImageRecipePolicyRoute, (c) => {
  throw new Error('Not implemented')
})
