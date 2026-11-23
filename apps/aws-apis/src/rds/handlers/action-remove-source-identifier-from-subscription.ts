import { OpenAPIHono } from '@hono/zod-openapi'
import {
  getActionRemoveSourceIdentifierFromSubscriptionRoute,
  postActionRemoveSourceIdentifierFromSubscriptionRoute,
} from '../routes'

const app = new OpenAPIHono()

export const actionRemoveSourceIdentifierFromSubscriptionHandler = app
  .openapi(getActionRemoveSourceIdentifierFromSubscriptionRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postActionRemoveSourceIdentifierFromSubscriptionRoute, (c) => {
    throw new Error('Not implemented')
  })
