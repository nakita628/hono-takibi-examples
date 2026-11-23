import { OpenAPIHono } from '@hono/zod-openapi'
import { postGeneratePartialYaraRulesRoute } from '../routes'

const app = new OpenAPIHono()

export const generatePartialYaraRulesHandler = app.openapi(
  postGeneratePartialYaraRulesRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
