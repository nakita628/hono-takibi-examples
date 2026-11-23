import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetAWSHawksNestServiceFacadeDeleteExternalModelRoute } from '../routes'

const app = new OpenAPIHono()

export const xAmzTargetAwsHawksNestServiceFacadeDeleteExternalModelHandler = app.openapi(
  postXAmzTargetAWSHawksNestServiceFacadeDeleteExternalModelRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
