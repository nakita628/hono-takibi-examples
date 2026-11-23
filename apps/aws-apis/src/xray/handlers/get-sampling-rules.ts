import { OpenAPIHono } from '@hono/zod-openapi'
import { postGetSamplingRulesRoute } from '../routes'

const app = new OpenAPIHono()

export const getSamplingRulesHandler = app.openapi(postGetSamplingRulesRoute, (c) => {
  throw new Error('Not implemented')
})
