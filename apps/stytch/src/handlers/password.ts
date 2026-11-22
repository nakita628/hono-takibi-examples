import { OpenAPIHono } from '@hono/zod-openapi'
import {
  postV1B2bPasswordsAuthenticateRoute,
  postV1B2bPasswordsMigrateRoute,
  postV1B2bPasswordsStrengthCheckRoute,
  postV1PasswordsAuthenticateRoute,
  postV1PasswordsMigrateRoute,
  postV1PasswordsRoute,
  postV1PasswordsStrengthCheckRoute,
} from '../routes'

const app = new OpenAPIHono()

export const passwordHandler = app
  .openapi(postV1PasswordsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV1PasswordsAuthenticateRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV1PasswordsStrengthCheckRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV1PasswordsMigrateRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV1B2bPasswordsStrengthCheckRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV1B2bPasswordsMigrateRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV1B2bPasswordsAuthenticateRoute, (c) => {
    throw new Error('Not implemented')
  })
