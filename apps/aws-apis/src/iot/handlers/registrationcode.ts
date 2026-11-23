import { OpenAPIHono } from '@hono/zod-openapi'
import { deleteRegistrationcodeRoute, getRegistrationcodeRoute } from '../routes'

const app = new OpenAPIHono()

export const registrationcodeHandler = app
  .openapi(deleteRegistrationcodeRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getRegistrationcodeRoute, (c) => {
    throw new Error('Not implemented')
  })
