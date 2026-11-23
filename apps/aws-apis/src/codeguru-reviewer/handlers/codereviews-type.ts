import { OpenAPIHono } from '@hono/zod-openapi'
import { getCodereviewsTypeRoute } from '../routes'

const app = new OpenAPIHono()

export const codereviewsTypeHandler = app.openapi(getCodereviewsTypeRoute, (c) => {
  throw new Error('Not implemented')
})
