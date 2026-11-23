import { OpenAPIHono } from '@hono/zod-openapi'
import { getVainfoRoute } from '../routes'

const app = new OpenAPIHono()

export const vainfoHandler = app.openapi(getVainfoRoute, (c) => {
  throw new Error('Not implemented')
})
