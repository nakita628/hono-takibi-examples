import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteStudiesIdAttachmentsNameRoute,
  deleteStudiesIdMetadataNameRoute,
  deleteStudiesIdRoute,
  getStudiesIdArchiveRoute,
  getStudiesIdAttachmentsNameCompressedDataRoute,
  getStudiesIdAttachmentsNameCompressedMd5Route,
  getStudiesIdAttachmentsNameCompressedSizeRoute,
  getStudiesIdAttachmentsNameDataRoute,
  getStudiesIdAttachmentsNameInfoRoute,
  getStudiesIdAttachmentsNameIsCompressedRoute,
  getStudiesIdAttachmentsNameMd5Route,
  getStudiesIdAttachmentsNameSizeRoute,
  getStudiesIdAttachmentsRoute,
  getStudiesIdInstancesRoute,
  getStudiesIdInstancesTagsRoute,
  getStudiesIdMediaRoute,
  getStudiesIdMetadataNameRoute,
  getStudiesIdMetadataRoute,
  getStudiesIdModulePatientRoute,
  getStudiesIdModuleRoute,
  getStudiesIdPatientRoute,
  getStudiesIdRoute,
  getStudiesIdSeriesRoute,
  getStudiesIdSharedTagsRoute,
  getStudiesIdStatisticsRoute,
  getStudiesRoute,
  postStudiesIdAnonymizeRoute,
  postStudiesIdArchiveRoute,
  postStudiesIdAttachmentsNameCompressRoute,
  postStudiesIdAttachmentsNameUncompressRoute,
  postStudiesIdAttachmentsNameVerifyMd5Route,
  postStudiesIdMediaRoute,
  postStudiesIdMergeRoute,
  postStudiesIdModifyRoute,
  postStudiesIdReconstructRoute,
  postStudiesIdSplitRoute,
  putStudiesIdAttachmentsNameRoute,
  putStudiesIdMetadataNameRoute,
} from '../routes'

const app = new OpenAPIHono()

export const studiesHandler = app
  .openapi(getStudiesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteStudiesIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getStudiesIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postStudiesIdAnonymizeRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getStudiesIdArchiveRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postStudiesIdArchiveRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getStudiesIdAttachmentsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteStudiesIdAttachmentsNameRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putStudiesIdAttachmentsNameRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postStudiesIdAttachmentsNameCompressRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getStudiesIdAttachmentsNameCompressedDataRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getStudiesIdAttachmentsNameCompressedMd5Route, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getStudiesIdAttachmentsNameCompressedSizeRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getStudiesIdAttachmentsNameDataRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getStudiesIdAttachmentsNameInfoRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getStudiesIdAttachmentsNameIsCompressedRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getStudiesIdAttachmentsNameMd5Route, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getStudiesIdAttachmentsNameSizeRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postStudiesIdAttachmentsNameUncompressRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postStudiesIdAttachmentsNameVerifyMd5Route, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getStudiesIdInstancesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getStudiesIdInstancesTagsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getStudiesIdMediaRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postStudiesIdMediaRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postStudiesIdMergeRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getStudiesIdMetadataRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteStudiesIdMetadataNameRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getStudiesIdMetadataNameRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putStudiesIdMetadataNameRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postStudiesIdModifyRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getStudiesIdModuleRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getStudiesIdModulePatientRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getStudiesIdPatientRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postStudiesIdReconstructRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getStudiesIdSeriesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getStudiesIdSharedTagsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postStudiesIdSplitRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getStudiesIdStatisticsRoute, (c) => {
    throw new Error('Not implemented')
  })
