import { OpenAPIHono } from '@hono/zod-openapi'
import { postSetlistenoireRoute } from '../routes'

const app = new OpenAPIHono()

export const setListeNoireHandler = app.openapi(postSetlistenoireRoute, (c) => {
  throw new Error('Not implemented')
})
