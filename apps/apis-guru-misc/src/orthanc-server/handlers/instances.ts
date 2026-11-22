import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteInstancesIdAttachmentsNameRoute,
  deleteInstancesIdMetadataNameRoute,
  deleteInstancesIdRoute,
  getInstancesIdAttachmentsNameCompressedDataRoute,
  getInstancesIdAttachmentsNameCompressedMd5Route,
  getInstancesIdAttachmentsNameCompressedSizeRoute,
  getInstancesIdAttachmentsNameDataRoute,
  getInstancesIdAttachmentsNameInfoRoute,
  getInstancesIdAttachmentsNameIsCompressedRoute,
  getInstancesIdAttachmentsNameMd5Route,
  getInstancesIdAttachmentsNameSizeRoute,
  getInstancesIdAttachmentsRoute,
  getInstancesIdContentRoute,
  getInstancesIdFileRoute,
  getInstancesIdFramesFrameImageInt16Route,
  getInstancesIdFramesFrameImageUint16Route,
  getInstancesIdFramesFrameImageUint8Route,
  getInstancesIdFramesFrameMatlabRoute,
  getInstancesIdFramesFrameNumpyRoute,
  getInstancesIdFramesFramePreviewRoute,
  getInstancesIdFramesFrameRawGzRoute,
  getInstancesIdFramesFrameRawRoute,
  getInstancesIdFramesFrameRenderedRoute,
  getInstancesIdFramesRoute,
  getInstancesIdHeaderRoute,
  getInstancesIdImageInt16Route,
  getInstancesIdImageUint16Route,
  getInstancesIdImageUint8Route,
  getInstancesIdMatlabRoute,
  getInstancesIdMetadataNameRoute,
  getInstancesIdMetadataRoute,
  getInstancesIdModuleRoute,
  getInstancesIdNumpyRoute,
  getInstancesIdPatientRoute,
  getInstancesIdPdfRoute,
  getInstancesIdPreviewRoute,
  getInstancesIdRenderedRoute,
  getInstancesIdRoute,
  getInstancesIdSeriesRoute,
  getInstancesIdSimplifiedTagsRoute,
  getInstancesIdStatisticsRoute,
  getInstancesIdStudyRoute,
  getInstancesIdTagsRoute,
  getInstancesRoute,
  postInstancesIdAnonymizeRoute,
  postInstancesIdAttachmentsNameCompressRoute,
  postInstancesIdAttachmentsNameUncompressRoute,
  postInstancesIdAttachmentsNameVerifyMd5Route,
  postInstancesIdExportRoute,
  postInstancesIdModifyRoute,
  postInstancesIdReconstructRoute,
  postInstancesRoute,
  putInstancesIdAttachmentsNameRoute,
  putInstancesIdMetadataNameRoute,
} from '../routes'

const app = new OpenAPIHono()

export const instancesHandler = app
  .openapi(getInstancesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postInstancesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteInstancesIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getInstancesIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postInstancesIdAnonymizeRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getInstancesIdAttachmentsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteInstancesIdAttachmentsNameRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putInstancesIdAttachmentsNameRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postInstancesIdAttachmentsNameCompressRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getInstancesIdAttachmentsNameCompressedDataRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getInstancesIdAttachmentsNameCompressedMd5Route, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getInstancesIdAttachmentsNameCompressedSizeRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getInstancesIdAttachmentsNameDataRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getInstancesIdAttachmentsNameInfoRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getInstancesIdAttachmentsNameIsCompressedRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getInstancesIdAttachmentsNameMd5Route, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getInstancesIdAttachmentsNameSizeRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postInstancesIdAttachmentsNameUncompressRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postInstancesIdAttachmentsNameVerifyMd5Route, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getInstancesIdContentRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postInstancesIdExportRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getInstancesIdFileRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getInstancesIdFramesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getInstancesIdFramesFrameImageInt16Route, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getInstancesIdFramesFrameImageUint16Route, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getInstancesIdFramesFrameImageUint8Route, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getInstancesIdFramesFrameMatlabRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getInstancesIdFramesFrameNumpyRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getInstancesIdFramesFramePreviewRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getInstancesIdFramesFrameRawRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getInstancesIdFramesFrameRawGzRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getInstancesIdFramesFrameRenderedRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getInstancesIdHeaderRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getInstancesIdImageInt16Route, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getInstancesIdImageUint16Route, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getInstancesIdImageUint8Route, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getInstancesIdMatlabRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getInstancesIdMetadataRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteInstancesIdMetadataNameRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getInstancesIdMetadataNameRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putInstancesIdMetadataNameRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postInstancesIdModifyRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getInstancesIdModuleRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getInstancesIdNumpyRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getInstancesIdPatientRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getInstancesIdPdfRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getInstancesIdPreviewRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postInstancesIdReconstructRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getInstancesIdRenderedRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getInstancesIdSeriesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getInstancesIdSimplifiedTagsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getInstancesIdStatisticsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getInstancesIdStudyRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getInstancesIdTagsRoute, (c) => {
    throw new Error('Not implemented')
  })
