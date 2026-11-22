import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteSecurityTriggersRetentionEventsRetentionEventIdRoute,
  deleteSecurityTriggersRoute,
  getSecurityTriggersRetentionEventsCountRoute,
  getSecurityTriggersRetentionEventsRetentionEventIdRetentionEventTypeRoute,
  getSecurityTriggersRetentionEventsRetentionEventIdRoute,
  getSecurityTriggersRetentionEventsRoute,
  getSecurityTriggersRoute,
  patchSecurityTriggersRetentionEventsRetentionEventIdRoute,
  patchSecurityTriggersRoute,
  postSecurityTriggersRetentionEventsRoute,
} from '../routes'

const app = new OpenAPIHono()

export const securityTriggersRootHandler = app
  .openapi(getSecurityTriggersRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchSecurityTriggersRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteSecurityTriggersRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getSecurityTriggersRetentionEventsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postSecurityTriggersRetentionEventsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getSecurityTriggersRetentionEventsRetentionEventIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchSecurityTriggersRetentionEventsRetentionEventIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteSecurityTriggersRetentionEventsRetentionEventIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getSecurityTriggersRetentionEventsRetentionEventIdRetentionEventTypeRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getSecurityTriggersRetentionEventsCountRoute, (c) => {
    throw new Error('Not implemented')
  })
