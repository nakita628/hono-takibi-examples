import { OpenAPIHono } from '@hono/zod-openapi'
import { deletePathRoute, getPathRoute, headPathRoute, putPathRoute } from '../routes'

const app = new OpenAPIHono()

export const pathHandler = app
  .openapi(deletePathRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(headPathRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getPathRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putPathRoute, (c) => {
    throw new Error('Not implemented')
  })
