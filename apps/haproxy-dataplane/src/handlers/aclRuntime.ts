import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteServicesHaproxyRuntimeAclsParentNameEntriesIdRoute,
  getServicesHaproxyRuntimeAclsIdRoute,
  getServicesHaproxyRuntimeAclsParentNameEntriesIdRoute,
  getServicesHaproxyRuntimeAclsParentNameEntriesRoute,
  getServicesHaproxyRuntimeAclsRoute,
  postServicesHaproxyRuntimeAclsParentNameEntriesRoute,
  putServicesHaproxyRuntimeAclsParentNameEntriesRoute,
} from '../routes'

const app = new OpenAPIHono()

export const aclRuntimeHandler = app
  .openapi(getServicesHaproxyRuntimeAclsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getServicesHaproxyRuntimeAclsIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getServicesHaproxyRuntimeAclsParentNameEntriesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postServicesHaproxyRuntimeAclsParentNameEntriesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putServicesHaproxyRuntimeAclsParentNameEntriesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteServicesHaproxyRuntimeAclsParentNameEntriesIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getServicesHaproxyRuntimeAclsParentNameEntriesIdRoute, (c) => {
    throw new Error('Not implemented')
  })
