import { OpenAPIHono } from '@hono/zod-openapi'
import { getNatrRoute } from '../routes'

const app = new OpenAPIHono()

export const natrHandler = app.openapi(getNatrRoute, (c) => {
  throw new Error('Not implemented')
})
