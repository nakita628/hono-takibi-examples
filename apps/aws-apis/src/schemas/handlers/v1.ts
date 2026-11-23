import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteV1DiscoverersIdDiscovererIdRoute,
  deleteV1PolicyRoute,
  deleteV1RegistriesNameRegistryNameRoute,
  deleteV1RegistriesNameRegistryNameSchemasNameSchemaNameRoute,
  deleteV1RegistriesNameRegistryNameSchemasNameSchemaNameVersionSchemaVersionRoute,
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
} from '../routes'

const app = new OpenAPIHono()

export const v1Handler = app
  .openapi(postV1DiscoverersRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV1DiscoverersRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV1RegistriesNameRegistryNameRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteV1RegistriesNameRegistryNameRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV1RegistriesNameRegistryNameRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putV1RegistriesNameRegistryNameRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV1RegistriesNameRegistryNameSchemasNameSchemaNameRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteV1RegistriesNameRegistryNameSchemasNameSchemaNameRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV1RegistriesNameRegistryNameSchemasNameSchemaNameRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putV1RegistriesNameRegistryNameSchemasNameSchemaNameRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteV1DiscoverersIdDiscovererIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV1DiscoverersIdDiscovererIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putV1DiscoverersIdDiscovererIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteV1PolicyRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV1PolicyRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putV1PolicyRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(
    deleteV1RegistriesNameRegistryNameSchemasNameSchemaNameVersionSchemaVersionRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(getV1RegistriesNameRegistryNameSchemasNameSchemaNameLanguageLanguageRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV1RegistriesNameRegistryNameSchemasNameSchemaNameLanguageLanguageRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV1RegistriesNameRegistryNameSchemasNameSchemaNameExportTypeRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV1RegistriesNameRegistryNameSchemasNameSchemaNameLanguageLanguageSourceRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV1DiscoverRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV1RegistriesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV1RegistriesNameRegistryNameSchemasNameSchemaNameVersionsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV1RegistriesNameRegistryNameSchemasRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV1RegistriesNameRegistryNameSchemasSearchKeywordsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV1DiscoverersIdDiscovererIdStartRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV1DiscoverersIdDiscovererIdStopRoute, (c) => {
    throw new Error('Not implemented')
  })
