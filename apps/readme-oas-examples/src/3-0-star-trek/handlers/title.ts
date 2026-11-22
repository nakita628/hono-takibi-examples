import { OpenAPIHono } from '@hono/zod-openapi'
import { getTitleRoute, getTitleSearchRoute, postTitleSearchRoute } from '../routes'

const app = new OpenAPIHono()

export const titleHandler = app
  .openapi(getTitleRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getTitleSearchRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postTitleSearchRoute, (c) => {
    throw new Error('Not implemented')
  })
