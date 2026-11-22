import { OpenAPIHono } from '@hono/zod-openapi'
import {
  getV2CvKeywordsRoute,
  getV2CvSimilarImagesRoute,
  getV2CvSimilarVideosRoute,
  postV2CvImagesRoute,
  postV2ImagesRoute,
} from '../routes'

const app = new OpenAPIHono()

export const computerVisionHandler = app
  .openapi(postV2CvImagesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV2CvKeywordsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV2CvSimilarImagesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV2CvSimilarVideosRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV2ImagesRoute, (c) => {
    throw new Error('Not implemented')
  })
