import { OpenAPIHono } from '@hono/zod-openapi'
import { getRemoveCurationTagRoute } from '../routes'

const app = new OpenAPIHono()

export const removeCurationTagHandler = app.openapi(getRemoveCurationTagRoute, (c) => {
  throw new Error('Not implemented')
})
