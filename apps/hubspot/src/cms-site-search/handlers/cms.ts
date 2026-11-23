import { OpenAPIHono } from '@hono/zod-openapi'
import {
  getCmsSiteSearch202609IndexedDataContentIdRoute,
  getCmsSiteSearch202609SearchRoute,
} from '../routes'

const app = new OpenAPIHono()

export const cmsHandler = app
  .openapi(getCmsSiteSearch202609IndexedDataContentIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getCmsSiteSearch202609SearchRoute, (c) => {
    throw new Error('Not implemented')
  })
