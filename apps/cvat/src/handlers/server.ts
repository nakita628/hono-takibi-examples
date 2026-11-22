import { OpenAPIHono } from '@hono/zod-openapi'
import {
  getApiServerAboutRoute,
  getApiServerAnnotationFormatsRoute,
  getApiServerPluginsRoute,
  getApiServerShareRoute,
} from '../routes'

const app = new OpenAPIHono()

export const serverHandler = app
  .openapi(getApiServerAboutRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiServerAnnotationFormatsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiServerPluginsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiServerShareRoute, (c) => {
    throw new Error('Not implemented')
  })
