import { OpenAPIHono } from '@hono/zod-openapi'
import {
  postV1MusicDetailedRoute,
  postV1MusicDetailedStreamRoute,
  postV1MusicPlanRoute,
  postV1MusicRoute,
  postV1MusicStemSeparationRoute,
  postV1MusicStreamRoute,
  postV1MusicUploadRoute,
} from '../routes'

const app = new OpenAPIHono()

export const musicGenerationHandler = app
  .openapi(postV1MusicPlanRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV1MusicRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV1MusicDetailedRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV1MusicDetailedStreamRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV1MusicStreamRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV1MusicUploadRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV1MusicStemSeparationRoute, (c) => {
    throw new Error('Not implemented')
  })
