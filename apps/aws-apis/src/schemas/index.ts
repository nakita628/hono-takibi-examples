import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteTagsResourceArnTagKeysRoute,
  deleteV1DiscoverersIdDiscovererIdRoute,
  deleteV1PolicyRoute,
  deleteV1RegistriesNameRegistryNameRoute,
  deleteV1RegistriesNameRegistryNameSchemasNameSchemaNameRoute,
  deleteV1RegistriesNameRegistryNameSchemasNameSchemaNameVersionSchemaVersionRoute,
  getTagsResourceArnRoute,
  getV1DiscoverersIdDiscovererIdRoute,
  getV1DiscoverersRoute,
  getV1PolicyRoute,
  getV1RegistriesNameRegistryNameRoute,
  getV1RegistriesNameRegistryNameSchemasNameSchemaNameExportTypeRoute,
  getV1RegistriesNameRegistryNameSchemasNameSchemaNameLanguageLanguageRoute,
  getV1RegistriesNameRegistryNameSchemasNameSchemaNameLanguageLanguageSourceRoute,
  getV1RegistriesNameRegistryNameSchemasNameSchemaNameRoute,
  getV1RegistriesNameRegistryNameSchemasNameSchemaNameVersionsRoute,
  getV1RegistriesNameRegistryNameSchemasRoute,
  getV1RegistriesNameRegistryNameSchemasSearchKeywordsRoute,
  getV1RegistriesRoute,
  postTagsResourceArnRoute,
  postV1DiscoverersIdDiscovererIdStartRoute,
  postV1DiscoverersIdDiscovererIdStopRoute,
  postV1DiscoverersRoute,
  postV1DiscoverRoute,
  postV1RegistriesNameRegistryNameRoute,
  postV1RegistriesNameRegistryNameSchemasNameSchemaNameLanguageLanguageRoute,
  postV1RegistriesNameRegistryNameSchemasNameSchemaNameRoute,
  putV1DiscoverersIdDiscovererIdRoute,
  putV1PolicyRoute,
  putV1RegistriesNameRegistryNameRoute,
  putV1RegistriesNameRegistryNameSchemasNameSchemaNameRoute,
} from './routes'
import {
  deleteTagsResourceArnTagKeysRouteHandler,
  deleteV1DiscoverersIdDiscovererIdRouteHandler,
  deleteV1PolicyRouteHandler,
  deleteV1RegistriesNameRegistryNameRouteHandler,
  deleteV1RegistriesNameRegistryNameSchemasNameSchemaNameRouteHandler,
  deleteV1RegistriesNameRegistryNameSchemasNameSchemaNameVersionSchemaVersionRouteHandler,
  getTagsResourceArnRouteHandler,
  getV1DiscoverersIdDiscovererIdRouteHandler,
  getV1DiscoverersRouteHandler,
  getV1PolicyRouteHandler,
  getV1RegistriesNameRegistryNameRouteHandler,
  getV1RegistriesNameRegistryNameSchemasNameSchemaNameExportTypeRouteHandler,
  getV1RegistriesNameRegistryNameSchemasNameSchemaNameLanguageLanguageRouteHandler,
  getV1RegistriesNameRegistryNameSchemasNameSchemaNameLanguageLanguageSourceRouteHandler,
  getV1RegistriesNameRegistryNameSchemasNameSchemaNameRouteHandler,
  getV1RegistriesNameRegistryNameSchemasNameSchemaNameVersionsRouteHandler,
  getV1RegistriesNameRegistryNameSchemasRouteHandler,
  getV1RegistriesNameRegistryNameSchemasSearchKeywordsRouteHandler,
  getV1RegistriesRouteHandler,
  postTagsResourceArnRouteHandler,
  postV1DiscoverersIdDiscovererIdStartRouteHandler,
  postV1DiscoverersIdDiscovererIdStopRouteHandler,
  postV1DiscoverersRouteHandler,
  postV1DiscoverRouteHandler,
  postV1RegistriesNameRegistryNameRouteHandler,
  postV1RegistriesNameRegistryNameSchemasNameSchemaNameLanguageLanguageRouteHandler,
  postV1RegistriesNameRegistryNameSchemasNameSchemaNameRouteHandler,
  putV1DiscoverersIdDiscovererIdRouteHandler,
  putV1PolicyRouteHandler,
  putV1RegistriesNameRegistryNameRouteHandler,
  putV1RegistriesNameRegistryNameSchemasNameSchemaNameRouteHandler,
} from './handlers'

const app = new OpenAPIHono()

export const api = app
  .openapi(postV1DiscoverersRoute, postV1DiscoverersRouteHandler)
  .openapi(getV1DiscoverersRoute, getV1DiscoverersRouteHandler)
  .openapi(postV1RegistriesNameRegistryNameRoute, postV1RegistriesNameRegistryNameRouteHandler)
  .openapi(deleteV1RegistriesNameRegistryNameRoute, deleteV1RegistriesNameRegistryNameRouteHandler)
  .openapi(getV1RegistriesNameRegistryNameRoute, getV1RegistriesNameRegistryNameRouteHandler)
  .openapi(putV1RegistriesNameRegistryNameRoute, putV1RegistriesNameRegistryNameRouteHandler)
  .openapi(
    postV1RegistriesNameRegistryNameSchemasNameSchemaNameRoute,
    postV1RegistriesNameRegistryNameSchemasNameSchemaNameRouteHandler,
  )
  .openapi(
    deleteV1RegistriesNameRegistryNameSchemasNameSchemaNameRoute,
    deleteV1RegistriesNameRegistryNameSchemasNameSchemaNameRouteHandler,
  )
  .openapi(
    getV1RegistriesNameRegistryNameSchemasNameSchemaNameRoute,
    getV1RegistriesNameRegistryNameSchemasNameSchemaNameRouteHandler,
  )
  .openapi(
    putV1RegistriesNameRegistryNameSchemasNameSchemaNameRoute,
    putV1RegistriesNameRegistryNameSchemasNameSchemaNameRouteHandler,
  )
  .openapi(deleteV1DiscoverersIdDiscovererIdRoute, deleteV1DiscoverersIdDiscovererIdRouteHandler)
  .openapi(getV1DiscoverersIdDiscovererIdRoute, getV1DiscoverersIdDiscovererIdRouteHandler)
  .openapi(putV1DiscoverersIdDiscovererIdRoute, putV1DiscoverersIdDiscovererIdRouteHandler)
  .openapi(deleteV1PolicyRoute, deleteV1PolicyRouteHandler)
  .openapi(getV1PolicyRoute, getV1PolicyRouteHandler)
  .openapi(putV1PolicyRoute, putV1PolicyRouteHandler)
  .openapi(
    deleteV1RegistriesNameRegistryNameSchemasNameSchemaNameVersionSchemaVersionRoute,
    deleteV1RegistriesNameRegistryNameSchemasNameSchemaNameVersionSchemaVersionRouteHandler,
  )
  .openapi(
    getV1RegistriesNameRegistryNameSchemasNameSchemaNameLanguageLanguageRoute,
    getV1RegistriesNameRegistryNameSchemasNameSchemaNameLanguageLanguageRouteHandler,
  )
  .openapi(
    postV1RegistriesNameRegistryNameSchemasNameSchemaNameLanguageLanguageRoute,
    postV1RegistriesNameRegistryNameSchemasNameSchemaNameLanguageLanguageRouteHandler,
  )
  .openapi(
    getV1RegistriesNameRegistryNameSchemasNameSchemaNameExportTypeRoute,
    getV1RegistriesNameRegistryNameSchemasNameSchemaNameExportTypeRouteHandler,
  )
  .openapi(
    getV1RegistriesNameRegistryNameSchemasNameSchemaNameLanguageLanguageSourceRoute,
    getV1RegistriesNameRegistryNameSchemasNameSchemaNameLanguageLanguageSourceRouteHandler,
  )
  .openapi(postV1DiscoverRoute, postV1DiscoverRouteHandler)
  .openapi(getV1RegistriesRoute, getV1RegistriesRouteHandler)
  .openapi(
    getV1RegistriesNameRegistryNameSchemasNameSchemaNameVersionsRoute,
    getV1RegistriesNameRegistryNameSchemasNameSchemaNameVersionsRouteHandler,
  )
  .openapi(
    getV1RegistriesNameRegistryNameSchemasRoute,
    getV1RegistriesNameRegistryNameSchemasRouteHandler,
  )
  .openapi(getTagsResourceArnRoute, getTagsResourceArnRouteHandler)
  .openapi(postTagsResourceArnRoute, postTagsResourceArnRouteHandler)
  .openapi(
    getV1RegistriesNameRegistryNameSchemasSearchKeywordsRoute,
    getV1RegistriesNameRegistryNameSchemasSearchKeywordsRouteHandler,
  )
  .openapi(
    postV1DiscoverersIdDiscovererIdStartRoute,
    postV1DiscoverersIdDiscovererIdStartRouteHandler,
  )
  .openapi(
    postV1DiscoverersIdDiscovererIdStopRoute,
    postV1DiscoverersIdDiscovererIdStopRouteHandler,
  )
  .openapi(deleteTagsResourceArnTagKeysRoute, deleteTagsResourceArnTagKeysRouteHandler)

export default app
