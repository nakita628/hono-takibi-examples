import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteServicesServiceIdAutoscalingRoute,
  deleteServicesServiceIdCustomDomainsCustomDomainNameOrIDRoute,
  deleteServicesServiceIdEnvVarsEnvVarKeyRoute,
  deleteServicesServiceIdHeadersHeaderIdRoute,
  deleteServicesServiceIdRoute,
  deleteServicesServiceIdRoutesRouteIdRoute,
  deleteServicesServiceIdSecretFilesEnvVarKeyRoute,
  getServicesRoute,
  getServicesServiceIdCustomDomainsCustomDomainNameOrIDRoute,
  getServicesServiceIdCustomDomainsRoute,
  getServicesServiceIdDeploysDeployIdRoute,
  getServicesServiceIdDeploysRoute,
  getServicesServiceIdEnvVarsEnvVarKeyRoute,
  getServicesServiceIdEnvVarsRoute,
  getServicesServiceIdEventsRoute,
  getServicesServiceIdHeadersRoute,
  getServicesServiceIdInstancesRoute,
  getServicesServiceIdJobsJobIdRoute,
  getServicesServiceIdJobsRoute,
  getServicesServiceIdOutboundIpsRoute,
  getServicesServiceIdRoute,
  getServicesServiceIdRoutesRoute,
  getServicesServiceIdSecretFilesEnvVarKeyRoute,
  getServicesServiceIdSecretFilesRoute,
  patchServicesServiceIdRoute,
  patchServicesServiceIdRoutesRouteIdRoute,
  postServicesRoute,
  postServicesServiceIdCachePurgeRoute,
  postServicesServiceIdCustomDomainsCustomDomainNameOrIDVerifyRoute,
  postServicesServiceIdCustomDomainsRoute,
  postServicesServiceIdDeploysDeployIdCancelRoute,
  postServicesServiceIdDeploysRoute,
  postServicesServiceIdHeadersRoute,
  postServicesServiceIdJobsJobIdCancelRoute,
  postServicesServiceIdJobsRoute,
  postServicesServiceIdPreviewRoute,
  postServicesServiceIdRestartRoute,
  postServicesServiceIdResumeRoute,
  postServicesServiceIdRollbackRoute,
  postServicesServiceIdRoutesRoute,
  postServicesServiceIdScaleRoute,
  postServicesServiceIdSuspendRoute,
  putServicesServiceIdAutoscalingRoute,
  putServicesServiceIdEnvVarsEnvVarKeyRoute,
  putServicesServiceIdEnvVarsRoute,
  putServicesServiceIdHeadersRoute,
  putServicesServiceIdRoutesRoute,
  putServicesServiceIdSecretFilesEnvVarKeyRoute,
  putServicesServiceIdSecretFilesRoute,
} from '../routes'

const app = new OpenAPIHono()

export const servicesHandler = app
  .openapi(getServicesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postServicesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getServicesServiceIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchServicesServiceIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteServicesServiceIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postServicesServiceIdCachePurgeRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getServicesServiceIdDeploysRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postServicesServiceIdDeploysRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getServicesServiceIdDeploysDeployIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postServicesServiceIdDeploysDeployIdCancelRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postServicesServiceIdRollbackRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getServicesServiceIdEnvVarsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putServicesServiceIdEnvVarsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getServicesServiceIdEnvVarsEnvVarKeyRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putServicesServiceIdEnvVarsEnvVarKeyRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteServicesServiceIdEnvVarsEnvVarKeyRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getServicesServiceIdSecretFilesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putServicesServiceIdSecretFilesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getServicesServiceIdSecretFilesEnvVarKeyRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putServicesServiceIdSecretFilesEnvVarKeyRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteServicesServiceIdSecretFilesEnvVarKeyRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getServicesServiceIdEventsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getServicesServiceIdHeadersRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postServicesServiceIdHeadersRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putServicesServiceIdHeadersRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteServicesServiceIdHeadersHeaderIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getServicesServiceIdRoutesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postServicesServiceIdRoutesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putServicesServiceIdRoutesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchServicesServiceIdRoutesRouteIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteServicesServiceIdRoutesRouteIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getServicesServiceIdCustomDomainsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postServicesServiceIdCustomDomainsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getServicesServiceIdCustomDomainsCustomDomainNameOrIDRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteServicesServiceIdCustomDomainsCustomDomainNameOrIDRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postServicesServiceIdCustomDomainsCustomDomainNameOrIDVerifyRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postServicesServiceIdSuspendRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postServicesServiceIdResumeRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postServicesServiceIdRestartRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postServicesServiceIdScaleRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putServicesServiceIdAutoscalingRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteServicesServiceIdAutoscalingRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postServicesServiceIdPreviewRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getServicesServiceIdJobsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postServicesServiceIdJobsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getServicesServiceIdJobsJobIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postServicesServiceIdJobsJobIdCancelRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getServicesServiceIdInstancesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getServicesServiceIdOutboundIpsRoute, (c) => {
    throw new Error('Not implemented')
  })
