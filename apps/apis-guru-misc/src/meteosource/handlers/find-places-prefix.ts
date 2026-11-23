import { OpenAPIHono } from '@hono/zod-openapi'
import { getFindPlacesPrefixRoute } from '../routes'

const app = new OpenAPIHono()

export const findPlacesPrefixHandler = app.openapi(getFindPlacesPrefixRoute, (c) => {
  throw new Error('Not implemented')
})
