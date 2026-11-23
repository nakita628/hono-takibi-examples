import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteV9ProjectsIdOrNameDomainsDomainRoute,
  deleteV9ProjectsIdOrNameEnvIdRoute,
  deleteV9ProjectsIdOrNameRoute,
  getV9ProjectsIdOrNameDomainsDomainRoute,
  getV9ProjectsIdOrNameDomainsRoute,
  getV9ProjectsIdOrNameEnvRoute,
  getV9ProjectsIdOrNameRoute,
  getV9ProjectsRoute,
  patchV9ProjectsIdOrNameDomainsDomainRoute,
  patchV9ProjectsIdOrNameEnvIdRoute,
  patchV9ProjectsIdOrNameRoute,
  postV9ProjectsIdOrNameDomainsDomainVerifyRoute,
  postV9ProjectsIdOrNameDomainsRoute,
  postV9ProjectsRoute,
} from '../routes'

const app = new OpenAPIHono()

export const v9Handler = app
  .openapi(getV9ProjectsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV9ProjectsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteV9ProjectsIdOrNameRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV9ProjectsIdOrNameRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchV9ProjectsIdOrNameRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV9ProjectsIdOrNameDomainsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV9ProjectsIdOrNameDomainsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteV9ProjectsIdOrNameDomainsDomainRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV9ProjectsIdOrNameDomainsDomainRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchV9ProjectsIdOrNameDomainsDomainRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV9ProjectsIdOrNameDomainsDomainVerifyRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV9ProjectsIdOrNameEnvRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteV9ProjectsIdOrNameEnvIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchV9ProjectsIdOrNameEnvIdRoute, (c) => {
    throw new Error('Not implemented')
  })
