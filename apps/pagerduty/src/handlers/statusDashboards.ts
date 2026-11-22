import { OpenAPIHono } from '@hono/zod-openapi'
import {
  getStatusDashboardsIdRoute,
  getStatusDashboardsIdServiceImpactsRoute,
  getStatusDashboardsRoute,
  getStatusDashboardsUrlSlugsUrlSlugRoute,
  getStatusDashboardsUrlSlugsUrlSlugServiceImpactsRoute,
} from '../routes'

const app = new OpenAPIHono()

export const statusDashboardsHandler = app
  .openapi(getStatusDashboardsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getStatusDashboardsIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getStatusDashboardsIdServiceImpactsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getStatusDashboardsUrlSlugsUrlSlugRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getStatusDashboardsUrlSlugsUrlSlugServiceImpactsRoute, (c) => {
    throw new Error('Not implemented')
  })
