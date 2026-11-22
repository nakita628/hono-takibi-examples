import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteProjectsProjectGlobalBackendServicesBackendServiceRoute,
  getProjectsProjectAggregatedBackendServicesRoute,
  getProjectsProjectGlobalBackendServicesBackendServiceRoute,
  getProjectsProjectGlobalBackendServicesListUsableRoute,
  getProjectsProjectGlobalBackendServicesResourceGetIamPolicyRoute,
  getProjectsProjectGlobalBackendServicesRoute,
  patchProjectsProjectGlobalBackendServicesBackendServiceRoute,
  postProjectsProjectGlobalBackendServicesBackendServiceAddSignedUrlKeyRoute,
  postProjectsProjectGlobalBackendServicesBackendServiceDeleteSignedUrlKeyRoute,
  postProjectsProjectGlobalBackendServicesBackendServiceGetHealthRoute,
  postProjectsProjectGlobalBackendServicesBackendServiceSetEdgeSecurityPolicyRoute,
  postProjectsProjectGlobalBackendServicesBackendServiceSetSecurityPolicyRoute,
  postProjectsProjectGlobalBackendServicesResourceSetIamPolicyRoute,
  postProjectsProjectGlobalBackendServicesResourceTestIamPermissionsRoute,
  postProjectsProjectGlobalBackendServicesRoute,
  putProjectsProjectGlobalBackendServicesBackendServiceRoute,
} from '../routes'

const app = new OpenAPIHono()

export const backendServicesHandler = app
  .openapi(getProjectsProjectAggregatedBackendServicesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getProjectsProjectGlobalBackendServicesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postProjectsProjectGlobalBackendServicesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getProjectsProjectGlobalBackendServicesListUsableRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteProjectsProjectGlobalBackendServicesBackendServiceRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getProjectsProjectGlobalBackendServicesBackendServiceRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchProjectsProjectGlobalBackendServicesBackendServiceRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putProjectsProjectGlobalBackendServicesBackendServiceRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postProjectsProjectGlobalBackendServicesBackendServiceAddSignedUrlKeyRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postProjectsProjectGlobalBackendServicesBackendServiceDeleteSignedUrlKeyRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postProjectsProjectGlobalBackendServicesBackendServiceGetHealthRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(
    postProjectsProjectGlobalBackendServicesBackendServiceSetEdgeSecurityPolicyRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(postProjectsProjectGlobalBackendServicesBackendServiceSetSecurityPolicyRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getProjectsProjectGlobalBackendServicesResourceGetIamPolicyRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postProjectsProjectGlobalBackendServicesResourceSetIamPolicyRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postProjectsProjectGlobalBackendServicesResourceTestIamPermissionsRoute, (c) => {
    throw new Error('Not implemented')
  })
