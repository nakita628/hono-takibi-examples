import { OpenAPIHono } from '@hono/zod-openapi'
import { getActionSetTopicAttributesRoute, postActionSetTopicAttributesRoute } from '../routes'

const app = new OpenAPIHono()

export const ActionSetTopicAttributesHandler = app
  .openapi(getActionSetTopicAttributesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postActionSetTopicAttributesRoute, (c) => {
    throw new Error('Not implemented')
  })
