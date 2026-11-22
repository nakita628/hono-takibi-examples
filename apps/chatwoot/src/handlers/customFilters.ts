import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteApiV1AccountsAccountIdCustomFiltersCustomFilterIdRoute,
  getApiV1AccountsAccountIdCustomFiltersCustomFilterIdRoute,
  getApiV1AccountsAccountIdCustomFiltersRoute,
  patchApiV1AccountsAccountIdCustomFiltersCustomFilterIdRoute,
  postApiV1AccountsAccountIdCustomFiltersRoute,
} from '../routes'

const app = new OpenAPIHono()

export const customFiltersHandler = app
  .openapi(getApiV1AccountsAccountIdCustomFiltersRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiV1AccountsAccountIdCustomFiltersRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV1AccountsAccountIdCustomFiltersCustomFilterIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchApiV1AccountsAccountIdCustomFiltersCustomFilterIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteApiV1AccountsAccountIdCustomFiltersCustomFilterIdRoute, (c) => {
    throw new Error('Not implemented')
  })
