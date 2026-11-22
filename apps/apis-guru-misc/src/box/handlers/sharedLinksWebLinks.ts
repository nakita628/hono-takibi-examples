import { OpenAPIHono } from '@hono/zod-openapi'
import {
  getSharedItemsWebLinksRoute,
  getWebLinksWebLinkIdGetSharedLinkRoute,
  putWebLinksWebLinkIdAddSharedLinkRoute,
  putWebLinksWebLinkIdRemoveSharedLinkRoute,
  putWebLinksWebLinkIdUpdateSharedLinkRoute,
} from '../routes'

const app = new OpenAPIHono()

export const sharedLinksWebLinksHandler = app
  .openapi(getSharedItemsWebLinksRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putWebLinksWebLinkIdAddSharedLinkRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getWebLinksWebLinkIdGetSharedLinkRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putWebLinksWebLinkIdRemoveSharedLinkRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putWebLinksWebLinkIdUpdateSharedLinkRoute, (c) => {
    throw new Error('Not implemented')
  })
