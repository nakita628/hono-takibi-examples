import { OpenAPIHono } from '@hono/zod-openapi'
import {
  postApplicationsApplicationIdAddKeyRoute,
  postApplicationsApplicationIdAddPasswordRoute,
  postApplicationsApplicationIdCheckMemberGroupsRoute,
  postApplicationsApplicationIdCheckMemberObjectsRoute,
  postApplicationsApplicationIdGetMemberGroupsRoute,
  postApplicationsApplicationIdGetMemberObjectsRoute,
  postApplicationsApplicationIdRemoveKeyRoute,
  postApplicationsApplicationIdRemovePasswordRoute,
  postApplicationsApplicationIdRestoreRoute,
  postApplicationsApplicationIdSetVerifiedPublisherRoute,
  postApplicationsApplicationIdUnsetVerifiedPublisherRoute,
  postApplicationsGetAvailableExtensionPropertiesRoute,
  postApplicationsGetByIdsRoute,
  postApplicationsValidatePropertiesRoute,
} from '../routes'

const app = new OpenAPIHono()

export const applicationsApplicationActionsHandler = app
  .openapi(postApplicationsApplicationIdAddKeyRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApplicationsApplicationIdAddPasswordRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApplicationsApplicationIdCheckMemberGroupsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApplicationsApplicationIdCheckMemberObjectsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApplicationsApplicationIdGetMemberGroupsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApplicationsApplicationIdGetMemberObjectsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApplicationsApplicationIdRemoveKeyRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApplicationsApplicationIdRemovePasswordRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApplicationsApplicationIdRestoreRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApplicationsApplicationIdSetVerifiedPublisherRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApplicationsApplicationIdUnsetVerifiedPublisherRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApplicationsGetAvailableExtensionPropertiesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApplicationsGetByIdsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApplicationsValidatePropertiesRoute, (c) => {
    throw new Error('Not implemented')
  })
