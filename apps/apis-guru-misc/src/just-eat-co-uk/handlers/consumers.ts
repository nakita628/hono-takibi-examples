import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteConsumersTenantMeCommunicationPreferencesTypeSubscribedChannelsChannelRoute,
  getConsumersTenantMeCommunicationPreferencesRoute,
  getConsumersTenantMeCommunicationPreferencesTypeRoute,
  getConsumersTenantRoute,
  postConsumersTenantMeCommunicationPreferencesTypeSubscribedChannelsChannelRoute,
  postConsumersTenantRoute,
  putConsumersTenantMeCommunicationPreferencesTypeRoute,
} from '../routes'

const app = new OpenAPIHono()

export const consumersHandler = app
  .openapi(getConsumersTenantRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postConsumersTenantRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getConsumersTenantMeCommunicationPreferencesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getConsumersTenantMeCommunicationPreferencesTypeRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putConsumersTenantMeCommunicationPreferencesTypeRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(
    deleteConsumersTenantMeCommunicationPreferencesTypeSubscribedChannelsChannelRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(postConsumersTenantMeCommunicationPreferencesTypeSubscribedChannelsChannelRoute, (c) => {
    throw new Error('Not implemented')
  })
