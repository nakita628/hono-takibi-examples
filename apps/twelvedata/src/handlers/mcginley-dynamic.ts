import { OpenAPIHono } from '@hono/zod-openapi'
import { getMcginleyDynamicRoute } from '../routes'

const app = new OpenAPIHono()

export const mcginleyDynamicHandler = app.openapi(getMcginleyDynamicRoute, (c) => {
  throw new Error('Not implemented')
})
