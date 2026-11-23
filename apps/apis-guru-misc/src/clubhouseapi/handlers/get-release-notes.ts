import { OpenAPIHono } from '@hono/zod-openapi'
import { postGetReleaseNotesRoute } from '../routes'

const app = new OpenAPIHono()

export const getReleaseNotesHandler = app.openapi(postGetReleaseNotesRoute, (c) => {
  throw new Error('Not implemented')
})
