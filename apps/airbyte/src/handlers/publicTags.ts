import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deletePublicV1TagsTagIdRoute,
  getPublicV1TagsRoute,
  getPublicV1TagsTagIdRoute,
  patchPublicV1TagsTagIdRoute,
  postPublicV1TagsRoute,
} from '../routes'

const app = new OpenAPIHono()

export const publicTagsHandler = app
  .openapi(getPublicV1TagsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postPublicV1TagsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getPublicV1TagsTagIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deletePublicV1TagsTagIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchPublicV1TagsTagIdRoute, (c) => {
    throw new Error('Not implemented')
  })
