import { OpenAPIHono } from '@hono/zod-openapi'
import { getV21Route } from '../routes'

const app = new OpenAPIHono()

export const resourcesHandler = app.openapi(getV21Route, (c) => {
  throw new Error('Not implemented')
})
