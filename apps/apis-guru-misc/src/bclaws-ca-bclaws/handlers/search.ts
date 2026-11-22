import { OpenAPIHono } from '@hono/zod-openapi'
import { getSearchAspectIdFullsearchRoute } from '../routes'

const app = new OpenAPIHono()

export const searchHandler = app.openapi(getSearchAspectIdFullsearchRoute, (c) => {
  throw new Error('Not implemented')
})
