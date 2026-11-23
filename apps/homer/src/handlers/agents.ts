import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteAgentsSubscriptionsSubscriptionIdRoute,
  getAgentsSubscriptionsRoute,
  getAgentsSubscriptionsSubscriptionIdRoute,
  getAgentsTypesRoute,
  getAgentsTypesTypeRoute,
  postAgentsSearchRoute,
  postAgentsSubscriptionsRoute,
  putAgentsSubscriptionsSubscriptionIdRoute,
} from '../routes'

const app = new OpenAPIHono()

export const agentsHandler = app
  .openapi(getAgentsSubscriptionsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postAgentsSubscriptionsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getAgentsSubscriptionsSubscriptionIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putAgentsSubscriptionsSubscriptionIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteAgentsSubscriptionsSubscriptionIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getAgentsTypesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getAgentsTypesTypeRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postAgentsSearchRoute, (c) => {
    throw new Error('Not implemented')
  })
