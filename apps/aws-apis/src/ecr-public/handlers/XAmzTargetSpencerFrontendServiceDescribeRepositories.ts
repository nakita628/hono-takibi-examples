import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetSpencerFrontendServiceDescribeRepositoriesRoute } from '../routes'

const app = new OpenAPIHono()

export const XAmzTargetSpencerFrontendServiceDescribeRepositoriesHandler = app.openapi(
  postXAmzTargetSpencerFrontendServiceDescribeRepositoriesRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
