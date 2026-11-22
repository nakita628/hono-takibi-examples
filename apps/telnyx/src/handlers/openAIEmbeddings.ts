import { OpenAPIHono } from '@hono/zod-openapi'
import { getAiOpenaiEmbeddingsModelsRoute, postAiOpenaiEmbeddingsRoute } from '../routes'

const app = new OpenAPIHono()

export const openAIEmbeddingsHandler = app
  .openapi(postAiOpenaiEmbeddingsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getAiOpenaiEmbeddingsModelsRoute, (c) => {
    throw new Error('Not implemented')
  })
