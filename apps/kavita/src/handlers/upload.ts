import { OpenAPIHono } from '@hono/zod-openapi'
import {
  postApiUploadChapterRoute,
  postApiUploadCollectionRoute,
  postApiUploadLibraryRoute,
  postApiUploadPersonRoute,
  postApiUploadReadingListRoute,
  postApiUploadSeriesRoute,
  postApiUploadUploadByFileRoute,
  postApiUploadUploadByUrlRoute,
  postApiUploadUploadChapterCoverRoute,
  postApiUploadUploadSeriesCoverRoute,
  postApiUploadUploadVolumeCoverRoute,
  postApiUploadUserRoute,
  postApiUploadVolumeRoute,
} from '../routes'

const app = new OpenAPIHono()

export const uploadHandler = app
  .openapi(postApiUploadUploadByUrlRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiUploadUploadChapterCoverRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiUploadUploadVolumeCoverRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiUploadUploadSeriesCoverRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiUploadUploadByFileRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiUploadSeriesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiUploadCollectionRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiUploadReadingListRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiUploadChapterRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiUploadVolumeRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiUploadLibraryRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiUploadPersonRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiUploadUserRoute, (c) => {
    throw new Error('Not implemented')
  })
