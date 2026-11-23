import { OpenAPIHono } from '@hono/zod-openapi'
import { getNoTagsSpecRoute } from '../routes'

const app = new OpenAPIHono()

export const noTagsSpecHandler = app.openapi(getNoTagsSpecRoute, (c) => {
  throw new Error('Not implemented')
})
