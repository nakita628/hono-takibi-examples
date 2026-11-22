import { OpenAPIHono } from '@hono/zod-openapi'
import { getUserUsernameRoute, getUserUsernameTokenKindRoute, postUserRoute } from '../routes'

const app = new OpenAPIHono()

export const userHandler = app
  .openapi(postUserRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getUserUsernameRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getUserUsernameTokenKindRoute, (c) => {
    throw new Error('Not implemented')
  })
