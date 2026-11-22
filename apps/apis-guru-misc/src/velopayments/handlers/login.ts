import { OpenAPIHono } from '@hono/zod-openapi'
import {
  postV1AuthenticateRoute,
  postV1LogoutRoute,
  postV1PasswordResetRoute,
  postV1ValidateRoute,
} from '../routes'

const app = new OpenAPIHono()

export const loginHandler = app
  .openapi(postV1AuthenticateRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV1LogoutRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV1PasswordResetRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV1ValidateRoute, (c) => {
    throw new Error('Not implemented')
  })
