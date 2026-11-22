import { OpenAPIHono } from '@hono/zod-openapi'
import { postSearchJobIdFeedbackRoute, postSearchRoute } from '../routes'

const app = new OpenAPIHono()

export const searchHandler = app
  .openapi(postSearchRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postSearchJobIdFeedbackRoute, (c) => {
    throw new Error('Not implemented')
  })
