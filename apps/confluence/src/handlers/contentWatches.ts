import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteWikiRestApiUserWatchContentContentIdRoute,
  deleteWikiRestApiUserWatchLabelLabelNameRoute,
  deleteWikiRestApiUserWatchSpaceSpaceKeyRoute,
  getWikiRestApiContentIdNotificationChildCreatedRoute,
  getWikiRestApiContentIdNotificationCreatedRoute,
  getWikiRestApiSpaceSpaceKeyWatchRoute,
  getWikiRestApiUserWatchContentContentIdRoute,
  getWikiRestApiUserWatchLabelLabelNameRoute,
  getWikiRestApiUserWatchSpaceSpaceKeyRoute,
  postWikiRestApiUserWatchContentContentIdRoute,
  postWikiRestApiUserWatchLabelLabelNameRoute,
  postWikiRestApiUserWatchSpaceSpaceKeyRoute,
} from '../routes'

const app = new OpenAPIHono()

export const contentWatchesHandler = app
  .openapi(getWikiRestApiContentIdNotificationChildCreatedRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getWikiRestApiContentIdNotificationCreatedRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getWikiRestApiSpaceSpaceKeyWatchRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getWikiRestApiUserWatchContentContentIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postWikiRestApiUserWatchContentContentIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteWikiRestApiUserWatchContentContentIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getWikiRestApiUserWatchLabelLabelNameRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postWikiRestApiUserWatchLabelLabelNameRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteWikiRestApiUserWatchLabelLabelNameRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getWikiRestApiUserWatchSpaceSpaceKeyRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postWikiRestApiUserWatchSpaceSpaceKeyRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteWikiRestApiUserWatchSpaceSpaceKeyRoute, (c) => {
    throw new Error('Not implemented')
  })
