import { OpenAPIHono } from '@hono/zod-openapi'
import { getComicIdInfo0JsonRoute } from '../routes'

const app = new OpenAPIHono()

export const comicIdHandler = app.openapi(getComicIdInfo0JsonRoute, (c) => {
  throw new Error('Not implemented')
})
