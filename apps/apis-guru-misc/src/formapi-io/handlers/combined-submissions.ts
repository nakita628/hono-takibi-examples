import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteCombinedSubmissionsCombinedSubmissionIdRoute,
  getCombinedSubmissionsCombinedSubmissionIdRoute,
  getCombinedSubmissionsRoute,
  postCombinedSubmissionsRoute,
} from '../routes'

const app = new OpenAPIHono()

export const combinedSubmissionsHandler = app
  .openapi(getCombinedSubmissionsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postCombinedSubmissionsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteCombinedSubmissionsCombinedSubmissionIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getCombinedSubmissionsCombinedSubmissionIdRoute, (c) => {
    throw new Error('Not implemented')
  })
