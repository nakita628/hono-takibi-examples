import { OpenAPIHono } from '@hono/zod-openapi'
import {
  getAccountsAccountIdPartiesRoute,
  getAccountsAccountIdPartyRoute,
  getPartyRoute,
} from '../routes'

const app = new OpenAPIHono()

export const partiesHandler = app
  .openapi(getAccountsAccountIdPartiesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getAccountsAccountIdPartyRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getPartyRoute, (c) => {
    throw new Error('Not implemented')
  })
