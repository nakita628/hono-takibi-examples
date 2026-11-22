import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteWikiRestApiUserUserIdPropertyKeyRoute,
  getWikiRestApiUserUserIdPropertyKeyRoute,
  getWikiRestApiUserUserIdPropertyRoute,
  postWikiRestApiUserUserIdPropertyKeyRoute,
  putWikiRestApiUserUserIdPropertyKeyRoute,
} from '../routes'

const app = new OpenAPIHono()

export const userPropertiesHandler = app
  .openapi(getWikiRestApiUserUserIdPropertyRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getWikiRestApiUserUserIdPropertyKeyRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putWikiRestApiUserUserIdPropertyKeyRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postWikiRestApiUserUserIdPropertyKeyRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteWikiRestApiUserUserIdPropertyKeyRoute, (c) => {
    throw new Error('Not implemented')
  })
