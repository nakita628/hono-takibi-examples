import { OpenAPIHono } from '@hono/zod-openapi'
import { getRepositorySearchTypeTypeDaymetRoute } from '../routes'

const app = new OpenAPIHono()

export const typeTypeDaymetHandler = app.openapi(getRepositorySearchTypeTypeDaymetRoute, (c) => {
  throw new Error('Not implemented')
})
