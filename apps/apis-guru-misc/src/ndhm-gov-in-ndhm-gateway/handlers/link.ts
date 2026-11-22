import { OpenAPIHono } from '@hono/zod-openapi'
import {
  postV05LinksLinkAddContextsRoute,
  postV05LinksLinkConfirmRoute,
  postV05LinksLinkInitRoute,
  postV05LinksLinkOnAddContextsRoute,
  postV05LinksLinkOnConfirmRoute,
  postV05LinksLinkOnInitRoute,
} from '../routes'

const app = new OpenAPIHono()

export const linkHandler = app
  .openapi(postV05LinksLinkAddContextsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV05LinksLinkConfirmRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV05LinksLinkInitRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV05LinksLinkOnAddContextsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV05LinksLinkOnConfirmRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV05LinksLinkOnInitRoute, (c) => {
    throw new Error('Not implemented')
  })
