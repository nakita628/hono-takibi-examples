import { OpenAPIHono } from '@hono/zod-openapi'
import {
  getApiV1PageHashesPageHashRoute,
  getApiV1PageHashesPageHashThumbnailRoute,
  getApiV1PageHashesRoute,
  getApiV1PageHashesUnknownPageHashThumbnailRoute,
  getApiV1PageHashesUnknownRoute,
  postApiV1PageHashesPageHashDeleteAllRoute,
  postApiV1PageHashesPageHashDeleteMatchRoute,
  putApiV1PageHashesRoute,
} from '../routes'

const app = new OpenAPIHono()

export const duplicatePagesHandler = app
  .openapi(getApiV1PageHashesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putApiV1PageHashesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV1PageHashesUnknownRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV1PageHashesUnknownPageHashThumbnailRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV1PageHashesPageHashRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiV1PageHashesPageHashDeleteAllRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiV1PageHashesPageHashDeleteMatchRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV1PageHashesPageHashThumbnailRoute, (c) => {
    throw new Error('Not implemented')
  })
