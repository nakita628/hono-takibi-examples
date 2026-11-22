import { OpenAPIHono } from '@hono/zod-openapi'
import { getActionListTagsForResourceRoute, postActionListTagsForResourceRoute } from '../routes'

const app = new OpenAPIHono()

export const ActionListTagsForResourceHandler = app
  .openapi(getActionListTagsForResourceRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postActionListTagsForResourceRoute, (c) => {
    throw new Error('Not implemented')
  })
