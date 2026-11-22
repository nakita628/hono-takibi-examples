import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteUserprofilesProfileIdCreativeFieldsIdRoute,
  getUserprofilesProfileIdCreativeFieldsIdRoute,
  getUserprofilesProfileIdCreativeFieldsRoute,
  patchUserprofilesProfileIdCreativeFieldsRoute,
  postUserprofilesProfileIdCreativeFieldsRoute,
  putUserprofilesProfileIdCreativeFieldsRoute,
} from '../routes'

const app = new OpenAPIHono()

export const creativeFieldsHandler = app
  .openapi(getUserprofilesProfileIdCreativeFieldsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchUserprofilesProfileIdCreativeFieldsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postUserprofilesProfileIdCreativeFieldsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putUserprofilesProfileIdCreativeFieldsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteUserprofilesProfileIdCreativeFieldsIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getUserprofilesProfileIdCreativeFieldsIdRoute, (c) => {
    throw new Error('Not implemented')
  })
