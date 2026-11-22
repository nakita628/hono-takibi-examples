import { OpenAPIHono } from '@hono/zod-openapi'
import {
  getOrganizationsOrganizationIdOrSlugProfilingChunksIndexRoute,
  getOrganizationsOrganizationIdOrSlugProfilingFlamegraphIndexRoute,
  getProjectsOrganizationIdOrSlugProjectIdOrSlugProfilingProfilesProfileIdIndexRoute,
} from '../routes'

const app = new OpenAPIHono()

export const profilingHandler = app
  .openapi(getOrganizationsOrganizationIdOrSlugProfilingChunksIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getOrganizationsOrganizationIdOrSlugProfilingFlamegraphIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(
    getProjectsOrganizationIdOrSlugProjectIdOrSlugProfilingProfilesProfileIdIndexRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
