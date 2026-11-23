import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetCloudHsmFrontendServiceListLunaClientsRoute } from '../routes'

const app = new OpenAPIHono()

export const xAmzTargetCloudHsmFrontendServiceListLunaClientsHandler = app.openapi(
  postXAmzTargetCloudHsmFrontendServiceListLunaClientsRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
