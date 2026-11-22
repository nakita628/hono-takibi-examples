import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteOrganisationsPartyIdRoute,
  getOrganisationsPartyIdRoute,
  getOrganisationsRoute,
  postOrganisationsRoute,
  putOrganisationsPartyIdRoute,
} from '../routes'

const app = new OpenAPIHono()

export const organisationsHandler = app
  .openapi(getOrganisationsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postOrganisationsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteOrganisationsPartyIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getOrganisationsPartyIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putOrganisationsPartyIdRoute, (c) => {
    throw new Error('Not implemented')
  })
