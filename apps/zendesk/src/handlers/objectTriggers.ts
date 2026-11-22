import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteApiV2CustomObjectsCustomObjectKeyTriggersDestroyManyRoute,
  deleteApiV2CustomObjectsCustomObjectKeyTriggersTriggerIdRoute,
  getApiV2CustomObjectsCustomObjectKeyTriggersActiveRoute,
  getApiV2CustomObjectsCustomObjectKeyTriggersDefinitionsRoute,
  getApiV2CustomObjectsCustomObjectKeyTriggersRoute,
  getApiV2CustomObjectsCustomObjectKeyTriggersSearchRoute,
  getApiV2CustomObjectsCustomObjectKeyTriggersTriggerIdRoute,
  postApiV2CustomObjectsCustomObjectKeyTriggersRoute,
  putApiV2CustomObjectsCustomObjectKeyTriggersTriggerIdRoute,
  putApiV2CustomObjectsCustomObjectKeyTriggersUpdateManyRoute,
} from '../routes'

const app = new OpenAPIHono()

export const objectTriggersHandler = app
  .openapi(getApiV2CustomObjectsCustomObjectKeyTriggersRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiV2CustomObjectsCustomObjectKeyTriggersRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV2CustomObjectsCustomObjectKeyTriggersTriggerIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putApiV2CustomObjectsCustomObjectKeyTriggersTriggerIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteApiV2CustomObjectsCustomObjectKeyTriggersTriggerIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV2CustomObjectsCustomObjectKeyTriggersActiveRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV2CustomObjectsCustomObjectKeyTriggersDefinitionsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteApiV2CustomObjectsCustomObjectKeyTriggersDestroyManyRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV2CustomObjectsCustomObjectKeyTriggersSearchRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putApiV2CustomObjectsCustomObjectKeyTriggersUpdateManyRoute, (c) => {
    throw new Error('Not implemented')
  })
