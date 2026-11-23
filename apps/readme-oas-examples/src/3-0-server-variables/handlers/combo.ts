import { OpenAPIHono } from '@hono/zod-openapi'
import { putComboRoute } from '../routes'

const app = new OpenAPIHono()

export const comboHandler = app.openapi(putComboRoute, (c) => {
  throw new Error('Not implemented')
})
