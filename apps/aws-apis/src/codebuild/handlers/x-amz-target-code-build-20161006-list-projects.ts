import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetCodeBuild20161006ListProjectsRoute } from '../routes'

const app = new OpenAPIHono()

export const xAmzTargetCodeBuild20161006ListProjectsHandler = app.openapi(
  postXAmzTargetCodeBuild20161006ListProjectsRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
