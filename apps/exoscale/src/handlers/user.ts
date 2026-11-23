import { OpenAPIHono } from '@hono/zod-openapi'
import { deleteUserIdRoute, getUserRoute, postUserRoute, putUserIdRoute } from '../routes'

const app = new OpenAPIHono()

export const userHandler = app
  .openapi(putUserIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteUserIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postUserRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getUserRoute, (c) => {
    throw new Error('Not implemented')
  })
