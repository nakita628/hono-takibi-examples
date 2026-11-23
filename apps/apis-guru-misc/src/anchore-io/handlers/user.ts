import { OpenAPIHono } from '@hono/zod-openapi'
import { getUserCredentialsRoute, getUserRoute, postUserCredentialsRoute } from '../routes'

const app = new OpenAPIHono()

export const userHandler = app
  .openapi(getUserRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getUserCredentialsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postUserCredentialsRoute, (c) => {
    throw new Error('Not implemented')
  })
