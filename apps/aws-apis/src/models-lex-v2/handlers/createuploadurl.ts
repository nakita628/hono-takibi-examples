import { OpenAPIHono } from '@hono/zod-openapi'
import { postCreateuploadurlIndexRoute } from '../routes'

const app = new OpenAPIHono()

export const createuploadurlHandler = app.openapi(postCreateuploadurlIndexRoute, (c) => {
  throw new Error('Not implemented')
})
