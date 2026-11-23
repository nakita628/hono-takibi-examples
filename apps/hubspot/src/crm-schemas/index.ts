import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteCrmObjectSchemas202609SchemasObjectTypeAssociationsAssociationIdentifierRoute,
  deleteCrmObjectSchemas202609SchemasObjectTypeRoute,
  getCrmObjectSchemas202609SchemasObjectTypeRoute,
  getCrmObjectSchemas202609SchemasRoute,
  patchCrmObjectSchemas202609SchemasObjectTypeRoute,
  postCrmObjectSchemas202609SchemasBatchReadRoute,
  postCrmObjectSchemas202609SchemasObjectTypeAssociationsRoute,
  postCrmObjectSchemas202609SchemasRoute,
} from './routes'
import {
  deleteCrmObjectSchemas202609SchemasObjectTypeAssociationsAssociationIdentifierRouteHandler,
  deleteCrmObjectSchemas202609SchemasObjectTypeRouteHandler,
  getCrmObjectSchemas202609SchemasObjectTypeRouteHandler,
  getCrmObjectSchemas202609SchemasRouteHandler,
  patchCrmObjectSchemas202609SchemasObjectTypeRouteHandler,
  postCrmObjectSchemas202609SchemasBatchReadRouteHandler,
  postCrmObjectSchemas202609SchemasObjectTypeAssociationsRouteHandler,
  postCrmObjectSchemas202609SchemasRouteHandler,
} from './handlers'

const app = new OpenAPIHono()

export const api = app
  .openapi(getCrmObjectSchemas202609SchemasRoute, getCrmObjectSchemas202609SchemasRouteHandler)
  .openapi(postCrmObjectSchemas202609SchemasRoute, postCrmObjectSchemas202609SchemasRouteHandler)
  .openapi(
    postCrmObjectSchemas202609SchemasBatchReadRoute,
    postCrmObjectSchemas202609SchemasBatchReadRouteHandler,
  )
  .openapi(
    getCrmObjectSchemas202609SchemasObjectTypeRoute,
    getCrmObjectSchemas202609SchemasObjectTypeRouteHandler,
  )
  .openapi(
    deleteCrmObjectSchemas202609SchemasObjectTypeRoute,
    deleteCrmObjectSchemas202609SchemasObjectTypeRouteHandler,
  )
  .openapi(
    patchCrmObjectSchemas202609SchemasObjectTypeRoute,
    patchCrmObjectSchemas202609SchemasObjectTypeRouteHandler,
  )
  .openapi(
    postCrmObjectSchemas202609SchemasObjectTypeAssociationsRoute,
    postCrmObjectSchemas202609SchemasObjectTypeAssociationsRouteHandler,
  )
  .openapi(
    deleteCrmObjectSchemas202609SchemasObjectTypeAssociationsAssociationIdentifierRoute,
    deleteCrmObjectSchemas202609SchemasObjectTypeAssociationsAssociationIdentifierRouteHandler,
  )

export default app
