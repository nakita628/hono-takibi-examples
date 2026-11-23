import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteDomainnamesDomainNameBasepathmappingsBasePathRoute,
  deleteDomainnamesDomainNameRoute,
  getDomainnamesDomainNameBasepathmappingsBasePathRoute,
  getDomainnamesDomainNameBasepathmappingsRoute,
  getDomainnamesDomainNameRoute,
  getDomainnamesRoute,
  patchDomainnamesDomainNameBasepathmappingsBasePathRoute,
  patchDomainnamesDomainNameRoute,
  postDomainnamesDomainNameBasepathmappingsRoute,
  postDomainnamesRoute,
} from '../routes'

const app = new OpenAPIHono()

export const domainnamesHandler = app
  .openapi(postDomainnamesDomainNameBasepathmappingsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getDomainnamesDomainNameBasepathmappingsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postDomainnamesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getDomainnamesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteDomainnamesDomainNameBasepathmappingsBasePathRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getDomainnamesDomainNameBasepathmappingsBasePathRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchDomainnamesDomainNameBasepathmappingsBasePathRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteDomainnamesDomainNameRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getDomainnamesDomainNameRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchDomainnamesDomainNameRoute, (c) => {
    throw new Error('Not implemented')
  })
