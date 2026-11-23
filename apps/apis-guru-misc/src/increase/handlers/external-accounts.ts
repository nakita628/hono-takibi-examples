import { OpenAPIHono } from '@hono/zod-openapi'
import {
  getExternalAccountsExternalAccountIdRoute,
  getExternalAccountsRoute,
  patchExternalAccountsExternalAccountIdRoute,
  postExternalAccountsRoute,
} from '../routes'

const app = new OpenAPIHono()

export const externalAccountsHandler = app
  .openapi(getExternalAccountsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postExternalAccountsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getExternalAccountsExternalAccountIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchExternalAccountsExternalAccountIdRoute, (c) => {
    throw new Error('Not implemented')
  })
