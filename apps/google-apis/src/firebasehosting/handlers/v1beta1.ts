import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteV1beta1NameRoute,
  getV1beta1NameRoute,
  getV1beta1ParentChannelsRoute,
  getV1beta1ParentDomainsRoute,
  getV1beta1ParentFilesRoute,
  getV1beta1ParentReleasesRoute,
  getV1beta1ParentSitesRoute,
  getV1beta1ParentVersionsRoute,
  patchV1beta1NameRoute,
  postV1beta1ParentChannelsRoute,
  postV1beta1ParentDomainsRoute,
  postV1beta1ParentPopulateFilesRoute,
  postV1beta1ParentReleasesRoute,
  postV1beta1ParentSitesRoute,
  postV1beta1ParentVersionsCloneRoute,
  postV1beta1ParentVersionsRoute,
  putV1beta1NameRoute,
} from '../routes'

const app = new OpenAPIHono()

export const v1beta1Handler = app
  .openapi(deleteV1beta1NameRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV1beta1NameRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchV1beta1NameRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putV1beta1NameRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV1beta1ParentChannelsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV1beta1ParentChannelsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV1beta1ParentDomainsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV1beta1ParentDomainsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV1beta1ParentFilesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV1beta1ParentReleasesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV1beta1ParentReleasesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV1beta1ParentSitesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV1beta1ParentSitesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV1beta1ParentVersionsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV1beta1ParentVersionsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV1beta1ParentVersionsCloneRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV1beta1ParentPopulateFilesRoute, (c) => {
    throw new Error('Not implemented')
  })
