import { OpenAPIHono } from '@hono/zod-openapi'
import { postUpdateSamplingRuleRoute } from '../routes'

const app = new OpenAPIHono()

export const UpdateSamplingRuleHandler = app.openapi(postUpdateSamplingRuleRoute, (c) => {
  throw new Error('Not implemented')
})
