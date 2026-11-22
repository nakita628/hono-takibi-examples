import { OpenAPIHono } from '@hono/zod-openapi'
import {
  getAccountsAccountIdIntelAsnAsnRoute,
  getAccountsAccountIdIntelAsnAsnSubnetsRoute,
} from '../routes'

const app = new OpenAPIHono()

export const asnIntelligenceHandler = app
  .openapi(getAccountsAccountIdIntelAsnAsnRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getAccountsAccountIdIntelAsnAsnSubnetsRoute, (c) => {
    throw new Error('Not implemented')
  })
