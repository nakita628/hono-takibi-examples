import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteSubmissionsSubmissionIdRoute,
  getSubmissionsBatchesSubmissionBatchIdRoute,
  getSubmissionsRoute,
  getSubmissionsSubmissionIdRoute,
  postSubmissionsBatchesRoute,
} from '../routes'

const app = new OpenAPIHono()

export const submissionsHandler = app
  .openapi(getSubmissionsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postSubmissionsBatchesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getSubmissionsBatchesSubmissionBatchIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteSubmissionsSubmissionIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getSubmissionsSubmissionIdRoute, (c) => {
    throw new Error('Not implemented')
  })
