import { OpenAPIHono } from '@hono/zod-openapi'
import { putArchiveRuleRoute } from '../routes'

const app = new OpenAPIHono()

export const archiveRuleHandler = app.openapi(putArchiveRuleRoute, (c) => {
  throw new Error('Not implemented')
})
