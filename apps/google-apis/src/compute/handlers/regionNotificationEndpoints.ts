import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteProjectsProjectRegionsRegionNotificationEndpointsNotificationEndpointRoute,
  getProjectsProjectRegionsRegionNotificationEndpointsNotificationEndpointRoute,
  getProjectsProjectRegionsRegionNotificationEndpointsRoute,
  postProjectsProjectRegionsRegionNotificationEndpointsRoute,
} from '../routes'

const app = new OpenAPIHono()

export const regionNotificationEndpointsHandler = app
  .openapi(getProjectsProjectRegionsRegionNotificationEndpointsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postProjectsProjectRegionsRegionNotificationEndpointsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(
    deleteProjectsProjectRegionsRegionNotificationEndpointsNotificationEndpointRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(getProjectsProjectRegionsRegionNotificationEndpointsNotificationEndpointRoute, (c) => {
    throw new Error('Not implemented')
  })
