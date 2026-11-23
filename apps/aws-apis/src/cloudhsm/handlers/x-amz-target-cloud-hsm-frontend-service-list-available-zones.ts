import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetCloudHsmFrontendServiceListAvailableZonesRoute } from '../routes'

const app = new OpenAPIHono()

export const xAmzTargetCloudHsmFrontendServiceListAvailableZonesHandler = app.openapi(
  postXAmzTargetCloudHsmFrontendServiceListAvailableZonesRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
