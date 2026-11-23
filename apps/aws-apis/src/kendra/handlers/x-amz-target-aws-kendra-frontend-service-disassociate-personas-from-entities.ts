import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetAWSKendraFrontendServiceDisassociatePersonasFromEntitiesRoute } from '../routes'

const app = new OpenAPIHono()

export const xAmzTargetAwsKendraFrontendServiceDisassociatePersonasFromEntitiesHandler =
  app.openapi(postXAmzTargetAWSKendraFrontendServiceDisassociatePersonasFromEntitiesRoute, (c) => {
    throw new Error('Not implemented')
  })
