import { OpenAPIHono } from '@hono/zod-openapi'
import { postCollaboratorsRoute } from '../routes'

const app = new OpenAPIHono()

export const restrictedHandler = app.openapi(postCollaboratorsRoute, (c) => {
  throw new Error('Not implemented')
})
