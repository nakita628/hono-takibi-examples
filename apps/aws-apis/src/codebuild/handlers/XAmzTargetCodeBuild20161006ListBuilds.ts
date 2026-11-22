import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetCodeBuild20161006ListBuildsRoute } from '../routes'

const app = new OpenAPIHono()

export const XAmzTargetCodeBuild20161006ListBuildsHandler = app.openapi(
  postXAmzTargetCodeBuild20161006ListBuildsRoute,
  (c) => {},
)
