import { OpenAPIHono } from '@hono/zod-openapi'
import { getOpenSearchDescriptionRoute } from '../routes'

const app = new OpenAPIHono()

export const openSearchDescriptionHandler = app.openapi(getOpenSearchDescriptionRoute, (c) => {
  throw new Error('Not implemented')
})
