import { OpenAPIHono } from '@hono/zod-openapi'
import { putPutContainerRecipePolicyRoute } from '../routes'

const app = new OpenAPIHono()

export const PutContainerRecipePolicyHandler = app.openapi(
  putPutContainerRecipePolicyRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
