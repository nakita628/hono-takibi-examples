import { OpenAPIHono } from '@hono/zod-openapi'
import { getMetadataDatasetsRoute } from '../routes'

const app = new OpenAPIHono()

export const metadataHandler = app.openapi(getMetadataDatasetsRoute, (c) => {
  throw new Error('Not implemented')
})
