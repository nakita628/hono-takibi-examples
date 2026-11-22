import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteApiV4ProjectsIdTriggersTriggerIdRoute,
  getApiV4ProjectsIdTriggersRoute,
  getApiV4ProjectsIdTriggersTriggerIdRoute,
  postApiV4ProjectsIdRefRefTriggerPipelineRoute,
  postApiV4ProjectsIdTriggerPipelineRoute,
  postApiV4ProjectsIdTriggersRoute,
  putApiV4ProjectsIdTriggersTriggerIdRoute,
} from '../routes'

const app = new OpenAPIHono()

export const ciTriggersHandler = app
  .openapi(postApiV4ProjectsIdTriggerPipelineRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiV4ProjectsIdRefRefTriggerPipelineRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV4ProjectsIdTriggersRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiV4ProjectsIdTriggersRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV4ProjectsIdTriggersTriggerIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putApiV4ProjectsIdTriggersTriggerIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteApiV4ProjectsIdTriggersTriggerIdRoute, (c) => {
    throw new Error('Not implemented')
  })
