import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteDomainConfigurationsDomainConfigurationNameRoute,
  getDomainConfigurationsDomainConfigurationNameRoute,
  getDomainConfigurationsRoute,
  postDomainConfigurationsDomainConfigurationNameRoute,
  putDomainConfigurationsDomainConfigurationNameRoute,
} from '../routes'

const app = new OpenAPIHono()

export const domainConfigurationsHandler = app
  .openapi(postDomainConfigurationsDomainConfigurationNameRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteDomainConfigurationsDomainConfigurationNameRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getDomainConfigurationsDomainConfigurationNameRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putDomainConfigurationsDomainConfigurationNameRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getDomainConfigurationsRoute, (c) => {
    throw new Error('Not implemented')
  })
