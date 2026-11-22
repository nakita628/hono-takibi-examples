import { OpenAPIHono } from '@hono/zod-openapi'
import {
  getWikiRestApiContentbodyConvertAsyncBulkTasksRoute,
  getWikiRestApiContentbodyConvertAsyncIdRoute,
  postWikiRestApiContentbodyConvertAsyncBulkTasksRoute,
  postWikiRestApiContentbodyConvertAsyncToRoute,
} from '../routes'

const app = new OpenAPIHono()

export const contentBodyHandler = app
  .openapi(postWikiRestApiContentbodyConvertAsyncToRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getWikiRestApiContentbodyConvertAsyncIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postWikiRestApiContentbodyConvertAsyncBulkTasksRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getWikiRestApiContentbodyConvertAsyncBulkTasksRoute, (c) => {
    throw new Error('Not implemented')
  })
