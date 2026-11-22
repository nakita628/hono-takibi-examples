import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteAccountsAccountIdPagesProjectsProjectNameRoute,
  deleteAccountsAccountIdPagesProjectsProjectNameSourceRoute,
  getAccountsAccountIdPagesProjectsProjectNameRoute,
  getAccountsAccountIdPagesProjectsProjectNameUploadTokenRoute,
  getAccountsAccountIdPagesProjectsRoute,
  patchAccountsAccountIdPagesProjectsProjectNameRoute,
  postAccountsAccountIdPagesProjectsProjectNameSourceRoute,
  postAccountsAccountIdPagesProjectsRoute,
} from '../routes'

const app = new OpenAPIHono()

export const pagesProjectHandler = app
  .openapi(getAccountsAccountIdPagesProjectsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postAccountsAccountIdPagesProjectsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteAccountsAccountIdPagesProjectsProjectNameRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getAccountsAccountIdPagesProjectsProjectNameRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchAccountsAccountIdPagesProjectsProjectNameRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteAccountsAccountIdPagesProjectsProjectNameSourceRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postAccountsAccountIdPagesProjectsProjectNameSourceRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getAccountsAccountIdPagesProjectsProjectNameUploadTokenRoute, (c) => {
    throw new Error('Not implemented')
  })
