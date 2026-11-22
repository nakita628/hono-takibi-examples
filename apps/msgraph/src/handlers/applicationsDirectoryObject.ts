import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteApplicationsApplicationIdOwnersDirectoryObjectIdRefRoute,
  deleteApplicationsApplicationIdOwnersRefRoute,
  getApplicationsApplicationIdCreatedOnBehalfOfRoute,
  getApplicationsApplicationIdOwnersCountRoute,
  getApplicationsApplicationIdOwnersDirectoryObjectIdGraphAppRoleAssignmentRoute,
  getApplicationsApplicationIdOwnersDirectoryObjectIdGraphEndpointRoute,
  getApplicationsApplicationIdOwnersDirectoryObjectIdGraphServicePrincipalRoute,
  getApplicationsApplicationIdOwnersDirectoryObjectIdGraphUserRoute,
  getApplicationsApplicationIdOwnersGraphAppRoleAssignmentCountRoute,
  getApplicationsApplicationIdOwnersGraphAppRoleAssignmentRoute,
  getApplicationsApplicationIdOwnersGraphEndpointCountRoute,
  getApplicationsApplicationIdOwnersGraphEndpointRoute,
  getApplicationsApplicationIdOwnersGraphServicePrincipalCountRoute,
  getApplicationsApplicationIdOwnersGraphServicePrincipalRoute,
  getApplicationsApplicationIdOwnersGraphUserCountRoute,
  getApplicationsApplicationIdOwnersGraphUserRoute,
  getApplicationsApplicationIdOwnersRefRoute,
  getApplicationsApplicationIdOwnersRoute,
  postApplicationsApplicationIdOwnersRefRoute,
} from '../routes'

const app = new OpenAPIHono()

export const applicationsDirectoryObjectHandler = app
  .openapi(getApplicationsApplicationIdCreatedOnBehalfOfRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApplicationsApplicationIdOwnersRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteApplicationsApplicationIdOwnersDirectoryObjectIdRefRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApplicationsApplicationIdOwnersDirectoryObjectIdGraphAppRoleAssignmentRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApplicationsApplicationIdOwnersDirectoryObjectIdGraphEndpointRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApplicationsApplicationIdOwnersDirectoryObjectIdGraphServicePrincipalRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApplicationsApplicationIdOwnersDirectoryObjectIdGraphUserRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApplicationsApplicationIdOwnersCountRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApplicationsApplicationIdOwnersRefRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApplicationsApplicationIdOwnersRefRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteApplicationsApplicationIdOwnersRefRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApplicationsApplicationIdOwnersGraphAppRoleAssignmentRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApplicationsApplicationIdOwnersGraphAppRoleAssignmentCountRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApplicationsApplicationIdOwnersGraphEndpointRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApplicationsApplicationIdOwnersGraphEndpointCountRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApplicationsApplicationIdOwnersGraphServicePrincipalRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApplicationsApplicationIdOwnersGraphServicePrincipalCountRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApplicationsApplicationIdOwnersGraphUserRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApplicationsApplicationIdOwnersGraphUserCountRoute, (c) => {
    throw new Error('Not implemented')
  })
