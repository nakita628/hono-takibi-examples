import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteV1DubbingDubbingIdRoute,
  deleteV1DubbingProjectProjectIdLanguageLanguageIdRoute,
  deleteV1DubbingProjectProjectIdRoute,
  deleteV1DubbingProjectProjectIdTranscriptSegmentSegmentIdRoute,
  deleteV1DubbingResourceDubbingIdSegmentSegmentIdRoute,
  getV1DubbingDubbingIdAudioLanguageCodeRoute,
  getV1DubbingDubbingIdRoute,
  getV1DubbingDubbingIdTranscriptLanguageCodeRoute,
  getV1DubbingDubbingIdTranscriptsLanguageCodeFormatFormatTypeRoute,
  getV1DubbingProjectProjectIdLanguageLanguageIdRoute,
  getV1DubbingProjectProjectIdLanguageLanguageIdTranscriptRoute,
  getV1DubbingProjectProjectIdLanguageRoute,
  getV1DubbingProjectProjectIdRoute,
  getV1DubbingProjectProjectIdTranscriptRoute,
  getV1DubbingProjectRoute,
  getV1DubbingResourceDubbingIdRoute,
  getV1DubbingResourceDubbingIdSpeakerSpeakerIdSimilarVoicesRoute,
  getV1DubbingRoute,
  patchV1DubbingProjectProjectIdLanguageLanguageIdTranscriptSegmentSegmentIdRoute,
  patchV1DubbingProjectProjectIdLanguageLanguageIdTranscriptSegmentsRoute,
  patchV1DubbingProjectProjectIdTranscriptSegmentSegmentIdRoute,
  patchV1DubbingProjectProjectIdTranscriptSegmentsRoute,
  patchV1DubbingResourceDubbingIdSegmentSegmentIdLanguageRoute,
  patchV1DubbingResourceDubbingIdSpeakerSpeakerIdRoute,
  postV1DubbingProjectProjectIdLanguageLanguageIdTranscriptRegenerateRoute,
  postV1DubbingProjectProjectIdLanguageRoute,
  postV1DubbingProjectProjectIdTranscriptSegmentRoute,
  postV1DubbingProjectRoute,
  postV1DubbingResourceDubbingIdDubRoute,
  postV1DubbingResourceDubbingIdLanguageRoute,
  postV1DubbingResourceDubbingIdMigrateSegmentsRoute,
  postV1DubbingResourceDubbingIdRenderLanguageRoute,
  postV1DubbingResourceDubbingIdSpeakerRoute,
  postV1DubbingResourceDubbingIdSpeakerSpeakerIdSegmentRoute,
  postV1DubbingResourceDubbingIdTranscribeRoute,
  postV1DubbingResourceDubbingIdTranslateRoute,
  postV1DubbingRoute,
} from '../routes'

const app = new OpenAPIHono()

export const dubbingHandler = app
  .openapi(postV1DubbingProjectRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV1DubbingProjectRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV1DubbingProjectProjectIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteV1DubbingProjectProjectIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV1DubbingProjectProjectIdLanguageRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV1DubbingProjectProjectIdLanguageRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV1DubbingProjectProjectIdLanguageLanguageIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteV1DubbingProjectProjectIdLanguageLanguageIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV1DubbingProjectProjectIdTranscriptRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchV1DubbingProjectProjectIdTranscriptSegmentSegmentIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteV1DubbingProjectProjectIdTranscriptSegmentSegmentIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchV1DubbingProjectProjectIdTranscriptSegmentsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV1DubbingProjectProjectIdTranscriptSegmentRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV1DubbingProjectProjectIdLanguageLanguageIdTranscriptRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchV1DubbingProjectProjectIdLanguageLanguageIdTranscriptSegmentSegmentIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchV1DubbingProjectProjectIdLanguageLanguageIdTranscriptSegmentsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV1DubbingProjectProjectIdLanguageLanguageIdTranscriptRegenerateRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV1DubbingResourceDubbingIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV1DubbingResourceDubbingIdLanguageRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV1DubbingResourceDubbingIdSpeakerSpeakerIdSegmentRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchV1DubbingResourceDubbingIdSegmentSegmentIdLanguageRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV1DubbingResourceDubbingIdMigrateSegmentsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteV1DubbingResourceDubbingIdSegmentSegmentIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV1DubbingResourceDubbingIdTranscribeRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV1DubbingResourceDubbingIdTranslateRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV1DubbingResourceDubbingIdDubRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchV1DubbingResourceDubbingIdSpeakerSpeakerIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV1DubbingResourceDubbingIdSpeakerRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV1DubbingResourceDubbingIdSpeakerSpeakerIdSimilarVoicesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV1DubbingResourceDubbingIdRenderLanguageRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV1DubbingRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV1DubbingRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV1DubbingDubbingIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteV1DubbingDubbingIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV1DubbingDubbingIdAudioLanguageCodeRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV1DubbingDubbingIdTranscriptLanguageCodeRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV1DubbingDubbingIdTranscriptsLanguageCodeFormatFormatTypeRoute, (c) => {
    throw new Error('Not implemented')
  })
