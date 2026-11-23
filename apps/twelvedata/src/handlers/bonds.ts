import { OpenAPIHono } from '@hono/zod-openapi'
import { getBondsRoute } from '../routes'

const app = new OpenAPIHono()

export const bondsHandler = app.openapi(getBondsRoute, (c) => {
  throw new Error('Not implemented')
})
