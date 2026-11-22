import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteProjectsProjectRegionsRegionBackendServicesBackendServiceRoute,
  getProjectsProjectRegionsRegionBackendServicesBackendServiceRoute,
  getProjectsProjectRegionsRegionBackendServicesListUsableRoute,
  getProjectsProjectRegionsRegionBackendServicesResourceGetIamPolicyRoute,
  getProjectsProjectRegionsRegionBackendServicesRoute,
  patchProjectsProjectRegionsRegionBackendServicesBackendServiceRoute,
  postProjectsProjectRegionsRegionBackendServicesBackendServiceGetHealthRoute,
  postProjectsProjectRegionsRegionBackendServicesBackendServiceSetSecurityPolicyRoute,
  postProjectsProjectRegionsRegionBackendServicesResourceSetIamPolicyRoute,
  postProjectsProjectRegionsRegionBackendServicesResourceTestIamPermissionsRoute,
  postProjectsProjectRegionsRegionBackendServicesRoute,
  putProjectsProjectRegionsRegionBackendServicesBackendServiceRoute,
} from '../routes'

const app = new OpenAPIHono()

export const regionBackendServicesHandler = app
  .openapi(getProjectsProjectRegionsRegionBackendServicesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postProjectsProjectRegionsRegionBackendServicesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getProjectsProjectRegionsRegionBackendServicesListUsableRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteProjectsProjectRegionsRegionBackendServicesBackendServiceRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getProjectsProjectRegionsRegionBackendServicesBackendServiceRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchProjectsProjectRegionsRegionBackendServicesBackendServiceRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putProjectsProjectRegionsRegionBackendServicesBackendServiceRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postProjectsProjectRegionsRegionBackendServicesBackendServiceGetHealthRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(
    postProjectsProjectRegionsRegionBackendServicesBackendServiceSetSecurityPolicyRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(getProjectsProjectRegionsRegionBackendServicesResourceGetIamPolicyRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postProjectsProjectRegionsRegionBackendServicesResourceSetIamPolicyRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postProjectsProjectRegionsRegionBackendServicesResourceTestIamPermissionsRoute, (c) => {
    throw new Error('Not implemented')
  })
