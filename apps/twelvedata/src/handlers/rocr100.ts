import { OpenAPIHono } from '@hono/zod-openapi'
import { getRocr100Route } from '../routes'

const app = new OpenAPIHono()

export const rocr100Handler = app.openapi(getRocr100Route, (c) => {
  throw new Error('Not implemented')
})
