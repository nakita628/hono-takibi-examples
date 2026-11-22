import { OpenAPIHono } from '@hono/zod-openapi'
import {
  getApiV1LivechatTagsRoute,
  getApiV1LivechatTagsTagIdRoute,
  postApiV1LivechatTagsDeleteRoute,
  postApiV1LivechatTagsSaveRoute,
} from '../routes'

const app = new OpenAPIHono()

export const omnichannelTagsHandler = app
  .openapi(getApiV1LivechatTagsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV1LivechatTagsTagIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiV1LivechatTagsDeleteRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiV1LivechatTagsSaveRoute, (c) => {
    throw new Error('Not implemented')
  })
