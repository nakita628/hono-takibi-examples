import { OpenAPIHono } from '@hono/zod-openapi'
import { optionsSignupRoute, postSignupRoute } from '../routes'

const app = new OpenAPIHono()

export const signupHandler = app
  .openapi(optionsSignupRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postSignupRoute, (c) => {
    throw new Error('Not implemented')
  })
