import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetSSMContactsDeleteContactChannelRoute } from '../routes'

const app = new OpenAPIHono()

export const XAmzTargetSSMContactsDeleteContactChannelHandler = app.openapi(
  postXAmzTargetSSMContactsDeleteContactChannelRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
