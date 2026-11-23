import { OpenAPIHono } from '@hono/zod-openapi'
import { getGetPadIDRoute, postGetPadIDRoute } from '../routes'

const app = new OpenAPIHono()

export const getPadIdHandler = app
  .openapi(getGetPadIDRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postGetPadIDRoute, (c) => {
    throw new Error('Not implemented')
  })
