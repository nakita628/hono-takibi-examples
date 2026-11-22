import { OpenAPIHono } from '@hono/zod-openapi'
import {
  getUserUserIDMonetaryAccountMonetaryAccountIDSofortMerchantTransactionItemIdRoute,
  getUserUserIDMonetaryAccountMonetaryAccountIDSofortMerchantTransactionRoute,
} from '../routes'

const app = new OpenAPIHono()

export const sofortMerchantTransactionHandler = app
  .openapi(
    getUserUserIDMonetaryAccountMonetaryAccountIDSofortMerchantTransactionItemIdRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(getUserUserIDMonetaryAccountMonetaryAccountIDSofortMerchantTransactionRoute, (c) => {
    throw new Error('Not implemented')
  })
