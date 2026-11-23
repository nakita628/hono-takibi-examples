import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteV1NameRoute,
  getV1NameRoute,
  getV1ParentDocumentSchemasRoute,
  getV1ParentRuleSetsRoute,
  getV1ParentSynonymSetsRoute,
  patchV1NameRoute,
  postV1LocationInitializeRoute,
  postV1NameDeleteRoute,
  postV1NameGetRoute,
  postV1NameLockRoute,
  postV1ParentDocumentLinksRoute,
  postV1ParentDocumentSchemasRoute,
  postV1ParentDocumentsRoute,
  postV1ParentDocumentsSearchRoute,
  postV1ParentLinkedSourcesRoute,
  postV1ParentLinkedTargetsRoute,
  postV1ParentRuleSetsRoute,
  postV1ParentSynonymSetsRoute,
  postV1ResourceFetchAclRoute,
  postV1ResourceSetAclRoute,
} from '../routes'

const app = new OpenAPIHono()

export const v1Handler = app
  .openapi(postV1LocationInitializeRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteV1NameRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV1NameRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchV1NameRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV1NameDeleteRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV1NameGetRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV1NameLockRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV1ParentDocumentLinksRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV1ParentDocumentSchemasRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV1ParentDocumentSchemasRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV1ParentDocumentsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV1ParentDocumentsSearchRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV1ParentLinkedSourcesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV1ParentLinkedTargetsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV1ParentRuleSetsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV1ParentRuleSetsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV1ParentSynonymSetsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV1ParentSynonymSetsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV1ResourceFetchAclRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV1ResourceSetAclRoute, (c) => {
    throw new Error('Not implemented')
  })
