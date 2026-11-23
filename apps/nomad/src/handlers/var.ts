import { OpenAPIHono } from '@hono/zod-openapi'
import { deleteVarPathRoute, getVarPathRoute, postVarPathRoute, putVarPathRoute } from '../routes'

const app = new OpenAPIHono()

export const varHandler = app
  .openapi(deleteVarPathRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getVarPathRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postVarPathRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putVarPathRoute, (c) => {
    throw new Error('Not implemented')
  })
