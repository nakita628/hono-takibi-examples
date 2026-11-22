import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetSSMContactsUpdateContactChannelRoute } from '../routes'

const app = new OpenAPIHono()

export const XAmzTargetSSMContactsUpdateContactChannelHandler = app.openapi(
  postXAmzTargetSSMContactsUpdateContactChannelRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
