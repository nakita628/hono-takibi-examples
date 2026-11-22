import { OpenAPIHono } from '@hono/zod-openapi'
import {
  getApiPublicScoreConfigsConfigIdRoute,
  getApiPublicScoreConfigsRoute,
  patchApiPublicScoreConfigsConfigIdRoute,
  postApiPublicScoreConfigsRoute,
} from '../routes'

const app = new OpenAPIHono()

export const scoreConfigsHandler = app
  .openapi(postApiPublicScoreConfigsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiPublicScoreConfigsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiPublicScoreConfigsConfigIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchApiPublicScoreConfigsConfigIdRoute, (c) => {
    throw new Error('Not implemented')
  })
