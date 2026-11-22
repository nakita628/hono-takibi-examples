import { OpenAPIHono } from '@hono/zod-openapi'
import { postPromotepermissioncreatedfrompolicyRoute } from '../routes'

const app = new OpenAPIHono()

export const promotepermissioncreatedfrompolicyHandler = app.openapi(
  postPromotepermissioncreatedfrompolicyRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
