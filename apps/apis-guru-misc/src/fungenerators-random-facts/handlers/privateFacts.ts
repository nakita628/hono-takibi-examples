import { OpenAPIHono } from '@hono/zod-openapi'
import { deleteFactRoute, putFactRoute } from '../routes'

const app = new OpenAPIHono()

export const privateFactsHandler = app
  .openapi(deleteFactRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putFactRoute, (c) => {
    throw new Error('Not implemented')
  })
