import { OpenAPIHono } from '@hono/zod-openapi'
import {
  getProjectsProjectAggregatedCommitmentsRoute,
  getProjectsProjectRegionsRegionCommitmentsCommitmentRoute,
  getProjectsProjectRegionsRegionCommitmentsRoute,
  patchProjectsProjectRegionsRegionCommitmentsCommitmentRoute,
  postProjectsProjectRegionsRegionCommitmentsRoute,
} from '../routes'

const app = new OpenAPIHono()

export const regionCommitmentsHandler = app
  .openapi(getProjectsProjectAggregatedCommitmentsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getProjectsProjectRegionsRegionCommitmentsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postProjectsProjectRegionsRegionCommitmentsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getProjectsProjectRegionsRegionCommitmentsCommitmentRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchProjectsProjectRegionsRegionCommitmentsCommitmentRoute, (c) => {
    throw new Error('Not implemented')
  })
