import { OpenAPIHono } from '@hono/zod-openapi'
import { getRegistrationVerifyRoute, postRegistrationRoute } from '../routes'

const app = new OpenAPIHono()

export const registrationHandler = app
  .openapi(postRegistrationRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getRegistrationVerifyRoute, (c) => {
    throw new Error('Not implemented')
  })
