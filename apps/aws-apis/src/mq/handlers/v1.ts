import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteV1BrokersBrokerIdRoute,
  deleteV1BrokersBrokerIdUsersUsernameRoute,
  deleteV1TagsResourceArnTagKeysRoute,
  getV1BrokerEngineTypesRoute,
  getV1BrokerInstanceOptionsRoute,
  getV1BrokersBrokerIdRoute,
  getV1BrokersBrokerIdUsersRoute,
  getV1BrokersBrokerIdUsersUsernameRoute,
  getV1BrokersRoute,
  getV1ConfigurationsConfigurationIdRevisionsConfigurationRevisionRoute,
  getV1ConfigurationsConfigurationIdRevisionsRoute,
  getV1ConfigurationsConfigurationIdRoute,
  getV1ConfigurationsRoute,
  getV1TagsResourceArnRoute,
  postV1BrokersBrokerIdPromoteRoute,
  postV1BrokersBrokerIdRebootRoute,
  postV1BrokersBrokerIdUsersUsernameRoute,
  postV1BrokersRoute,
  postV1ConfigurationsRoute,
  postV1TagsResourceArnRoute,
  putV1BrokersBrokerIdRoute,
  putV1BrokersBrokerIdUsersUsernameRoute,
  putV1ConfigurationsConfigurationIdRoute,
} from '../routes'

const app = new OpenAPIHono()

export const v1Handler = app
  .openapi(postV1BrokersRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV1BrokersRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV1ConfigurationsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV1ConfigurationsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV1TagsResourceArnRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV1TagsResourceArnRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV1BrokersBrokerIdUsersUsernameRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteV1BrokersBrokerIdUsersUsernameRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV1BrokersBrokerIdUsersUsernameRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putV1BrokersBrokerIdUsersUsernameRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteV1BrokersBrokerIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV1BrokersBrokerIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putV1BrokersBrokerIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteV1TagsResourceArnTagKeysRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV1BrokerEngineTypesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV1BrokerInstanceOptionsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV1ConfigurationsConfigurationIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putV1ConfigurationsConfigurationIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV1ConfigurationsConfigurationIdRevisionsConfigurationRevisionRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV1ConfigurationsConfigurationIdRevisionsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV1BrokersBrokerIdUsersRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV1BrokersBrokerIdPromoteRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV1BrokersBrokerIdRebootRoute, (c) => {
    throw new Error('Not implemented')
  })
