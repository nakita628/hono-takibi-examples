import { OpenAPIHono } from '@hono/zod-openapi'
import { getV1beta1NewsRoute } from '../routes'

const app = new OpenAPIHono()

export const newsHandler = app.openapi(getV1beta1NewsRoute, (c) => {
  throw new Error('Not implemented')
})
