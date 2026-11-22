import { OpenAPIHono } from '@hono/zod-openapi'
import {
  getAccountsAccountIdDlpDataTagCategoryTemplatesRoute,
  getAccountsAccountIdDlpDataTagCategoryTemplatesTemplateIdRoute,
} from '../routes'

const app = new OpenAPIHono()

export const dlpDataTagCategoryTemplatesHandler = app
  .openapi(getAccountsAccountIdDlpDataTagCategoryTemplatesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getAccountsAccountIdDlpDataTagCategoryTemplatesTemplateIdRoute, (c) => {
    throw new Error('Not implemented')
  })
