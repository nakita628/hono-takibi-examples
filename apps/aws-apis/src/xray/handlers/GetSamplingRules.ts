import { OpenAPIHono } from '@hono/zod-openapi'
import { postGetSamplingRulesRoute } from '../routes'

const app = new OpenAPIHono()

export const GetSamplingRulesHandler = app.openapi(postGetSamplingRulesRoute, (c) => {
  throw new Error('Not implemented')
})
