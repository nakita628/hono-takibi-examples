import { OpenAPIHono } from '@hono/zod-openapi'
import { getActivitiesActivityIdCommentsRoute, getCommentsCommentIdRoute } from '../routes'

const app = new OpenAPIHono()

export const commentsHandler = app
  .openapi(getActivitiesActivityIdCommentsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getCommentsCommentIdRoute, (c) => {
    throw new Error('Not implemented')
  })
