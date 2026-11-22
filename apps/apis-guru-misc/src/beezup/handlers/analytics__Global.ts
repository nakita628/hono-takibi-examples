import { OpenAPIHono } from '@hono/zod-openapi'
import { getV2UserAnalyticsIndexRoute, getV2UserAnalyticsStoreIdRoute } from '../routes'

const app = new OpenAPIHono()

export const analytics__GlobalHandler = app
  .openapi(getV2UserAnalyticsIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV2UserAnalyticsStoreIdRoute, (c) => {
    throw new Error('Not implemented')
  })
