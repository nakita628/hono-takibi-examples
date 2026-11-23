import { OpenAPIHono } from '@hono/zod-openapi'
import { getPairSimJaccardId1Id2Route } from '../routes'

const app = new OpenAPIHono()

export const pairHandler = app.openapi(getPairSimJaccardId1Id2Route, (c) => {
  throw new Error('Not implemented')
})
