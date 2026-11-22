import { OpenAPIHono } from '@hono/zod-openapi'
import { putUsersUserIdFolders0Route } from '../routes'

const app = new OpenAPIHono()

export const transferFoldersHandler = app.openapi(putUsersUserIdFolders0Route, (c) => {
  throw new Error('Not implemented')
})
