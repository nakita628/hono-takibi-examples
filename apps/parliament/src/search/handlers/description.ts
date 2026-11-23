import { OpenAPIHono } from '@hono/zod-openapi'
import { getDescriptionRoute } from '../routes'

const app = new OpenAPIHono()

export const descriptionHandler = app.openapi(getDescriptionRoute, (c) => {
  throw new Error('Not implemented')
})
