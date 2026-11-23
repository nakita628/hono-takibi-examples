import { OpenAPIHono } from '@hono/zod-openapi'
import { postCombinedSubmissionsV2Route } from '../routes'

const app = new OpenAPIHono()

export const combinedSubmissionsV2Handler = app.openapi(postCombinedSubmissionsV2Route, (c) => {
  throw new Error('Not implemented')
})
