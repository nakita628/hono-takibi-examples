import { OpenAPIHono } from '@hono/zod-openapi'
import { getWhoamiRoute } from '../routes'

const app = new OpenAPIHono()

export const whoamiHandler = app.openapi(getWhoamiRoute, (c) => {
  throw new Error('Not implemented')
})
