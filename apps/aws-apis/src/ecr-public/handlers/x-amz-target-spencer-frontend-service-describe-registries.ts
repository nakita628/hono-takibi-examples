import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetSpencerFrontendServiceDescribeRegistriesRoute } from '../routes'

const app = new OpenAPIHono()

export const xAmzTargetSpencerFrontendServiceDescribeRegistriesHandler = app.openapi(
  postXAmzTargetSpencerFrontendServiceDescribeRegistriesRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
