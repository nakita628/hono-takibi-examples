import { OpenAPIHono } from '@hono/zod-openapi'
import {
  getStoreStoreCreditAccountsIdRoute,
  getStoreStoreCreditAccountsRoute,
  postStoreStoreCreditAccountsClaimRoute,
} from '../routes'

const app = new OpenAPIHono()

export const storeCreditAccountsHandler = app
  .openapi(getStoreStoreCreditAccountsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postStoreStoreCreditAccountsClaimRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getStoreStoreCreditAccountsIdRoute, (c) => {
    throw new Error('Not implemented')
  })
