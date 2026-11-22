import { OpenAPIHono } from '@hono/zod-openapi'
import { postPsd2FormatRoute } from '../routes'

const app = new OpenAPIHono()

export const psd2Handler = app.openapi(postPsd2FormatRoute, (c) => {
  throw new Error('Not implemented')
})
