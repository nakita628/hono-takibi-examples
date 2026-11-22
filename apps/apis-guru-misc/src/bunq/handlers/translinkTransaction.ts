import { OpenAPIHono } from '@hono/zod-openapi'
import {
  getUserUserIDMonetaryAccountMonetaryAccountIDTranslinkTransactionItemIdRoute,
  getUserUserIDMonetaryAccountMonetaryAccountIDTranslinkTransactionRoute,
  postUserUserIDMonetaryAccountMonetaryAccountIDTranslinkTransactionRoute,
} from '../routes'

const app = new OpenAPIHono()

export const translinkTransactionHandler = app
  .openapi(getUserUserIDMonetaryAccountMonetaryAccountIDTranslinkTransactionRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postUserUserIDMonetaryAccountMonetaryAccountIDTranslinkTransactionRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getUserUserIDMonetaryAccountMonetaryAccountIDTranslinkTransactionItemIdRoute, (c) => {
    throw new Error('Not implemented')
  })
