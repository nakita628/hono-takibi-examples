import { OpenAPIHono } from '@hono/zod-openapi'
import { postApiV1SamlParseMetadataRoute } from '../routes'

const app = new OpenAPIHono()

export const samlHandler = app.openapi(postApiV1SamlParseMetadataRoute, (c) => {
  throw new Error('Not implemented')
})
