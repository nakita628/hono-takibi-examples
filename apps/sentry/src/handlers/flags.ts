import { OpenAPIHono } from '@hono/zod-openapi'
import {
  getOrganizationsOrganizationIdOrSlugFlagsLogsFlagLogIdIndexRoute,
  getOrganizationsOrganizationIdOrSlugFlagsLogsIndexRoute,
} from '../routes'

const app = new OpenAPIHono()

export const flagsHandler = app
  .openapi(getOrganizationsOrganizationIdOrSlugFlagsLogsIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getOrganizationsOrganizationIdOrSlugFlagsLogsFlagLogIdIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
