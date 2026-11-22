import { OpenAPIHono } from '@hono/zod-openapi'
import {
  getStatsCommissionsRoute,
  getStatsPopularPairsRoute,
  getStatsProjectsRoute,
  getStatsStringsRoute,
  postStatsCommissionsRoute,
} from '../routes'

const app = new OpenAPIHono()

export const statsHandler = app
  .openapi(getStatsCommissionsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postStatsCommissionsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getStatsPopularPairsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getStatsProjectsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getStatsStringsRoute, (c) => {
    throw new Error('Not implemented')
  })
