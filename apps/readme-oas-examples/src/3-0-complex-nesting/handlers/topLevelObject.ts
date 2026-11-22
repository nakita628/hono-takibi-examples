import { OpenAPIHono } from '@hono/zod-openapi'
import { postTopLevelObjectOfEverythingRoute } from '../routes'

const app = new OpenAPIHono()

export const topLevelObjectHandler = app.openapi(postTopLevelObjectOfEverythingRoute, (c) => {
  throw new Error('Not implemented')
})
