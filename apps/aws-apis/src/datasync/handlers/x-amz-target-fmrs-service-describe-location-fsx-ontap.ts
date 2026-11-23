import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetFmrsServiceDescribeLocationFsxOntapRoute } from '../routes'

const app = new OpenAPIHono()

export const xAmzTargetFmrsServiceDescribeLocationFsxOntapHandler = app.openapi(
  postXAmzTargetFmrsServiceDescribeLocationFsxOntapRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
