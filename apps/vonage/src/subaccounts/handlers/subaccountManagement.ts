import { OpenAPIHono } from '@hono/zod-openapi'
import {
  getApiKeySubaccountsRoute,
  getApiKeySubaccountsSubaccountKeyRoute,
  patchApiKeySubaccountsSubaccountKeyRoute,
  postApiKeySubaccountsRoute,
} from '../routes'

const app = new OpenAPIHono()

export const subaccountManagementHandler = app
  .openapi(getApiKeySubaccountsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiKeySubaccountsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiKeySubaccountsSubaccountKeyRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchApiKeySubaccountsSubaccountKeyRoute, (c) => {
    throw new Error('Not implemented')
  })
