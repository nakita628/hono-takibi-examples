import { OpenAPIHono } from '@hono/zod-openapi'
import {
  getInstitutionsIndexRoute,
  getInstitutionsInstitutionIdIndexRoute,
  getInstitutionsInstitutionIdNodesIndexRoute,
  getInstitutionsInstitutionIdRegistrationsIndexRoute,
  getInstitutionsInstitutionIdUsersIndexRoute,
} from '../routes'

const app = new OpenAPIHono()

export const institutionsHandler = app
  .openapi(getInstitutionsIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getInstitutionsInstitutionIdIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getInstitutionsInstitutionIdNodesIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getInstitutionsInstitutionIdRegistrationsIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getInstitutionsInstitutionIdUsersIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
