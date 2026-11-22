import { OpenAPIHono } from '@hono/zod-openapi'
import { getNamesNameIdOutputFormatRoute } from '../routes'

const app = new OpenAPIHono()

export const nameHandler = app.openapi(getNamesNameIdOutputFormatRoute, (c) => {
  throw new Error('Not implemented')
})
