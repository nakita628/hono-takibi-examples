import { OpenAPIHono } from '@hono/zod-openapi'
import {
  getUserprofilesProfileIdCreativesIdRoute,
  getUserprofilesProfileIdCreativesRoute,
  patchUserprofilesProfileIdCreativesRoute,
  postUserprofilesProfileIdCreativesRoute,
  putUserprofilesProfileIdCreativesRoute,
} from '../routes'

const app = new OpenAPIHono()

export const creativesHandler = app
  .openapi(getUserprofilesProfileIdCreativesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchUserprofilesProfileIdCreativesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postUserprofilesProfileIdCreativesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putUserprofilesProfileIdCreativesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getUserprofilesProfileIdCreativesIdRoute, (c) => {
    throw new Error('Not implemented')
  })
