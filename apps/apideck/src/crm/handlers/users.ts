import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteCrmUsersIdRoute,
  getCrmUsersIdRoute,
  getCrmUsersRoute,
  patchCrmUsersIdRoute,
  postCrmUsersRoute,
} from '../routes'

const app = new OpenAPIHono()

export const usersHandler = app
  .openapi(getCrmUsersRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postCrmUsersRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteCrmUsersIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getCrmUsersIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchCrmUsersIdRoute, (c) => {
    throw new Error('Not implemented')
  })
