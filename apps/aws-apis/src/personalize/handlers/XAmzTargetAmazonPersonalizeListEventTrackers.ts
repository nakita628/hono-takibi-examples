import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetAmazonPersonalizeListEventTrackersRoute } from '../routes'

const app = new OpenAPIHono()

export const XAmzTargetAmazonPersonalizeListEventTrackersHandler = app.openapi(
  postXAmzTargetAmazonPersonalizeListEventTrackersRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
