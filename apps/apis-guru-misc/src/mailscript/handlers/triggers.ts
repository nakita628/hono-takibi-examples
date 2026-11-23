import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteTriggersTriggerRoute,
  getTriggersRoute,
  postTriggersRoute,
  putTriggersTriggerRoute,
} from '../routes'

const app = new OpenAPIHono()

export const triggersHandler = app
  .openapi(getTriggersRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postTriggersRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteTriggersTriggerRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putTriggersTriggerRoute, (c) => {
    throw new Error('Not implemented')
  })
