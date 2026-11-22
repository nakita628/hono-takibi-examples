import { OpenAPIHono } from '@hono/zod-openapi'
import {
  getAccountsAccountIdCloudforceOneEventsDatasetDatasetIdTargetIndustriesRoute,
  getAccountsAccountIdCloudforceOneEventsTargetIndustriesCatalogRoute,
  getAccountsAccountIdCloudforceOneEventsTargetIndustriesRoute,
} from '../routes'

const app = new OpenAPIHono()

export const targetIndustryHandler = app
  .openapi(getAccountsAccountIdCloudforceOneEventsDatasetDatasetIdTargetIndustriesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getAccountsAccountIdCloudforceOneEventsTargetIndustriesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getAccountsAccountIdCloudforceOneEventsTargetIndustriesCatalogRoute, (c) => {
    throw new Error('Not implemented')
  })
