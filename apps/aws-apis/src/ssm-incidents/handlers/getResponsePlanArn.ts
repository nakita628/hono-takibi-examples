import { OpenAPIHono } from '@hono/zod-openapi'
import { getGetResponsePlanArnRoute } from '../routes'

const app = new OpenAPIHono()

export const getResponsePlanArnHandler = app.openapi(getGetResponsePlanArnRoute, (c) => {
  throw new Error('Not implemented')
})
