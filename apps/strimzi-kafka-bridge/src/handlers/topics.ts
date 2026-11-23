import { OpenAPIHono } from '@hono/zod-openapi'
import {
  getTopicsRoute,
  getTopicsTopicnamePartitionsPartitionidOffsetsRoute,
  getTopicsTopicnamePartitionsPartitionidRoute,
  getTopicsTopicnamePartitionsRoute,
  getTopicsTopicnameRoute,
  postTopicsTopicnamePartitionsPartitionidRoute,
  postTopicsTopicnameRoute,
} from '../routes'

const app = new OpenAPIHono()

export const topicsHandler = app
  .openapi(getTopicsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getTopicsTopicnameRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postTopicsTopicnameRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getTopicsTopicnamePartitionsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getTopicsTopicnamePartitionsPartitionidRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postTopicsTopicnamePartitionsPartitionidRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getTopicsTopicnamePartitionsPartitionidOffsetsRoute, (c) => {
    throw new Error('Not implemented')
  })
