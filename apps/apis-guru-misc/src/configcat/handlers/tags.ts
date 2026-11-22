import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteV1TagsTagIdRoute,
  getV1ProductsProductIdTagsRoute,
  getV1TagsTagIdRoute,
  getV1TagsTagIdSettingsRoute,
  postV1ProductsProductIdTagsRoute,
  putV1TagsTagIdRoute,
} from '../routes'

const app = new OpenAPIHono()

export const tagsHandler = app
  .openapi(getV1ProductsProductIdTagsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV1ProductsProductIdTagsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteV1TagsTagIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV1TagsTagIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putV1TagsTagIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV1TagsTagIdSettingsRoute, (c) => {
    throw new Error('Not implemented')
  })
