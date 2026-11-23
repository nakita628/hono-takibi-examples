import { OpenAPIHono } from '@hono/zod-openapi'
import { getActionGetTopicAttributesRoute, postActionGetTopicAttributesRoute } from '../routes'

const app = new OpenAPIHono()

export const actionGetTopicAttributesHandler = app
  .openapi(getActionGetTopicAttributesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postActionGetTopicAttributesRoute, (c) => {
    throw new Error('Not implemented')
  })
