import { OpenAPIHono } from '@hono/zod-openapi'
import { postV1SignupUrlsRoute } from '../routes'

const app = new OpenAPIHono()

export const signupUrlsHandler = app.openapi(postV1SignupUrlsRoute, (c) => {
  throw new Error('Not implemented')
})
