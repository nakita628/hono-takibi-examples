import { OpenAPIHono } from '@hono/zod-openapi'
import { postListDataCellsFilterRoute } from '../routes'

const app = new OpenAPIHono()

export const ListDataCellsFilterHandler = app.openapi(postListDataCellsFilterRoute, (c) => {
  throw new Error('Not implemented')
})
