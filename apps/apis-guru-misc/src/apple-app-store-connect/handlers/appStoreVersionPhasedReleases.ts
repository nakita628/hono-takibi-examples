import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteV1AppStoreVersionPhasedReleasesIdRoute,
  patchV1AppStoreVersionPhasedReleasesIdRoute,
  postV1AppStoreVersionPhasedReleasesRoute,
} from '../routes'

const app = new OpenAPIHono()

export const appStoreVersionPhasedReleasesHandler = app
  .openapi(postV1AppStoreVersionPhasedReleasesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteV1AppStoreVersionPhasedReleasesIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchV1AppStoreVersionPhasedReleasesIdRoute, (c) => {
    throw new Error('Not implemented')
  })
