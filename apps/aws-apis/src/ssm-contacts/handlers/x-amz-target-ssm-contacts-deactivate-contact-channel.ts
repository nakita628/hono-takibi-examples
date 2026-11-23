import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetSSMContactsDeactivateContactChannelRoute } from '../routes'

const app = new OpenAPIHono()

export const xAmzTargetSsmContactsDeactivateContactChannelHandler = app.openapi(
  postXAmzTargetSSMContactsDeactivateContactChannelRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
