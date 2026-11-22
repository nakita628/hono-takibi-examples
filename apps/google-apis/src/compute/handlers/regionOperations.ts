import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteProjectsProjectRegionsRegionOperationsOperationRoute,
  getProjectsProjectRegionsRegionOperationsOperationRoute,
  getProjectsProjectRegionsRegionOperationsRoute,
  postProjectsProjectRegionsRegionOperationsOperationWaitRoute,
} from '../routes'

const app = new OpenAPIHono()

export const regionOperationsHandler = app
  .openapi(getProjectsProjectRegionsRegionOperationsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteProjectsProjectRegionsRegionOperationsOperationRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getProjectsProjectRegionsRegionOperationsOperationRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postProjectsProjectRegionsRegionOperationsOperationWaitRoute, (c) => {
    throw new Error('Not implemented')
  })
