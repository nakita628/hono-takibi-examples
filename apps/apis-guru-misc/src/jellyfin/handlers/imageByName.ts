import { OpenAPIHono } from '@hono/zod-openapi'
import {
  getImagesGeneralNameTypeRoute,
  getImagesGeneralRoute,
  getImagesMediaInfoRoute,
  getImagesMediaInfoThemeNameRoute,
  getImagesRatingsRoute,
  getImagesRatingsThemeNameRoute,
} from '../routes'

const app = new OpenAPIHono()

export const imageByNameHandler = app
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
