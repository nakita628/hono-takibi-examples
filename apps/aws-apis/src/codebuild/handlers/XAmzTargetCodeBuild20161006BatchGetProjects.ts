import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetCodeBuild20161006BatchGetProjectsRoute } from '../routes'

const app = new OpenAPIHono()

export const XAmzTargetCodeBuild20161006BatchGetProjectsHandler = app.openapi(
  postXAmzTargetCodeBuild20161006BatchGetProjectsRoute,
  (c) => {},
)
