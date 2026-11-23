import { OpenAPIHono } from '@hono/zod-openapi'
import { getMetadataQueryIndicesRoute } from '../routes'

const app = new OpenAPIHono()

export const metadataQueryIndicesHandler = app.openapi(getMetadataQueryIndicesRoute, (c) => {
  throw new Error('Not implemented')
})
