import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetCodeBuild20161006ListSharedProjectsRoute } from '../routes'

const app = new OpenAPIHono()

export const XAmzTargetCodeBuild20161006ListSharedProjectsHandler = app.openapi(
  postXAmzTargetCodeBuild20161006ListSharedProjectsRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
