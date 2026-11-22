import { OpenAPIHono } from '@hono/zod-openapi'
import { postDeleteDataCellsFilterRoute } from '../routes'

const app = new OpenAPIHono()

export const DeleteDataCellsFilterHandler = app.openapi(postDeleteDataCellsFilterRoute, (c) => {
  throw new Error('Not implemented')
})
