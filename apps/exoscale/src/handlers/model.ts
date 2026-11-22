import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteAiModelIdRoute,
  getAiModelIdRoute,
  getAiModelRoute,
  postAiModelRoute,
} from '../routes'

const app = new OpenAPIHono()

export const modelHandler = app
  .openapi(postAiModelRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getAiModelRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteAiModelIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getAiModelIdRoute, (c) => {
    throw new Error('Not implemented')
  })
