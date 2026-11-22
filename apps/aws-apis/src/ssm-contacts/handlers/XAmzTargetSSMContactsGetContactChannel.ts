import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetSSMContactsGetContactChannelRoute } from '../routes'

const app = new OpenAPIHono()

export const XAmzTargetSSMContactsGetContactChannelHandler = app.openapi(
  postXAmzTargetSSMContactsGetContactChannelRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
