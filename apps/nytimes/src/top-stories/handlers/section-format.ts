import { OpenAPIHono } from '@hono/zod-openapi'
import { getSectionFormatRoute } from '../routes'

const app = new OpenAPIHono()

export const sectionFormatHandler = app.openapi(getSectionFormatRoute, (c) => {
  throw new Error('Not implemented')
})
