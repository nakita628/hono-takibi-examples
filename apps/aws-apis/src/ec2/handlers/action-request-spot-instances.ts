import { OpenAPIHono } from '@hono/zod-openapi'
import { getActionRequestSpotInstancesRoute, postActionRequestSpotInstancesRoute } from '../routes'

const app = new OpenAPIHono()

export const actionRequestSpotInstancesHandler = app
  .openapi(getActionRequestSpotInstancesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postActionRequestSpotInstancesRoute, (c) => {
    throw new Error('Not implemented')
  })
