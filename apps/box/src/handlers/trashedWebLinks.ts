import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteWebLinksWebLinkIdTrashRoute,
  getWebLinksWebLinkIdTrashRoute,
  postWebLinksWebLinkIdRoute,
} from '../routes'

const app = new OpenAPIHono()

export const trashedWebLinksHandler = app
  .openapi(postWebLinksWebLinkIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getWebLinksWebLinkIdTrashRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteWebLinksWebLinkIdTrashRoute, (c) => {
    throw new Error('Not implemented')
  })
