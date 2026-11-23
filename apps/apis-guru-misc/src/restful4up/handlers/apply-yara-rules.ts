import { OpenAPIHono } from '@hono/zod-openapi'
import { postApplyYaraRulesRoute } from '../routes'

const app = new OpenAPIHono()

export const applyYaraRulesHandler = app.openapi(postApplyYaraRulesRoute, (c) => {
  throw new Error('Not implemented')
})
