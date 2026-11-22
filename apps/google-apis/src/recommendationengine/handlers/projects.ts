import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteV1beta1NameRoute,
  getV1beta1NameOperationsRoute,
  getV1beta1NameRoute,
  getV1beta1ParentCatalogItemsRoute,
  getV1beta1ParentCatalogsRoute,
  getV1beta1ParentPredictionApiKeyRegistrationsRoute,
  getV1beta1ParentUserEventsCollectRoute,
  getV1beta1ParentUserEventsRoute,
  patchV1beta1NameRoute,
  postV1beta1NamePredictRoute,
  postV1beta1ParentCatalogItemsImportRoute,
  postV1beta1ParentCatalogItemsRoute,
  postV1beta1ParentPredictionApiKeyRegistrationsRoute,
  postV1beta1ParentUserEventsImportRoute,
  postV1beta1ParentUserEventsPurgeRoute,
  postV1beta1ParentUserEventsRejoinRoute,
  postV1beta1ParentUserEventsWriteRoute,
} from '../routes'

const app = new OpenAPIHono()

export const projectsHandler = app
  .openapi(deleteV1beta1NameRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV1beta1NameRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchV1beta1NameRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV1beta1NameOperationsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV1beta1NamePredictRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV1beta1ParentCatalogItemsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV1beta1ParentCatalogItemsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV1beta1ParentCatalogItemsImportRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV1beta1ParentCatalogsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV1beta1ParentPredictionApiKeyRegistrationsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV1beta1ParentPredictionApiKeyRegistrationsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV1beta1ParentUserEventsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV1beta1ParentUserEventsCollectRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV1beta1ParentUserEventsImportRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV1beta1ParentUserEventsPurgeRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV1beta1ParentUserEventsRejoinRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV1beta1ParentUserEventsWriteRoute, (c) => {
    throw new Error('Not implemented')
  })
