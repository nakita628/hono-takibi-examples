import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetAlexaForBusinessStartDeviceSyncRoute } from '../routes'

const app = new OpenAPIHono()

export const XAmzTargetAlexaForBusinessStartDeviceSyncHandler = app.openapi(
  postXAmzTargetAlexaForBusinessStartDeviceSyncRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
