import { OpenAPIHono } from '@hono/zod-openapi'
import { getGetCurationTagsByNameRoute } from '../routes'

const app = new OpenAPIHono()

export const getCurationTagsByNameHandler = app.openapi(getGetCurationTagsByNameRoute, (c) => {
  throw new Error('Not implemented')
})
