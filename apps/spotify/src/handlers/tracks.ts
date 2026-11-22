import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteMeTracksRoute,
  getAudioAnalysisIdRoute,
  getAudioFeaturesIdRoute,
  getAudioFeaturesRoute,
  getMeTracksContainsRoute,
  getMeTracksRoute,
  getRecommendationsRoute,
  getTracksIdRoute,
  getTracksRoute,
  putMeTracksRoute,
} from '../routes'

const app = new OpenAPIHono()

export const tracksHandler = app
  .openapi(getTracksIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getTracksRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getMeTracksRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putMeTracksRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteMeTracksRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getMeTracksContainsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getAudioFeaturesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getAudioFeaturesIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getAudioAnalysisIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getRecommendationsRoute, (c) => {
    throw new Error('Not implemented')
  })
