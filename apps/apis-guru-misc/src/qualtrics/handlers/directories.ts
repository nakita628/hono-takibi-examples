import { OpenAPIHono } from '@hono/zod-openapi'
import { postDirectoriesDirectoryIdMailinglistsMailingListIdContactsRoute } from '../routes'

const app = new OpenAPIHono()

export const directoriesHandler = app.openapi(
  postDirectoriesDirectoryIdMailinglistsMailingListIdContactsRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
