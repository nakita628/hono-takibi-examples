import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetAWSHawksNestServiceFacadeGetListElementsRoute } from '../routes'

const app = new OpenAPIHono()

export const xAmzTargetAwsHawksNestServiceFacadeGetListElementsHandler = app.openapi(
  postXAmzTargetAWSHawksNestServiceFacadeGetListElementsRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
