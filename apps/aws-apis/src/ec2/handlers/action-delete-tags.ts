import { OpenAPIHono } from '@hono/zod-openapi'
import { getActionDeleteTagsRoute, postActionDeleteTagsRoute } from '../routes'

const app = new OpenAPIHono()

export const actionDeleteTagsHandler = app
  .openapi(getActionDeleteTagsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postActionDeleteTagsRoute, (c) => {
    throw new Error('Not implemented')
  })
