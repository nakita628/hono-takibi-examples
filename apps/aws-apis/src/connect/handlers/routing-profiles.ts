import { OpenAPIHono } from '@hono/zod-openapi'
import {
  getRoutingProfilesInstanceIdRoutingProfileIdQueuesRoute,
  getRoutingProfilesInstanceIdRoutingProfileIdRoute,
  postRoutingProfilesInstanceIdRoutingProfileIdAssociateQueuesRoute,
  postRoutingProfilesInstanceIdRoutingProfileIdConcurrencyRoute,
  postRoutingProfilesInstanceIdRoutingProfileIdDefaultOutboundQueueRoute,
  postRoutingProfilesInstanceIdRoutingProfileIdDisassociateQueuesRoute,
  postRoutingProfilesInstanceIdRoutingProfileIdNameRoute,
  postRoutingProfilesInstanceIdRoutingProfileIdQueuesRoute,
  putRoutingProfilesInstanceIdRoute,
} from '../routes'

const app = new OpenAPIHono()

export const routingProfilesHandler = app
  .openapi(postRoutingProfilesInstanceIdRoutingProfileIdAssociateQueuesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putRoutingProfilesInstanceIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getRoutingProfilesInstanceIdRoutingProfileIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postRoutingProfilesInstanceIdRoutingProfileIdDisassociateQueuesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getRoutingProfilesInstanceIdRoutingProfileIdQueuesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postRoutingProfilesInstanceIdRoutingProfileIdQueuesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postRoutingProfilesInstanceIdRoutingProfileIdConcurrencyRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postRoutingProfilesInstanceIdRoutingProfileIdDefaultOutboundQueueRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postRoutingProfilesInstanceIdRoutingProfileIdNameRoute, (c) => {
    throw new Error('Not implemented')
  })
