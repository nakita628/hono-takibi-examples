import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteApplicationsApplicationAttributeGroupsAttributeGroupRoute,
  deleteApplicationsApplicationResourcesResourceTypeResourceRoute,
  deleteApplicationsApplicationRoute,
  getApplicationsApplicationAttributeGroupDetailsRoute,
  getApplicationsApplicationAttributeGroupsRoute,
  getApplicationsApplicationResourcesResourceTypeResourceRoute,
  getApplicationsApplicationResourcesRoute,
  getApplicationsApplicationRoute,
  getApplicationsRoute,
  patchApplicationsApplicationRoute,
  postApplicationsRoute,
  putApplicationsApplicationAttributeGroupsAttributeGroupRoute,
  putApplicationsApplicationResourcesResourceTypeResourceRoute,
} from '../routes'

const app = new OpenAPIHono()

export const applicationsHandler = app
  .openapi(putApplicationsApplicationAttributeGroupsAttributeGroupRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteApplicationsApplicationAttributeGroupsAttributeGroupRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putApplicationsApplicationResourcesResourceTypeResourceRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteApplicationsApplicationResourcesResourceTypeResourceRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApplicationsApplicationResourcesResourceTypeResourceRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApplicationsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApplicationsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteApplicationsApplicationRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApplicationsApplicationRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchApplicationsApplicationRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApplicationsApplicationAttributeGroupsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApplicationsApplicationResourcesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApplicationsApplicationAttributeGroupDetailsRoute, (c) => {
    throw new Error('Not implemented')
  })
