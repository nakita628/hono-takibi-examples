import { OpenAPIHono } from '@hono/zod-openapi'
import {
  getUserUserIDMonetaryAccountMonetaryAccountIDEventEventIDStatementItemIdRoute,
  postUserUserIDMonetaryAccountMonetaryAccountIDEventEventIDStatementRoute,
} from '../routes'

const app = new OpenAPIHono()

export const statementHandler = app
  .openapi(postUserUserIDMonetaryAccountMonetaryAccountIDEventEventIDStatementRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getUserUserIDMonetaryAccountMonetaryAccountIDEventEventIDStatementItemIdRoute, (c) => {
    throw new Error('Not implemented')
  })
