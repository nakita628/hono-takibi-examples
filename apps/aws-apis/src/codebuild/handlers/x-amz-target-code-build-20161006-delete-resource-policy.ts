import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetCodeBuild20161006DeleteResourcePolicyRoute } from '../routes'

const app = new OpenAPIHono()

export const xAmzTargetCodeBuild20161006DeleteResourcePolicyHandler = app.openapi(
  postXAmzTargetCodeBuild20161006DeleteResourcePolicyRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
