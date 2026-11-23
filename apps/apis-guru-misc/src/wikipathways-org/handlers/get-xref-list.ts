import { OpenAPIHono } from '@hono/zod-openapi'
import { getGetXrefListRoute } from '../routes'

const app = new OpenAPIHono()

export const getXrefListHandler = app.openapi(getGetXrefListRoute, (c) => {
  throw new Error('Not implemented')
})
