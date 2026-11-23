import { OpenAPIHono } from '@hono/zod-openapi'
import { getV1ModelsRoute, postV1ChatCompletionsRoute } from '../routes'

const app = new OpenAPIHono()

export const v1Handler = app
  .openapi(getV1ModelsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV1ChatCompletionsRoute, (c) => {
    throw new Error('Not implemented')
  })
