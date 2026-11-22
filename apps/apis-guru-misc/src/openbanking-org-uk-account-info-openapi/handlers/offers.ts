import { OpenAPIHono } from '@hono/zod-openapi'
import { getAccountsAccountIdOffersRoute, getOffersRoute } from '../routes'

const app = new OpenAPIHono()

export const offersHandler = app
  .openapi(getAccountsAccountIdOffersRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getOffersRoute, (c) => {
    throw new Error('Not implemented')
  })
