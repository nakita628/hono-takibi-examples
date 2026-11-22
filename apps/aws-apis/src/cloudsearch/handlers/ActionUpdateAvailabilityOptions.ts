import { OpenAPIHono } from '@hono/zod-openapi'
import {
  getActionUpdateAvailabilityOptionsRoute,
  postActionUpdateAvailabilityOptionsRoute,
} from '../routes'

const app = new OpenAPIHono()

export const ActionUpdateAvailabilityOptionsHandler = app
  .openapi(getActionUpdateAvailabilityOptionsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postActionUpdateAvailabilityOptionsRoute, (c) => {
    throw new Error('Not implemented')
  })
