import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteOrganisationsPartyIdLicensesProductIdRoute,
  getOrganisationsPartyIdLicensesProductIdRoute,
  getOrganisationsPartyIdLicensesRoute,
  postOrganisationsPartyIdLicensesRoute,
  putOrganisationsPartyIdLicensesProductIdRoute,
} from '../routes'

const app = new OpenAPIHono()

export const organisationsLicensesHandler = app
  .openapi(getOrganisationsPartyIdLicensesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postOrganisationsPartyIdLicensesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteOrganisationsPartyIdLicensesProductIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getOrganisationsPartyIdLicensesProductIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putOrganisationsPartyIdLicensesProductIdRoute, (c) => {
    throw new Error('Not implemented')
  })
