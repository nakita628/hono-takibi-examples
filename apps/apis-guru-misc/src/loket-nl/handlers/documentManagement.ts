import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteProvidersEmployersEmployerIdDocumentsCompletedossierRoute,
  getProvidersEmployersEmployerIdDocumentsAuthorizationsRoute,
  postProvidersEmployersEmployerIdDocumentsCompletedossierInitiateRoute,
  putProvidersEmployersEmployerIdDocumentsAuthorizationsRoute,
} from '../routes'

const app = new OpenAPIHono()

export const documentManagementHandler = app
  .openapi(getProvidersEmployersEmployerIdDocumentsAuthorizationsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putProvidersEmployersEmployerIdDocumentsAuthorizationsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteProvidersEmployersEmployerIdDocumentsCompletedossierRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postProvidersEmployersEmployerIdDocumentsCompletedossierInitiateRoute, (c) => {
    throw new Error('Not implemented')
  })
