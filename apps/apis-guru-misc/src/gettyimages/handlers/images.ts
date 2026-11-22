import { OpenAPIHono } from '@hono/zod-openapi'
import {
  getV3ImagesIdDownloadhistoryRoute,
  getV3ImagesIdRoute,
  getV3ImagesIdSameSeriesRoute,
  getV3ImagesIdSimilarRoute,
  getV3ImagesRoute,
} from '../routes'

const app = new OpenAPIHono()

export const imagesHandler = app
  .openapi(getV3ImagesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV3ImagesIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV3ImagesIdDownloadhistoryRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV3ImagesIdSameSeriesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV3ImagesIdSimilarRoute, (c) => {
    throw new Error('Not implemented')
  })
