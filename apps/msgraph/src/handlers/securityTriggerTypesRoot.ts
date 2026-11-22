import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteSecurityTriggerTypesRetentionEventTypesRetentionEventTypeIdRoute,
  deleteSecurityTriggerTypesRoute,
  getSecurityTriggerTypesRetentionEventTypesCountRoute,
  getSecurityTriggerTypesRetentionEventTypesRetentionEventTypeIdRoute,
  getSecurityTriggerTypesRetentionEventTypesRoute,
  getSecurityTriggerTypesRoute,
  patchSecurityTriggerTypesRetentionEventTypesRetentionEventTypeIdRoute,
  patchSecurityTriggerTypesRoute,
  postSecurityTriggerTypesRetentionEventTypesRoute,
} from '../routes'

const app = new OpenAPIHono()

export const securityTriggerTypesRootHandler = app
  .openapi(getSecurityTriggerTypesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchSecurityTriggerTypesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteSecurityTriggerTypesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getSecurityTriggerTypesRetentionEventTypesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postSecurityTriggerTypesRetentionEventTypesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getSecurityTriggerTypesRetentionEventTypesRetentionEventTypeIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchSecurityTriggerTypesRetentionEventTypesRetentionEventTypeIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteSecurityTriggerTypesRetentionEventTypesRetentionEventTypeIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getSecurityTriggerTypesRetentionEventTypesCountRoute, (c) => {
    throw new Error('Not implemented')
  })
