import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteOrganizationOrganizationIdRoute,
  getOrganizationCountRoute,
  getOrganizationOrganizationIdRoute,
  getOrganizationRoute,
  patchOrganizationOrganizationIdRoute,
  postOrganizationRoute,
} from '../routes'

const app = new OpenAPIHono()

export const organizationOrganizationHandler = app
  .openapi(getOrganizationRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postOrganizationRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getOrganizationOrganizationIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchOrganizationOrganizationIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteOrganizationOrganizationIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getOrganizationCountRoute, (c) => {
    throw new Error('Not implemented')
  })
