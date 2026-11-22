import { OpenAPIHono } from '@hono/zod-openapi'
import {
  getChannelsAdsRoute,
  postChannelsAdsScheduleSnoozeRoute,
  postChannelsCommercialRoute,
} from '../routes'

const app = new OpenAPIHono()

export const adsHandler = app
  .openapi(postChannelsCommercialRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getChannelsAdsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postChannelsAdsScheduleSnoozeRoute, (c) => {
    throw new Error('Not implemented')
  })
