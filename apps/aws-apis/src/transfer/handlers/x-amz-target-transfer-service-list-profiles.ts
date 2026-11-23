import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetTransferServiceListProfilesRoute } from '../routes'

const app = new OpenAPIHono()

export const xAmzTargetTransferServiceListProfilesHandler = app.openapi(
  postXAmzTargetTransferServiceListProfilesRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
