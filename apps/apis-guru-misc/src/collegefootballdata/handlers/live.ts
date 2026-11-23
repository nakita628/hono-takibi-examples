import { OpenAPIHono } from '@hono/zod-openapi'
import { getLivePlaysRoute } from '../routes'

const app = new OpenAPIHono()

export const liveHandler = app.openapi(getLivePlaysRoute, (c) => {
  throw new Error('Not implemented')
})
