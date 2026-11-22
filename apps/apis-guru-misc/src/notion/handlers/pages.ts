import { OpenAPIHono } from '@hono/zod-openapi'
import {
  getV1PagesIdRoute,
  getV1PagesPageIdPropertiesPropertyIdRoute,
  patchV1PagesIdRoute,
} from '../routes'

const app = new OpenAPIHono()

export const pagesHandler = app
  .openapi(getV1PagesIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchV1PagesIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV1PagesPageIdPropertiesPropertyIdRoute, (c) => {
    throw new Error('Not implemented')
  })
