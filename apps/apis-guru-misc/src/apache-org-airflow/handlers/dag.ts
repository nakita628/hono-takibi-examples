import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteDagsDagIdRoute,
  getDagsDagIdDetailsRoute,
  getDagsDagIdRoute,
  getDagsDagIdTasksRoute,
  getDagsDagIdTasksTaskIdRoute,
  getDagSourcesFileTokenRoute,
  getDagsRoute,
  patchDagsDagIdRoute,
  patchDagsRoute,
  postDagsDagIdClearTaskInstancesRoute,
  postDagsDagIdUpdateTaskInstancesStateRoute,
} from '../routes'

const app = new OpenAPIHono()

export const dagHandler = app
  .openapi(getDagSourcesFileTokenRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getDagsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchDagsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteDagsDagIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getDagsDagIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchDagsDagIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postDagsDagIdClearTaskInstancesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getDagsDagIdDetailsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getDagsDagIdTasksRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getDagsDagIdTasksTaskIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postDagsDagIdUpdateTaskInstancesStateRoute, (c) => {
    throw new Error('Not implemented')
  })
