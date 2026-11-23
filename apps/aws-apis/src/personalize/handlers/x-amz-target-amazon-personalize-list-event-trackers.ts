import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetAmazonPersonalizeListEventTrackersRoute } from '../routes'

const app = new OpenAPIHono()

export const xAmzTargetAmazonPersonalizeListEventTrackersHandler = app.openapi(
  postXAmzTargetAmazonPersonalizeListEventTrackersRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
