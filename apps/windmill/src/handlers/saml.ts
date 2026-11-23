import { OpenAPIHono } from '@hono/zod-openapi'
import { postSamlTestMetadataRoute } from '../routes'

const app = new OpenAPIHono()

export const samlHandler = app.openapi(postSamlTestMetadataRoute, (c) => {
  throw new Error('Not implemented')
})
