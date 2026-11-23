import { OpenAPIHono } from '@hono/zod-openapi'
import { postGroupsInfoRoute } from '../routes'

const app = new OpenAPIHono()

export const groupsInfoHandler = app.openapi(postGroupsInfoRoute, (c) => {
  throw new Error('Not implemented')
})
