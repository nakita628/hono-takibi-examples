import { OpenAPIHono } from '@hono/zod-openapi'
import { getConstantsResourceRoute } from '../routes'

const app = new OpenAPIHono()

export const constantsHandler = app.openapi(getConstantsResourceRoute, (c) => {
  throw new Error('Not implemented')
})
