import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetAWSKendraFrontendServiceDisassociatePersonasFromEntitiesRoute } from '../routes'

const app = new OpenAPIHono()

export const XAmzTargetAWSKendraFrontendServiceDisassociatePersonasFromEntitiesHandler =
  app.openapi(postXAmzTargetAWSKendraFrontendServiceDisassociatePersonasFromEntitiesRoute, (c) => {
    throw new Error('Not implemented')
  })
