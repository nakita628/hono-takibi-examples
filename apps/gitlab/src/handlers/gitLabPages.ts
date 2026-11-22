import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteApiV4ProjectsIdPagesDomainsDomainRoute,
  deleteApiV4ProjectsIdPagesRoute,
  getApiV4PagesDomainsRoute,
  getApiV4ProjectsIdPagesDomainsDomainRoute,
  getApiV4ProjectsIdPagesDomainsRoute,
  getApiV4ProjectsIdPagesRoute,
  patchApiV4ProjectsIdPagesRoute,
  postApiV4ProjectsIdPagesDomainsRoute,
  putApiV4ProjectsIdPagesDomainsDomainRoute,
  putApiV4ProjectsIdPagesDomainsDomainVerifyRoute,
} from '../routes'

const app = new OpenAPIHono()

export const gitLabPagesHandler = app
  .openapi(getApiV4PagesDomainsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV4ProjectsIdPagesDomainsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiV4ProjectsIdPagesDomainsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV4ProjectsIdPagesDomainsDomainRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putApiV4ProjectsIdPagesDomainsDomainRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteApiV4ProjectsIdPagesDomainsDomainRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putApiV4ProjectsIdPagesDomainsDomainVerifyRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteApiV4ProjectsIdPagesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchApiV4ProjectsIdPagesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV4ProjectsIdPagesRoute, (c) => {
    throw new Error('Not implemented')
  })
