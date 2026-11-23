import { OpenAPIHono } from '@hono/zod-openapi'
import { getVerificationRoute, postVerificationRoute, putVerificationRoute } from '../routes'

const app = new OpenAPIHono()

export const verificationHandler = app
  .openapi(getVerificationRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postVerificationRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putVerificationRoute, (c) => {
    throw new Error('Not implemented')
  })
