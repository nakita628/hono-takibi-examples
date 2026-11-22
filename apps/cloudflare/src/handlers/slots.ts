import { OpenAPIHono } from '@hono/zod-openapi'
import { getAccountsAccountIdCniSlotsRoute, getAccountsAccountIdCniSlotsSlotRoute } from '../routes'

const app = new OpenAPIHono()

export const slotsHandler = app
  .openapi(getAccountsAccountIdCniSlotsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getAccountsAccountIdCniSlotsSlotRoute, (c) => {
    throw new Error('Not implemented')
  })
