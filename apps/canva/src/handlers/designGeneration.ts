import { OpenAPIHono } from '@hono/zod-openapi'
import { getV1GenerationsJobIdRoute, postV1GenerationsRoute } from '../routes'

const app = new OpenAPIHono()

export const designGenerationHandler = app
  .openapi(postV1GenerationsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV1GenerationsJobIdRoute, (c) => {
    throw new Error('Not implemented')
  })
