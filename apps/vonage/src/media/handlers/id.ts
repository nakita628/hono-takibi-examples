import { OpenAPIHono } from '@hono/zod-openapi'
import { deleteIdRoute, getIdInfoRoute, putIdInfoRoute } from '../routes'

const app = new OpenAPIHono()

export const idHandler = app
  .openapi(deleteIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getIdInfoRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putIdInfoRoute, (c) => {
    throw new Error('Not implemented')
  })
