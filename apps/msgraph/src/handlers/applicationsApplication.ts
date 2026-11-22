import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteApplicationsAppIdAppIdRoute,
  deleteApplicationsApplicationIdLogoRoute,
  deleteApplicationsApplicationIdRoute,
  deleteApplicationsUniqueNameUniqueNameRoute,
  getApplicationsAppIdAppIdRoute,
  getApplicationsApplicationIdLogoRoute,
  getApplicationsApplicationIdRoute,
  getApplicationsCountRoute,
  getApplicationsRoute,
  getApplicationsUniqueNameUniqueNameRoute,
  patchApplicationsAppIdAppIdRoute,
  patchApplicationsApplicationIdRoute,
  patchApplicationsUniqueNameUniqueNameRoute,
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
  .openapi(getApplicationsApplicationIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchApplicationsApplicationIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteApplicationsApplicationIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApplicationsApplicationIdLogoRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putApplicationsApplicationIdLogoRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteApplicationsApplicationIdLogoRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApplicationsAppIdAppIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchApplicationsAppIdAppIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteApplicationsAppIdAppIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApplicationsUniqueNameUniqueNameRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchApplicationsUniqueNameUniqueNameRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteApplicationsUniqueNameUniqueNameRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApplicationsCountRoute, (c) => {
    throw new Error('Not implemented')
  })
