import { OpenAPIHono } from '@hono/zod-openapi'
import {
  getConsumersTenantRoute,
  postConsumersTenantRoute,
  getConsumersTenantMeCommunicationPreferencesRoute,
  getConsumersTenantMeCommunicationPreferencesTypeRoute,
  putConsumersTenantMeCommunicationPreferencesTypeRoute,
  deleteConsumersTenantMeCommunicationPreferencesTypeSubscribedChannelsChannelRoute,
  postConsumersTenantMeCommunicationPreferencesTypeSubscribedChannelsChannelRoute,
} from '../routes'

const app = new OpenAPIHono()

export const consumersHandler = app
  .openapi(getConsumersTenantRoute, (c) => {})
  .openapi(postConsumersTenantRoute, (c) => {})
  .openapi(getConsumersTenantMeCommunicationPreferencesRoute, (c) => {})
  .openapi(getConsumersTenantMeCommunicationPreferencesTypeRoute, (c) => {})
  .openapi(putConsumersTenantMeCommunicationPreferencesTypeRoute, (c) => {})
  .openapi(
    deleteConsumersTenantMeCommunicationPreferencesTypeSubscribedChannelsChannelRoute,
    (c) => {},
  )
  .openapi(
    postConsumersTenantMeCommunicationPreferencesTypeSubscribedChannelsChannelRoute,
    (c) => {},
  )
