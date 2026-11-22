import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteAdAccountsAdAccountIdConversionDeletionRequestsRequestIdRoute,
  getAdAccountsAdAccountIdConversionDeletionRequestsRequestIdRoute,
  getAdAccountsAdAccountIdConversionDeletionRequestsRoute,
  postAdAccountsAdAccountIdConversionDeletionRequestsRoute,
} from '../routes'

const app = new OpenAPIHono()

export const conversionDeletionRequestsHandler = app
  .openapi(getAdAccountsAdAccountIdConversionDeletionRequestsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postAdAccountsAdAccountIdConversionDeletionRequestsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getAdAccountsAdAccountIdConversionDeletionRequestsRequestIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteAdAccountsAdAccountIdConversionDeletionRequestsRequestIdRoute, (c) => {
    throw new Error('Not implemented')
  })
