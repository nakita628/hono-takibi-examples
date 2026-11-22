import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteOrganizationOrganizationIdExtensionsExtensionIdRoute,
  getOrganizationOrganizationIdExtensionsCountRoute,
  getOrganizationOrganizationIdExtensionsExtensionIdRoute,
  getOrganizationOrganizationIdExtensionsRoute,
  patchOrganizationOrganizationIdExtensionsExtensionIdRoute,
  postOrganizationOrganizationIdExtensionsRoute,
} from '../routes'

const app = new OpenAPIHono()

export const organizationExtensionHandler = app
  .openapi(getOrganizationOrganizationIdExtensionsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postOrganizationOrganizationIdExtensionsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getOrganizationOrganizationIdExtensionsExtensionIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchOrganizationOrganizationIdExtensionsExtensionIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteOrganizationOrganizationIdExtensionsExtensionIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getOrganizationOrganizationIdExtensionsCountRoute, (c) => {
    throw new Error('Not implemented')
  })
