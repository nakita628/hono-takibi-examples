import { OpenAPIHono } from '@hono/zod-openapi'
import { deleteUserUserIdRoute, getUserUserIdRoute, postUserRoute } from '../routes'

const app = new OpenAPIHono()

export const userHandler = app
  .openapi(postUserRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteUserUserIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getUserUserIdRoute, (c) => {
    throw new Error('Not implemented')
  })
