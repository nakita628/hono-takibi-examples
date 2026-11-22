import { OpenAPIHono } from '@hono/zod-openapi'
import {
  getV2EditorialVideosCategoriesRoute,
  getV2EditorialVideosIdRoute,
  getV2EditorialVideosLicensesRoute,
  getV2EditorialVideosSearchRoute,
  postV2EditorialVideosLicensesRoute,
} from '../routes'

const app = new OpenAPIHono()

export const editorialVideoHandler = app
  .openapi(getV2EditorialVideosCategoriesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV2EditorialVideosLicensesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV2EditorialVideosLicensesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV2EditorialVideosSearchRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV2EditorialVideosIdRoute, (c) => {
    throw new Error('Not implemented')
  })
