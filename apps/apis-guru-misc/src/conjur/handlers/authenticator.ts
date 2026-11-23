import { OpenAPIHono } from '@hono/zod-openapi'
import {
  getAuthenticatorServiceIdAccountStatusRoute,
  patchAuthenticatorAccountRoute,
  patchAuthenticatorServiceIdAccountRoute,
} from '../routes'

const app = new OpenAPIHono()

export const authenticatorHandler = app
  .openapi(patchAuthenticatorAccountRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchAuthenticatorServiceIdAccountRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getAuthenticatorServiceIdAccountStatusRoute, (c) => {
    throw new Error('Not implemented')
  })
