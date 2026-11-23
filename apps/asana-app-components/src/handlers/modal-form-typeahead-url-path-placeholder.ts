import { OpenAPIHono } from '@hono/zod-openapi'
import { getModalFormTypeaheadUrlPathPlaceholderRoute } from '../routes'

const app = new OpenAPIHono()

export const modalFormTypeaheadUrlPathPlaceholderHandler = app.openapi(
  getModalFormTypeaheadUrlPathPlaceholderRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
