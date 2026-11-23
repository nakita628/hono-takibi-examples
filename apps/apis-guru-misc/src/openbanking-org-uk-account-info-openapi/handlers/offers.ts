import { OpenAPIHono } from '@hono/zod-openapi'
import { getOffersRoute } from '../routes'

const app = new OpenAPIHono()

export const offersHandler = app.openapi(getOffersRoute, (c) => {
  throw new Error('Not implemented')
})
