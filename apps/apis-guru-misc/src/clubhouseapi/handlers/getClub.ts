import { OpenAPIHono } from '@hono/zod-openapi'
import { postGetClubRoute } from '../routes'

const app = new OpenAPIHono()

export const getClubHandler = app.openapi(postGetClubRoute, (c) => {
  throw new Error('Not implemented')
})
