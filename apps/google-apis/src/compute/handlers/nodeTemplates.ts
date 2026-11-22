import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteProjectsProjectRegionsRegionNodeTemplatesNodeTemplateRoute,
  getProjectsProjectAggregatedNodeTemplatesRoute,
  getProjectsProjectRegionsRegionNodeTemplatesNodeTemplateRoute,
  getProjectsProjectRegionsRegionNodeTemplatesResourceGetIamPolicyRoute,
  getProjectsProjectRegionsRegionNodeTemplatesRoute,
  postProjectsProjectRegionsRegionNodeTemplatesResourceSetIamPolicyRoute,
  postProjectsProjectRegionsRegionNodeTemplatesResourceTestIamPermissionsRoute,
  postProjectsProjectRegionsRegionNodeTemplatesRoute,
} from '../routes'

const app = new OpenAPIHono()

export const nodeTemplatesHandler = app
  .openapi(getProjectsProjectAggregatedNodeTemplatesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getProjectsProjectRegionsRegionNodeTemplatesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postProjectsProjectRegionsRegionNodeTemplatesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteProjectsProjectRegionsRegionNodeTemplatesNodeTemplateRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getProjectsProjectRegionsRegionNodeTemplatesNodeTemplateRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getProjectsProjectRegionsRegionNodeTemplatesResourceGetIamPolicyRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postProjectsProjectRegionsRegionNodeTemplatesResourceSetIamPolicyRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postProjectsProjectRegionsRegionNodeTemplatesResourceTestIamPermissionsRoute, (c) => {
    throw new Error('Not implemented')
  })
