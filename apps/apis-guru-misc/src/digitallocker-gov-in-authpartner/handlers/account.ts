import { OpenAPIHono } from '@hono/zod-openapi'
import { postAccount1PushuriRoute, postAccount2VerifyRoute } from '../routes'

const app = new OpenAPIHono()

export const accountHandler = app
  .openapi(postAccount1PushuriRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postAccount2VerifyRoute, (c) => {
    throw new Error('Not implemented')
  })
