import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetRoute53AutoNamingV20170314ListTagsForResourceRoute } from '../routes'

const app = new OpenAPIHono()

export const XAmzTargetRoute53AutoNamingV20170314ListTagsForResourceHandler = app.openapi(
  postXAmzTargetRoute53AutoNamingV20170314ListTagsForResourceRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
