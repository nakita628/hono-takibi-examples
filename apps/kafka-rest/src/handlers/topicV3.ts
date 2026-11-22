import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteClustersClusterIdTopicsTopicNameRoute,
  getClustersClusterIdTopicsRoute,
  getClustersClusterIdTopicsTopicNameRoute,
  patchClustersClusterIdTopicsTopicNameRoute,
  postClustersClusterIdTopicsRoute,
} from '../routes'

const app = new OpenAPIHono()

export const topicV3Handler = app
  .openapi(getClustersClusterIdTopicsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postClustersClusterIdTopicsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getClustersClusterIdTopicsTopicNameRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchClustersClusterIdTopicsTopicNameRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteClustersClusterIdTopicsTopicNameRoute, (c) => {
    throw new Error('Not implemented')
  })
