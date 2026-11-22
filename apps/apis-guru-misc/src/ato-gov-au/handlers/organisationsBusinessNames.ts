import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteOrganisationsPartyIdBusinessNamesProductIdRoute,
  getOrganisationsPartyIdBusinessNamesProductIdRoute,
  getOrganisationsPartyIdBusinessNamesRoute,
  postOrganisationsPartyIdBusinessNamesRoute,
  putOrganisationsPartyIdBusinessNamesProductIdRoute,
} from '../routes'

const app = new OpenAPIHono()

export const organisationsBusinessNamesHandler = app
  .openapi(getOrganisationsPartyIdBusinessNamesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postOrganisationsPartyIdBusinessNamesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteOrganisationsPartyIdBusinessNamesProductIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getOrganisationsPartyIdBusinessNamesProductIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putOrganisationsPartyIdBusinessNamesProductIdRoute, (c) => {
    throw new Error('Not implemented')
  })
