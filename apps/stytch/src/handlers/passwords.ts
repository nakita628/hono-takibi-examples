import { OpenAPIHono } from '@hono/zod-openapi'
import {
  postV1PasswordsEmailResetRoute,
  postV1PasswordsEmailResetStartRoute,
  postV1PasswordsExistingPasswordResetRoute,
  postV1PasswordsSessionResetRoute,
} from '../routes'

const app = new OpenAPIHono()

export const passwordsHandler = app
  .openapi(postV1PasswordsEmailResetStartRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV1PasswordsEmailResetRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV1PasswordsExistingPasswordResetRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV1PasswordsSessionResetRoute, (c) => {
    throw new Error('Not implemented')
  })
