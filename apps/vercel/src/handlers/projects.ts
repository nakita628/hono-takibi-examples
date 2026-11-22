import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteV1ProjectsIdOrNameAvatarRoute,
  deleteV1ProjectsIdOrNameEnvRoute,
  deleteV9ProjectsIdOrNameDomainsDomainRoute,
  deleteV9ProjectsIdOrNameEnvIdRoute,
  deleteV9ProjectsIdOrNameRoute,
  getV10ProjectsIdOrNameEnvRoute,
  getV10ProjectsRoute,
  getV1ProjectsIdOrNameEnvIdRoute,
  getV1ProjectsProjectIdPromoteAliasesRoute,
  getV1ProjectsTracesRoute,
  getV9ProjectsIdOrNameDomainsDomainRoute,
  getV9ProjectsIdOrNameDomainsRoute,
  getV9ProjectsIdOrNameRoute,
  patchV1ProjectsIdOrNameProtectionBypassRoute,
  patchV1ProjectsProjectIdMicrofrontendsRoute,
  patchV1ProjectsProjectIdRollbackDeploymentIdUpdateDescriptionRoute,
  patchV9ProjectsIdOrNameDomainsDomainRoute,
  patchV9ProjectsIdOrNameEnvIdRoute,
  patchV9ProjectsIdOrNameRoute,
  postProjectsIdOrNameTransferRequestRoute,
  postV10ProjectsIdOrNameDomainsRoute,
  postV10ProjectsIdOrNameEnvRoute,
  postV10ProjectsProjectIdPromoteDeploymentIdRoute,
  postV11ProjectsRoute,
  postV1ProjectsIdOrNameAvatarRoute,
  postV1ProjectsIdOrNameDomainsDomainMoveRoute,
  postV1ProjectsIdOrNameTokenRoute,
  postV1ProjectsProjectIdPauseRoute,
  postV1ProjectsProjectIdRollbackDeploymentIdRoute,
  postV1ProjectsProjectIdUnpauseRoute,
  postV1ProjectsTracesSessionRoute,
  postV9ProjectsIdOrNameDomainsDomainVerifyRoute,
  putProjectsTransferRequestCodeRoute,
} from '../routes'

const app = new OpenAPIHono()

export const projectsHandler = app
  .openapi(getV10ProjectsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV1ProjectsTracesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV11ProjectsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV1ProjectsIdOrNameTokenRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV1ProjectsTracesSessionRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV9ProjectsIdOrNameRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchV9ProjectsIdOrNameRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteV9ProjectsIdOrNameRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV1ProjectsIdOrNameAvatarRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteV1ProjectsIdOrNameAvatarRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV9ProjectsIdOrNameDomainsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV9ProjectsIdOrNameDomainsDomainRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchV9ProjectsIdOrNameDomainsDomainRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteV9ProjectsIdOrNameDomainsDomainRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV10ProjectsIdOrNameDomainsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV1ProjectsIdOrNameDomainsDomainMoveRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV9ProjectsIdOrNameDomainsDomainVerifyRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV10ProjectsIdOrNameEnvRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV10ProjectsIdOrNameEnvRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV1ProjectsIdOrNameEnvIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteV9ProjectsIdOrNameEnvIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchV9ProjectsIdOrNameEnvIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteV1ProjectsIdOrNameEnvRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postProjectsIdOrNameTransferRequestRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putProjectsTransferRequestCodeRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchV1ProjectsIdOrNameProtectionBypassRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV1ProjectsProjectIdRollbackDeploymentIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchV1ProjectsProjectIdRollbackDeploymentIdUpdateDescriptionRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchV1ProjectsProjectIdMicrofrontendsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV10ProjectsProjectIdPromoteDeploymentIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV1ProjectsProjectIdPromoteAliasesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV1ProjectsProjectIdPauseRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV1ProjectsProjectIdUnpauseRoute, (c) => {
    throw new Error('Not implemented')
  })
