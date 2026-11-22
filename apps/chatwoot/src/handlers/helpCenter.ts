import { OpenAPIHono } from '@hono/zod-openapi'
import {
  getApiV1AccountsAccountIdPortalsPortalSlugRoute,
  getApiV1AccountsAccountIdPortalsRoute,
  patchApiV1AccountsAccountIdPortalsPortalSlugRoute,
  postApiV1AccountsAccountIdPortalsPortalSlugArticlesRoute,
  postApiV1AccountsAccountIdPortalsPortalSlugCategoriesRoute,
  postApiV1AccountsAccountIdPortalsRoute,
} from '../routes'

const app = new OpenAPIHono()

export const helpCenterHandler = app
  .openapi(postApiV1AccountsAccountIdPortalsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV1AccountsAccountIdPortalsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV1AccountsAccountIdPortalsPortalSlugRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchApiV1AccountsAccountIdPortalsPortalSlugRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiV1AccountsAccountIdPortalsPortalSlugCategoriesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiV1AccountsAccountIdPortalsPortalSlugArticlesRoute, (c) => {
    throw new Error('Not implemented')
  })
