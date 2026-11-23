import { OpenAPIHono } from '@hono/zod-openapi'
import { getCommunityContentGetSortMediaFilterPageIndexRoute } from '../routes'

const app = new OpenAPIHono()

export const communityContentHandler = app.openapi(
  getCommunityContentGetSortMediaFilterPageIndexRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
