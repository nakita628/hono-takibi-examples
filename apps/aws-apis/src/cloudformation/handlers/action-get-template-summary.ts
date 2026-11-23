import { OpenAPIHono } from '@hono/zod-openapi'
import { getActionGetTemplateSummaryRoute, postActionGetTemplateSummaryRoute } from '../routes'

const app = new OpenAPIHono()

export const actionGetTemplateSummaryHandler = app
  .openapi(getActionGetTemplateSummaryRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postActionGetTemplateSummaryRoute, (c) => {
    throw new Error('Not implemented')
  })
