import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteUserUserIDMonetaryAccountMonetaryAccountIDCustomerStatementItemIdRoute,
  getUserUserIDMonetaryAccountMonetaryAccountIDCustomerStatementItemIdRoute,
  getUserUserIDMonetaryAccountMonetaryAccountIDCustomerStatementRoute,
  postUserUserIDMonetaryAccountMonetaryAccountIDCustomerStatementRoute,
} from '../routes'

const app = new OpenAPIHono()

export const customerStatementHandler = app
  .openapi(postUserUserIDMonetaryAccountMonetaryAccountIDCustomerStatementRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getUserUserIDMonetaryAccountMonetaryAccountIDCustomerStatementRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getUserUserIDMonetaryAccountMonetaryAccountIDCustomerStatementItemIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteUserUserIDMonetaryAccountMonetaryAccountIDCustomerStatementItemIdRoute, (c) => {
    throw new Error('Not implemented')
  })
