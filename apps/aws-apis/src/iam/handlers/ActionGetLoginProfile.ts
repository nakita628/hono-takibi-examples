import { OpenAPIHono } from '@hono/zod-openapi'
import { getActionGetLoginProfileRoute, postActionGetLoginProfileRoute } from '../routes'

const app = new OpenAPIHono()

export const ActionGetLoginProfileHandler = app
  .openapi(getActionGetLoginProfileRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postActionGetLoginProfileRoute, (c) => {
    throw new Error('Not implemented')
  })
