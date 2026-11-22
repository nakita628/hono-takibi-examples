import { OpenAPIHono } from '@hono/zod-openapi'
import { getApiV1StagesRoute } from '../routes'

const app = new OpenAPIHono()

export const stagesHandler = app.openapi(getApiV1StagesRoute, (c) => {
  throw new Error('Not implemented')
})
