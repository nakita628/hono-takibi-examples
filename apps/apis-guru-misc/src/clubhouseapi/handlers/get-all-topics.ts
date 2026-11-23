import { OpenAPIHono } from '@hono/zod-openapi'
import { getGetAllTopicsRoute } from '../routes'

const app = new OpenAPIHono()

export const getAllTopicsHandler = app.openapi(getGetAllTopicsRoute, (c) => {
  throw new Error('Not implemented')
})
