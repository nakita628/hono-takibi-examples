import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteApiV2ContentReleasesContentReleaseIdRoute,
  getApiV2ContentReleasesContentReleaseIdRoute,
  getApiV2ContentReleasesRoute,
  postApiV2ContentReleasesRoute,
  putApiV2ContentReleasesContentReleaseIdRoute,
} from '../routes'

const app = new OpenAPIHono()

export const contentReleaseHandler = app
  .openapi(getApiV2ContentReleasesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiV2ContentReleasesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteApiV2ContentReleasesContentReleaseIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV2ContentReleasesContentReleaseIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putApiV2ContentReleasesContentReleaseIdRoute, (c) => {
    throw new Error('Not implemented')
  })
