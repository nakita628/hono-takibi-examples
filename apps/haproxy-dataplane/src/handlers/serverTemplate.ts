import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteServicesHaproxyConfigurationBackendsParentNameServerTemplatesPrefixRoute,
  getServicesHaproxyConfigurationBackendsParentNameServerTemplatesPrefixRoute,
  getServicesHaproxyConfigurationBackendsParentNameServerTemplatesRoute,
  postServicesHaproxyConfigurationBackendsParentNameServerTemplatesRoute,
  putServicesHaproxyConfigurationBackendsParentNameServerTemplatesPrefixRoute,
} from '../routes'

const app = new OpenAPIHono()

export const serverTemplateHandler = app
  .openapi(getServicesHaproxyConfigurationBackendsParentNameServerTemplatesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postServicesHaproxyConfigurationBackendsParentNameServerTemplatesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteServicesHaproxyConfigurationBackendsParentNameServerTemplatesPrefixRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getServicesHaproxyConfigurationBackendsParentNameServerTemplatesPrefixRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putServicesHaproxyConfigurationBackendsParentNameServerTemplatesPrefixRoute, (c) => {
    throw new Error('Not implemented')
  })
