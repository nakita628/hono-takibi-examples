import { OpenAPIHono } from '@hono/zod-openapi'
import {
  getPublicDashboardsAccessTokenAnnotationsRoute,
  getPublicDashboardsAccessTokenRoute,
  postPublicDashboardsAccessTokenPanelsPanelIdQueryRoute,
} from '../routes'

const app = new OpenAPIHono()

export const publicHandler = app
  .openapi(getPublicDashboardsAccessTokenRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getPublicDashboardsAccessTokenAnnotationsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postPublicDashboardsAccessTokenPanelsPanelIdQueryRoute, (c) => {
    throw new Error('Not implemented')
  })
