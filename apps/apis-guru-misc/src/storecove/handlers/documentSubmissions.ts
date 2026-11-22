import { OpenAPIHono } from '@hono/zod-openapi'
import {
  getDocumentSubmissionsGuidEvidenceEvidenceTypeRoute,
  postDocumentSubmissionsRoute,
} from '../routes'

const app = new OpenAPIHono()

export const documentSubmissionsHandler = app
  .openapi(postDocumentSubmissionsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getDocumentSubmissionsGuidEvidenceEvidenceTypeRoute, (c) => {
    throw new Error('Not implemented')
  })
