import { OpenAPIHono } from '@hono/zod-openapi'
import { deleteSubmissionsSubmissionIdRoute, getSubmissionsSubmissionIdRoute } from '../routes'

const app = new OpenAPIHono()

export const submissionsHandler = app
  .openapi(getSubmissionsSubmissionIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteSubmissionsSubmissionIdRoute, (c) => {
    throw new Error('Not implemented')
  })
