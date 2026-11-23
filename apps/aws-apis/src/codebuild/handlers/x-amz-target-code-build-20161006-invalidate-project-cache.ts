import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetCodeBuild20161006InvalidateProjectCacheRoute } from '../routes'

const app = new OpenAPIHono()

export const xAmzTargetCodeBuild20161006InvalidateProjectCacheHandler = app.openapi(
  postXAmzTargetCodeBuild20161006InvalidateProjectCacheRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
