import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetCodeStar20170419ListTagsForProjectRoute } from '../routes'

const app = new OpenAPIHono()

export const xAmzTargetCodeStar20170419ListTagsForProjectHandler = app.openapi(
  postXAmzTargetCodeStar20170419ListTagsForProjectRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
