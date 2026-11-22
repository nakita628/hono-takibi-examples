import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteApiV4GroupsIdSamlUidRoute,
  deleteApiV4GroupsIdScimUidRoute,
  getApiV4GroupsIdSamlIdentitiesRoute,
  getApiV4GroupsIdSamlUidRoute,
  getApiV4GroupsIdScimIdentitiesRoute,
  getApiV4GroupsIdScimUidRoute,
  patchApiV4GroupsIdSamlUidRoute,
  patchApiV4GroupsIdScimUidRoute,
} from '../routes'

const app = new OpenAPIHono()

export const providerIdentitiesHandler = app
  .openapi(getApiV4GroupsIdSamlIdentitiesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV4GroupsIdSamlUidRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchApiV4GroupsIdSamlUidRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteApiV4GroupsIdSamlUidRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV4GroupsIdScimIdentitiesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV4GroupsIdScimUidRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchApiV4GroupsIdScimUidRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteApiV4GroupsIdScimUidRoute, (c) => {
    throw new Error('Not implemented')
  })
