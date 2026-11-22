import { OpenAPIHono } from '@hono/zod-openapi'
import {
  getApiInternalAccountsIdRoute,
  getApiInternalAccountsRoute,
  patchApiInternalAccountsIdRoute,
  postApiInternalAccountsIdRequestClosureRoute,
  postApiInternalAccountsRoute,
} from '../routes'

const app = new OpenAPIHono()

export const internalAccountHandler = app
  .openapi(getApiInternalAccountsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiInternalAccountsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiInternalAccountsIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchApiInternalAccountsIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiInternalAccountsIdRequestClosureRoute, (c) => {
    throw new Error('Not implemented')
  })
