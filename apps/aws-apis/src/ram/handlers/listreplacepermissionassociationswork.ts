import { OpenAPIHono } from '@hono/zod-openapi'
import { postListreplacepermissionassociationsworkRoute } from '../routes'

const app = new OpenAPIHono()

export const listreplacepermissionassociationsworkHandler = app.openapi(
  postListreplacepermissionassociationsworkRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
