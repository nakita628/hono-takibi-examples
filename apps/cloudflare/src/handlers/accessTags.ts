import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteAccountsAccountIdAccessTagsTagNameRoute,
  getAccountsAccountIdAccessTagsRoute,
  getAccountsAccountIdAccessTagsTagNameRoute,
  postAccountsAccountIdAccessTagsRoute,
  putAccountsAccountIdAccessTagsTagNameRoute,
} from '../routes'

const app = new OpenAPIHono()

export const accessTagsHandler = app
  .openapi(getAccountsAccountIdAccessTagsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postAccountsAccountIdAccessTagsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteAccountsAccountIdAccessTagsTagNameRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getAccountsAccountIdAccessTagsTagNameRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putAccountsAccountIdAccessTagsTagNameRoute, (c) => {
    throw new Error('Not implemented')
  })
