import { OpenAPIHono } from '@hono/zod-openapi'
import { getActionRejectDataShareRoute, postActionRejectDataShareRoute } from '../routes'

const app = new OpenAPIHono()

export const ActionRejectDataShareHandler = app
  .openapi(getActionRejectDataShareRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postActionRejectDataShareRoute, (c) => {
    throw new Error('Not implemented')
  })
