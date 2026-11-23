import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetCloudHsmFrontendServiceGetConfigRoute } from '../routes'

const app = new OpenAPIHono()

export const xAmzTargetCloudHsmFrontendServiceGetConfigHandler = app.openapi(
  postXAmzTargetCloudHsmFrontendServiceGetConfigRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
