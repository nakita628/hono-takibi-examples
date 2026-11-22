import { OpenAPIHono } from '@hono/zod-openapi'
import { deleteRiddleRoute, getRiddleRoute, postRiddleRoute, putRiddleRoute } from '../routes'

const app = new OpenAPIHono()

export const privateRiddlesHandler = app
  .openapi(deleteRiddleRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getRiddleRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postRiddleRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putRiddleRoute, (c) => {
    throw new Error('Not implemented')
  })
