import { OpenAPIHono } from '@hono/zod-openapi'
import {
  getAccountsIdRoute,
  getAccountsRoute,
  patchAccountsIdRoute,
  putAccountsIdRoute,
} from '../routes'

const app = new OpenAPIHono()

export const accountsHandler = app
  .openapi(getAccountsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getAccountsIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchAccountsIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putAccountsIdRoute, (c) => {
    throw new Error('Not implemented')
  })
