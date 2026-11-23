import { OpenAPIHono } from '@hono/zod-openapi'
import { getViewOnlyLinksLinkIdIndexRoute, getViewOnlyLinksLinkIdNodesIndexRoute } from '../routes'

const app = new OpenAPIHono()

export const viewOnlyLinksHandler = app
  .openapi(getViewOnlyLinksLinkIdIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getViewOnlyLinksLinkIdNodesIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
