import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteAccountsAccountIdCniInterconnectsIconRoute,
  getAccountsAccountIdCniInterconnectsIconLoaDefaultRoute,
  getAccountsAccountIdCniInterconnectsIconLoaRoute,
  getAccountsAccountIdCniInterconnectsIconRoute,
  getAccountsAccountIdCniInterconnectsIconStatusRoute,
  getAccountsAccountIdCniInterconnectsRoute,
  postAccountsAccountIdCniInterconnectsRoute,
} from '../routes'

const app = new OpenAPIHono()

export const interconnectsHandler = app
  .openapi(getAccountsAccountIdCniInterconnectsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postAccountsAccountIdCniInterconnectsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteAccountsAccountIdCniInterconnectsIconRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getAccountsAccountIdCniInterconnectsIconRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getAccountsAccountIdCniInterconnectsIconLoaRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getAccountsAccountIdCniInterconnectsIconLoaDefaultRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getAccountsAccountIdCniInterconnectsIconStatusRoute, (c) => {
    throw new Error('Not implemented')
  })
