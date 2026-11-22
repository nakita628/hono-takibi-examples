import { OpenAPIHono } from '@hono/zod-openapi'
import { getActionCreateTagsRoute, postActionCreateTagsRoute } from '../routes'

const app = new OpenAPIHono()

export const ActionCreateTagsHandler = app
  .openapi(getActionCreateTagsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postActionCreateTagsRoute, (c) => {
    throw new Error('Not implemented')
  })
