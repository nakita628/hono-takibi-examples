import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetCodeBuild20161006GetResourcePolicyRoute } from '../routes'

const app = new OpenAPIHono()

export const XAmzTargetCodeBuild20161006GetResourcePolicyHandler = app.openapi(
  postXAmzTargetCodeBuild20161006GetResourcePolicyRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
