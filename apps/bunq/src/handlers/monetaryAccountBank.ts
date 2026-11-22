import { OpenAPIHono } from '@hono/zod-openapi'
import {
  getUserUserIDMonetaryAccountBankItemIdRoute,
  getUserUserIDMonetaryAccountBankRoute,
  postUserUserIDMonetaryAccountBankRoute,
  putUserUserIDMonetaryAccountBankItemIdRoute,
} from '../routes'

const app = new OpenAPIHono()

export const monetaryAccountBankHandler = app
  .openapi(postUserUserIDMonetaryAccountBankRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getUserUserIDMonetaryAccountBankRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getUserUserIDMonetaryAccountBankItemIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putUserUserIDMonetaryAccountBankItemIdRoute, (c) => {
    throw new Error('Not implemented')
  })
