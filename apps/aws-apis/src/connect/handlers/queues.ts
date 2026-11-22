import { OpenAPIHono } from '@hono/zod-openapi'
import {
  getQueuesInstanceIdQueueIdQuickConnectsRoute,
  getQueuesInstanceIdQueueIdRoute,
  postQueuesInstanceIdQueueIdAssociateQuickConnectsRoute,
  postQueuesInstanceIdQueueIdDisassociateQuickConnectsRoute,
  postQueuesInstanceIdQueueIdHoursOfOperationRoute,
  postQueuesInstanceIdQueueIdMaxContactsRoute,
  postQueuesInstanceIdQueueIdNameRoute,
  postQueuesInstanceIdQueueIdOutboundCallerConfigRoute,
  postQueuesInstanceIdQueueIdStatusRoute,
  putQueuesInstanceIdRoute,
} from '../routes'

const app = new OpenAPIHono()

export const queuesHandler = app
  .openapi(postQueuesInstanceIdQueueIdAssociateQuickConnectsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putQueuesInstanceIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getQueuesInstanceIdQueueIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postQueuesInstanceIdQueueIdDisassociateQuickConnectsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getQueuesInstanceIdQueueIdQuickConnectsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postQueuesInstanceIdQueueIdHoursOfOperationRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postQueuesInstanceIdQueueIdMaxContactsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postQueuesInstanceIdQueueIdNameRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postQueuesInstanceIdQueueIdOutboundCallerConfigRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postQueuesInstanceIdQueueIdStatusRoute, (c) => {
    throw new Error('Not implemented')
  })
