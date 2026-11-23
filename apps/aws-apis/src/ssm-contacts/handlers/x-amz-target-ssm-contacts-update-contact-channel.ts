import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetSSMContactsUpdateContactChannelRoute } from '../routes'

const app = new OpenAPIHono()

export const xAmzTargetSsmContactsUpdateContactChannelHandler = app.openapi(
  postXAmzTargetSSMContactsUpdateContactChannelRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
