import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteMetafieldsIdIndexRoute,
  getMetafieldsIdIndexRoute,
  getMetafieldsIndexRoute,
  patchMetafieldsIdIndexRoute,
  postMetafieldsIndexRoute,
  putMetafieldsIdIndexRoute,
} from '../routes'

const app = new OpenAPIHono()

export const metafieldsHandler = app
  .openapi(getMetafieldsIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postMetafieldsIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteMetafieldsIdIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getMetafieldsIdIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchMetafieldsIdIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putMetafieldsIdIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
