import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetStorageGateway20130630SetSMBGuestPasswordRoute } from '../routes'

const app = new OpenAPIHono()

export const XAmzTargetStorageGateway20130630SetSMBGuestPasswordHandler = app.openapi(
  postXAmzTargetStorageGateway20130630SetSMBGuestPasswordRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
