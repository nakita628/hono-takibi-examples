import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetCloudHsmFrontendServiceListHsmsRoute } from '../routes'

const app = new OpenAPIHono()

export const xAmzTargetCloudHsmFrontendServiceListHsmsHandler = app.openapi(
  postXAmzTargetCloudHsmFrontendServiceListHsmsRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
