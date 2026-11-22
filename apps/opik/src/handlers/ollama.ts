import { OpenAPIHono } from '@hono/zod-openapi'
import { postV1PrivateOllamaModelsRoute, postV1PrivateOllamaTestConnectionRoute } from '../routes'

const app = new OpenAPIHono()

export const ollamaHandler = app
  .openapi(postV1PrivateOllamaModelsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV1PrivateOllamaTestConnectionRoute, (c) => {
    throw new Error('Not implemented')
  })
