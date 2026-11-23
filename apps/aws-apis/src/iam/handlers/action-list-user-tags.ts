import { OpenAPIHono } from '@hono/zod-openapi'
import { getActionListUserTagsRoute, postActionListUserTagsRoute } from '../routes'

const app = new OpenAPIHono()

export const actionListUserTagsHandler = app
  .openapi(getActionListUserTagsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postActionListUserTagsRoute, (c) => {
    throw new Error('Not implemented')
  })
