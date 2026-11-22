import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteWikiRestApiSpaceSpaceKeyRoute,
  postWikiRestApiSpacePrivateRoute,
  postWikiRestApiSpaceRoute,
  putWikiRestApiSpaceSpaceKeyRoute,
} from '../routes'

const app = new OpenAPIHono()

export const spaceHandler = app
  .openapi(postWikiRestApiSpaceRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postWikiRestApiSpacePrivateRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putWikiRestApiSpaceSpaceKeyRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteWikiRestApiSpaceSpaceKeyRoute, (c) => {
    throw new Error('Not implemented')
  })
