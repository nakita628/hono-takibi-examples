import { OpenAPIHono } from '@hono/zod-openapi'
import {
  getMarketingMarketingEvents202609AppIdSettingsRoute,
  postMarketingMarketingEvents202609AppIdSettingsRoute,
} from '../routes'

const app = new OpenAPIHono()

export const settingsHandler = app
  .openapi(getMarketingMarketingEvents202609AppIdSettingsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postMarketingMarketingEvents202609AppIdSettingsRoute, (c) => {
    throw new Error('Not implemented')
  })
