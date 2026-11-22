import { OpenAPIHono } from '@hono/zod-openapi'
import {
  getTargetsTargetIdFindingsIdIndexRoute,
  getTargetsTargetIdFindingsIdLogIndexRoute,
  getTargetsTargetIdFindingsIndexRoute,
  getTargetsTargetIdFindingsReportIndexRoute,
  patchTargetsTargetIdFindingsBulkUpdateIndexRoute,
  patchTargetsTargetIdFindingsIdIndexRoute,
  postTargetsTargetIdFindingsBulkReportIndexRoute,
  postTargetsTargetIdFindingsBulkRetestIndexRoute,
  postTargetsTargetIdFindingsIdRetestIndexRoute,
  putTargetsTargetIdFindingsIdIndexRoute,
} from '../routes'

const app = new OpenAPIHono()

export const findingsHandler = app
  .openapi(getTargetsTargetIdFindingsIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postTargetsTargetIdFindingsBulkReportIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postTargetsTargetIdFindingsBulkRetestIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchTargetsTargetIdFindingsBulkUpdateIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getTargetsTargetIdFindingsReportIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getTargetsTargetIdFindingsIdIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchTargetsTargetIdFindingsIdIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putTargetsTargetIdFindingsIdIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getTargetsTargetIdFindingsIdLogIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postTargetsTargetIdFindingsIdRetestIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
