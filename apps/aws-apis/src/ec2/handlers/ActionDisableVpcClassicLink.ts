import { OpenAPIHono } from '@hono/zod-openapi'
import {
  getActionDisableVpcClassicLinkRoute,
  postActionDisableVpcClassicLinkRoute,
} from '../routes'

const app = new OpenAPIHono()

export const ActionDisableVpcClassicLinkHandler = app
  .openapi(getActionDisableVpcClassicLinkRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postActionDisableVpcClassicLinkRoute, (c) => {
    throw new Error('Not implemented')
  })
