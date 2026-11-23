import { OpenAPIHono } from '@hono/zod-openapi'
import { getSearchHintsRoute } from '../routes'

const app = new OpenAPIHono()

export const searchHandler = app.openapi(getSearchHintsRoute, (c) => {
  throw new Error('Not implemented')
})
