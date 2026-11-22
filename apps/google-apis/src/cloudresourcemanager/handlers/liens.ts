import { OpenAPIHono } from '@hono/zod-openapi'
import { getV3LiensRoute, postV3LiensRoute } from '../routes'

const app = new OpenAPIHono()

export const liensHandler = app
  .openapi(getV3LiensRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV3LiensRoute, (c) => {
    throw new Error('Not implemented')
  })
