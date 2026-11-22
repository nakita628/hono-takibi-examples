import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetCodeBuild20161006PutResourcePolicyRoute } from '../routes'

const app = new OpenAPIHono()

export const XAmzTargetCodeBuild20161006PutResourcePolicyHandler = app.openapi(
  postXAmzTargetCodeBuild20161006PutResourcePolicyRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
