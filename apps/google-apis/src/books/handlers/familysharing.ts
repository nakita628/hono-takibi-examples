import { OpenAPIHono } from '@hono/zod-openapi'
import {
  getBooksV1FamilysharingGetFamilyInfoRoute,
  postBooksV1FamilysharingShareRoute,
  postBooksV1FamilysharingUnshareRoute,
} from '../routes'

const app = new OpenAPIHono()

export const familysharingHandler = app
  .openapi(getBooksV1FamilysharingGetFamilyInfoRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postBooksV1FamilysharingShareRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postBooksV1FamilysharingUnshareRoute, (c) => {
    throw new Error('Not implemented')
  })
