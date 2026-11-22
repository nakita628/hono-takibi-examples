import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteAccountsAccountIdAccessBookmarksBookmarkIdRoute,
  getAccountsAccountIdAccessBookmarksBookmarkIdRoute,
  getAccountsAccountIdAccessBookmarksRoute,
  postAccountsAccountIdAccessBookmarksBookmarkIdRoute,
  putAccountsAccountIdAccessBookmarksBookmarkIdRoute,
} from '../routes'

const app = new OpenAPIHono()

export const accessBookmarkApplicationsDeprecatedHandler = app
  .openapi(getAccountsAccountIdAccessBookmarksRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteAccountsAccountIdAccessBookmarksBookmarkIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getAccountsAccountIdAccessBookmarksBookmarkIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postAccountsAccountIdAccessBookmarksBookmarkIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putAccountsAccountIdAccessBookmarksBookmarkIdRoute, (c) => {
    throw new Error('Not implemented')
  })
