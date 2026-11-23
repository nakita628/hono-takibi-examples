import { OpenAPIHono } from '@hono/zod-openapi'
import { getSaveCurationTagRoute } from '../routes'

const app = new OpenAPIHono()

export const saveCurationTagHandler = app.openapi(getSaveCurationTagRoute, (c) => {
  throw new Error('Not implemented')
})
