import { OpenAPIHono } from '@hono/zod-openapi'
import { getKstRoute } from '../routes'

const app = new OpenAPIHono()

export const kstHandler = app.openapi(getKstRoute, (c) => {
  throw new Error('Not implemented')
})
