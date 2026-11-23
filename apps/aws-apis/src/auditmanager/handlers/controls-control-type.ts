import { OpenAPIHono } from '@hono/zod-openapi'
import { getControlsControlTypeRoute } from '../routes'

const app = new OpenAPIHono()

export const controlsControlTypeHandler = app.openapi(getControlsControlTypeRoute, (c) => {
  throw new Error('Not implemented')
})
