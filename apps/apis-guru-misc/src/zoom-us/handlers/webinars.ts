import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteWebinarsWebinarIdPanelistsPanelistIdRoute,
  deleteWebinarsWebinarIdPanelistsRoute,
  deleteWebinarsWebinarIdPollsPollIdRoute,
  deleteWebinarsWebinarIdRegistrantsRegistrantIdRoute,
  deleteWebinarsWebinarIdRoute,
  getPastWebinarsWebinarIdInstancesRoute,
  getPastWebinarsWebinarIdParticipantsRoute,
  getPastWebinarsWebinarIdPollsRoute,
  getPastWebinarsWebinarIdQaRoute,
  getPastWebinarsWebinarUUIDAbsenteesRoute,
  getUsersUserIdWebinarsRoute,
  getUsersUserIdWebinarTemplatesRoute,
  getWebinarsWebinarIdPanelistsRoute,
  getWebinarsWebinarIdPollsPollIdRoute,
  getWebinarsWebinarIdPollsRoute,
  getWebinarsWebinarIdRegistrantsQuestionsRoute,
  getWebinarsWebinarIdRegistrantsRegistrantIdRoute,
  getWebinarsWebinarIdRegistrantsRoute,
  getWebinarsWebinarIdRoute,
  getWebinarsWebinarIdTrackingSourcesRoute,
  patchWebinarsWebinarIdRegistrantsQuestionsRoute,
  patchWebinarsWebinarIdRoute,
  postUsersUserIdWebinarsRoute,
  postWebinarsWebinarIdBatchRegistrantsRoute,
  postWebinarsWebinarIdPanelistsRoute,
  postWebinarsWebinarIdPollsRoute,
  postWebinarsWebinarIdRegistrantsRoute,
  putWebinarsWebinarIdPollsPollIdRoute,
  putWebinarsWebinarIdRegistrantsStatusRoute,
  putWebinarsWebinarIdStatusRoute,
} from '../routes'

const app = new OpenAPIHono()

export const webinarsHandler = app
  .openapi(getPastWebinarsWebinarUUIDAbsenteesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getPastWebinarsWebinarIdInstancesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getPastWebinarsWebinarIdParticipantsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getPastWebinarsWebinarIdPollsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getPastWebinarsWebinarIdQaRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getUsersUserIdWebinarTemplatesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getUsersUserIdWebinarsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postUsersUserIdWebinarsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteWebinarsWebinarIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getWebinarsWebinarIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchWebinarsWebinarIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postWebinarsWebinarIdBatchRegistrantsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteWebinarsWebinarIdPanelistsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getWebinarsWebinarIdPanelistsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postWebinarsWebinarIdPanelistsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteWebinarsWebinarIdPanelistsPanelistIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getWebinarsWebinarIdPollsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postWebinarsWebinarIdPollsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteWebinarsWebinarIdPollsPollIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getWebinarsWebinarIdPollsPollIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putWebinarsWebinarIdPollsPollIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getWebinarsWebinarIdRegistrantsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postWebinarsWebinarIdRegistrantsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getWebinarsWebinarIdRegistrantsQuestionsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchWebinarsWebinarIdRegistrantsQuestionsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putWebinarsWebinarIdRegistrantsStatusRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteWebinarsWebinarIdRegistrantsRegistrantIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getWebinarsWebinarIdRegistrantsRegistrantIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putWebinarsWebinarIdStatusRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getWebinarsWebinarIdTrackingSourcesRoute, (c) => {
    throw new Error('Not implemented')
  })
