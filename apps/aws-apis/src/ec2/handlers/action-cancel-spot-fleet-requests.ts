import { OpenAPIHono } from '@hono/zod-openapi'
import {
  getActionCancelSpotFleetRequestsRoute,
  postActionCancelSpotFleetRequestsRoute,
} from '../routes'

const app = new OpenAPIHono()

export const actionCancelSpotFleetRequestsHandler = app
  .openapi(getActionCancelSpotFleetRequestsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postActionCancelSpotFleetRequestsRoute, (c) => {
    throw new Error('Not implemented')
  })
