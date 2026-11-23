import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteConsumersConsumerUsernameOrIdPluginsPluginIdRoute,
  deleteConsumersConsumerUsernameOrIdRoute,
  getConsumersConsumerUsernameOrIdPluginsPluginIdRoute,
  getConsumersConsumerUsernameOrIdPluginsRoute,
  getConsumersConsumerUsernameOrIdRoute,
  getConsumersRoute,
  patchConsumersConsumerUsernameOrIdPluginsPluginIdRoute,
  patchConsumersConsumerUsernameOrIdRoute,
  postConsumersConsumerUsernameOrIdPluginsRoute,
  postConsumersRoute,
  putConsumersConsumerUsernameOrIdPluginsPluginIdRoute,
  putConsumersConsumerUsernameOrIdRoute,
} from '../routes'

const app = new OpenAPIHono()

export const consumersHandler = app
  .openapi(getConsumersRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postConsumersRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteConsumersConsumerUsernameOrIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getConsumersConsumerUsernameOrIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchConsumersConsumerUsernameOrIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putConsumersConsumerUsernameOrIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getConsumersConsumerUsernameOrIdPluginsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postConsumersConsumerUsernameOrIdPluginsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteConsumersConsumerUsernameOrIdPluginsPluginIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getConsumersConsumerUsernameOrIdPluginsPluginIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchConsumersConsumerUsernameOrIdPluginsPluginIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putConsumersConsumerUsernameOrIdPluginsPluginIdRoute, (c) => {
    throw new Error('Not implemented')
  })
