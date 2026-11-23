import { OpenAPIHono } from '@hono/zod-openapi'
import { postEnrichmentAnnotatedGenesRoute, postEnrichmentDataRoute } from '../routes'

const app = new OpenAPIHono()

export const enrichmentHandler = app
  .openapi(postEnrichmentAnnotatedGenesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postEnrichmentDataRoute, (c) => {
    throw new Error('Not implemented')
  })
