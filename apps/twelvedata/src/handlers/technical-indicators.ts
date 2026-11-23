import { OpenAPIHono } from '@hono/zod-openapi'
import { getTechnicalIndicatorsRoute } from '../routes'

const app = new OpenAPIHono()

export const technicalIndicatorsHandler = app.openapi(getTechnicalIndicatorsRoute, (c) => {
  throw new Error('Not implemented')
})
