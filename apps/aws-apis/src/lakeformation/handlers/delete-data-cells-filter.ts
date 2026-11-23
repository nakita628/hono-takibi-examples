import { OpenAPIHono } from '@hono/zod-openapi'
import { postDeleteDataCellsFilterRoute } from '../routes'

const app = new OpenAPIHono()

export const deleteDataCellsFilterHandler = app.openapi(postDeleteDataCellsFilterRoute, (c) => {
  throw new Error('Not implemented')
})
