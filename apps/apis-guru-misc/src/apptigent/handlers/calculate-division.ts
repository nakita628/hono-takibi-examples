import { OpenAPIHono } from '@hono/zod-openapi'
import { postCalculateDivisionRoute } from '../routes'

const app = new OpenAPIHono()

export const calculateDivisionHandler = app.openapi(postCalculateDivisionRoute, (c) => {
  throw new Error('Not implemented')
})
