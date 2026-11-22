import { OpenAPIHono } from '@hono/zod-openapi'
import {
  getWikiRestApiUserAnonymousRoute,
  getWikiRestApiUserBulkRoute,
  getWikiRestApiUserCurrentRoute,
  getWikiRestApiUserEmailBulkRoute,
  getWikiRestApiUserEmailRoute,
  getWikiRestApiUserMemberofRoute,
  getWikiRestApiUserRoute,
} from '../routes'

const app = new OpenAPIHono()

export const usersHandler = app
  .openapi(getWikiRestApiUserRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getWikiRestApiUserAnonymousRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getWikiRestApiUserCurrentRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getWikiRestApiUserMemberofRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getWikiRestApiUserBulkRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getWikiRestApiUserEmailRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getWikiRestApiUserEmailBulkRoute, (c) => {
    throw new Error('Not implemented')
  })
