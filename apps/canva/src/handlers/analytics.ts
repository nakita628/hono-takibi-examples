import { OpenAPIHono } from '@hono/zod-openapi'
import {
  getV1DesignsDesignIdAnalyticsLinksRoute,
  getV1DesignsDesignIdAnalyticsRoute,
  getV1DesignsDesignIdAnalyticsViewersRoute,
  getV1DesignsDesignIdAnalyticsViewsOverTimeRoute,
  postV1DesignsDesignIdAnalyticsPageViewsRoute,
} from '../routes'

const app = new OpenAPIHono()

export const analyticsHandler = app
  .openapi(getV1DesignsDesignIdAnalyticsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV1DesignsDesignIdAnalyticsViewersRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV1DesignsDesignIdAnalyticsViewsOverTimeRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV1DesignsDesignIdAnalyticsPageViewsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV1DesignsDesignIdAnalyticsLinksRoute, (c) => {
    throw new Error('Not implemented')
  })
