import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteAdminMappingsRoute,
  deleteAdminMappingsStubMappingIdRoute,
  getAdminMappingsRoute,
  getAdminMappingsStubMappingIdRoute,
  postAdminMappingsFindByMetadataRoute,
  postAdminMappingsImportRoute,
  postAdminMappingsRemoveByMetadataRoute,
  postAdminMappingsResetRoute,
  postAdminMappingsRoute,
  postAdminMappingsSaveRoute,
  putAdminMappingsStubMappingIdRoute,
} from '../routes'

const app = new OpenAPIHono()

export const stubMappingsHandler = app
  .openapi(deleteAdminMappingsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getAdminMappingsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postAdminMappingsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postAdminMappingsFindByMetadataRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postAdminMappingsImportRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postAdminMappingsRemoveByMetadataRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postAdminMappingsResetRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postAdminMappingsSaveRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteAdminMappingsStubMappingIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getAdminMappingsStubMappingIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putAdminMappingsStubMappingIdRoute, (c) => {
    throw new Error('Not implemented')
  })
