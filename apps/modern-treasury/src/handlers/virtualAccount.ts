import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteApiVirtualAccountsIdRoute,
  getApiVirtualAccountsIdRoute,
  getApiVirtualAccountsRoute,
  patchApiVirtualAccountsIdRoute,
  postApiVirtualAccountsRoute,
} from '../routes'

const app = new OpenAPIHono()

export const virtualAccountHandler = app
  .openapi(getApiVirtualAccountsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiVirtualAccountsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiVirtualAccountsIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchApiVirtualAccountsIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteApiVirtualAccountsIdRoute, (c) => {
    throw new Error('Not implemented')
  })
