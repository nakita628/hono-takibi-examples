import { OpenAPIHono } from '@hono/zod-openapi'
import {
  getApiTextLoremIpsumRoute,
  getApiTextPasswordRoute,
  postApiTextHumanizeRoute,
  postApiTextReviewRoute,
  postApiTextTransformRoute,
} from '../routes'

const app = new OpenAPIHono()

export const textHandler = app
  .openapi(postApiTextHumanizeRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiTextLoremIpsumRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiTextPasswordRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiTextReviewRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiTextTransformRoute, (c) => {
    throw new Error('Not implemented')
  })
