import { OpenAPIHono } from '@hono/zod-openapi'
import { postDeleteSamplingRuleRoute } from '../routes'

const app = new OpenAPIHono()

export const deleteSamplingRuleHandler = app.openapi(postDeleteSamplingRuleRoute, (c) => {
  throw new Error('Not implemented')
})
