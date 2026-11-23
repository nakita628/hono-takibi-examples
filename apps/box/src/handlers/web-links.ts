import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteWebLinksWebLinkIdRoute,
  deleteWebLinksWebLinkIdTrashRoute,
  getWebLinksWebLinkIdGetSharedLinkRoute,
  getWebLinksWebLinkIdRoute,
  getWebLinksWebLinkIdTrashRoute,
  postWebLinksRoute,
  postWebLinksWebLinkIdRoute,
  putWebLinksWebLinkIdAddSharedLinkRoute,
  putWebLinksWebLinkIdRemoveSharedLinkRoute,
  putWebLinksWebLinkIdRoute,
  putWebLinksWebLinkIdUpdateSharedLinkRoute,
} from '../routes'

const app = new OpenAPIHono()

export const webLinksHandler = app
  .openapi(postWebLinksRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getWebLinksWebLinkIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postWebLinksWebLinkIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putWebLinksWebLinkIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteWebLinksWebLinkIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getWebLinksWebLinkIdTrashRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteWebLinksWebLinkIdTrashRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getWebLinksWebLinkIdGetSharedLinkRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putWebLinksWebLinkIdAddSharedLinkRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putWebLinksWebLinkIdUpdateSharedLinkRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putWebLinksWebLinkIdRemoveSharedLinkRoute, (c) => {
    throw new Error('Not implemented')
  })
