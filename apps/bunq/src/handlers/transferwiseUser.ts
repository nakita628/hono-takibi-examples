import { OpenAPIHono } from '@hono/zod-openapi'
import { getUserUserIDTransferwiseUserRoute, postUserUserIDTransferwiseUserRoute } from '../routes'

const app = new OpenAPIHono()

export const transferwiseUserHandler = app
  .openapi(postUserUserIDTransferwiseUserRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getUserUserIDTransferwiseUserRoute, (c) => {
    throw new Error('Not implemented')
  })
