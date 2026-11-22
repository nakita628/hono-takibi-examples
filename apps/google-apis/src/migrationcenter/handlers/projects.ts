import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteV1alpha1NameRoute,
  getV1alpha1NameLocationsRoute,
  getV1alpha1NameOperationsRoute,
  getV1alpha1NameRoute,
  getV1alpha1ParentAssetsRoute,
  getV1alpha1ParentGroupsRoute,
  getV1alpha1ParentImportDataFilesRoute,
  getV1alpha1ParentImportJobsRoute,
  getV1alpha1ParentPreferenceSetsRoute,
  getV1alpha1ParentReportConfigsRoute,
  getV1alpha1ParentReportsRoute,
  getV1alpha1ParentSourcesRoute,
  patchV1alpha1NameRoute,
  postV1alpha1GroupAddAssetsRoute,
  postV1alpha1GroupRemoveAssetsRoute,
  postV1alpha1NameCancelRoute,
  postV1alpha1NameRunRoute,
  postV1alpha1NameValidateRoute,
  postV1alpha1ParentAssetsAggregateValuesRoute,
  postV1alpha1ParentAssetsBatchDeleteRoute,
  postV1alpha1ParentAssetsBatchUpdateRoute,
  postV1alpha1ParentAssetsReportAssetFramesRoute,
  postV1alpha1ParentGroupsRoute,
  postV1alpha1ParentImportDataFilesRoute,
  postV1alpha1ParentImportJobsRoute,
  postV1alpha1ParentPreferenceSetsRoute,
  postV1alpha1ParentReportConfigsRoute,
  postV1alpha1ParentReportsRoute,
  postV1alpha1ParentSourcesRoute,
} from '../routes'

const app = new OpenAPIHono()

export const projectsHandler = app
  .openapi(postV1alpha1GroupAddAssetsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV1alpha1GroupRemoveAssetsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteV1alpha1NameRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV1alpha1NameRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchV1alpha1NameRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV1alpha1NameLocationsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV1alpha1NameOperationsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV1alpha1NameCancelRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV1alpha1NameRunRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV1alpha1NameValidateRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV1alpha1ParentAssetsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV1alpha1ParentAssetsAggregateValuesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV1alpha1ParentAssetsBatchDeleteRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV1alpha1ParentAssetsBatchUpdateRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV1alpha1ParentAssetsReportAssetFramesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV1alpha1ParentGroupsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV1alpha1ParentGroupsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV1alpha1ParentImportDataFilesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV1alpha1ParentImportDataFilesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV1alpha1ParentImportJobsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV1alpha1ParentImportJobsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV1alpha1ParentPreferenceSetsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV1alpha1ParentPreferenceSetsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV1alpha1ParentReportConfigsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV1alpha1ParentReportConfigsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV1alpha1ParentReportsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV1alpha1ParentReportsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV1alpha1ParentSourcesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV1alpha1ParentSourcesRoute, (c) => {
    throw new Error('Not implemented')
  })
