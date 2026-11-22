import { OpenAPIHono } from '@hono/zod-openapi'
import { postSignup1DemoauthverifyRoute, postSignup2DemoauthRoute } from '../routes'

const app = new OpenAPIHono()

export const digiLockerSignUpAPIsHandler = app
  .openapi(postSignup1DemoauthverifyRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postSignup2DemoauthRoute, (c) => {
    throw new Error('Not implemented')
  })
