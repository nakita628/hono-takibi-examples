import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteLegalEntitiesLegalEntityIdAdministrationsIdRoute,
  getLegalEntitiesLegalEntityIdAdministrationsIdRoute,
  patchLegalEntitiesLegalEntityIdAdministrationsIdRoute,
  postLegalEntitiesLegalEntityIdAdministrationsRoute,
} from '../routes'

const app = new OpenAPIHono()

export const administrationsHandler = app
  .openapi(postLegalEntitiesLegalEntityIdAdministrationsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteLegalEntitiesLegalEntityIdAdministrationsIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getLegalEntitiesLegalEntityIdAdministrationsIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchLegalEntitiesLegalEntityIdAdministrationsIdRoute, (c) => {
    throw new Error('Not implemented')
  })
