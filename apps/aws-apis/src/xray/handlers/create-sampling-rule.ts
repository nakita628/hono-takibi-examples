import { OpenAPIHono } from '@hono/zod-openapi'
import { postCreateSamplingRuleRoute } from '../routes'

const app = new OpenAPIHono()

export const createSamplingRuleHandler = app.openapi(postCreateSamplingRuleRoute, (c) => {
  throw new Error('Not implemented')
})
