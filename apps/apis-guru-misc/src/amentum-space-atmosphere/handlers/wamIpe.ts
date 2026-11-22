import { OpenAPIHono } from '@hono/zod-openapi'
import { getWamIpeRoute } from '../routes'

const app = new OpenAPIHono()

export const wamIpeHandler = app.openapi(getWamIpeRoute, (c) => {
  throw new Error('Not implemented')
})
