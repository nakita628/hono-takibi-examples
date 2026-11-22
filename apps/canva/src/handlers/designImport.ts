import { OpenAPIHono } from '@hono/zod-openapi'
import {
  getV1ImageToDesignImportsJobIdRoute,
  getV1ImportsJobIdRoute,
  getV1UrlImportsJobIdRoute,
  postV1ImageToDesignImportsRoute,
  postV1ImportsRoute,
  postV1UrlImportsRoute,
} from '../routes'

const app = new OpenAPIHono()

export const designImportHandler = app
  .openapi(postV1ImportsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV1ImportsJobIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV1UrlImportsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV1UrlImportsJobIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV1ImageToDesignImportsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV1ImageToDesignImportsJobIdRoute, (c) => {
    throw new Error('Not implemented')
  })
