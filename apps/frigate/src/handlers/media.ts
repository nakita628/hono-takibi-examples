import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteCameraNameRegionGridRoute,
  getCameraNameGridJpgRoute,
  getCameraNameLabelBestJpgRoute,
  getCameraNameLabelClipMp4Route,
  getCameraNameLabelSnapshotJpgRoute,
  getCameraNameLabelThumbnailJpgRoute,
  getCameraNameLatestExtensionRoute,
  getCameraNamePtzInfoRoute,
  getCameraNameRecordingsFrameTimeSnapshotFormatRoute,
  getCameraNameRoute,
  getCameraNameStartStartTsEndEndTsClipMp4Route,
  getCameraNameStartStartTsEndEndTsPreviewGifRoute,
  getCameraNameStartStartTsEndEndTsPreviewMp4Route,
  getEventsEventIdClipMp4Route,
  getEventsEventIdPreviewGifRoute,
  getEventsEventIdSnapshotCleanWebpRoute,
  getEventsEventIdSnapshotJpgRoute,
  getEventsEventIdThumbnailExtensionRoute,
  getPreviewFileNameThumbnailJpgRoute,
  getPreviewFileNameThumbnailWebpRoute,
  getReviewEventIdPreviewRoute,
  getReviewReviewIdClipMp4Route,
  getVodCameraNameStartStartTsEndEndTsRoute,
  getVodCameraNameStreamStartStartTsEndEndTsRoute,
  getVodClipCameraNameStartStartTsEndEndTsRoute,
  getVodEventEventIdRoute,
  getVodYearMonthDayHourCameraNameRoute,
  getVodYearMonthDayHourCameraNameTzNameRoute,
  postCameraNamePlusFrameTimeRoute,
} from '../routes'

const app = new OpenAPIHono()

export const mediaHandler = app
  .openapi(getCameraNameRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getCameraNamePtzInfoRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getCameraNameLatestExtensionRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getCameraNameRecordingsFrameTimeSnapshotFormatRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postCameraNamePlusFrameTimeRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getCameraNameStartStartTsEndEndTsClipMp4Route, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getVodCameraNameStartStartTsEndEndTsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getVodYearMonthDayHourCameraNameRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getVodYearMonthDayHourCameraNameTzNameRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getVodEventEventIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getVodClipCameraNameStartStartTsEndEndTsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getVodCameraNameStreamStartStartTsEndEndTsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getEventsEventIdSnapshotJpgRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getEventsEventIdThumbnailExtensionRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getCameraNameGridJpgRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteCameraNameRegionGridRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getEventsEventIdSnapshotCleanWebpRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getEventsEventIdClipMp4Route, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getReviewReviewIdClipMp4Route, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getEventsEventIdPreviewGifRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getCameraNameStartStartTsEndEndTsPreviewGifRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getCameraNameStartStartTsEndEndTsPreviewMp4Route, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getReviewEventIdPreviewRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getPreviewFileNameThumbnailWebpRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getPreviewFileNameThumbnailJpgRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getCameraNameLabelThumbnailJpgRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getCameraNameLabelBestJpgRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getCameraNameLabelClipMp4Route, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getCameraNameLabelSnapshotJpgRoute, (c) => {
    throw new Error('Not implemented')
  })
