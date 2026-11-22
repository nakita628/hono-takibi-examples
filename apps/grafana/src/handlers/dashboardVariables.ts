import { OpenAPIHono } from '@hono/zod-openapi'
import {
  getDashboardsVariablesSharedClustersOccurrencesRoute,
  getDashboardsVariablesSharedClustersRoute,
  postDashboardsVariablesPromoteRoute,
  postDashboardsVariablesSharedClustersRescanRoute,
} from '../routes'

const app = new OpenAPIHono()

export const dashboardVariablesHandler = app
  .openapi(postDashboardsVariablesPromoteRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getDashboardsVariablesSharedClustersRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getDashboardsVariablesSharedClustersOccurrencesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postDashboardsVariablesSharedClustersRescanRoute, (c) => {
    throw new Error('Not implemented')
  })
