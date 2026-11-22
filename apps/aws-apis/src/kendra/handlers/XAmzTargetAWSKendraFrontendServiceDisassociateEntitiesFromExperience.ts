import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetAWSKendraFrontendServiceDisassociateEntitiesFromExperienceRoute } from '../routes'

const app = new OpenAPIHono()

export const XAmzTargetAWSKendraFrontendServiceDisassociateEntitiesFromExperienceHandler =
  app.openapi(
    postXAmzTargetAWSKendraFrontendServiceDisassociateEntitiesFromExperienceRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
