import { OpenAPIHono } from '@hono/zod-openapi'
import {
  getAccountsAccountIdCloudforceOneV2RequestsLegalResponseAccessCheckRoute,
  getAccountsAccountIdCloudforceOneV2RequestsProjectTypeConstantsRoute,
  getAccountsAccountIdCloudforceOneV2RequestsProjectTypeMetadataRoute,
  getAccountsAccountIdCloudforceOneV2RequestsProjectTypeQuotaRoute,
  getAccountsAccountIdCloudforceOneV2RequestsProjectTypeTypesRoute,
} from '../routes'

const app = new OpenAPIHono()

export const requests__DashboardHandler = app
  .openapi(getAccountsAccountIdCloudforceOneV2RequestsLegalResponseAccessCheckRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getAccountsAccountIdCloudforceOneV2RequestsProjectTypeConstantsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getAccountsAccountIdCloudforceOneV2RequestsProjectTypeMetadataRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getAccountsAccountIdCloudforceOneV2RequestsProjectTypeQuotaRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getAccountsAccountIdCloudforceOneV2RequestsProjectTypeTypesRoute, (c) => {
    throw new Error('Not implemented')
  })
