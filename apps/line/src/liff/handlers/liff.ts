import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteLiffV1AppsLiffIdRoute,
  getLiffV1AppsRoute,
  postLiffV1AppsRoute,
  putLiffV1AppsLiffIdRoute,
} from '../routes'

const app = new OpenAPIHono()

export const liffHandler = app
  .openapi(postLiffV1AppsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getLiffV1AppsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putLiffV1AppsLiffIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteLiffV1AppsLiffIdRoute, (c) => {
    throw new Error('Not implemented')
  })
