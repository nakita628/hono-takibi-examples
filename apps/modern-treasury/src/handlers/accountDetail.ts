import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteApiAccountsTypeAccountIdAccountDetailsIdRoute,
  getApiAccountsTypeAccountIdAccountDetailsIdRoute,
  getApiAccountsTypeAccountIdAccountDetailsRoute,
  postApiAccountsTypeAccountIdAccountDetailsRoute,
} from '../routes'

const app = new OpenAPIHono()

export const accountDetailHandler = app
  .openapi(getApiAccountsTypeAccountIdAccountDetailsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiAccountsTypeAccountIdAccountDetailsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiAccountsTypeAccountIdAccountDetailsIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteApiAccountsTypeAccountIdAccountDetailsIdRoute, (c) => {
    throw new Error('Not implemented')
  })
