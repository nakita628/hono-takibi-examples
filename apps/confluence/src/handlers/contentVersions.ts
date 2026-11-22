import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteWikiRestApiContentIdVersionVersionNumberRoute,
  postWikiRestApiContentIdVersionRoute,
} from '../routes'

const app = new OpenAPIHono()

export const contentVersionsHandler = app
  .openapi(postWikiRestApiContentIdVersionRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteWikiRestApiContentIdVersionVersionNumberRoute, (c) => {
    throw new Error('Not implemented')
  })
