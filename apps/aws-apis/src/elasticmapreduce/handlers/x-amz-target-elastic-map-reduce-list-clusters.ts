import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetElasticMapReduceListClustersRoute } from '../routes'

const app = new OpenAPIHono()

export const xAmzTargetElasticMapReduceListClustersHandler = app.openapi(
  postXAmzTargetElasticMapReduceListClustersRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
