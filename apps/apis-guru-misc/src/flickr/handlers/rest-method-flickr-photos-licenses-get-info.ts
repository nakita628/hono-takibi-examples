import { OpenAPIHono } from '@hono/zod-openapi'
import { getRestMethodFlickrPhotosLicensesGetInfoRoute } from '../routes'

const app = new OpenAPIHono()

export const restMethodFlickrPhotosLicensesGetInfoHandler = app.openapi(
  getRestMethodFlickrPhotosLicensesGetInfoRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
