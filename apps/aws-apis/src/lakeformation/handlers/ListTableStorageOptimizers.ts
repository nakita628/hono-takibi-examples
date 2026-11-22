import { OpenAPIHono } from '@hono/zod-openapi'
import { postListTableStorageOptimizersRoute } from '../routes'

const app = new OpenAPIHono()

export const ListTableStorageOptimizersHandler = app.openapi(
  postListTableStorageOptimizersRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
