import { OpenAPIHono } from '@hono/zod-openapi'
import { postRepertoireRoute, putRepertoireRoute } from '../routes'

const app = new OpenAPIHono()

export const repertoireHandler = app
  .openapi(postRepertoireRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putRepertoireRoute, (c) => {
    throw new Error('Not implemented')
  })
