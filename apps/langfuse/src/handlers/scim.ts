import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteApiPublicScimUsersUserIdRoute,
  getApiPublicScimResourceTypesRoute,
  getApiPublicScimSchemasRoute,
  getApiPublicScimServiceProviderConfigRoute,
  getApiPublicScimUsersRoute,
  getApiPublicScimUsersUserIdRoute,
  postApiPublicScimUsersRoute,
} from '../routes'

const app = new OpenAPIHono()

export const scimHandler = app
  .openapi(getApiPublicScimServiceProviderConfigRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiPublicScimResourceTypesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiPublicScimSchemasRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiPublicScimUsersRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiPublicScimUsersRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiPublicScimUsersUserIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteApiPublicScimUsersUserIdRoute, (c) => {
    throw new Error('Not implemented')
  })
