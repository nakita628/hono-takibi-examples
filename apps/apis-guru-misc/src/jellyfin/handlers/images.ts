import { OpenAPIHono } from '@hono/zod-openapi'
import {
  getImagesGeneralNameTypeRoute,
  getImagesGeneralRoute,
  getImagesMediaInfoRoute,
  getImagesMediaInfoThemeNameRoute,
  getImagesRatingsRoute,
  getImagesRatingsThemeNameRoute,
  getImagesRemoteRoute,
} from '../routes'

const app = new OpenAPIHono()

export const imagesHandler = app
  .openapi(getImagesGeneralRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getImagesGeneralNameTypeRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getImagesMediaInfoRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getImagesMediaInfoThemeNameRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getImagesRatingsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getImagesRatingsThemeNameRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getImagesRemoteRoute, (c) => {
    throw new Error('Not implemented')
  })
