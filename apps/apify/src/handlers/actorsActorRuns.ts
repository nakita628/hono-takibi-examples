import { OpenAPIHono } from '@hono/zod-openapi'
import {
  getV2ActorsActorIdRunsLastRoute,
  getV2ActorsActorIdRunsRoute,
  getV2ActorsActorIdRunsRunIdRoute,
  getV2ActorsActorIdRunSyncGetDatasetItemsRoute,
  getV2ActorsActorIdRunSyncRoute,
  postV2ActorsActorIdRunsRoute,
  postV2ActorsActorIdRunSyncGetDatasetItemsRoute,
  postV2ActorsActorIdRunSyncRoute,
} from '../routes'

const app = new OpenAPIHono()

export const actorsActorRunsHandler = app
  .openapi(getV2ActorsActorIdRunsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV2ActorsActorIdRunsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV2ActorsActorIdRunSyncRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV2ActorsActorIdRunSyncRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV2ActorsActorIdRunSyncGetDatasetItemsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV2ActorsActorIdRunSyncGetDatasetItemsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV2ActorsActorIdRunsLastRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV2ActorsActorIdRunsRunIdRoute, (c) => {
    throw new Error('Not implemented')
  })
