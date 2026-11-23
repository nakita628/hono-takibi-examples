import { OpenAPIHono } from '@hono/zod-openapi'
import { getMomRoute } from '../routes'

const app = new OpenAPIHono()

export const momHandler = app.openapi(getMomRoute, (c) => {
  throw new Error('Not implemented')
})
