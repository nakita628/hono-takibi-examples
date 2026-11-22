import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetAWSGlueListRegistriesRoute } from '../routes'

const app = new OpenAPIHono()

export const XAmzTargetAWSGlueListRegistriesHandler = app.openapi(
  postXAmzTargetAWSGlueListRegistriesRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
