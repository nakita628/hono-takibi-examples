import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetSSMContactsActivateContactChannelRoute } from '../routes'

const app = new OpenAPIHono()

export const xAmzTargetSsmContactsActivateContactChannelHandler = app.openapi(
  postXAmzTargetSSMContactsActivateContactChannelRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
