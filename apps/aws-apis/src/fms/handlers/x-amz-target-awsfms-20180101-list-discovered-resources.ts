import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetAWSFMS20180101ListDiscoveredResourcesRoute } from '../routes'

const app = new OpenAPIHono()

export const xAmzTargetAwsfms20180101ListDiscoveredResourcesHandler = app.openapi(
  postXAmzTargetAWSFMS20180101ListDiscoveredResourcesRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
