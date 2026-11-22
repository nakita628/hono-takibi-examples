import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetAWSHawksNestServiceFacadeGetEventTypesRoute } from '../routes'

const app = new OpenAPIHono()

export const XAmzTargetAWSHawksNestServiceFacadeGetEventTypesHandler = app.openapi(
  postXAmzTargetAWSHawksNestServiceFacadeGetEventTypesRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
