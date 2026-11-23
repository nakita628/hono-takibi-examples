import { OpenAPIHono } from '@hono/zod-openapi'
import { getFundHoldersRoute } from '../routes'

const app = new OpenAPIHono()

export const fundHoldersHandler = app.openapi(getFundHoldersRoute, (c) => {
  throw new Error('Not implemented')
})
