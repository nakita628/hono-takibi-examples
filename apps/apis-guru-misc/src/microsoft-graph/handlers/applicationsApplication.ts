import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteApplicationsApplicationIdRoute,
  getApplicationsApplicationIdLogoRoute,
  getApplicationsApplicationIdRoute,
  getApplicationsRoute,
  patchApplicationsApplicationIdRoute,
  postApplicationsRoute,
  putApplicationsApplicationIdLogoRoute,
} from '../routes'

const app = new OpenAPIHono()

export const applicationsApplicationHandler = app
  .openapi(getApplicationsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApplicationsRoute, (c) => {
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
  .openapi(getApplicationsApplicationIdLogoRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putApplicationsApplicationIdLogoRoute, (c) => {
    throw new Error('Not implemented')
  })
