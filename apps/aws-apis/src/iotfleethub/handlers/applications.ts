import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteApplicationsApplicationIdRoute,
  getApplicationsApplicationIdRoute,
  getApplicationsRoute,
  patchApplicationsApplicationIdRoute,
  postApplicationsRoute,
} from '../routes'

const app = new OpenAPIHono()

export const applicationsHandler = app
  .openapi(postApplicationsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApplicationsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteApplicationsApplicationIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApplicationsApplicationIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchApplicationsApplicationIdRoute, (c) => {
    throw new Error('Not implemented')
  })
