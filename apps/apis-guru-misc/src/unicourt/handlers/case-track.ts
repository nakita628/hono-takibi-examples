import { OpenAPIHono } from '@hono/zod-openapi'
import { deleteCaseTrackCaseIdRoute, getCaseTrackCaseIdRoute, putCaseTrackRoute } from '../routes'

const app = new OpenAPIHono()

export const caseTrackHandler = app
  .openapi(putCaseTrackRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteCaseTrackCaseIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getCaseTrackCaseIdRoute, (c) => {
    throw new Error('Not implemented')
  })
