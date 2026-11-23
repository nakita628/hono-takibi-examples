import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteLinksLinkIdRoute,
  getLinksLinkIdRoute,
  getLinksRoute,
  patchLinksLinkIdRoute,
  postLinksRoute,
} from '../routes'

const app = new OpenAPIHono()

export const linksHandler = app
  .openapi(getLinksLinkIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchLinksLinkIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteLinksLinkIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postLinksRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getLinksRoute, (c) => {
    throw new Error('Not implemented')
  })
