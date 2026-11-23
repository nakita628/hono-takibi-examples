import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetSSMContactsListContactChannelsRoute } from '../routes'

const app = new OpenAPIHono()

export const xAmzTargetSsmContactsListContactChannelsHandler = app.openapi(
  postXAmzTargetSSMContactsListContactChannelsRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
