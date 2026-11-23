import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetElasticMapReduceAddTagsRoute } from '../routes'

const app = new OpenAPIHono()

export const xAmzTargetElasticMapReduceAddTagsHandler = app.openapi(
  postXAmzTargetElasticMapReduceAddTagsRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
