import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteCaseTrackCaseIdRoute,
  getCaseTrackCaseIdRoute,
  getCaseTracksRoute,
  putCaseTrackRoute,
} from '../routes'

const app = new OpenAPIHono()

export const caseTrackingAPIHandler = app
  .openapi(putCaseTrackRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteCaseTrackCaseIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getCaseTrackCaseIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getCaseTracksRoute, (c) => {
    throw new Error('Not implemented')
  })
