import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteUserItemsItemIdRatingRoute,
  getUserItemsItemIdUserDataRoute,
  getUserItemsResumeRoute,
  postUserItemsItemIdRatingRoute,
  postUserItemsItemIdUserDataRoute,
} from '../routes'

const app = new OpenAPIHono()

export const userItemsHandler = app
  .openapi(getUserItemsItemIdUserDataRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postUserItemsItemIdUserDataRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getUserItemsResumeRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteUserItemsItemIdRatingRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postUserItemsItemIdRatingRoute, (c) => {
    throw new Error('Not implemented')
  })
