import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetAWSHawksNestServiceFacadeListTagsForResourceRoute } from '../routes'

const app = new OpenAPIHono()

export const XAmzTargetAWSHawksNestServiceFacadeListTagsForResourceHandler = app.openapi(
  postXAmzTargetAWSHawksNestServiceFacadeListTagsForResourceRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
