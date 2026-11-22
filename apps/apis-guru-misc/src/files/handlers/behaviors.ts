import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteBehaviorsIdRoute,
  getBehaviorsFoldersPathRoute,
  getBehaviorsIdRoute,
  getBehaviorsRoute,
  patchBehaviorsIdRoute,
  postBehaviorsRoute,
  postBehaviorsWebhookTestRoute,
} from '../routes'

const app = new OpenAPIHono()

export const behaviorsHandler = app
  .openapi(getBehaviorsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postBehaviorsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getBehaviorsFoldersPathRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postBehaviorsWebhookTestRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteBehaviorsIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getBehaviorsIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchBehaviorsIdRoute, (c) => {
    throw new Error('Not implemented')
  })
