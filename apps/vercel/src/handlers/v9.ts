import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteV9ProjectsIdOrNameCustomEnvironmentsEnvironmentSlugOrIdRoute,
  deleteV9ProjectsIdOrNameDomainsDomainRoute,
  deleteV9ProjectsIdOrNameEnvIdRoute,
  deleteV9ProjectsIdOrNameRoute,
  getV9DomainsDomainVerificationRoute,
  getV9ProjectsIdOrNameCustomEnvironmentsEnvironmentSlugOrIdRoute,
  getV9ProjectsIdOrNameCustomEnvironmentsRoute,
  getV9ProjectsIdOrNameDomainsDomainRoute,
  getV9ProjectsIdOrNameDomainsRoute,
  getV9ProjectsIdOrNameRoute,
  patchV9ProjectsIdOrNameCustomEnvironmentsEnvironmentSlugOrIdRoute,
  patchV9ProjectsIdOrNameDomainsDomainRoute,
  patchV9ProjectsIdOrNameEnvIdRoute,
  patchV9ProjectsIdOrNameRoute,
  postV9DomainsDomainClaimRoute,
  postV9ProjectsIdOrNameCustomEnvironmentsRoute,
  postV9ProjectsIdOrNameDomainsDomainVerifyRoute,
} from '../routes'

const app = new OpenAPIHono()

export const v9Handler = app
  .openapi(getV9DomainsDomainVerificationRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV9DomainsDomainClaimRoute, (c) => {
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
  .openapi(postV9ProjectsIdOrNameCustomEnvironmentsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV9ProjectsIdOrNameCustomEnvironmentsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV9ProjectsIdOrNameCustomEnvironmentsEnvironmentSlugOrIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchV9ProjectsIdOrNameCustomEnvironmentsEnvironmentSlugOrIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteV9ProjectsIdOrNameCustomEnvironmentsEnvironmentSlugOrIdRoute, (c) => {
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
  .openapi(postV9ProjectsIdOrNameDomainsDomainVerifyRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteV9ProjectsIdOrNameEnvIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchV9ProjectsIdOrNameEnvIdRoute, (c) => {
    throw new Error('Not implemented')
  })
