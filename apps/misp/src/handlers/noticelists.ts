import { OpenAPIHono } from '@hono/zod-openapi'
import {
  getNoticelistsRoute,
  getNoticelistsViewNoticelistIdRoute,
  postNoticelistsToggleEnableNoticelistIdRoute,
  postNoticelistsUpdateRoute,
} from '../routes'

const app = new OpenAPIHono()

export const noticelistsHandler = app
  .openapi(getNoticelistsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getNoticelistsViewNoticelistIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postNoticelistsToggleEnableNoticelistIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postNoticelistsUpdateRoute, (c) => {
    throw new Error('Not implemented')
  })
