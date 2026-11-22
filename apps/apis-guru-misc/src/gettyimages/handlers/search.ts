import { OpenAPIHono } from '@hono/zod-openapi'
import {
  getV3SearchEventsRoute,
  getV3SearchImagesCreativeByImageRoute,
  getV3SearchImagesCreativeRoute,
  getV3SearchImagesEditorialRoute,
  getV3SearchImagesRoute,
  getV3SearchVideosCreativeByImageRoute,
  getV3SearchVideosCreativeRoute,
  getV3SearchVideosEditorialRoute,
  putV3SearchByImageUploadsFileNameRoute,
} from '../routes'

const app = new OpenAPIHono()

export const searchHandler = app
  .openapi(putV3SearchByImageUploadsFileNameRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV3SearchEventsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV3SearchImagesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV3SearchImagesCreativeRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV3SearchImagesCreativeByImageRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV3SearchImagesEditorialRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV3SearchVideosCreativeRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV3SearchVideosCreativeByImageRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV3SearchVideosEditorialRoute, (c) => {
    throw new Error('Not implemented')
  })
