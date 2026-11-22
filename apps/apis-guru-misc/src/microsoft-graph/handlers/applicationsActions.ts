import { OpenAPIHono } from '@hono/zod-openapi'
import {
  postApplicationsApplicationIdMicrosoftGraphAddKeyRoute,
  postApplicationsApplicationIdMicrosoftGraphAddPasswordRoute,
  postApplicationsApplicationIdMicrosoftGraphCheckMemberGroupsRoute,
  postApplicationsApplicationIdMicrosoftGraphCheckMemberObjectsRoute,
  postApplicationsApplicationIdMicrosoftGraphGetMemberGroupsRoute,
  postApplicationsApplicationIdMicrosoftGraphGetMemberObjectsRoute,
  postApplicationsApplicationIdMicrosoftGraphRemoveKeyRoute,
  postApplicationsApplicationIdMicrosoftGraphRemovePasswordRoute,
  postApplicationsApplicationIdMicrosoftGraphRestoreRoute,
  postApplicationsApplicationIdMicrosoftGraphSetVerifiedPublisherRoute,
  postApplicationsApplicationIdMicrosoftGraphUnsetVerifiedPublisherRoute,
  postApplicationsMicrosoftGraphGetAvailableExtensionPropertiesRoute,
  postApplicationsMicrosoftGraphGetByIdsRoute,
  postApplicationsMicrosoftGraphValidatePropertiesRoute,
} from '../routes'

const app = new OpenAPIHono()

export const applicationsActionsHandler = app
  .openapi(postApplicationsMicrosoftGraphGetAvailableExtensionPropertiesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApplicationsMicrosoftGraphGetByIdsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApplicationsMicrosoftGraphValidatePropertiesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApplicationsApplicationIdMicrosoftGraphAddKeyRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApplicationsApplicationIdMicrosoftGraphAddPasswordRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApplicationsApplicationIdMicrosoftGraphCheckMemberGroupsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApplicationsApplicationIdMicrosoftGraphCheckMemberObjectsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApplicationsApplicationIdMicrosoftGraphGetMemberGroupsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApplicationsApplicationIdMicrosoftGraphGetMemberObjectsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApplicationsApplicationIdMicrosoftGraphRemoveKeyRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApplicationsApplicationIdMicrosoftGraphRemovePasswordRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApplicationsApplicationIdMicrosoftGraphRestoreRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApplicationsApplicationIdMicrosoftGraphSetVerifiedPublisherRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApplicationsApplicationIdMicrosoftGraphUnsetVerifiedPublisherRoute, (c) => {
    throw new Error('Not implemented')
  })
