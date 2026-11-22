import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetAWSGlueGetSchemaByDefinitionRoute } from '../routes'

const app = new OpenAPIHono()

export const XAmzTargetAWSGlueGetSchemaByDefinitionHandler = app.openapi(
  postXAmzTargetAWSGlueGetSchemaByDefinitionRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
