import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deletePatientsIdAttachmentsNameRoute,
  deletePatientsIdMetadataNameRoute,
  deletePatientsIdRoute,
  getPatientsIdArchiveRoute,
  getPatientsIdAttachmentsNameCompressedDataRoute,
  getPatientsIdAttachmentsNameCompressedMd5Route,
  getPatientsIdAttachmentsNameCompressedSizeRoute,
  getPatientsIdAttachmentsNameDataRoute,
  getPatientsIdAttachmentsNameInfoRoute,
  getPatientsIdAttachmentsNameIsCompressedRoute,
  getPatientsIdAttachmentsNameMd5Route,
  getPatientsIdAttachmentsNameRoute,
  getPatientsIdAttachmentsNameSizeRoute,
  getPatientsIdAttachmentsRoute,
  getPatientsIdInstancesRoute,
  getPatientsIdInstancesTagsRoute,
  getPatientsIdMediaRoute,
  getPatientsIdMetadataNameRoute,
  getPatientsIdMetadataRoute,
  getPatientsIdModuleRoute,
  getPatientsIdProtectedRoute,
  getPatientsIdRoute,
  getPatientsIdSeriesRoute,
  getPatientsIdSharedTagsRoute,
  getPatientsIdStatisticsRoute,
  getPatientsIdStudiesRoute,
  getPatientsRoute,
  postPatientsIdAnonymizeRoute,
  postPatientsIdArchiveRoute,
  postPatientsIdAttachmentsNameCompressRoute,
  postPatientsIdAttachmentsNameUncompressRoute,
  postPatientsIdAttachmentsNameVerifyMd5Route,
  postPatientsIdMediaRoute,
  postPatientsIdModifyRoute,
  postPatientsIdReconstructRoute,
  putPatientsIdAttachmentsNameRoute,
  putPatientsIdMetadataNameRoute,
  putPatientsIdProtectedRoute,
} from '../routes'

const app = new OpenAPIHono()

export const patientsHandler = app
  .openapi(getPatientsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deletePatientsIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getPatientsIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postPatientsIdAnonymizeRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getPatientsIdArchiveRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postPatientsIdArchiveRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getPatientsIdAttachmentsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deletePatientsIdAttachmentsNameRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getPatientsIdAttachmentsNameRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putPatientsIdAttachmentsNameRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postPatientsIdAttachmentsNameCompressRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getPatientsIdAttachmentsNameCompressedDataRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getPatientsIdAttachmentsNameCompressedMd5Route, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getPatientsIdAttachmentsNameCompressedSizeRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getPatientsIdAttachmentsNameDataRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getPatientsIdAttachmentsNameInfoRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getPatientsIdAttachmentsNameIsCompressedRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getPatientsIdAttachmentsNameMd5Route, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getPatientsIdAttachmentsNameSizeRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postPatientsIdAttachmentsNameUncompressRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postPatientsIdAttachmentsNameVerifyMd5Route, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getPatientsIdInstancesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getPatientsIdInstancesTagsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getPatientsIdMediaRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postPatientsIdMediaRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getPatientsIdMetadataRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deletePatientsIdMetadataNameRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getPatientsIdMetadataNameRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putPatientsIdMetadataNameRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postPatientsIdModifyRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getPatientsIdModuleRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getPatientsIdProtectedRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putPatientsIdProtectedRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postPatientsIdReconstructRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getPatientsIdSeriesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getPatientsIdSharedTagsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getPatientsIdStatisticsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getPatientsIdStudiesRoute, (c) => {
    throw new Error('Not implemented')
  })
