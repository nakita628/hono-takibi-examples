import { OpenAPIHono } from '@hono/zod-openapi'
import { getEvidenceGraphIdRoute, getEvidenceGraphIdTableRoute } from '../routes'

const app = new OpenAPIHono()

export const evidenceHandler = app
  .openapi(getEvidenceGraphIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getEvidenceGraphIdTableRoute, (c) => {
    throw new Error('Not implemented')
  })
