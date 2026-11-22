import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteUserDictWordWordUuidRoute,
  postUserDictWordRoute,
  putUserDictWordWordUuidRoute,
} from '../routes'

const app = new OpenAPIHono()

export const userDictWordHandler = app
  .openapi(postUserDictWordRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putUserDictWordWordUuidRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteUserDictWordWordUuidRoute, (c) => {
    throw new Error('Not implemented')
  })
