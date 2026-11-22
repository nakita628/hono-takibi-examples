import { OpenAPIHono } from '@hono/zod-openapi'
import { getApiV1NewsSearchTitleRoute } from '../routes'

const app = new OpenAPIHono()

export const newsHandler = app.openapi(getApiV1NewsSearchTitleRoute, (c) => {
  throw new Error('Not implemented')
})
