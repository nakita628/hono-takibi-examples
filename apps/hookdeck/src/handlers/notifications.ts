import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteTeamsCurrentCustomDomainsDomainIdRoute,
  getTeamsCurrentCustomDomainsRoute,
  postTeamsCurrentCustomDomainsRoute,
  putNotificationsWebhooksRoute,
} from '../routes'

const app = new OpenAPIHono()

export const notificationsHandler = app
  .openapi(putNotificationsWebhooksRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postTeamsCurrentCustomDomainsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getTeamsCurrentCustomDomainsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteTeamsCurrentCustomDomainsDomainIdRoute, (c) => {
    throw new Error('Not implemented')
  })
