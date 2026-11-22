import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetCloudHsmFrontendServiceGetConfigRoute } from '../routes'

const app = new OpenAPIHono()

export const XAmzTargetCloudHsmFrontendServiceGetConfigHandler = app.openapi(
  postXAmzTargetCloudHsmFrontendServiceGetConfigRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
