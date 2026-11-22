import { OpenAPIHono } from '@hono/zod-openapi'
import { getActionRequestSpotFleetRoute, postActionRequestSpotFleetRoute } from '../routes'

const app = new OpenAPIHono()

export const ActionRequestSpotFleetHandler = app
  .openapi(getActionRequestSpotFleetRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postActionRequestSpotFleetRoute, (c) => {
    throw new Error('Not implemented')
  })
