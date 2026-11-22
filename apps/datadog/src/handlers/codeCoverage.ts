import { OpenAPIHono } from '@hono/zod-openapi'
import {
  postApiV2CodeCoverageBranchSummaryRoute,
  postApiV2CodeCoverageCommitSummaryRoute,
  postApiV2CodeCoverageFilesRoute,
  postApiV2CodeCoveragePrSummaryRoute,
} from '../routes'

const app = new OpenAPIHono()

export const codeCoverageHandler = app
  .openapi(postApiV2CodeCoverageBranchSummaryRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiV2CodeCoverageCommitSummaryRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiV2CodeCoverageFilesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiV2CodeCoveragePrSummaryRoute, (c) => {
    throw new Error('Not implemented')
  })
