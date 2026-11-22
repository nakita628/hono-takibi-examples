import { OpenAPIHono } from '@hono/zod-openapi'
import {
  delete2MediaLibraryMediaKeyRoute,
  delete2MediaSubtitlesRoute,
  get2MediaAmplifyProgramsProgramIdPostsRoute,
  get2MediaAmplifyProgramsProgramIdRoute,
  get2MediaAmplifyProgramsRoute,
  get2MediaAnalyticsRoute,
  get2MediaLibraryCategoriesRoute,
  get2MediaMediaKeyRoute,
  get2MediaRoute,
  get2MediaUploadRoute,
  post2MediaAmplifyPostsRoute,
  post2MediaLibraryRoute,
  post2MediaMetadataRoute,
  post2MediaSubtitlesRoute,
  post2MediaUploadIdAppendRoute,
  post2MediaUploadIdFinalizeRoute,
  post2MediaUploadInitializeRoute,
  post2MediaUploadRoute,
  put2MediaLibraryMediaKeyRoute,
} from '../routes'

const app = new OpenAPIHono()

export const mediaHandler = app
  .openapi(get2MediaRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(post2MediaAmplifyPostsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(get2MediaAmplifyProgramsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(get2MediaAmplifyProgramsProgramIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(get2MediaAmplifyProgramsProgramIdPostsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(get2MediaAnalyticsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(post2MediaLibraryRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(get2MediaLibraryCategoriesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(delete2MediaLibraryMediaKeyRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(put2MediaLibraryMediaKeyRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(post2MediaMetadataRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(delete2MediaSubtitlesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(post2MediaSubtitlesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(get2MediaUploadRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(post2MediaUploadRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(post2MediaUploadInitializeRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(post2MediaUploadIdAppendRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(post2MediaUploadIdFinalizeRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(get2MediaMediaKeyRoute, (c) => {
    throw new Error('Not implemented')
  })
