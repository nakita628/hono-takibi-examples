import { OpenAPIHono } from '@hono/zod-openapi'
import { postDeleteFleetRoute } from '../routes'

const app = new OpenAPIHono()

export const deleteFleetHandler = app.openapi(postDeleteFleetRoute, (c) => {
  throw new Error('Not implemented')
})
