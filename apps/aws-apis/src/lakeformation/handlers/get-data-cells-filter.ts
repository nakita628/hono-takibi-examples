import { OpenAPIHono } from '@hono/zod-openapi'
import { postGetDataCellsFilterRoute } from '../routes'

const app = new OpenAPIHono()

export const getDataCellsFilterHandler = app.openapi(postGetDataCellsFilterRoute, (c) => {
  throw new Error('Not implemented')
})
