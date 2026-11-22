import { OpenAPIHono } from '@hono/zod-openapi'
import {
  getResourcesCampaignsIdJsonRoute,
  getResourcesCampaignsIdMediaJsonRoute,
  getResourcesCampaignsIdSyndicateFormatRoute,
  getResourcesCampaignsJsonRoute,
} from '../routes'

const app = new OpenAPIHono()

export const campaignsHandler = app
  .openapi(getResourcesCampaignsJsonRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getResourcesCampaignsIdJsonRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getResourcesCampaignsIdMediaJsonRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getResourcesCampaignsIdSyndicateFormatRoute, (c) => {
    throw new Error('Not implemented')
  })
