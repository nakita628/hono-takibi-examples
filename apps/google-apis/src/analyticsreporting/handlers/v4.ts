import { OpenAPIHono } from '@hono/zod-openapi'
import { postV4ReportsBatchGetRoute, postV4UserActivitySearchRoute } from '../routes'

const app = new OpenAPIHono()

export const v4Handler = app
  .openapi(postV4ReportsBatchGetRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV4UserActivitySearchRoute, (c) => {
    throw new Error('Not implemented')
  })
