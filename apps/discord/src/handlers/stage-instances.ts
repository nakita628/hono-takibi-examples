import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteStageInstancesChannelIdRoute,
  getStageInstancesChannelIdRoute,
  patchStageInstancesChannelIdRoute,
  postStageInstancesRoute,
} from '../routes'

const app = new OpenAPIHono()

export const stageInstancesHandler = app
  .openapi(postStageInstancesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getStageInstancesChannelIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteStageInstancesChannelIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchStageInstancesChannelIdRoute, (c) => {
    throw new Error('Not implemented')
  })
