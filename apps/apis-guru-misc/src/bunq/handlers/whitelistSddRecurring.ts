import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteUserUserIDWhitelistSddRecurringItemIdRoute,
  getUserUserIDWhitelistSddRecurringItemIdRoute,
  getUserUserIDWhitelistSddRecurringRoute,
  postUserUserIDWhitelistSddRecurringRoute,
  putUserUserIDWhitelistSddRecurringItemIdRoute,
} from '../routes'

const app = new OpenAPIHono()

export const whitelistSddRecurringHandler = app
  .openapi(getUserUserIDWhitelistSddRecurringRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postUserUserIDWhitelistSddRecurringRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteUserUserIDWhitelistSddRecurringItemIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getUserUserIDWhitelistSddRecurringItemIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putUserUserIDWhitelistSddRecurringItemIdRoute, (c) => {
    throw new Error('Not implemented')
  })
