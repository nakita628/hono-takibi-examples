import { OpenAPIHono } from '@hono/zod-openapi'
import { getV2CustomerShortNamePropertyPropertyIDPhotosRoute } from '../routes'

const app = new OpenAPIHono()

export const propertyControllerHandler = app.openapi(
  getV2CustomerShortNamePropertyPropertyIDPhotosRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
