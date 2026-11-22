import { OpenAPIHono } from '@hono/zod-openapi'
import { getAdminSettingsRoute, getAdminStatsRoute } from '../routes'

const app = new OpenAPIHono()

export const adminHandler = app
  .openapi(getAdminSettingsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getAdminStatsRoute, (c) => {
    throw new Error('Not implemented')
  })
