import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetFmrsServiceUpdateLocationHdfsRoute } from '../routes'

const app = new OpenAPIHono()

export const XAmzTargetFmrsServiceUpdateLocationHdfsHandler = app.openapi(
  postXAmzTargetFmrsServiceUpdateLocationHdfsRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
