import { OpenAPIHono } from '@hono/zod-openapi'
import { getFindPlacesRoute } from '../routes'

const app = new OpenAPIHono()

export const findPlacesHandler = app.openapi(getFindPlacesRoute, (c) => {
  throw new Error('Not implemented')
})
