import { OpenAPIHono } from '@hono/zod-openapi'
import { getV1CategoryTypesRoute } from '../routes'

const app = new OpenAPIHono()

export const categoryTypesHandler = app.openapi(getV1CategoryTypesRoute, (c) => {
  throw new Error('Not implemented')
})
