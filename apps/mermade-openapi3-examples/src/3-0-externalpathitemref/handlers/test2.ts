import { OpenAPIHono } from '@hono/zod-openapi'
import { getTest2Route } from '../routes'

const app = new OpenAPIHono()

export const test2Handler = app.openapi(getTest2Route, (c) => {
  throw new Error('Not implemented')
})
