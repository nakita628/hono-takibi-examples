import { OpenAPIHono } from '@hono/zod-openapi'
import {
  getApiV2ActivitiesActivityIdRoute,
  getApiV2ActivitiesCountRoute,
  getApiV2ActivitiesRoute,
} from '../routes'

const app = new OpenAPIHono()

export const activityStreamHandler = app
  .openapi(getApiV2ActivitiesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV2ActivitiesActivityIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV2ActivitiesCountRoute, (c) => {
    throw new Error('Not implemented')
  })
