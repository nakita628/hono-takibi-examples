import { OpenAPIHono } from '@hono/zod-openapi'
import { postApiV1ReadlistsMatchComicrackRoute } from '../routes'

const app = new OpenAPIHono()

export const comicRackHandler = app.openapi(postApiV1ReadlistsMatchComicrackRoute, (c) => {
  throw new Error('Not implemented')
})
