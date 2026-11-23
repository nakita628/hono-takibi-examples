import { OpenAPIHono } from '@hono/zod-openapi'
import { getRegistrationRoute, postRegistrationRoute } from '../routes'

const app = new OpenAPIHono()

export const registrationHandler = app
  .openapi(getRegistrationRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postRegistrationRoute, (c) => {
    throw new Error('Not implemented')
  })
