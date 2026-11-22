import { OpenAPIHono } from '@hono/zod-openapi'
import { postApiV1ItemusagesRoute, postApiV1SigninattemptsRoute } from '../routes'

const app = new OpenAPIHono()

export const apiV1Handler = app
  .openapi(postApiV1ItemusagesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiV1SigninattemptsRoute, (c) => {
    throw new Error('Not implemented')
  })
