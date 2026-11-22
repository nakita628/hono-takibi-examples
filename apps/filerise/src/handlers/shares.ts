import { OpenAPIHono } from '@hono/zod-openapi'
import {
  getApiFileGetShareLinksPhpRoute,
  getApiFileSharePhpRoute,
  postApiFileCreateShareLinkPhpRoute,
  postApiFileDeleteShareLinkPhpRoute,
} from '../routes'

const app = new OpenAPIHono()

export const sharesHandler = app
  .openapi(postApiFileCreateShareLinkPhpRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiFileDeleteShareLinkPhpRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiFileGetShareLinksPhpRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiFileSharePhpRoute, (c) => {
    throw new Error('Not implemented')
  })
