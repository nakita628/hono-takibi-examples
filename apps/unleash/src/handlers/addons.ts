import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteApiAdminAddonsIdRoute,
  getApiAdminAddonsIdEventsRoute,
  getApiAdminAddonsIdRoute,
  getApiAdminAddonsRoute,
  getApiAdminProjectsProjectIdAddonsRoute,
  postApiAdminAddonsRoute,
  postApiAdminProjectsProjectIdAddonsRoute,
  putApiAdminAddonsIdRoute,
  putApiAdminProjectsProjectIdAddonsIdRoute,
} from '../routes'

const app = new OpenAPIHono()

export const addonsHandler = app
  .openapi(getApiAdminAddonsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiAdminAddonsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiAdminAddonsIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putApiAdminAddonsIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteApiAdminAddonsIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiAdminAddonsIdEventsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiAdminProjectsProjectIdAddonsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiAdminProjectsProjectIdAddonsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putApiAdminProjectsProjectIdAddonsIdRoute, (c) => {
    throw new Error('Not implemented')
  })
