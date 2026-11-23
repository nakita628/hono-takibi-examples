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
  getCameraNameRecordingsCoverageRoute,
  getCameraNameRecordingsFrameTimeSnapshotFormatRoute,
  getCameraNameRecordingsRoute,
  getCameraNameRecordingsSummaryRoute,
  getCameraNameRoute,
  getCameraNameSearchMotionJobIdRoute,
  getCameraNameStartStartTsEndEndTsClipMp4Route,
  getCameraNameStartStartTsEndEndTsPreviewGifRoute,
  getCameraNameStartStartTsEndEndTsPreviewMp4Route,
  postCameraNamePlusFrameTimeRoute,
  postCameraNameSearchMotionJobIdCancelRoute,
  postCameraNameSearchMotionRoute,
} from '../routes'

const app = new OpenAPIHono()

export const cameraNameHandler = app
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
  .openapi(getCameraNameGridJpgRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteCameraNameRegionGridRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getCameraNameStartStartTsEndEndTsPreviewGifRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getCameraNameStartStartTsEndEndTsPreviewMp4Route, (c) => {
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
  .openapi(postCameraNameSearchMotionRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getCameraNameSearchMotionJobIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postCameraNameSearchMotionJobIdCancelRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getCameraNameRecordingsSummaryRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getCameraNameRecordingsCoverageRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getCameraNameRecordingsRoute, (c) => {
    throw new Error('Not implemented')
  })
