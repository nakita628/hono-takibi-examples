import { OpenAPIHono } from '@hono/zod-openapi'
import {
  getAdAccountsAdAccountIdKeywordsMetricsRoute,
  getAdAccountsAdAccountIdKeywordsRoute,
  getTrendsKeywordsRegionTopTrendTypeRoute,
  patchAdAccountsAdAccountIdKeywordsRoute,
  postAdAccountsAdAccountIdKeywordsRoute,
} from '../routes'

const app = new OpenAPIHono()

export const keywordsHandler = app
  .openapi(getAdAccountsAdAccountIdKeywordsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postAdAccountsAdAccountIdKeywordsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchAdAccountsAdAccountIdKeywordsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getAdAccountsAdAccountIdKeywordsMetricsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getTrendsKeywordsRegionTopTrendTypeRoute, (c) => {
    throw new Error('Not implemented')
  })
