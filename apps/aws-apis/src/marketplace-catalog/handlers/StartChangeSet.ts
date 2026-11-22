import { OpenAPIHono } from '@hono/zod-openapi'
import { postStartChangeSetRoute } from '../routes'

const app = new OpenAPIHono()

export const StartChangeSetHandler = app.openapi(postStartChangeSetRoute, (c) => {
  throw new Error('Not implemented')
})
