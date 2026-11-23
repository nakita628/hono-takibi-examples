import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetAlexaForBusinessAssociateDeviceWithNetworkProfileRoute } from '../routes'

const app = new OpenAPIHono()

export const xAmzTargetAlexaForBusinessAssociateDeviceWithNetworkProfileHandler = app.openapi(
  postXAmzTargetAlexaForBusinessAssociateDeviceWithNetworkProfileRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
