import { OpenAPIHono } from '@hono/zod-openapi'
import {
  getOrganizationOrganizationIdProjectProjectManagedAgentsAgentAgentIdSessionRoute,
  getOrganizationOrganizationIdProjectProjectManagedAgentsAgentAgentIdSessionSessionIdMessageRoute,
  getOrganizationOrganizationIdProjectProjectManagedAgentsAgentRoute,
  getOrganizationOrganizationIdProjectProjectManagedAgentsIntegrationCatalogRoute,
  patchOrganizationOrganizationIdProjectProjectManagedAgentsAgentAgentIdRoute,
  patchOrganizationOrganizationIdProjectProjectManagedAgentsAgentAgentIdScheduleScheduleIdRoute,
  postOrganizationOrganizationIdProjectProjectManagedAgentsAgentAgentIdScheduleRoute,
  postOrganizationOrganizationIdProjectProjectManagedAgentsAgentAgentIdSessionRoute,
  postOrganizationOrganizationIdProjectProjectManagedAgentsAgentAgentIdSessionSessionIdMessageRoute,
  postOrganizationOrganizationIdProjectProjectManagedAgentsAgentRoute,
  postOrganizationOrganizationIdProjectProjectManagedAgentsEnvironmentEnvironmentIntegrationRoute,
} from '../routes'

const app = new OpenAPIHono()

export const serviceManagedAgentsHandler = app
  .openapi(postOrganizationOrganizationIdProjectProjectManagedAgentsAgentRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getOrganizationOrganizationIdProjectProjectManagedAgentsAgentRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(
    postOrganizationOrganizationIdProjectProjectManagedAgentsAgentAgentIdScheduleRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(
    patchOrganizationOrganizationIdProjectProjectManagedAgentsAgentAgentIdScheduleScheduleIdRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(patchOrganizationOrganizationIdProjectProjectManagedAgentsAgentAgentIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(
    postOrganizationOrganizationIdProjectProjectManagedAgentsEnvironmentEnvironmentIntegrationRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(getOrganizationOrganizationIdProjectProjectManagedAgentsIntegrationCatalogRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(
    getOrganizationOrganizationIdProjectProjectManagedAgentsAgentAgentIdSessionSessionIdMessageRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(
    postOrganizationOrganizationIdProjectProjectManagedAgentsAgentAgentIdSessionSessionIdMessageRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(
    postOrganizationOrganizationIdProjectProjectManagedAgentsAgentAgentIdSessionRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(
    getOrganizationOrganizationIdProjectProjectManagedAgentsAgentAgentIdSessionRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
