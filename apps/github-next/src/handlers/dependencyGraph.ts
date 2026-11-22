import { OpenAPIHono } from '@hono/zod-openapi'
import {
  getReposOwnerRepoDependencyGraphCompareBaseheadRoute,
  getReposOwnerRepoDependencyGraphSbomFetchReportSbomUuidRoute,
  getReposOwnerRepoDependencyGraphSbomGenerateReportRoute,
  getReposOwnerRepoDependencyGraphSbomRoute,
  postReposOwnerRepoDependencyGraphSnapshotsRoute,
} from '../routes'

const app = new OpenAPIHono()

export const dependencyGraphHandler = app
  .openapi(getReposOwnerRepoDependencyGraphCompareBaseheadRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getReposOwnerRepoDependencyGraphSbomRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getReposOwnerRepoDependencyGraphSbomFetchReportSbomUuidRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getReposOwnerRepoDependencyGraphSbomGenerateReportRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postReposOwnerRepoDependencyGraphSnapshotsRoute, (c) => {
    throw new Error('Not implemented')
  })
