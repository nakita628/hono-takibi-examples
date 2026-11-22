import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteApiV2TriggersDestroyManyRoute,
  deleteApiV2TriggersTriggerIdRoute,
  getApiV2TriggersActiveRoute,
  getApiV2TriggersDefinitionsRoute,
  getApiV2TriggersLimitsRoute,
  getApiV2TriggersRoute,
  getApiV2TriggersSearchRoute,
  getApiV2TriggersTriggerIdRevisionsRoute,
  getApiV2TriggersTriggerIdRevisionsTriggerRevisionIdRoute,
  getApiV2TriggersTriggerIdRoute,
  postApiV2TriggersRoute,
  postApiV2TriggersValidateRoute,
  putApiV2TriggersReorderRoute,
  putApiV2TriggersTriggerIdRoute,
  putApiV2TriggersUpdateManyRoute,
} from '../routes'

const app = new OpenAPIHono()

export const triggersHandler = app
  .openapi(getApiV2TriggersRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiV2TriggersRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV2TriggersTriggerIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putApiV2TriggersTriggerIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteApiV2TriggersTriggerIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV2TriggersTriggerIdRevisionsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV2TriggersTriggerIdRevisionsTriggerRevisionIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV2TriggersActiveRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV2TriggersDefinitionsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteApiV2TriggersDestroyManyRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV2TriggersLimitsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putApiV2TriggersReorderRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV2TriggersSearchRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putApiV2TriggersUpdateManyRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiV2TriggersValidateRoute, (c) => {
    throw new Error('Not implemented')
  })
