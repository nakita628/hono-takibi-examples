import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteOcsV2PhpAppsSpreedApiApiVersionTagsTagIdRoute,
  getOcsV2PhpAppsSpreedApiApiVersionTagsRoute,
  postOcsV2PhpAppsSpreedApiApiVersionTagsRoute,
  putOcsV2PhpAppsSpreedApiApiVersionTagsReorderRoute,
  putOcsV2PhpAppsSpreedApiApiVersionTagsTagIdCollapsedRoute,
  putOcsV2PhpAppsSpreedApiApiVersionTagsTagIdRoute,
} from '../routes'

const app = new OpenAPIHono()

export const conversationTagHandler = app
  .openapi(getOcsV2PhpAppsSpreedApiApiVersionTagsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postOcsV2PhpAppsSpreedApiApiVersionTagsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putOcsV2PhpAppsSpreedApiApiVersionTagsTagIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteOcsV2PhpAppsSpreedApiApiVersionTagsTagIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putOcsV2PhpAppsSpreedApiApiVersionTagsReorderRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putOcsV2PhpAppsSpreedApiApiVersionTagsTagIdCollapsedRoute, (c) => {
    throw new Error('Not implemented')
  })
