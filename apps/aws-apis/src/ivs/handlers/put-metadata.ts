import { OpenAPIHono } from '@hono/zod-openapi'
import { postPutMetadataRoute } from '../routes'

const app = new OpenAPIHono()

export const putMetadataHandler = app.openapi(postPutMetadataRoute, (c) => {
  throw new Error('Not implemented')
})
