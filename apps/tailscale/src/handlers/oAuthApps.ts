import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteTailnetTailnetOauthAppsAppIdRoute,
  getTailnetTailnetOauthAppsAppIdRoute,
  getTailnetTailnetOauthAppsRoute,
  postTailnetTailnetOauthAppsRoute,
  putTailnetTailnetOauthAppsAppIdRoute,
} from '../routes'

const app = new OpenAPIHono()

export const oAuthAppsHandler = app
  .openapi(getTailnetTailnetOauthAppsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postTailnetTailnetOauthAppsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getTailnetTailnetOauthAppsAppIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putTailnetTailnetOauthAppsAppIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteTailnetTailnetOauthAppsAppIdRoute, (c) => {
    throw new Error('Not implemented')
  })
