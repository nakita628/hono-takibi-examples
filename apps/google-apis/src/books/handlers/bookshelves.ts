import { OpenAPIHono } from '@hono/zod-openapi'
import {
  getBooksV1UsersUserIdBookshelvesRoute,
  getBooksV1UsersUserIdBookshelvesShelfRoute,
  getBooksV1UsersUserIdBookshelvesShelfVolumesRoute,
} from '../routes'

const app = new OpenAPIHono()

export const bookshelvesHandler = app
  .openapi(getBooksV1UsersUserIdBookshelvesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getBooksV1UsersUserIdBookshelvesShelfRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getBooksV1UsersUserIdBookshelvesShelfVolumesRoute, (c) => {
    throw new Error('Not implemented')
  })
