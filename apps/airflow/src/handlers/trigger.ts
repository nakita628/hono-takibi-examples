import { OpenAPIHono } from '@hono/zod-openapi'
import { getApiV2TriggersRoute, getApiV2TriggersTriggerIdRoute } from '../routes'

const app = new OpenAPIHono()

export const triggerHandler = app
  .openapi(getApiV2TriggersRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV2TriggersTriggerIdRoute, (c) => {
    throw new Error('Not implemented')
  })
