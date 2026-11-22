import { OpenAPIHono } from '@hono/zod-openapi'
import {
  getV1LocationsGlobalMetricsScopesListMetricsScopesByMonitoredProjectRoute,
  postV1ParentProjectsRoute,
} from '../routes'

const app = new OpenAPIHono()

export const locationsHandler = app
  .openapi(getV1LocationsGlobalMetricsScopesListMetricsScopesByMonitoredProjectRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV1ParentProjectsRoute, (c) => {
    throw new Error('Not implemented')
  })
