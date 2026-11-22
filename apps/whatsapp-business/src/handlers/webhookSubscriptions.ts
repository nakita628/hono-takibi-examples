import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteVersionWABAIDSubscribedAppsRoute,
  getVersionWABAIDSubscribedAppsRoute,
  postVersionWABAIDSubscribedAppsRoute,
} from '../routes'

const app = new OpenAPIHono()

export const webhookSubscriptionsHandler = app
  .openapi(getVersionWABAIDSubscribedAppsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postVersionWABAIDSubscribedAppsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteVersionWABAIDSubscribedAppsRoute, (c) => {
    throw new Error('Not implemented')
  })
