import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteWhitelabelLinksIdRoute,
  deleteWhitelabelLinksSubuserRoute,
  getWhitelabelLinksDefaultRoute,
  getWhitelabelLinksIdRoute,
  getWhitelabelLinksRoute,
  getWhitelabelLinksSubuserRoute,
  patchWhitelabelLinksIdRoute,
  postWhitelabelLinksIdValidateRoute,
  postWhitelabelLinksLinkIdSubuserRoute,
  postWhitelabelLinksRoute,
} from '../routes'

const app = new OpenAPIHono()

export const linkBrandingHandler = app
  .openapi(getWhitelabelLinksRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postWhitelabelLinksRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getWhitelabelLinksDefaultRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteWhitelabelLinksSubuserRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getWhitelabelLinksSubuserRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteWhitelabelLinksIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getWhitelabelLinksIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchWhitelabelLinksIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postWhitelabelLinksIdValidateRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postWhitelabelLinksLinkIdSubuserRoute, (c) => {
    throw new Error('Not implemented')
  })
