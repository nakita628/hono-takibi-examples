import { OpenAPIHono } from '@hono/zod-openapi'
import { getClipsPidRoute } from '../routes'

const app = new OpenAPIHono()

export const clipsHandler = app.openapi(getClipsPidRoute, (c) => {
  throw new Error('Not implemented')
})
