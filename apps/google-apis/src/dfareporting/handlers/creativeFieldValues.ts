import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteUserprofilesProfileIdCreativeFieldsCreativeFieldIdCreativeFieldValuesIdRoute,
  getUserprofilesProfileIdCreativeFieldsCreativeFieldIdCreativeFieldValuesIdRoute,
  getUserprofilesProfileIdCreativeFieldsCreativeFieldIdCreativeFieldValuesRoute,
  patchUserprofilesProfileIdCreativeFieldsCreativeFieldIdCreativeFieldValuesRoute,
  postUserprofilesProfileIdCreativeFieldsCreativeFieldIdCreativeFieldValuesRoute,
  putUserprofilesProfileIdCreativeFieldsCreativeFieldIdCreativeFieldValuesRoute,
} from '../routes'

const app = new OpenAPIHono()

export const creativeFieldValuesHandler = app
  .openapi(getUserprofilesProfileIdCreativeFieldsCreativeFieldIdCreativeFieldValuesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchUserprofilesProfileIdCreativeFieldsCreativeFieldIdCreativeFieldValuesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postUserprofilesProfileIdCreativeFieldsCreativeFieldIdCreativeFieldValuesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putUserprofilesProfileIdCreativeFieldsCreativeFieldIdCreativeFieldValuesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(
    deleteUserprofilesProfileIdCreativeFieldsCreativeFieldIdCreativeFieldValuesIdRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(getUserprofilesProfileIdCreativeFieldsCreativeFieldIdCreativeFieldValuesIdRoute, (c) => {
    throw new Error('Not implemented')
  })
