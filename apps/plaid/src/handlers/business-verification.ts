import { OpenAPIHono } from '@hono/zod-openapi'
import { postBusinessVerificationCreateRoute, postBusinessVerificationGetRoute } from '../routes'

const app = new OpenAPIHono()

export const businessVerificationHandler = app
  .openapi(postBusinessVerificationGetRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postBusinessVerificationCreateRoute, (c) => {
    throw new Error('Not implemented')
  })
