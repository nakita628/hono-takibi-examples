import { OpenAPIHono } from '@hono/zod-openapi'
import { postAuthGetRoute, postAuthVerifyRoute } from '../routes'

const app = new OpenAPIHono()

export const authHandler = app
  .openapi(postAuthGetRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postAuthVerifyRoute, (c) => {
    throw new Error('Not implemented')
  })
