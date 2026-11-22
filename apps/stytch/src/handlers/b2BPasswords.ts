import { OpenAPIHono } from '@hono/zod-openapi'
import {
  postV1B2bPasswordsDiscoveryAuthenticateRoute,
  postV1B2bPasswordsEmailRequireResetRoute,
  postV1B2bPasswordsEmailResetRoute,
  postV1B2bPasswordsEmailResetStartRoute,
  postV1B2bPasswordsExistingPasswordResetRoute,
  postV1B2bPasswordsSessionResetRoute,
} from '../routes'

const app = new OpenAPIHono()

export const b2BPasswordsHandler = app
  .openapi(postV1B2bPasswordsEmailResetStartRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV1B2bPasswordsEmailResetRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV1B2bPasswordsEmailRequireResetRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV1B2bPasswordsSessionResetRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV1B2bPasswordsExistingPasswordResetRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV1B2bPasswordsDiscoveryAuthenticateRoute, (c) => {
    throw new Error('Not implemented')
  })
