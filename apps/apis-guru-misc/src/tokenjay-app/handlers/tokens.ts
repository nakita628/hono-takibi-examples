import { OpenAPIHono } from '@hono/zod-openapi'
import {
  getTokensCheckTokenIdTokenNameRoute,
  getTokensListBlockedRoute,
  getTokensListGenuineRoute,
  getTokensPricesAllRoute,
  getTokensPricesTokenIdRoute,
} from '../routes'

const app = new OpenAPIHono()

export const tokensHandler = app
  .openapi(getTokensCheckTokenIdTokenNameRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getTokensListBlockedRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getTokensListGenuineRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getTokensPricesAllRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getTokensPricesTokenIdRoute, (c) => {
    throw new Error('Not implemented')
  })
