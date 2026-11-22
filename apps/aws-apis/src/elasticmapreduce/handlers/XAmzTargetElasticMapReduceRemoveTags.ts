import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetElasticMapReduceRemoveTagsRoute } from '../routes'

const app = new OpenAPIHono()

export const XAmzTargetElasticMapReduceRemoveTagsHandler = app.openapi(
  postXAmzTargetElasticMapReduceRemoveTagsRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
