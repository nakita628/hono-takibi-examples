import { OpenAPIHono } from '@hono/zod-openapi'
import { getGlobalpageloadRoute } from '../routes'

const app = new OpenAPIHono()

export const globalpageloadHandler = app.openapi(getGlobalpageloadRoute, (c) => {
  throw new Error('Not implemented')
})
