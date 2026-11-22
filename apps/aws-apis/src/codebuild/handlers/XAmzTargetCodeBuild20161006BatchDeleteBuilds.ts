import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetCodeBuild20161006BatchDeleteBuildsRoute } from '../routes'

const app = new OpenAPIHono()

export const XAmzTargetCodeBuild20161006BatchDeleteBuildsHandler = app.openapi(
  postXAmzTargetCodeBuild20161006BatchDeleteBuildsRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
