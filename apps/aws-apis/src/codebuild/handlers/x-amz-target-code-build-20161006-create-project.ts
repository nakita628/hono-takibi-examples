import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetCodeBuild20161006CreateProjectRoute } from '../routes'

const app = new OpenAPIHono()

export const xAmzTargetCodeBuild20161006CreateProjectHandler = app.openapi(
  postXAmzTargetCodeBuild20161006CreateProjectRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
