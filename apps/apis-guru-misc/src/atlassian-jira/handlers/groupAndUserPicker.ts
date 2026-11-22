import { OpenAPIHono } from '@hono/zod-openapi'
import { getRestApi3GroupuserpickerRoute } from '../routes'

const app = new OpenAPIHono()

export const groupAndUserPickerHandler = app.openapi(getRestApi3GroupuserpickerRoute, (c) => {
  throw new Error('Not implemented')
})
