import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetElasticMapReduceRemoveTagsRoute } from '../routes'

const app = new OpenAPIHono()

export const xAmzTargetElasticMapReduceRemoveTagsHandler = app.openapi(
  postXAmzTargetElasticMapReduceRemoveTagsRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
