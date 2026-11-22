import { OpenAPIHono } from '@hono/zod-openapi'
import { getApiVersionLongviewPlanRoute, putApiVersionLongviewPlanRoute } from '../routes'

const app = new OpenAPIHono()

export const longviewPlansHandler = app
  .openapi(getApiVersionLongviewPlanRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putApiVersionLongviewPlanRoute, (c) => {
    throw new Error('Not implemented')
  })
