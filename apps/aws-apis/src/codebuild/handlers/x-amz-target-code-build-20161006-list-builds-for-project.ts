import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetCodeBuild20161006ListBuildsForProjectRoute } from '../routes'

const app = new OpenAPIHono()

export const xAmzTargetCodeBuild20161006ListBuildsForProjectHandler = app.openapi(
  postXAmzTargetCodeBuild20161006ListBuildsForProjectRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
