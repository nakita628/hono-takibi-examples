import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetSSMContactsCreateContactChannelRoute } from '../routes'

const app = new OpenAPIHono()

export const xAmzTargetSsmContactsCreateContactChannelHandler = app.openapi(
  postXAmzTargetSSMContactsCreateContactChannelRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
