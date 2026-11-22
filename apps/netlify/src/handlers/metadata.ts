import { OpenAPIHono } from '@hono/zod-openapi'
import { getSitesSiteIdMetadataRoute, putSitesSiteIdMetadataRoute } from '../routes'

const app = new OpenAPIHono()

export const metadataHandler = app
  .openapi(getSitesSiteIdMetadataRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putSitesSiteIdMetadataRoute, (c) => {
    throw new Error('Not implemented')
  })
