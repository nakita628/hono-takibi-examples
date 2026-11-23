import { OpenAPIHono } from '@hono/zod-openapi'
import {
  getOrganizationsOrganizationIdRoute,
  getOrganizationsRoute,
  optionsOrganizationsOrganizationIdRoute,
  optionsOrganizationsRoute,
  patchOrganizationsOrganizationIdRoute,
  postOrganizationsRoute,
} from '../routes'

const app = new OpenAPIHono()

export const organizationsHandler = app
  .openapi(getOrganizationsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(optionsOrganizationsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postOrganizationsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getOrganizationsOrganizationIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(optionsOrganizationsOrganizationIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchOrganizationsOrganizationIdRoute, (c) => {
    throw new Error('Not implemented')
  })
