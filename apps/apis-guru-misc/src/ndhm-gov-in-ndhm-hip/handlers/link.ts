import { OpenAPIHono } from '@hono/zod-openapi'
import {
  postV05LinksLinkConfirmRoute,
  postV05LinksLinkInitRoute,
  postV05LinksLinkOnAddContextsRoute,
} from '../routes'

const app = new OpenAPIHono()

export const linkHandler = app
  .openapi(postV05LinksLinkConfirmRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV05LinksLinkInitRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV05LinksLinkOnAddContextsRoute, (c) => {
    throw new Error('Not implemented')
  })
