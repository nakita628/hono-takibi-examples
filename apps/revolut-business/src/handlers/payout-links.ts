import { OpenAPIHono } from '@hono/zod-openapi'
import {
  getPayoutLinksPayoutLinkIdRoute,
  getPayoutLinksRoute,
  postPayoutLinksPayoutLinkIdCancelRoute,
  postPayoutLinksRoute,
} from '../routes'

const app = new OpenAPIHono()

export const payoutLinksHandler = app
  .openapi(postPayoutLinksRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getPayoutLinksRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getPayoutLinksPayoutLinkIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postPayoutLinksPayoutLinkIdCancelRoute, (c) => {
    throw new Error('Not implemented')
  })
