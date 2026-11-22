import { OpenAPIHono } from '@hono/zod-openapi'
import { postSvgconvertRoute } from '../routes'

const app = new OpenAPIHono()

export const svgconvertHandler = app.openapi(postSvgconvertRoute, (c) => {
  throw new Error('Not implemented')
})
