import { OpenAPIHono } from '@hono/zod-openapi'
import {
  postCrmObjects202609FeedbackSubmissionsGdprDeleteRoute,
  postCrmObjects202609FeedbackSubmissionsMergeRoute,
} from '../routes'

const app = new OpenAPIHono()

export const advancedHandler = app
  .openapi(postCrmObjects202609FeedbackSubmissionsGdprDeleteRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postCrmObjects202609FeedbackSubmissionsMergeRoute, (c) => {
    throw new Error('Not implemented')
  })
