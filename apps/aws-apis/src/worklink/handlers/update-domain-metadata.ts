import { OpenAPIHono } from '@hono/zod-openapi'
import { postUpdateDomainMetadataRoute } from '../routes'

const app = new OpenAPIHono()

export const updateDomainMetadataHandler = app.openapi(postUpdateDomainMetadataRoute, (c) => {
  throw new Error('Not implemented')
})
