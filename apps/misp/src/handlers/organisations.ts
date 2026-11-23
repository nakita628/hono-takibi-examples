import { OpenAPIHono } from '@hono/zod-openapi'
import { getOrganisationsRoute, getOrganisationsViewOrganisationIdRoute } from '../routes'

const app = new OpenAPIHono()

export const organisationsHandler = app
  .openapi(getOrganisationsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getOrganisationsViewOrganisationIdRoute, (c) => {
    throw new Error('Not implemented')
  })
