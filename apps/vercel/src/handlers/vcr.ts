import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteV1VcrRepositoryIdOrNameImagesImageIdRoute,
  deleteV1VcrRepositoryIdOrNamePermissionsAllRoute,
  deleteV1VcrRepositoryIdOrNamePermissionsRoute,
  deleteV1VcrRepositoryIdOrNameRoute,
  deleteV2TeamSlugProjectSlugRepositoryNameBlobsDigestRoute,
  deleteV2TeamSlugProjectSlugRepositoryNameBlobsUploadsUuidRoute,
  deleteV2TeamSlugProjectSlugRepositoryNameManifestsReferenceRoute,
  getV1VcrRepositoryIdOrNameImagesImageIdOrDigestRoute,
  getV1VcrRepositoryIdOrNameImagesRoute,
  getV1VcrRepositoryIdOrNamePermissionsRoute,
  getV1VcrRepositoryIdOrNameRoute,
  getV1VcrRepositoryIdOrNameTagsRoute,
  getV1VcrRepositoryIdOrNameTagsTagRoute,
  getV1VcrRepositoryRoute,
  getV2IndexRoute,
  getV2TeamSlugProjectSlugRepositoryNameBlobsDigestRoute,
  getV2TeamSlugProjectSlugRepositoryNameBlobsUploadsUuidRoute,
  getV2TeamSlugProjectSlugRepositoryNameManifestsReferenceRoute,
  getV2TeamSlugProjectSlugRepositoryNameTagsListRoute,
  headV2TeamSlugProjectSlugRepositoryNameBlobsDigestRoute,
  headV2TeamSlugProjectSlugRepositoryNameManifestsReferenceRoute,
  patchV2TeamSlugProjectSlugRepositoryNameBlobsUploadsUuidRoute,
  postV1VcrRepositoryIdOrNamePermissionsRoute,
  postV1VcrRepositoryRoute,
  postV2TeamSlugProjectSlugRepositoryNameBlobsUploadsIndexRoute,
  putV2TeamSlugProjectSlugRepositoryNameBlobsUploadsUuidRoute,
  putV2TeamSlugProjectSlugRepositoryNameManifestsReferenceRoute,
} from '../routes'

const app = new OpenAPIHono()

export const vcrHandler = app
  .openapi(postV1VcrRepositoryRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV1VcrRepositoryRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV1VcrRepositoryIdOrNameRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteV1VcrRepositoryIdOrNameRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV1VcrRepositoryIdOrNameImagesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV1VcrRepositoryIdOrNamePermissionsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteV1VcrRepositoryIdOrNamePermissionsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV1VcrRepositoryIdOrNamePermissionsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteV1VcrRepositoryIdOrNamePermissionsAllRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV1VcrRepositoryIdOrNameTagsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV1VcrRepositoryIdOrNameTagsTagRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV1VcrRepositoryIdOrNameImagesImageIdOrDigestRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteV1VcrRepositoryIdOrNameImagesImageIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV2IndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(headV2TeamSlugProjectSlugRepositoryNameBlobsDigestRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV2TeamSlugProjectSlugRepositoryNameBlobsDigestRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteV2TeamSlugProjectSlugRepositoryNameBlobsDigestRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV2TeamSlugProjectSlugRepositoryNameBlobsUploadsUuidRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteV2TeamSlugProjectSlugRepositoryNameBlobsUploadsUuidRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchV2TeamSlugProjectSlugRepositoryNameBlobsUploadsUuidRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putV2TeamSlugProjectSlugRepositoryNameBlobsUploadsUuidRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV2TeamSlugProjectSlugRepositoryNameBlobsUploadsIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putV2TeamSlugProjectSlugRepositoryNameManifestsReferenceRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(headV2TeamSlugProjectSlugRepositoryNameManifestsReferenceRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV2TeamSlugProjectSlugRepositoryNameManifestsReferenceRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteV2TeamSlugProjectSlugRepositoryNameManifestsReferenceRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV2TeamSlugProjectSlugRepositoryNameTagsListRoute, (c) => {
    throw new Error('Not implemented')
  })
