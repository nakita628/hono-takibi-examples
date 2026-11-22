import { OpenAPIHono } from '@hono/zod-openapi'
import { postV1ReadRoute } from '../routes'

const app = new OpenAPIHono()

export const textHandler = app.openapi(postV1ReadRoute, (c) => {
  throw new Error('Not implemented')
})
