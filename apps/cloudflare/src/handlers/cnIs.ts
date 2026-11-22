import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteAccountsAccountIdCniCnisCniRoute,
  getAccountsAccountIdCniCnisCniRoute,
  getAccountsAccountIdCniCnisRoute,
  postAccountsAccountIdCniCnisRoute,
  putAccountsAccountIdCniCnisCniRoute,
} from '../routes'

const app = new OpenAPIHono()

export const cnIsHandler = app
  .openapi(getAccountsAccountIdCniCnisRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postAccountsAccountIdCniCnisRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteAccountsAccountIdCniCnisCniRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getAccountsAccountIdCniCnisCniRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putAccountsAccountIdCniCnisCniRoute, (c) => {
    throw new Error('Not implemented')
  })
