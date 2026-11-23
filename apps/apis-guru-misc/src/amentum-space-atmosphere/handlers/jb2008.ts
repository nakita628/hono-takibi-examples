import { OpenAPIHono } from '@hono/zod-openapi'
import { getJb2008Route } from '../routes'

const app = new OpenAPIHono()

export const jb2008Handler = app.openapi(getJb2008Route, (c) => {
  throw new Error('Not implemented')
})
