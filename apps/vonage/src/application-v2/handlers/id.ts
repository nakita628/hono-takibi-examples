import { OpenAPIHono } from '@hono/zod-openapi'
import { deleteIdRoute, getIdRoute, putIdRoute } from '../routes'

const app = new OpenAPIHono()

export const idHandler = app
  .openapi(deleteIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putIdRoute, (c) => {
    throw new Error('Not implemented')
  })
