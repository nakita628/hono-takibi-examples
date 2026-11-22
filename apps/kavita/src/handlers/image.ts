import { OpenAPIHono } from '@hono/zod-openapi'
import {
  getApiImageBookmarkRoute,
  getApiImageChapterCoverRoute,
  getApiImageCollectionCoverRoute,
  getApiImageCoverUploadRoute,
  getApiImageExternalChapterRoute,
  getApiImageExternalSeriesRoute,
  getApiImageExternalVolumeRoute,
  getApiImageLibraryCoverRoute,
  getApiImagePersonCoverRoute,
  getApiImagePublisherRoute,
  getApiImageReadinglistCoverRoute,
  getApiImageSeriesCoverRoute,
  getApiImageUserCoverRoute,
  getApiImageVolumeCoverRoute,
  getApiImageWebLinkRoute,
} from '../routes'

const app = new OpenAPIHono()

export const imageHandler = app
  .openapi(getApiImageChapterCoverRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiImageLibraryCoverRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiImageVolumeCoverRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiImageSeriesCoverRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiImageCollectionCoverRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiImageReadinglistCoverRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiImageBookmarkRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiImageWebLinkRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiImagePublisherRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiImagePersonCoverRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiImageUserCoverRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiImageCoverUploadRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiImageExternalSeriesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiImageExternalVolumeRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiImageExternalChapterRoute, (c) => {
    throw new Error('Not implemented')
  })
