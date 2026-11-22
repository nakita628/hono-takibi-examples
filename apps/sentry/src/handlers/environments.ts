import { OpenAPIHono } from '@hono/zod-openapi'
import {
  getOrganizationsOrganizationIdOrSlugEnvironmentsIndexRoute,
  getProjectsOrganizationIdOrSlugProjectIdOrSlugEnvironmentsEnvironmentIndexRoute,
  getProjectsOrganizationIdOrSlugProjectIdOrSlugEnvironmentsIndexRoute,
  putProjectsOrganizationIdOrSlugProjectIdOrSlugEnvironmentsEnvironmentIndexRoute,
  putProjectsOrganizationIdOrSlugProjectIdOrSlugEnvironmentsIndexRoute,
} from '../routes'

const app = new OpenAPIHono()

export const environmentsHandler = app
  .openapi(getOrganizationsOrganizationIdOrSlugEnvironmentsIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getProjectsOrganizationIdOrSlugProjectIdOrSlugEnvironmentsIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putProjectsOrganizationIdOrSlugProjectIdOrSlugEnvironmentsIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getProjectsOrganizationIdOrSlugProjectIdOrSlugEnvironmentsEnvironmentIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putProjectsOrganizationIdOrSlugProjectIdOrSlugEnvironmentsEnvironmentIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
