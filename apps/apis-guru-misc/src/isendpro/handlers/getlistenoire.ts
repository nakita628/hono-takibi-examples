import { OpenAPIHono } from '@hono/zod-openapi'
import { postGetlistenoireRoute } from '../routes'

const app = new OpenAPIHono()

export const getlistenoireHandler = app.openapi(postGetlistenoireRoute, (c) => {
  throw new Error('Not implemented')
})
