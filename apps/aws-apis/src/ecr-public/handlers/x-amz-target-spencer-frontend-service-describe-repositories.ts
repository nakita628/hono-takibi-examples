import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetSpencerFrontendServiceDescribeRepositoriesRoute } from '../routes'

const app = new OpenAPIHono()

export const xAmzTargetSpencerFrontendServiceDescribeRepositoriesHandler = app.openapi(
  postXAmzTargetSpencerFrontendServiceDescribeRepositoriesRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
