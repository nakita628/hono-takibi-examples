import { OpenAPIHono } from '@hono/zod-openapi'
import { getCategorizedObjectNamesRoute } from '../routes'

const app = new OpenAPIHono()

export const categorizedObjectNamesHandler = app.openapi(getCategorizedObjectNamesRoute, (c) => {
  throw new Error('Not implemented')
})
