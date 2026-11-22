import { OpenAPIHono } from '@hono/zod-openapi'
import { postUpdateDataCellsFilterRoute } from '../routes'

const app = new OpenAPIHono()

export const UpdateDataCellsFilterHandler = app.openapi(postUpdateDataCellsFilterRoute, (c) => {
  throw new Error('Not implemented')
})
