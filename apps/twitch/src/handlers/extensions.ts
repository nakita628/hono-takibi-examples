import { OpenAPIHono } from '@hono/zod-openapi'
import {
  getExtensionsConfigurationsRoute,
  getExtensionsJwtSecretsRoute,
  getExtensionsLiveRoute,
  getExtensionsReleasedRoute,
  getExtensionsRoute,
  getExtensionsTransactionsRoute,
  postExtensionsChatRoute,
  postExtensionsJwtSecretsRoute,
  postExtensionsPubsubRoute,
  putExtensionsConfigurationsRoute,
  putExtensionsRequiredConfigurationRoute,
} from '../routes'

const app = new OpenAPIHono()

export const extensionsHandler = app
  .openapi(getExtensionsTransactionsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getExtensionsConfigurationsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putExtensionsConfigurationsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putExtensionsRequiredConfigurationRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postExtensionsPubsubRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getExtensionsLiveRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getExtensionsJwtSecretsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postExtensionsJwtSecretsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postExtensionsChatRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getExtensionsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getExtensionsReleasedRoute, (c) => {
    throw new Error('Not implemented')
  })
