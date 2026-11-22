import { OpenAPIHono } from '@hono/zod-openapi'
import { getV1ImageGenerationsJobIdRoute, postV1ImageGenerationsRoute } from '../routes'

const app = new OpenAPIHono()

export const imageGenerationHandler = app
  .openapi(postV1ImageGenerationsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV1ImageGenerationsJobIdRoute, (c) => {
    throw new Error('Not implemented')
  })
