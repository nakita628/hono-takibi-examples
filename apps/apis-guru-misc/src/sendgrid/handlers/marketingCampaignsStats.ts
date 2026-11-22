import { OpenAPIHono } from '@hono/zod-openapi'
import {
  getMarketingStatsAutomationsExportRoute,
  getMarketingStatsAutomationsIdLinksRoute,
  getMarketingStatsAutomationsIdRoute,
  getMarketingStatsAutomationsRoute,
  getMarketingStatsSinglesendsExportRoute,
  getMarketingStatsSinglesendsIdLinksRoute,
  getMarketingStatsSinglesendsIdRoute,
  getMarketingStatsSinglesendsRoute,
} from '../routes'

const app = new OpenAPIHono()

export const marketingCampaignsStatsHandler = app
  .openapi(getMarketingStatsAutomationsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getMarketingStatsAutomationsExportRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getMarketingStatsAutomationsIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getMarketingStatsAutomationsIdLinksRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getMarketingStatsSinglesendsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getMarketingStatsSinglesendsExportRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getMarketingStatsSinglesendsIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getMarketingStatsSinglesendsIdLinksRoute, (c) => {
    throw new Error('Not implemented')
  })
