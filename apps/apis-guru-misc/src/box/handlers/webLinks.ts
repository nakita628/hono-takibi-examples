import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteWebLinksWebLinkIdRoute,
  getWebLinksWebLinkIdRoute,
  postWebLinksRoute,
  putWebLinksWebLinkIdRoute,
} from '../routes'

const app = new OpenAPIHono()

export const webLinksHandler = app
  .openapi(postWebLinksRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteWebLinksWebLinkIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getWebLinksWebLinkIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putWebLinksWebLinkIdRoute, (c) => {
    throw new Error('Not implemented')
  })
