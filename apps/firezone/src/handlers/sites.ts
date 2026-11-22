import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteSitesIdRoute,
  getSitesIdRoute,
  getSitesRoute,
  patchSitesIdRoute,
  postSitesRoute,
  putSitesIdRoute,
} from '../routes'

const app = new OpenAPIHono()

export const sitesHandler = app
  .openapi(getSitesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postSitesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteSitesIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getSitesIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchSitesIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putSitesIdRoute, (c) => {
    throw new Error('Not implemented')
  })
