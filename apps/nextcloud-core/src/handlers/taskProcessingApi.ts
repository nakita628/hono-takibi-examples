import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteOcsV2PhpTaskprocessingTaskIdRoute,
  deleteOcsV2PhpTaskprocessingTasksConsumerTaskIdRoute,
  getOcsV2PhpTaskprocessingQueueStatsRoute,
  getOcsV2PhpTaskprocessingTaskIdRoute,
  getOcsV2PhpTaskprocessingTasksAppAppIdRoute,
  getOcsV2PhpTaskprocessingTasksConsumerTaskIdRoute,
  getOcsV2PhpTaskprocessingTasksConsumerTasktypesRoute,
  getOcsV2PhpTaskprocessingTasksProviderNextBatchRoute,
  getOcsV2PhpTaskprocessingTasksProviderNextRoute,
  getOcsV2PhpTaskprocessingTasksProviderTaskIdFileFileIdRoute,
  getOcsV2PhpTaskprocessingTasksRoute,
  getOcsV2PhpTaskprocessingTasksTaskIdFileFileIdRoute,
  getOcsV2PhpTaskprocessingTasksTaskIdQueuePositionRoute,
  getOcsV2PhpTaskprocessingTasktypesRoute,
  postOcsV2PhpTaskprocessingScheduleRoute,
  postOcsV2PhpTaskprocessingTasksConsumerScheduleRoute,
  postOcsV2PhpTaskprocessingTasksConsumerTasksTaskIdCancelRoute,
  postOcsV2PhpTaskprocessingTasksProviderTaskIdFileRoute,
  postOcsV2PhpTaskprocessingTasksProviderTaskIdProgressRoute,
  postOcsV2PhpTaskprocessingTasksProviderTaskIdResultRoute,
  postOcsV2PhpTaskprocessingTasksProviderTaskIdStreamResultRoute,
  postOcsV2PhpTaskprocessingTasksTaskIdCancelRoute,
} from '../routes'

const app = new OpenAPIHono()

export const taskProcessingApiHandler = app
  .openapi(getOcsV2PhpTaskprocessingTasktypesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postOcsV2PhpTaskprocessingScheduleRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getOcsV2PhpTaskprocessingTaskIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteOcsV2PhpTaskprocessingTaskIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getOcsV2PhpTaskprocessingTasksAppAppIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getOcsV2PhpTaskprocessingTasksRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getOcsV2PhpTaskprocessingTasksTaskIdFileFileIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postOcsV2PhpTaskprocessingTasksTaskIdCancelRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getOcsV2PhpTaskprocessingTasksTaskIdQueuePositionRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getOcsV2PhpTaskprocessingTasksConsumerTasktypesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postOcsV2PhpTaskprocessingTasksConsumerScheduleRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getOcsV2PhpTaskprocessingTasksConsumerTaskIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteOcsV2PhpTaskprocessingTasksConsumerTaskIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getOcsV2PhpTaskprocessingTasksProviderTaskIdFileFileIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postOcsV2PhpTaskprocessingTasksProviderTaskIdFileRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postOcsV2PhpTaskprocessingTasksProviderTaskIdProgressRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postOcsV2PhpTaskprocessingTasksProviderTaskIdResultRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postOcsV2PhpTaskprocessingTasksProviderTaskIdStreamResultRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postOcsV2PhpTaskprocessingTasksConsumerTasksTaskIdCancelRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getOcsV2PhpTaskprocessingTasksProviderNextRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getOcsV2PhpTaskprocessingTasksProviderNextBatchRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getOcsV2PhpTaskprocessingQueueStatsRoute, (c) => {
    throw new Error('Not implemented')
  })
