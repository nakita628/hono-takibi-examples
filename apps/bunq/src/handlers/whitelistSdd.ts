import { OpenAPIHono } from '@hono/zod-openapi'
import {
  getUserUserIDMonetaryAccountMonetaryAccountIDWhitelistSddItemIdRoute,
  getUserUserIDMonetaryAccountMonetaryAccountIDWhitelistSddRoute,
  getUserUserIDWhitelistSddItemIdRoute,
  getUserUserIDWhitelistSddRoute,
} from '../routes'

const app = new OpenAPIHono()

export const whitelistSddHandler = app
  .openapi(getUserUserIDWhitelistSddItemIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getUserUserIDWhitelistSddRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getUserUserIDMonetaryAccountMonetaryAccountIDWhitelistSddItemIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getUserUserIDMonetaryAccountMonetaryAccountIDWhitelistSddRoute, (c) => {
    throw new Error('Not implemented')
  })
