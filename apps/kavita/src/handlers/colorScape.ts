import { OpenAPIHono } from '@hono/zod-openapi'
import {
  getApiColorScapeChapterRoute,
  getApiColorScapeCollectionRoute,
  getApiColorScapePersonRoute,
  getApiColorScapeReadingListRoute,
  getApiColorScapeSeriesRoute,
  getApiColorScapeVolumeRoute,
} from '../routes'

const app = new OpenAPIHono()

export const colorScapeHandler = app
  .openapi(getApiColorScapeSeriesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiColorScapeVolumeRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiColorScapeChapterRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiColorScapePersonRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiColorScapeReadingListRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiColorScapeCollectionRoute, (c) => {
    throw new Error('Not implemented')
  })
