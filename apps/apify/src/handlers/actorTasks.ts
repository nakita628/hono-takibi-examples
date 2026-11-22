import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteV2ActorTasksActorTaskIdRoute,
  getV2ActorTasksActorTaskIdInputRoute,
  getV2ActorTasksActorTaskIdRoute,
  getV2ActorTasksActorTaskIdRunsLastRoute,
  getV2ActorTasksActorTaskIdRunsRoute,
  getV2ActorTasksActorTaskIdRunSyncGetDatasetItemsRoute,
  getV2ActorTasksActorTaskIdRunSyncRoute,
  getV2ActorTasksActorTaskIdWebhooksRoute,
  getV2ActorTasksRoute,
  postV2ActorTasksActorTaskIdRunsRoute,
  postV2ActorTasksActorTaskIdRunSyncGetDatasetItemsRoute,
  postV2ActorTasksActorTaskIdRunSyncRoute,
  postV2ActorTasksRoute,
  putV2ActorTasksActorTaskIdInputRoute,
  putV2ActorTasksActorTaskIdRoute,
} from '../routes'

const app = new OpenAPIHono()

export const actorTasksHandler = app
  .openapi(getV2ActorTasksRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV2ActorTasksRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV2ActorTasksActorTaskIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putV2ActorTasksActorTaskIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteV2ActorTasksActorTaskIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV2ActorTasksActorTaskIdInputRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putV2ActorTasksActorTaskIdInputRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV2ActorTasksActorTaskIdWebhooksRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV2ActorTasksActorTaskIdRunsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV2ActorTasksActorTaskIdRunsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV2ActorTasksActorTaskIdRunSyncRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV2ActorTasksActorTaskIdRunSyncRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV2ActorTasksActorTaskIdRunSyncGetDatasetItemsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV2ActorTasksActorTaskIdRunSyncGetDatasetItemsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV2ActorTasksActorTaskIdRunsLastRoute, (c) => {
    throw new Error('Not implemented')
  })
