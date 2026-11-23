import { OpenAPIHono } from '@hono/zod-openapi'
import { postEmailReferralRoute, postEmailWelcomeUsernameRoute } from '../routes'

const app = new OpenAPIHono()

export const emailHandler = app
  .openapi(postEmailReferralRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postEmailWelcomeUsernameRoute, (c) => {
    throw new Error('Not implemented')
  })
