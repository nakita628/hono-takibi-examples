import { OpenAPIHono } from '@hono/zod-openapi'
import { postSetlistenoireRoute } from '../routes'

const app = new OpenAPIHono()

export const setlistenoireHandler = app.openapi(postSetlistenoireRoute, (c) => {
  throw new Error('Not implemented')
})
