import { OpenAPIHono } from '@hono/zod-openapi'
import {
  getTokensCheckTokenIdTokenNameRoute,
  getTokensListBlockedRoute,
  getTokensListGenuineRoute,
} from '../routes'

const app = new OpenAPIHono()

export const tokenVerificationHandler = app
  .openapi(getTokensCheckTokenIdTokenNameRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getTokensListBlockedRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getTokensListGenuineRoute, (c) => {
    throw new Error('Not implemented')
  })
