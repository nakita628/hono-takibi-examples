import { OpenAPIHono } from '@hono/zod-openapi'
import {
  getApiAdminEventCreatorsRoute,
  getApiAdminEventsFeatureNameRoute,
  getApiAdminEventsRoute,
  getApiAdminSearchEventsRoute,
} from '../routes'

const app = new OpenAPIHono()

export const eventsHandler = app
  .openapi(getApiAdminEventsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiAdminEventsFeatureNameRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiAdminEventCreatorsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiAdminSearchEventsRoute, (c) => {
    throw new Error('Not implemented')
  })
