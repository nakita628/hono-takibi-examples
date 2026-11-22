import { OpenAPIHono } from '@hono/zod-openapi'
import {
  getStatsCategoriesRoute,
  getStatsGameAdvancedRoute,
  getStatsSeasonAdvancedRoute,
  getStatsSeasonRoute,
} from '../routes'

const app = new OpenAPIHono()

export const statsHandler = app
  .openapi(getStatsCategoriesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getStatsGameAdvancedRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getStatsSeasonRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getStatsSeasonAdvancedRoute, (c) => {
    throw new Error('Not implemented')
  })
