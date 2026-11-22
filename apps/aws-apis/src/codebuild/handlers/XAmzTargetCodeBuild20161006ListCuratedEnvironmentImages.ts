import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetCodeBuild20161006ListCuratedEnvironmentImagesRoute } from '../routes'

const app = new OpenAPIHono()

export const XAmzTargetCodeBuild20161006ListCuratedEnvironmentImagesHandler = app.openapi(
  postXAmzTargetCodeBuild20161006ListCuratedEnvironmentImagesRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
