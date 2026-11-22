import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetSSMContactsActivateContactChannelRoute } from '../routes'

const app = new OpenAPIHono()

export const XAmzTargetSSMContactsActivateContactChannelHandler = app.openapi(
  postXAmzTargetSSMContactsActivateContactChannelRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
