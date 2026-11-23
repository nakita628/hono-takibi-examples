import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetAWSKendraFrontendServiceAssociatePersonasToEntitiesRoute } from '../routes'

const app = new OpenAPIHono()

export const xAmzTargetAwsKendraFrontendServiceAssociatePersonasToEntitiesHandler = app.openapi(
  postXAmzTargetAWSKendraFrontendServiceAssociatePersonasToEntitiesRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
