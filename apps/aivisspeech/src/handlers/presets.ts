import { OpenAPIHono } from '@hono/zod-openapi'
import { getPresetsRoute } from '../routes'

const app = new OpenAPIHono()

export const presetsHandler = app.openapi(getPresetsRoute, (c) => {
  throw new Error('Not implemented')
})
