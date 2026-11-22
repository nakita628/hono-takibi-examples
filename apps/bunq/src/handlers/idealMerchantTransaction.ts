import { OpenAPIHono } from '@hono/zod-openapi'
import {
  getUserUserIDMonetaryAccountMonetaryAccountIDIdealMerchantTransactionItemIdRoute,
  getUserUserIDMonetaryAccountMonetaryAccountIDIdealMerchantTransactionRoute,
  postUserUserIDMonetaryAccountMonetaryAccountIDIdealMerchantTransactionRoute,
} from '../routes'

const app = new OpenAPIHono()

export const idealMerchantTransactionHandler = app
  .openapi(postUserUserIDMonetaryAccountMonetaryAccountIDIdealMerchantTransactionRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getUserUserIDMonetaryAccountMonetaryAccountIDIdealMerchantTransactionRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(
    getUserUserIDMonetaryAccountMonetaryAccountIDIdealMerchantTransactionItemIdRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
