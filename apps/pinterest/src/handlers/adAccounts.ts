import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteAdAccountsAdAccountIdSandboxRoute,
  getAdAccountsAdAccountIdAnalyticsRoute,
  getAdAccountsAdAccountIdMmmReportsRoute,
  getAdAccountsAdAccountIdReportsBrandCategorySkuRoute,
  getAdAccountsAdAccountIdReportsRoute,
  getAdAccountsAdAccountIdRoute,
  getAdAccountsAdAccountIdTargetingAnalyticsRoute,
  getAdAccountsAdAccountIdTemplatesRoute,
  getAdAccountsRoute,
  postAdAccountsAdAccountIdMmmReportsRoute,
  postAdAccountsAdAccountIdReportsBrandCategorySkuRoute,
  postAdAccountsAdAccountIdReportsRoute,
  postAdAccountsAdAccountIdTemplatesTemplateIdReportsRoute,
  postAdAccountsRoute,
} from '../routes'

const app = new OpenAPIHono()

export const adAccountsHandler = app
  .openapi(getAdAccountsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postAdAccountsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getAdAccountsAdAccountIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getAdAccountsAdAccountIdAnalyticsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getAdAccountsAdAccountIdMmmReportsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postAdAccountsAdAccountIdMmmReportsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getAdAccountsAdAccountIdReportsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postAdAccountsAdAccountIdReportsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getAdAccountsAdAccountIdReportsBrandCategorySkuRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postAdAccountsAdAccountIdReportsBrandCategorySkuRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteAdAccountsAdAccountIdSandboxRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getAdAccountsAdAccountIdTargetingAnalyticsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getAdAccountsAdAccountIdTemplatesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postAdAccountsAdAccountIdTemplatesTemplateIdReportsRoute, (c) => {
    throw new Error('Not implemented')
  })
