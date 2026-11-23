import { OpenAPIHono } from '@hono/zod-openapi'
import { postUpdateDataCellsFilterRoute } from '../routes'

const app = new OpenAPIHono()

export const updateDataCellsFilterHandler = app.openapi(postUpdateDataCellsFilterRoute, (c) => {
  throw new Error('Not implemented')
})
