import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteSubaccountsSubaccountIdRoute,
  getSubaccountsRoute,
  getSubaccountsSubaccountIdRoute,
  postSubaccountsRoute,
  putSubaccountsSubaccountIdRegenApiKeyRoute,
  putSubaccountsSubaccountIdRoute,
} from '../routes'

const app = new OpenAPIHono()

export const subaccountsHandler = app
  .openapi(getSubaccountsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postSubaccountsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteSubaccountsSubaccountIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getSubaccountsSubaccountIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putSubaccountsSubaccountIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putSubaccountsSubaccountIdRegenApiKeyRoute, (c) => {
    throw new Error('Not implemented')
  })
