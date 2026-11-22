import { OpenAPIHono } from '@hono/zod-openapi'
import { deleteApiSubUserIdRoute, getApiSubUserIdRoute, postApiSubUserRoute } from '../routes'

const app = new OpenAPIHono()

export const subUserHandler = app
  .openapi(postApiSubUserRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteApiSubUserIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiSubUserIdRoute, (c) => {
    throw new Error('Not implemented')
  })
