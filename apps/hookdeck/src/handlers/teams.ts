import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteTeamsCurrentCustomDomainsDomainIdRoute,
  getTeamsCurrentCustomDomainsRoute,
  postTeamsCurrentCustomDomainsRoute,
} from '../routes'

const app = new OpenAPIHono()

export const teamsHandler = app
  .openapi(postTeamsCurrentCustomDomainsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getTeamsCurrentCustomDomainsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteTeamsCurrentCustomDomainsDomainIdRoute, (c) => {
    throw new Error('Not implemented')
  })
