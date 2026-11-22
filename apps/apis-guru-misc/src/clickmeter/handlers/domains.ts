import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteDomainsIdRoute,
  getDomainsCountRoute,
  getDomainsIdRoute,
  getDomainsRoute,
  postDomainsIdRoute,
  postDomainsRoute,
} from '../routes'

const app = new OpenAPIHono()

export const domainsHandler = app
  .openapi(getDomainsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postDomainsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getDomainsCountRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteDomainsIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getDomainsIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postDomainsIdRoute, (c) => {
    throw new Error('Not implemented')
  })
