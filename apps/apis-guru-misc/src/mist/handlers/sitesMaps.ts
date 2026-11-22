import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteApiV1SitesSiteIdMapsMapIdAutoOrientRoute,
  deleteApiV1SitesSiteIdMapsMapIdAutoPlacementRoute,
  deleteApiV1SitesSiteIdMapsMapIdImageRoute,
  deleteApiV1SitesSiteIdMapsMapIdRoute,
  getApiV1SitesSiteIdMapsMapIdAutoPlacementRoute,
  getApiV1SitesSiteIdMapsMapIdRoute,
  getApiV1SitesSiteIdMapsRoute,
  postApiV1SitesSiteIdMapsImportRoute,
  postApiV1SitesSiteIdMapsMapIdAutoOrientRoute,
  postApiV1SitesSiteIdMapsMapIdAutoPlacementRoute,
  postApiV1SitesSiteIdMapsMapIdClearAutoOrientRoute,
  postApiV1SitesSiteIdMapsMapIdClearAutoplacementRoute,
  postApiV1SitesSiteIdMapsMapIdImageRoute,
  postApiV1SitesSiteIdMapsMapIdReplaceRoute,
  postApiV1SitesSiteIdMapsMapIdRevertAutoOrientRoute,
  postApiV1SitesSiteIdMapsMapIdRevertAutoplacementRoute,
  postApiV1SitesSiteIdMapsMapIdSetMapRoute,
  postApiV1SitesSiteIdMapsMapIdWayfindingImportRoute,
  postApiV1SitesSiteIdMapsRoute,
  putApiV1SitesSiteIdMapsMapIdRoute,
} from '../routes'

const app = new OpenAPIHono()

export const sitesMapsHandler = app
  .openapi(getApiV1SitesSiteIdMapsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiV1SitesSiteIdMapsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiV1SitesSiteIdMapsImportRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteApiV1SitesSiteIdMapsMapIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV1SitesSiteIdMapsMapIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putApiV1SitesSiteIdMapsMapIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteApiV1SitesSiteIdMapsMapIdAutoOrientRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiV1SitesSiteIdMapsMapIdAutoOrientRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteApiV1SitesSiteIdMapsMapIdAutoPlacementRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV1SitesSiteIdMapsMapIdAutoPlacementRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiV1SitesSiteIdMapsMapIdAutoPlacementRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiV1SitesSiteIdMapsMapIdClearAutoOrientRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiV1SitesSiteIdMapsMapIdClearAutoplacementRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteApiV1SitesSiteIdMapsMapIdImageRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiV1SitesSiteIdMapsMapIdImageRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiV1SitesSiteIdMapsMapIdReplaceRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiV1SitesSiteIdMapsMapIdRevertAutoOrientRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiV1SitesSiteIdMapsMapIdRevertAutoplacementRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiV1SitesSiteIdMapsMapIdSetMapRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiV1SitesSiteIdMapsMapIdWayfindingImportRoute, (c) => {
    throw new Error('Not implemented')
  })
