import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetFmrsServiceCreateLocationHdfsRoute } from '../routes'

const app = new OpenAPIHono()

export const xAmzTargetFmrsServiceCreateLocationHdfsHandler = app.openapi(
  postXAmzTargetFmrsServiceCreateLocationHdfsRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
