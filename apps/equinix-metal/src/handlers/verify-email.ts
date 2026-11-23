import { OpenAPIHono } from '@hono/zod-openapi'
import { postVerifyEmailRoute, putVerifyEmailRoute } from '../routes'

const app = new OpenAPIHono()

export const verifyEmailHandler = app
  .openapi(postVerifyEmailRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putVerifyEmailRoute, (c) => {
    throw new Error('Not implemented')
  })
