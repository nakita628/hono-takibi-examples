import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteWikiRestApiContentIdRestrictionByOperationOperationKeyByGroupIdGroupIdRoute,
  deleteWikiRestApiContentIdRestrictionByOperationOperationKeyUserRoute,
  deleteWikiRestApiContentIdRestrictionRoute,
  getWikiRestApiContentIdRestrictionByOperationOperationKeyByGroupIdGroupIdRoute,
  getWikiRestApiContentIdRestrictionByOperationOperationKeyRoute,
  getWikiRestApiContentIdRestrictionByOperationOperationKeyUserRoute,
  getWikiRestApiContentIdRestrictionByOperationRoute,
  getWikiRestApiContentIdRestrictionRoute,
  postWikiRestApiContentIdRestrictionRoute,
  putWikiRestApiContentIdRestrictionByOperationOperationKeyByGroupIdGroupIdRoute,
  putWikiRestApiContentIdRestrictionByOperationOperationKeyUserRoute,
  putWikiRestApiContentIdRestrictionRoute,
} from '../routes'

const app = new OpenAPIHono()

export const contentRestrictionsHandler = app
  .openapi(getWikiRestApiContentIdRestrictionRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putWikiRestApiContentIdRestrictionRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postWikiRestApiContentIdRestrictionRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteWikiRestApiContentIdRestrictionRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getWikiRestApiContentIdRestrictionByOperationRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getWikiRestApiContentIdRestrictionByOperationOperationKeyRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getWikiRestApiContentIdRestrictionByOperationOperationKeyByGroupIdGroupIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putWikiRestApiContentIdRestrictionByOperationOperationKeyByGroupIdGroupIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(
    deleteWikiRestApiContentIdRestrictionByOperationOperationKeyByGroupIdGroupIdRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(getWikiRestApiContentIdRestrictionByOperationOperationKeyUserRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putWikiRestApiContentIdRestrictionByOperationOperationKeyUserRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteWikiRestApiContentIdRestrictionByOperationOperationKeyUserRoute, (c) => {
    throw new Error('Not implemented')
  })
