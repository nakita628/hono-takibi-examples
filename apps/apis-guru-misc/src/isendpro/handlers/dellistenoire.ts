import { OpenAPIHono } from '@hono/zod-openapi'
import { postDellistenoireRoute } from '../routes'

const app = new OpenAPIHono()

export const dellistenoireHandler = app.openapi(postDellistenoireRoute, (c) => {
  throw new Error('Not implemented')
})
