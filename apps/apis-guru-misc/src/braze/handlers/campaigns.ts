import { OpenAPIHono } from '@hono/zod-openapi'
import {
  getCampaignsDataSeriesRoute,
  getCampaignsDetailsRoute,
  getCampaignsListRoute,
} from '../routes'

const app = new OpenAPIHono()

export const campaignsHandler = app
  .openapi(getCampaignsDataSeriesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getCampaignsDetailsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getCampaignsListRoute, (c) => {
    throw new Error('Not implemented')
  })
