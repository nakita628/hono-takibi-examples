import { OpenAPIHono } from '@hono/zod-openapi'
import { postAnythingMultipartFormdataRoute, putAnythingMultipartFormdataRoute } from '../routes'

const app = new OpenAPIHono()

export const multipartFormDataHandler = app
  .openapi(postAnythingMultipartFormdataRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putAnythingMultipartFormdataRoute, (c) => {
    throw new Error('Not implemented')
  })
