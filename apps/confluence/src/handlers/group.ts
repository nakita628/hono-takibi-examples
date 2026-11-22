import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteWikiRestApiGroupByIdRoute,
  deleteWikiRestApiGroupUserByGroupIdRoute,
  getWikiRestApiGroupByIdRoute,
  getWikiRestApiGroupGroupIdMembersByGroupIdRoute,
  getWikiRestApiGroupPickerRoute,
  getWikiRestApiGroupRoute,
  postWikiRestApiGroupRoute,
  postWikiRestApiGroupUserByGroupIdRoute,
} from '../routes'

const app = new OpenAPIHono()

export const groupHandler = app
  .openapi(getWikiRestApiGroupRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postWikiRestApiGroupRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getWikiRestApiGroupByIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteWikiRestApiGroupByIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getWikiRestApiGroupPickerRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getWikiRestApiGroupGroupIdMembersByGroupIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postWikiRestApiGroupUserByGroupIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteWikiRestApiGroupUserByGroupIdRoute, (c) => {
    throw new Error('Not implemented')
  })
