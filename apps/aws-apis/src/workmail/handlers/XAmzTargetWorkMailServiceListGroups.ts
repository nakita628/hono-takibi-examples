import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetWorkMailServiceListGroupsRoute } from '../routes'

const app = new OpenAPIHono()

export const XAmzTargetWorkMailServiceListGroupsHandler = app.openapi(
  postXAmzTargetWorkMailServiceListGroupsRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
