import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetAlexaForBusinessSearchDevicesRoute } from '../routes'

const app = new OpenAPIHono()

export const xAmzTargetAlexaForBusinessSearchDevicesHandler = app.openapi(
  postXAmzTargetAlexaForBusinessSearchDevicesRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
