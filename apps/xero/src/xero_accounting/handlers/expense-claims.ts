import { OpenAPIHono } from '@hono/zod-openapi'
import {
  getExpenseClaimsExpenseClaimIDHistoryRoute,
  getExpenseClaimsExpenseClaimIDRoute,
  getExpenseClaimsRoute,
  postExpenseClaimsExpenseClaimIDRoute,
  putExpenseClaimsExpenseClaimIDHistoryRoute,
  putExpenseClaimsRoute,
} from '../routes'

const app = new OpenAPIHono()

export const expenseClaimsHandler = app
  .openapi(getExpenseClaimsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putExpenseClaimsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getExpenseClaimsExpenseClaimIDRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postExpenseClaimsExpenseClaimIDRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getExpenseClaimsExpenseClaimIDHistoryRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putExpenseClaimsExpenseClaimIDHistoryRoute, (c) => {
    throw new Error('Not implemented')
  })
