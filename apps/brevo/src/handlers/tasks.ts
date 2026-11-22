import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteCrmTasksIdRoute,
  getCrmTasksIdRoute,
  getCrmTasksRoute,
  getCrmTasktypesRoute,
  patchCrmTasksIdRoute,
  postCrmTasksRoute,
} from '../routes'

const app = new OpenAPIHono()

export const tasksHandler = app
  .openapi(getCrmTasksRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postCrmTasksRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteCrmTasksIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getCrmTasksIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchCrmTasksIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getCrmTasktypesRoute, (c) => {
    throw new Error('Not implemented')
  })
