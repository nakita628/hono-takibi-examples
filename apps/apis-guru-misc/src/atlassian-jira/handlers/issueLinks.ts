import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteRestApi3IssueLinkLinkIdRoute,
  getRestApi3IssueLinkLinkIdRoute,
  postRestApi3IssueLinkRoute,
} from '../routes'

const app = new OpenAPIHono()

export const issueLinksHandler = app
  .openapi(postRestApi3IssueLinkRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteRestApi3IssueLinkLinkIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getRestApi3IssueLinkLinkIdRoute, (c) => {
    throw new Error('Not implemented')
  })
