import { OpenAPIHono } from '@hono/zod-openapi'
import { postGetlistenoireRoute } from '../routes'

const app = new OpenAPIHono()

export const getListeNoireHandler = app.openapi(postGetlistenoireRoute, (c) => {
  throw new Error('Not implemented')
})
