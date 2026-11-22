import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteAdminOrganisationsDeleteOrganisationIdRoute,
  getOrganisationsRoute,
  getOrganisationsViewOrganisationIdRoute,
  postAdminOrganisationsAddRoute,
  putAdminOrganisationsEditOrganisationIdRoute,
} from '../routes'

const app = new OpenAPIHono()

export const organisationsHandler = app
  .openapi(postAdminOrganisationsAddRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putAdminOrganisationsEditOrganisationIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteAdminOrganisationsDeleteOrganisationIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getOrganisationsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getOrganisationsViewOrganisationIdRoute, (c) => {
    throw new Error('Not implemented')
  })
