import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteCamerasCameraNameRoute,
  deleteGo2rtcStreamsStreamNameRoute,
  getFfprobeRoute,
  getFfprobeSnapshotRoute,
  getGo2rtcStreamsRoute,
  getGo2rtcStreamsStreamNameBitrateRoute,
  getGo2rtcStreamsStreamNameRoute,
  getKeyframeAnalysisRoute,
  getOnvifProbeRoute,
  getReolinkDetectRoute,
  putCameraCameraNameSetFeatureRoute,
  putCameraCameraNameSetFeatureSubCommandRoute,
  putGo2rtcStreamsStreamNameRoute,
} from '../routes'

const app = new OpenAPIHono()

export const cameraHandler = app
  .openapi(getGo2rtcStreamsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getGo2rtcStreamsStreamNameRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putGo2rtcStreamsStreamNameRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteGo2rtcStreamsStreamNameRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getGo2rtcStreamsStreamNameBitrateRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getFfprobeRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getKeyframeAnalysisRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getFfprobeSnapshotRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getReolinkDetectRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getOnvifProbeRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteCamerasCameraNameRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putCameraCameraNameSetFeatureSubCommandRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putCameraCameraNameSetFeatureRoute, (c) => {
    throw new Error('Not implemented')
  })
