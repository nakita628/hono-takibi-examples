import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteSubmissionsSubmissionIdRoute,
  getFormsFormIdSubmissionsRoute,
  getSitesSiteIdSubmissionsRoute,
  getSubmissionsSubmissionIdRoute,
} from '../routes'

const app = new OpenAPIHono()

export const submissionHandler = app
  .openapi(getSitesSiteIdSubmissionsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getFormsFormIdSubmissionsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getSubmissionsSubmissionIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteSubmissionsSubmissionIdRoute, (c) => {
    throw new Error('Not implemented')
  })
