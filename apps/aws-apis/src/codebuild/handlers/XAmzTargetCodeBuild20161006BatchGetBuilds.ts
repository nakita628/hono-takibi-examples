import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetCodeBuild20161006BatchGetBuildsRoute } from '../routes'

const app = new OpenAPIHono()

export const XAmzTargetCodeBuild20161006BatchGetBuildsHandler = app.openapi(
  postXAmzTargetCodeBuild20161006BatchGetBuildsRoute,
  (c) => {},
)
