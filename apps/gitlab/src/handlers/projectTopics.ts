import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteApiV4TopicsIdRoute,
  getApiV4TopicsIdRoute,
  getApiV4TopicsRoute,
  postApiV4TopicsMergeRoute,
  postApiV4TopicsRoute,
  putApiV4TopicsIdRoute,
} from '../routes'

const app = new OpenAPIHono()

export const projectTopicsHandler = app
  .openapi(getApiV4TopicsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiV4TopicsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV4TopicsIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putApiV4TopicsIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteApiV4TopicsIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiV4TopicsMergeRoute, (c) => {
    throw new Error('Not implemented')
  })
