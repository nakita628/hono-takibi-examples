import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteBgpSessionsIdRoute,
  getBgpSessionsIdRoute,
  getProjectsIdBgpConfigRoute,
  getProjectsIdBgpSessionsRoute,
  getProjectsIdGlobalBgpRangesRoute,
  postProjectsIdBgpConfigsRoute,
  putBgpSessionsIdRoute,
} from '../routes'

const app = new OpenAPIHono()

export const bgpHandler = app
  .openapi(deleteBgpSessionsIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getBgpSessionsIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putBgpSessionsIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getProjectsIdBgpConfigRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postProjectsIdBgpConfigsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getProjectsIdBgpSessionsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getProjectsIdGlobalBgpRangesRoute, (c) => {
    throw new Error('Not implemented')
  })
