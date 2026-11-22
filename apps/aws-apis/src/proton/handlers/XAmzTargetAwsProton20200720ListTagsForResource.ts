import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetAwsProton20200720ListTagsForResourceRoute } from '../routes'

const app = new OpenAPIHono()

export const XAmzTargetAwsProton20200720ListTagsForResourceHandler = app.openapi(
  postXAmzTargetAwsProton20200720ListTagsForResourceRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
