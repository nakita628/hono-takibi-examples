import { OpenAPIHono } from '@hono/zod-openapi'
import { getDirectHoldersRoute } from '../routes'

const app = new OpenAPIHono()

export const directHoldersHandler = app.openapi(getDirectHoldersRoute, (c) => {
  throw new Error('Not implemented')
})
