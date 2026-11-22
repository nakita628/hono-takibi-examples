import { OpenAPIHono } from '@hono/zod-openapi'
import {
  postV1SchedulerDestinationsCheckConnectionRoute,
  postV1SchedulerSourcesCheckConnectionRoute,
  postV1SchedulerSourcesDiscoverSchemaRoute,
} from '../routes'

const app = new OpenAPIHono()

export const schedulerHandler = app
  .openapi(postV1SchedulerSourcesCheckConnectionRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV1SchedulerSourcesDiscoverSchemaRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV1SchedulerDestinationsCheckConnectionRoute, (c) => {
    throw new Error('Not implemented')
  })
