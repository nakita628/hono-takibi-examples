import { OpenAPIHono } from '@hono/zod-openapi'
import { postCollaboratorsRoute } from '../routes'

const app = new OpenAPIHono()

export const collaboratorsHandler = app.openapi(postCollaboratorsRoute, (c) => {
  throw new Error('Not implemented')
})
