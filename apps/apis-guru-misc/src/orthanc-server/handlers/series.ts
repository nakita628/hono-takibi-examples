import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteSeriesIdAttachmentsNameRoute,
  deleteSeriesIdMetadataNameRoute,
  deleteSeriesIdRoute,
  getSeriesIdArchiveRoute,
  getSeriesIdAttachmentsNameCompressedDataRoute,
  getSeriesIdAttachmentsNameCompressedMd5Route,
  getSeriesIdAttachmentsNameCompressedSizeRoute,
  getSeriesIdAttachmentsNameDataRoute,
  getSeriesIdAttachmentsNameInfoRoute,
  getSeriesIdAttachmentsNameIsCompressedRoute,
  getSeriesIdAttachmentsNameMd5Route,
  getSeriesIdAttachmentsNameSizeRoute,
  getSeriesIdAttachmentsRoute,
  getSeriesIdInstancesRoute,
  getSeriesIdInstancesTagsRoute,
  getSeriesIdMediaRoute,
  getSeriesIdMetadataNameRoute,
  getSeriesIdMetadataRoute,
  getSeriesIdModuleRoute,
  getSeriesIdNumpyRoute,
  getSeriesIdOrderedSlicesRoute,
  getSeriesIdPatientRoute,
  getSeriesIdRoute,
  getSeriesIdSharedTagsRoute,
  getSeriesIdStatisticsRoute,
  getSeriesIdStudyRoute,
  getSeriesRoute,
  postSeriesIdAnonymizeRoute,
  postSeriesIdArchiveRoute,
  postSeriesIdAttachmentsNameCompressRoute,
  postSeriesIdAttachmentsNameUncompressRoute,
  postSeriesIdAttachmentsNameVerifyMd5Route,
  postSeriesIdMediaRoute,
  postSeriesIdModifyRoute,
  postSeriesIdReconstructRoute,
  putSeriesIdAttachmentsNameRoute,
  putSeriesIdMetadataNameRoute,
} from '../routes'

const app = new OpenAPIHono()

export const seriesHandler = app
  .openapi(getSeriesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteSeriesIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getSeriesIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postSeriesIdAnonymizeRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getSeriesIdArchiveRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postSeriesIdArchiveRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getSeriesIdAttachmentsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteSeriesIdAttachmentsNameRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putSeriesIdAttachmentsNameRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postSeriesIdAttachmentsNameCompressRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getSeriesIdAttachmentsNameCompressedDataRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getSeriesIdAttachmentsNameCompressedMd5Route, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getSeriesIdAttachmentsNameCompressedSizeRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getSeriesIdAttachmentsNameDataRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getSeriesIdAttachmentsNameInfoRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getSeriesIdAttachmentsNameIsCompressedRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getSeriesIdAttachmentsNameMd5Route, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getSeriesIdAttachmentsNameSizeRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postSeriesIdAttachmentsNameUncompressRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postSeriesIdAttachmentsNameVerifyMd5Route, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getSeriesIdInstancesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getSeriesIdInstancesTagsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getSeriesIdMediaRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postSeriesIdMediaRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getSeriesIdMetadataRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteSeriesIdMetadataNameRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getSeriesIdMetadataNameRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putSeriesIdMetadataNameRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postSeriesIdModifyRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getSeriesIdModuleRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getSeriesIdNumpyRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getSeriesIdOrderedSlicesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getSeriesIdPatientRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postSeriesIdReconstructRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getSeriesIdSharedTagsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getSeriesIdStatisticsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getSeriesIdStudyRoute, (c) => {
    throw new Error('Not implemented')
  })
